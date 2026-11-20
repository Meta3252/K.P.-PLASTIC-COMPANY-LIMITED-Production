export const productCategories = ["เก้าอี้พลาสติก", "จานและชาม"];

const chairDetails = ["เก้าอี้มีพนักพิง ไม่มีที่วางแขน", "ซ้อนเก็บได้", "สอบถามจำนวนสินค้าและค่าจัดส่งก่อนสั่งซื้อ"];
const tablewareDetails = ["เลือกแบบและขนาดที่ต้องการจากตารางราคา", "จำหน่ายเป็นโหล โหลละ 12 ชิ้น", "แจ้งชื่อสินค้า ขนาด สี และจำนวนโหล เพื่อเช็กสินค้าและค่าจัดส่ง"];

export const newProducts = [
  { slug: "chair-white", title: "เก้าอี้พลาสติก สีขาว", description: "เก้าอี้พนักพิงสีขาว มีช่องจับด้านบน สามารถซ้อนเก็บได้", category: productCategories[0], price: 140, color: "ขาว", details: chairDetails },
  { slug: "chair-mint", title: "เก้าอี้พลาสติก สีเขียวมิ้นต์", description: "เก้าอี้พนักพิงสีเขียวมิ้นต์ มีช่องจับด้านบน สามารถซ้อนเก็บได้", category: productCategories[0], price: 140, color: "เขียวมิ้นต์", details: chairDetails },
  { slug: "oval-plate-blue", title: "จานวงรี สีฟ้า", description: "จานทรงวงรีสีฟ้า ขอบโค้งมน ผิวเรียบเงา", category: productCategories[1], color: "ฟ้า", details: tablewareDetails },
  { slug: "square-plate-white", title: "จานสี่เหลี่ยมมน สีขาว", description: "จานทรงสี่เหลี่ยมมุมมนสีขาว ขอบกว้าง ผิวเรียบเงา", category: productCategories[1], color: "ขาว", details: tablewareDetails },
  { slug: "round-plate-lime", title: "จานกลม สีเขียวมะนาว", description: "จานกลมสีเขียวมะนาว ขอบโค้ง ผิวเรียบเงา", category: productCategories[1], color: "เขียวมะนาว", details: tablewareDetails },
  { slug: "bowl-pink", title: "ชามทรงลึก สีชมพู", description: "ชามทรงกลมลึกสีชมพู ปากบาน ผิวเรียบเงา", category: productCategories[1], color: "ชมพู", details: tablewareDetails },
  { slug: "bowl-lime", title: "ถ้วยทรงลึก สีเขียวมะนาว", description: "ถ้วยทรงกลมลึกสีเขียวมะนาว ปากบาน ผิวเรียบเงา", category: productCategories[1], color: "เขียวมะนาว", details: tablewareDetails },
].map((product) => ({
  ...product,
  image: `/images/products/${product.slug}.webp`,
  link: `/services/${product.slug}`,
  content: "",
  isNew: true,
  hasTablewarePrices: product.category === productCategories[1],
  originalImage: product.category === productCategories[0]
    ? "/images/products/chairs-original.jpg"
    : "/images/products/tableware-original.jpg",
}));
