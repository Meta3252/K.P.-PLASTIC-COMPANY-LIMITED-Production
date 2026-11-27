const fs = require('fs');
const ts = require('typescript');
const assert = require('node:assert/strict');
const compile = path => ts.transpileModule(fs.readFileSync(path, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText;
const jobExports = {};
new Function('exports', compile('src/lib/careers.ts'))(jobExports);
let sent = [];
let rejectMail = false;
const transport = { sendMail: async mail => { if (rejectMail) throw new Error('simulated'); sent.push(mail); return { accepted: ['company@example.test'] }; }, close() {} };
const route = {};
new Function('require', 'exports', compile('src/app/api/careers/route.ts'))(name => name === 'nodemailer' ? { createTransport: () => transport } : jobExports, route);
Object.assign(process.env, { SMTP_HOST: 'example.test', SMTP_PORT: '465', SMTP_USER: 'sender@example.test', SMTP_PASS: 'mock', CAREERS_TO_EMAIL: 'company@example.test', CONTACT_TO_EMAIL: 'company@example.test' });
const makeForm = overrides => {
 const data = new FormData();
 const values = { position: 'qa', fullName: 'Test Applicant', phone: '0812345678', email: 'applicant@example.test', consent: 'yes', ...overrides };
 for (const [key, value] of Object.entries(values)) if (value !== null) data.set(key, value);
 return data;
};
const call = (form, headers = {}) => route.POST(new Request('http://localhost/api/careers', { method: 'POST', body: form, headers }));
(async () => {
 assert.equal((await call(makeForm())).status, 200);
 assert.equal(sent.length, 1);
 assert.equal(sent[0].to, 'company@example.test');
 assert.equal(sent[0].replyTo.address, 'applicant@example.test');
 for (const email of ['', '   ', null]) {
  assert.equal((await call(makeForm({email}))).status, 400);
 }
 assert.equal(sent.length, 1);
 const pdfForm = makeForm({ fullName: '<Applicant>', experience: '<script>bad</script>' });
 pdfForm.set('resume', new File(['%PDF-1.7\nexample'], 'my-resume.pdf', { type: 'application/pdf' }));
 assert.equal((await call(pdfForm)).status, 200);
 assert.equal(sent[1].attachments[0].filename, 'resume.pdf');
 assert.ok(sent[1].html.includes('&lt;script&gt;'));
 assert.ok(!sent[1].html.includes('<script>'));
 for (const overrides of [{position: 'other'}, {fullName: ''}, {phone: 'abc'}, {email: 'bad'}, {consent: null}, {experience: 'x'.repeat(3001)}]) {
  assert.equal((await call(makeForm(overrides))).status, 400);
 }
 const fakePdf = makeForm(); fakePdf.set('resume', new File(['not pdf'], 'bad.pdf', {type:'application/pdf'}));
 assert.equal((await call(fakePdf)).status, 400);
 const largePdf = makeForm(); largePdf.set('resume', new File([new Uint8Array(5 * 1024 * 1024 + 1)], 'large.pdf', {type:'application/pdf'}));
 assert.equal((await call(largePdf)).status, 413);
 assert.equal((await call(makeForm(), {origin: 'https://other.test'})).status, 403);
 const before = sent.length;
 rejectMail = true;
 assert.equal((await call(makeForm())).status, 502);
 assert.equal(sent.length, before);
 rejectMail = false;
 for (let i=0; i<5; i++) assert.equal((await call(makeForm(), {'x-forwarded-for':'192.0.2.1'})).status, 200);
 assert.equal((await call(makeForm(), {'x-forwarded-for':'192.0.2.1'})).status, 429);
 delete process.env.SMTP_PASS;
 assert.equal((await call(makeForm())).status, 503);
 console.log('PASS: required fields including email, role allowlist, PDF upload, file size/signature, HTML escaping, origin, throttling, delivery failures and missing SMTP. All mail mocked.');
})().catch(error => { console.error(error); process.exitCode=1; });
