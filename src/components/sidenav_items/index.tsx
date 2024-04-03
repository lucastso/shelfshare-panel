"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SidenavItems = () => {
  const path = usePathname();

  return (
    <div className="flex flex-col space-y-4">
      <Link
        href="/dashboard"
        className={path == "/dashboard" ? "text-[#8233C5]" : "text-gray-600"}
      >
        Dashboard
      </Link>
      <Link href="/dashboard" className="">
        Dashboard
      </Link>
    </div>
  );
};

export default SidenavItems;
