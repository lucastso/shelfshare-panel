import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="pt-12 w-full flex items-center justify-between text-sm text-gray-400 font-medium xs:px-6 lg:px-0">
      <Image src="/logo.png" alt="" width={512} height={256} className="w-32" />

      <Link
        href="/sign-in"
        className="text-gray-900 bg-white px-4 py-2 rounded-full transition-colors hover:bg-zinc-100"
      >
        Get started
      </Link>
    </nav>
  );
};

export default Navbar;
