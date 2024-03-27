import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="py-4 w-full border-b border-gray-200 sticky top-0">
      <div className="flex items-center justify-between space-x-24 mx-auto w-4/6 text-sm text-gray-400 font-medium">
        <div className="flex items-center space-x-24">
          <Image
            src="/logo.png"
            alt=""
            width={512}
            height={256}
            className="w-24"
          />

          <div className="flex items-center space-x-12">
            <Link
              href="/features"
              className="hover:text-gray-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="hover:text-gray-600 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/changes"
              className="hover:text-gray-600 transition-colors"
            >
              Changes
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-8 self-end">
          <Link
            href="/sign-in"
            className="hover:text-gray-600 transition-colors"
          >
            Sign in
          </Link>

          <button className="bg-gray-900 text-white px-4 py-2 rounded-md">
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
