"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const AppNavbarUserInfo = ({
  image,
  name,
}: {
  image: string;
  name: string;
}) => {
  const [opened, setOpened] = useState<boolean>(false);
  const pathname = usePathname();

  const handleLogOut = async () => {
    signOut();
  };

  return (
    <div
      className={`${
        pathname == "/profile"
          ? "bg-zinc-900 border border-zinc-800"
          : "bg-zinc-950 border border-zinc-900"
      }bg-zinc-950 border border-zinc-900 text-zinc-400 text-sm px-4 py-3 rounded-md flex items-center cursor-pointer gap-2 relative`}
      onClick={() => setOpened((opened) => !opened)}
    >
      {opened && (
        <div className="w-full h-auto absolute top-12 z-30 right-0 bg-zinc-950 border border-zinc-900 text-zinc-400 text-sm px-4 py-3 rounded-md flex flex-col gap-2 justify-between">
          <Link
            href="/profile"
            className="transition-all hover:text-zinc-400 text-zinc-500 text-sm rounded-md flex items-center cursor-pointer mb-2 gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-user-scan"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 9a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
              <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
              <path d="M4 16v2a2 2 0 0 0 2 2h2" />
              <path d="M16 4h2a2 2 0 0 1 2 2v2" />
              <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
              <path d="M8 16a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2" />
            </svg>
            <span>Profile</span>
          </Link>
          <div
            className="transition-all hover:text-red-400 text-red-500 text-sm rounded-md flex items-center cursor-pointer gap-2"
            onClick={handleLogOut}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
            <span>Exit</span>
          </div>
        </div>
      )}
      <Image
        src={image}
        alt=""
        width={512}
        height={256}
        className="w-6 rounded-full"
      />
      <span>{name}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 9l6 6l6 -6" />
      </svg>
    </div>
  );
};

export default AppNavbarUserInfo;
