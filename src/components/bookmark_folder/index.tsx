"use client";

import { api } from "@/lib/axios";
import { BookmarkProps } from "@/types/bookmark_props";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BookmarkFolder = ({ item }: { item: BookmarkProps }) => {
  const router = useRouter();
  const [opened, setOpened] = useState<boolean>(false);

  const handleRemoveFolder = async (id: number) => {
    await api.post(`/bookmarks/folder/remove/${id}`).then(() => {
      router.refresh();
    });
  };

  return (
    <div
      className="px-4 py-3 rounded-md text-zinc-400 bg-zinc-900 border border-zinc-800 w-fit flex items-center gap-2 cursor-pointer relative"
      onClick={() => setOpened((opened) => !opened)}
    >
      {opened && (
        <div className="p-3 absolute top-4 rounded-md bg-zinc-950 border border-zinc-800 left-12 z-50 flex flex-col gap-2 items-start justify-start">
          <div
            className="transition-all hover:text-red-400 text-red-500 text-sm rounded-md flex items-center justify-center cursor-pointer gap-2"
            onClick={() => handleRemoveFolder(item.id)}
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
            <span>Remove</span>
          </div>
        </div>
      )}
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-folders"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 4h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
        <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2" />
      </svg>
      {item.folder.name}
    </div>
  );
};

export default BookmarkFolder;
