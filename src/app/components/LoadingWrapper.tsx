"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loading from "./Loading";

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // ปรับเวลาให้เหมาะสมกับการแสดง loading

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{loading ? <Loading /> : children}</>;
}
