'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
    const pathname = usePathname();
    const pathParts = pathname.split('/').filter(Boolean);

    const crumbs = pathParts.map((part, index) => {
        const href = '/' + pathParts.slice(0, index + 1).join('/');
        const label = decodeURIComponent(part)
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase());

        return { label, href };
    });

    return (
        <nav className="bg-gray-100 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-5 flex items-center space-x-2 text-base">
                {/* Home */}
                <Link href="/" className="text-[#007D8A] underline font-medium hover:opacity-80">Home</Link>

                {crumbs.map((crumb, idx) => {
                    const isLast = idx === crumbs.length - 1;
                    return (
                        <div key={crumb.href} className="flex items-center space-x-2">
                            {/* Separator: right arrow */}
                            <svg
                                className="w-4 h-4 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 18l6-6-6-6" />
                            </svg>

                            {isLast ? (
                                <span className="text-gray-900 font-semibold" aria-current="page">
                                    {crumb.label}
                                </span>
                            ) : (
                                <Link
                                    href={crumb.href}
                                    className="text-gray-900 font-medium hover:underline"
                                >
                                    {crumb.label}
                                </Link>
                            )}
                        </div>
                    );
                })}
            </div>
        </nav>
    );
}
