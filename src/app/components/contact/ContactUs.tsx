import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactUs: React.FC = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#ecfdf5_42%,#e0f2fe_100%)] px-4 py-16 text-slate-800 sm:px-8 md:px-12 lg:px-16">
      <div className="absolute left-8 top-20 h-40 w-40 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute bottom-20 right-6 h-56 w-56 rounded-full bg-cyan-200/50 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-white/50" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <section className="lg:sticky lg:top-28 lg:col-span-5">
          <ContactInfo />
        </section>

        <section className="lg:col-span-7">
          <ContactForm />
        </section>
      </div>
    </main>
  );
};

export default ContactUs;
