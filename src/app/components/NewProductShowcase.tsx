import Link from "next/link";
import CategoryCard from "./CategoryCard";
import { newProducts, productCategories } from "./newProducts";
import TablewarePriceModal from "./TablewarePriceModal";

export default function NewProductShowcase() {
  return (
    <section className="bg-emerald-50/60 px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="new-products-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-bold tracking-wide text-emerald-700">สินค้าเพิ่มเติมจาก K.P. PLASTIC</p>
            <h2 id="new-products-heading" className="text-3xl font-black text-slate-950 sm:text-4xl">เก้าอี้ จานและชาม</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">เลือกชมสินค้าเพิ่มเติม แยกหมวดเก้าอี้พลาสติกและภาชนะอย่างชัดเจน</p>
          </div>
          <Link href="/services" className="shrink-0 self-start rounded-full border border-emerald-700 px-6 py-3 text-base font-bold text-emerald-800 transition hover:bg-emerald-100">ดูแคตตาล็อกสินค้า</Link>
        </div>
        {productCategories.map(category => (
          <div key={category} className="mt-10">
            <h3 className="mb-5 text-2xl font-bold text-slate-900">{category}</h3>
            {category === productCategories[1] && (
              <TablewarePriceModal />
            )}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {newProducts.filter(product => product.category === category).map(product => <CategoryCard key={product.slug} {...product} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
