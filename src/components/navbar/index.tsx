import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="py-4 w-full border-b border-gray-100 fixed top-0 bg-white bg-opacity-35 backdrop-blur-lg z-30">
      <div className="flex items-center justify-between mx-auto w-4/6 text-sm text-gray-400 font-medium">
        <Image
          src="/logo.png"
          alt=""
          width={512}
          height={256}
          className="w-24"
        />

        <Link
          href="/sign-in"
          className="bg-gray-900 text-white px-4 py-2 rounded-full transition-colors hover:bg-gray-700"
        >
          Get started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
