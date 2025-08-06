// app/service/components/categoryData.ts

export const categories = [
  "Food Safety Standards System",
  "International Organization For Standardization",
  "International Standards For Social Responsibility",
  "Soft Skills",
  "Legal services related to intellectual property",
  "Request a factory license",
];

export const services = [
  // Food Safety Standards System
  {
    title: "บริการที่ปรึกษาระบบ GHP",
    description:
      "หลักสูตรการฝึกอบรม GHP CODEX GHP วัตถุประสงค์ เพื่อให้ผู้เข้าร่วมอบรมมีความรู้และความเข้าใจเกี่ยวกับระบบการจัดการและควบคุมคุณภาพตามข้อกำหนดของ CODEX GHP",
    category: "Food Safety Standards System",
    image: "/images/foodsafety/GMP.jpg",
    link: "/services/gmp",
    content: `
<article class="prose prose-lg max-w-none text-gray-800">

  <!-- วัตถุประสงค์ -->
  <section class="border-b border-gray-300 pb-6 mb-8">
    <h2 class="text-2xl font-bold text-[#a37d58] mb-4">วัตถุประสงค์</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>ให้ความรู้ความเข้าใจเกี่ยวกับระบบการจัดการและควบคุมคุณภาพตามข้อกำหนด CODEX GMP</li>
      <li>ทราบวิธีดำเนินงานตามระบบมาตรฐาน GMP อย่างถูกต้อง</li>
      <li>ประยุกต์ใช้ข้อกำหนด GMP ในสถานประกอบการได้อย่างมีประสิทธิภาพ</li>
      <li>เตรียมความพร้อมสำหรับการตรวจรับรองระบบ GMP และการตรวจติดตามภายใน</li>
    </ul>
  </section>

  <!-- รายละเอียดของหลักสูตร -->
  <section class="border-b border-gray-300 pb-6 mb-8">
    <h2 class="text-2xl font-bold text-[#a37d58] mb-4">รายละเอียดของหลักสูตร</h2>
    <ol class="list-decimal list-inside space-y-4">
      <li>
        <strong>พื้นฐานและความเป็นมาของ GMP</strong>
        <ul class="list-disc list-inside ml-6 mt-2 space-y-1 text-base">
          <li>อธิบายความสำคัญของ GMP ในอุตสาหกรรมอาหาร</li>
          <li>ประโยชน์ของการนำระบบ GMP มาใช้ในกระบวนการผลิต</li>
        </ul>
      </li>
      <li>
        <strong>ข้อกำหนดของระบบ GMP</strong>
        <ul class="list-disc list-inside ml-6 mt-2 space-y-1 text-base">
          <li>หลักเกณฑ์เกี่ยวกับสถานที่ อุปกรณ์ และสิ่งแวดล้อม</li>
          <li>ข้อกำหนดด้านการผลิต การควบคุมคุณภาพ และสุขลักษณะ</li>
        </ul>
      </li>
      <li>
        <strong>ตัวอย่างกรณีศึกษาและการประยุกต์ใช้</strong>
        <ul class="list-disc list-inside ml-6 mt-2 space-y-1 text-base">
          <li>ยกตัวอย่างจากโรงงานที่สอดคล้องกับข้อกำหนด GMP</li>
          <li>ปรับปรุงกระบวนการให้ตรงตามมาตรฐาน GMP</li>
        </ul>
      </li>
      <li>
        <strong>การตรวจติดตามและเตรียมความพร้อมก่อนการรับรอง</strong>
        <ul class="list-disc list-inside ml-6 mt-2 space-y-1 text-base">
          <li>ขั้นตอนการตรวจติดตามภายในตามระบบ GMP</li>
          <li>การเตรียมความพร้อมสำหรับการตรวจรับรองระบบ GMP</li>
        </ul>
      </li>
      <li>
        <strong>เอกสารระบบ GMP</strong>
        <ul class="list-disc list-inside ml-6 mt-2 space-y-1 text-base">
          <li>จัดทำเอกสารและบันทึกข้อมูลตามข้อกำหนด GMP</li>
          <li>การจัดเก็บเอกสารเพื่อความพร้อมในการตรวจสอบ</li>
        </ul>
      </li>
      <li>
        <strong>แลกเปลี่ยนประสบการณ์</strong>
        <ul class="list-disc list-inside ml-6 mt-2 space-y-1 text-base">
          <li>เปิดโอกาสให้ผู้เข้าร่วมอบรมแลกเปลี่ยนความคิดเห็นและประสบการณ์กับวิทยากร</li>
        </ul>
      </li>
    </ol>
  </section>

  <!-- ผลลัพธ์ที่คาดหวัง -->
  <section>
    <h2 class="text-2xl font-bold text-[#a37d58] mb-4">ผลลัพธ์ที่คาดหวัง</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>ผู้เข้าอบรมสามารถปฏิบัติตามข้อกำหนด GMP ได้อย่างถูกต้อง</li>
      <li>ได้รับใบรับรองที่ใช้ยืนยันกับ Auditor ได้</li>
    </ul>
  </section>

</article>
`


  },
  {
    title: "บริการที่ปรึกษา FAMI-QS",
    description:
      "ระบบ FAMI-QS เป็นระบบมาตรฐานที่มีข้อกำหนดในการควบคุมบริหารคุณภาพและความปลอดภัยสำหรับอุตสาหกรรมอาหารสำหรับสัตว์ โดยกลุ่มประเทศ EU",
    category: "Food Safety Standards System",
    image: "/images/foodsafety/FAMI-QS.jpg",
    link: "/services/fami-qs",
    content: `
<article class="prose prose-lg max-w-none text-gray-800">
 <p>โดยที่ปรึกษาด้านระบบ FAMI – QS จะดำเนินงานใดจัดการระบบตามกฎระเบียบและข้อบังคับเพื่อควบคุมอาหารสัตว์ที่จะนำเข้าหรือจำหน่าย 
 หรือแม้แต่ทำเป็นส่วนผสมในอาหารสัตว์ ให้มีคุณภาพและความปลอดภัยอย่างสูงสุด ดังนั้น ที่ปรึกษา FAMI-QS จะมีการตรวจสอบทั้งผู้ผลิตหรือผู้ที่มีส่วนเกี่ยวข้องที่อยู่ในระบบของห่วงโซ่อาหาร</p>

</article>
`
  },
  {
    title: "บริการที่ปรึกษามาตรฐาน IFS ผู้ส่งออกอาหารไปยุโรป",
    description:
      "มาตรฐานอาหารระหว่างประเทศ คือ มาตรฐานสำหรับการผลิตอาหารที่ดีมีคุณภาพและปลอดภัยต่อผู้บริโภค",
    category: "Food Safety Standards System",
    image: "/images/foodsafety/IFS.jpg",
    link: "/services/ifs",
    content: `
<article class="space-y-8 text-gray-800 leading-relaxed">

  <p>
    ในสภาวะการแข่งขันของอุตสาหกรรมอาหาร การยึดมั่นในมาตรฐานคุณภาพและความปลอดภัยที่เข้มงวดเป็นสิ่งสำคัญ หนึ่งในมาตรฐานที่ได้รับการยอมรับอย่างกว้างขวางคือ 
    <strong>International Featured Standard (IFS) Food</strong> ในบทความนี้ เราจะเจาะลึกถึงความซับซ้อนของ IFS Food ความสำคัญ และวิธีที่ธุรกิจต่างๆ สามารถบรรลุและรักษาใบรับรองเพื่อเพิ่มสถานะในตลาดและความไว้วางใจของผู้บริโภค
  </p>

  <section>
    <h2 class="text-2xl font-semibold mb-4 text-[#a37d58]">1. IFS Food คืออะไร?</h2>
    <p class="mb-4">
      IFS Food เป็นมาตรฐานความปลอดภัยของอาหารที่ได้รับการยอมรับทั่วโลก ซึ่งพัฒนาโดย International Featured Standards เป็นกรอบสำหรับการประเมินและรับรองความปลอดภัยของอาหารและระบบการจัดการคุณภาพในโรงงานผลิตและแปรรูปอาหาร การปฏิบัติตาม IFS Food ช่วยให้ธุรกิจแสดงความมุ่งมั่นในการผลิตผลิตภัณฑ์อาหารที่ปลอดภัยและมีคุณภาพสูง
    </p>
  </section>

  <section class="text-gray-700 pb-5 border-b border-gray-300 mb-6">
    <h2 class="text-2xl font-semibold mb-4 text-[#a37d58]">2. วัตถุประสงค์หลักของ IFS Food</h2>
    <p class="mb-4">
      วัตถุประสงค์หลักของ IFS Food เกี่ยวข้องกับการรับรองความปลอดภัยของอาหาร การรักษาคุณภาพของผลิตภัณฑ์ และการตอบสนองความต้องการของลูกค้า วัตถุประสงค์หลักบางประการ ได้แก่
    </p>
    <ul class="list-disc list-inside space-y-2 text-gray-700 ml-4">
      <li>การกำหนดวิธีการอย่างเป็นระบบในการบ่งชี้อันตราย การประเมินความเสี่ยง และมาตรการควบคุม</li>
      <li>ใช้ระบบการจัดการคุณภาพที่เข้มงวด รวมถึงการตรวจสอบย้อนกลับและการจัดทำเอกสาร</li>
      <li>อำนวยความสะดวกในการปรับปรุงอย่างต่อเนื่องผ่านการตรวจสอบอย่างสม่ำเสมอและการดำเนินการแก้ไข</li>
      <li>การปฏิบัติตามข้อผูกพันทางกฎหมายและข้อกำหนดเฉพาะของอุตสาหกรรม</li>
    </ul>
  </section>

  <section>
    <p>
      การบรรลุและรักษาไว้ซึ่งใบรับรอง IFS Food เป็นการเคลื่อนไหวเชิงกลยุทธ์สำหรับมืออาชีพในอุตสาหกรรมอาหาร โดยมีเป้าหมายเพื่อรับรองมาตรฐานความปลอดภัยและคุณภาพของอาหารในระดับสูงสุด ด้วยการปฏิบัติตามแนวทางที่สรุปไว้ในบทความนี้ ธุรกิจสามารถสร้างรากฐานที่แข็งแกร่ง เพิ่มสถานะในตลาดของตน และได้เปรียบในการแข่งขันในอุตสาหกรรม ในขณะเดียวกันก็มั่นใจได้ถึงความไว้วางใจและความพึงพอใจของผู้บริโภค
    </p>
  </section>

</article>

`
  },
  {
    title: "บริการที่ปรึกษาระบบ BRC/IOP บรรจุภัณฑ์อาหาร",
    description:
      "British Retail Consortium – Institute of Food Packaging คือ มาตรฐานการรับรองระบบสำหรับกลุ่มบริษัทธุรกิจที่ผลิตบรรจุภัณฑ์เพื่อใช้ในการผลิตสินค้าให้กับบริษัทค้าปลีก",
    category: "Food Safety Standards System",
    image: "/images/foodsafety/BRC.jpg",
    link: "/services/brc-iop",
  },
  {
    title: "บริการที่ปรึกษาระบบ SQF2000",
    description:
      "SQF 2000 คือ ระบบมาตรฐานคุณภาพ HACCP ที่ได้รับการออกแบบจากประเทศออสเตรเลีย เพื่อใช้ในกลุ่มอุตสาหกรรม",
    category: "Food Safety Standards System",
    image: "/images/foodsafety/SQF.jpg",
    link: "/services/sqf2000",
  },
  {
    title: "บริการที่ปรึกษาระบบมาตรฐาน ISO22000",
    description:
      "ISO 22000:2005 Food Safety Management System (FSMS) ระบบการจัดการความปลอดภัยของอาหาร",
    category: "Food Safety Standards System",
    image: "/images/foodsafety/ISO22000.jpg",
    link: "/services/iso22000",
  },
  {
    title: "บริการที่ปรึกษาระบบมาตรฐาน FSSC22000",
    description:
      "FSSC:22000 (Food Safety System Certification) คือ มาตรฐานการรับรองความปลอดภัยสำหรับผลิตอาหาร ก่อตั้งขึ้นโดย The Foundation for Food Safety Certification ในปี พ.ศ. 2547",
    category: "Food Safety Standards System",
    image: "/images/foodsafety/FSSC22000.jpg",
    link: "/services/fssc22000",
  },
  {
    title: "บริการที่ปรึกษาระบบมาตรฐาน Global GAP",
    description:
      "Global GAP คือ มาตรฐานภาคเอกชนสำหรับการผลิตสินค้าเกษตรของกลุ่มผู้ค้าปลีกในยุโรป",
    category: "Food Safety Standards System",
    image: "/images/foodsafety/Global-Gap.jpg",
    link: "/services/global-gap",
  },
  {
    title: "บริการที่ปรึกษาขอการรับรอง HALAL",
    description:
      "HALAL (ฮาลาล) เป็นคำมาจากภาษาอารบิก หมายความว่า การผลิต การให้บริการ หรือการจำหน่ายใดๆ ที่ไม่ขัดต่อบัญญัติของศาสนาอิสลาม",
    category: "Food Safety Standards System",
    image: "/images/foodsafety/HALAL.jpg",
    link: "/services/halal",
  },
  {
    title: "บริการที่ปรึกษา HACCP",
    description:
      "เรามีบริการให้คำปรึกษาในการจัดการกระบวนการผลิตของโรงงานอาหารและยา เพื่อรับรองว่าการผลิตเป็นไปตามมาตรฐาน HACCP",
    category: "Food Safety Standards System",
    image: "/images/foodsafety/HACCP.jpg",
    link: "/services/haccp",
  },
  // International Organization For Standardization

  {
    title: "บริการที่ปรึกษาระบบ ISO 14001",
    description:
      "มาตรฐานระบบการจัดการสิ่งแวดล้อม(ISO 14001) ISO 14001:2015 เป็นมาตรฐานสากลสำหรับระบบการบริหารจัดการสิ่งแวดล้อมขององค์กร เพื่อเพิ่มสมรรถนะสิ่งแวดล้อมภายในองค์กร และเพื่อความยั่งยืนด้านสิ่งแวดล้อม",
    category: "International Organization For Standardization",
    image: "/images/international-organization/ISO14001.jpg",
    link: "/services/ISO14001",
  },
  {
    title: "บริการที่ปรึกษาระบบ ISO 15378",
    description:
      "ระบบ ISO 15378 คือ International Standard สำหรับบรรจุภัณฑ์ขั้นแรก ที่ใช้ในทางการแพทย์โดยรวมสิ่งจำเป็นสำหรับการประยุกต์ใช้ ISO9001 กับ Good Manufacturing Practice(GMP)",
    category: "International Organization For Standardization",
    image: "/images/international-organization/ISO15378.jpg",
    link: "/services/ISO15378",
  },
  {
    title: "บริการที่ปรึกษาระบบ ISO 39001:2012 การจัดการความปลอดภัยทางถนน",
    description:
      "ระบบ ISO 39001 คือ ระบบการจัดการความปลอดภัยด้านจราจรทางถนน เพื่อให้องค์กรที่เกี่ยวข้องกับระบบการจราจรลดการสูญเสียที่อาจเกิดขึ้น",
    category: "International Organization For Standardization",
    image: "/images/international-organization/ISO39001.jpg",
    link: "/services/ISO39001",
  },
  {
    title: "บริการที่ปรึกษาระบบ ISO 45001",
    description:
      "ISO 45001 คือ มาตรฐานสากลเพื่อการจัดการอาชีวอนามัยและความปลอดภัย",
    category: "International Organization For Standardization",
    image: "/images/international-organization/ISO45001.jpg",
    link: "/services/ISO45001",
  },
  {
    title: "บริการที่ปรึกษาระบบมาตรฐาน ISO 13485",
    description:
      "สำหรับอุตสาหกรรมเครื่องมือแพทย์ เรื่องความปลอดภัยถือเป็นสิ่งสำคัญอย่างยิ่ง",
    category: "International Organization For Standardization",
    image: "/images/international-organization/ISO13485.jpg",
    link: "/services/ISO13485",
  },
  {
    title: "บริการฝึกอบรม ISO ที่ครอบคลุม",
    description:
      "เราให้บริการฝึกอบรม ISO ด้วยหลักสูตร ISO ที่ถูกพัฒนาขึ้นโดยทีมงานคุณภาพของเรา",
    category: "International Organization For Standardization",
    image: "/images/international-organization/ISO.jpg",
    link: "/services/ISOtraining",
  },
  {
    title: "บริการที่ปรึกษาตอบสนองตามความต้องการของลูกค้า",
    description:
      "หากลูกค้าต้องการที่ปรึกษาเฉพาะส่วน หรือตามที่ลูกค้าต้องการ สามารถเลือกให้บริการได้",
    category: "International Organization For Standardization",
    image: "/images/international-organization/ISO-Service.jpg",
    link: "/services/ISOcustom",
  },
  {
    title: "บริการที่ปรึกษามาตรฐานระบบการจัดการด้านพลังงาน ISO 50001",
    description:
      "ISO 50001 คือ ระบบการจัดการพลังงานตามมาตรฐานสากล หรือเรียกย่อว่า EnMs ระบบแรกในโลกที่พัฒนาขึ้นจากมาตรฐานระดับชาติและภูมิภาคต่างๆมีการประกาศใช้เมื่อวันที่ 15 มิถุนายน 2011 (ISO 50001:2011)",
    category: "International Organization For Standardization",
    image: "/images/international-organization/ISO50001.jpg",
    link: "/services/ISO50001",
  },
  // International Standards For Social Responsibility

  {
    title: "บริการที่ปรึกษาระบบ RJC",
    description:
      "ปัจจุบันมีหลายองค์กรที่มีบทบาทในอุตสาหกรรมอัญมณีและเครื่องประดับ",
    category: "International Standards For Social Responsibility",
    image: "/images/international-standards/RJC.jpg",
    link: "/services/rjc",
  },
  {
    title: "บริการที่ปรึกษาระบบ RBA",
    description:
      "การปฏิบัติของ RBA (Responsible Business Alliance) คือชุดของมาตรฐานอุตสาหกรรมด้านสิ่งแวดล้อมและบทวิจารณ์ขั้นสูงในจรรยาบรรณ บรรทัดฐาน และมาตรฐานสากล",
    category: "International Standards For Social Responsibility",
    image: "/images/international-standards/RBA.jpg",
    link: "/services/rba",
  },
  {
    title: "บริการที่ปรึกษาระบบ C-TPAT",
    description:
      "หลังจากเหตุการณ์ 11 กันยายน 2001 ด่านศุลกากรของประเทศสหรัฐอเมริกาได้ขอความร่วมมือในการต่อต้านภัยก่อการร้ายผ่านโครงการ C-TPAT",
    category: "International Standards For Social Responsibility",
    image: "/images/international-standards/C-TPAT.jpg",
    link: "/services/ctpat",
  },
  {
    title: "บริการที่ปรึกษาเกี่ยวกับมาตรฐานแรงงานไทย",
    description:
      "มาตรฐานแรงงานไทย คือ กฏเกณฑ์ การปฏิบัติ การใช้แรงงานเกี่ยวกับสภาพการจ้างและสภาพการทำงานอย่างเป็นธรรมและปลอดภัย",
    category: "International Standards For Social Responsibility",
    image: "/images/international-standards/Worker.jpg",
    link: "/services/thai-labor-standard",
  },
  // Soft Skills
  {
    title: "Leadership Workshop",
    description: "Train your team with essential leadership skills.",
    category: "Soft Skills",
    image: "/images/Soft-Skill/Skill.jpg",
    link: "/services/leadership-workshop",
  },

  // Legal services related to intellectual property
  {
    title: "บริการจดสิทธิบัตรต่างประเทศคุ้มครองธุรกิจของคุณ",
    description:
      "การรับจดสิทธิบัตรต่างประเทศเป็นขั้นตอนสำคัญในการปกป้องสิทธิ์และสิทธิบัตรของธุรกิจที่มีความสำคัญทั้งในระดับชาติและนานาชาติ โดยการรับสิทธิบัตรจะช่วยให้ธุรกิจได้รับการคุ้มครองทรัพย์สินทางปัญญาของตน และป้องกันการละเมิดสิทธิ์จากผู้อื่นในตลาด",
    category: "Legal services related to intellectual property",
    image: "/images/legal-services/certificate.jpg",
    link: "/services/int-patent-protection",
  },
  {
    title: "บริการจดเครื่องหมายการต่างประเทศ",
    description:
      "บริการจดเครื่องหมายการค้าต่างประเทศเป็นการเสริมสร้างความน่าเชื่อถือและความเป็นเอกลักษณ์ให้กับธุรกิจของคุณทั้งในระดับชาติและนานาชาติ โดยบริการนี้จะช่วยให้ธุรกิจของคุณได้รับการป้องกันสิทธิ์ในตลาด",
    category: "Legal services related to intellectual property",
    image: "/images/legal-services/investment-concept.jpg",
    link: "/services/int-trademark-registration",
  },
  {
    title: "บริการจดลิขสิทธิ์เพิ่มมูลค่าธุรกิจ",
    description:
      "กระบวนการสำคัญที่ช่วยปกป้องสิทธิ์ในทรัพย์สินทางปัญญาของธุรกิจ โดยการจดลิขสิทธิ์จะช่วยป้องกันการละเมิดสิทธิ์จากบุคคลอื่น และสร้างความมั่นใจให้กับธุรกิจเองและกลุ่มลูกค้า",
    category: "Legal services related to intellectual property",
    image: "/images/legal-services/realtor-agent.jpg",
    link: "/services/copyright-registration",
  },
  {
    title: "เพิ่มมูลค่าให้กับธุรกิจด้วยการจดทะเบียนสิทธิบัตร",
    description:
      "การจดสิทธิบัตร (Patent registration) เป็นกระบวนการที่สำคัญสำหรับธุรกิจที่มีนวัตกรรมหรือสิ่งประดิษฐ์ที่เป็นผลิตภัณฑ์หรือกระบวนการที่มีความเป็นเอกลักษณ์",
    category: "Legal services related to intellectual property",
    image: "/images/legal-services/copyright-intellectual.jpg",
    link: "/services/patent-registration",
  },
  {
    title: "รับจดทะเบียนเครื่องหมายการค้า",
    description:
      "การรับจดทะเบียนเครื่องหมายการค้าเป็นกระบวนการสำคัญในธุรกิจทุกประเภท ที่จะช่วยปกป้องสิทธิ์และความเป็นเจ้าของของสิ่งที่สร้างขึ้น ซึ่งเป็นสิ่งที่สำคัญในการสร้างและสร้างชื่อเสียงในตลาด",
    category: "Legal services related to intellectual property",
    image: "/images/legal-services/trammk.jpg",
    link: "/services/trademark-registration",
  },
  //Request a factory license
  {
    title: "บริการที่ปรึกษา BOI",
    description:
      "BOI ย่อมาจาก Board of Investment หรือ คณะกรรมการส่งเสริมการลงทุน เป็นหน่วยงานภายใต้สังกัดของกระทรวงอุตสาหกรรมที่มีหน้าที่หลักในการส่งเสริมการลงทุนในประเทศไทย",
    category: "Request a factory license",
    image: "/images/request-factory/BOI.jpg",
    link: "/services/boi-consulting",
  },
  {
    title: "บริการขอใบอนุญาตโรงงาน (รง.4)",
    description:
      "การขอใบอนุญาต ร.ง.4 เป็นขั้นตอนที่มีความซับซ้อนและต้องการความเข้าใจในรายละเอียดทางกฎหมายและกระบวนการต่าง ๆ การมีผู้เชี่ยวชาญคอยให้คำปรึกษาและช่วยดำเนินการขอใบอนุญาต ร.ง.4 จึงเป็นสิ่งสำคัญสำหรับผู้ประกอบการที่ต้องการเริ่มต้นหรือขยายธุรกิจโรงงานอุตสาหกรรม",
    category: "Request a factory license",
    image: "/images/request-factory/R4.jpg",
    link: "/services/factory-license-ror4",
  },
  {
    title: "บริการขอใบอนุญาตโรงงาน (รง.2)",
    description:
      "การขอใบอนุญาตโรงงาน (รง.2) เป็นกระบวนการที่สำคัญในการเริ่มต้นกิจการทางอุตสาหกรรม ซึ่งมีความสำคัญอย่างมากในการยืนยันว่าโรงงานมีความพร้อมและเป็นไปตามกฎหมายที่กำหนด",
    category: "Request a factory license",
    image: "/images/request-factory/R2.jpg",
    link: "/services/factory-license-ror2",
  }
];
