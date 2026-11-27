'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { House, ChevronRight } from 'lucide-react';

export default function Breadcrumb() {
    const pathname = usePathname() || ""; // ถ้า null ให้เป็น string ว่าง
    const pathParts = pathname.split('/').filter(Boolean);

    const crumbs = pathParts.map((part, index) => {
        const href = '/' + pathParts.slice(0, index + 1).join('/');
        const label = part === 'careers' ? 'ร่วมงานกับเรา' : decodeURIComponent(part)
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase());

        return { label, href };
    });

    return (
        <nav aria-label="เส้นทางหน้าปัจจุบัน" className="border-b border-slate-200/80 bg-white px-4 sm:px-6 lg:px-8">
            <ol className={`mx-auto flex min-h-14 items-center gap-2 py-3 text-sm sm:gap-3 ${pathname.startsWith('/careers') ? 'max-w-6xl' : 'max-w-7xl'}`}>
                <li className="shrink-0">
                    <Link href="/" className="inline-flex items-center gap-2 rounded-md py-1 font-medium text-slate-500 transition hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700">
                        <House className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                        หน้าแรก
                    </Link>
                </li>
                {crumbs.map((crumb, idx) => (
                    <li key={crumb.href} className="flex min-w-0 items-center gap-2 sm:gap-3">
                        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-300" aria-hidden="true" />
                        {idx === crumbs.length - 1 ? (
                            <span title={crumb.label} className="truncate font-semibold text-emerald-800" aria-current="page">{crumb.label}</span>
                        ) : (
                            <Link href={crumb.href} className="truncate rounded-md py-1 font-medium text-slate-500 transition hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700">{crumb.label}</Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
