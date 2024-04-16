"use client";

import { api } from "@/lib/axios";
import { CategoryProps } from "@/types/category_props";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ItemsCategory = ({ category }: { category: CategoryProps }) => {
  const [opened, setOpened] = useState<boolean>(false);

  const route = useRouter();
  const handleDelete = (id: number) => {
    api.delete(`/categories?id=${id}`).then(() => {
      route.refresh();
    });
  };

  return (
    <div
      className="text-sm px-4 py-3 rounded-md flex items-center justify-between cursor-pointer"
      style={{
        background: category.background,
        color: category.text,
      }}
      key={category.id}
    >
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-tags"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 8v4.172a2 2 0 0 0 .586 1.414l5.71 5.71a2.41 2.41 0 0 0 3.408 0l3.592 -3.592a2.41 2.41 0 0 0 0 -3.408l-5.71 -5.71a2 2 0 0 0 -1.414 -.586h-4.172a2 2 0 0 0 -2 2z" />
          <path d="M18 19l1.592 -1.592a4.82 4.82 0 0 0 0 -6.816l-4.592 -4.592" />
          <path d="M7 10h-.01" />
        </svg>
        <span>{category.name}</span>
      </div>

      <div
        onClick={() => setOpened((opened) => !opened)}
        className="hover:bg-white hover:bg-opacity-10 rounded-full transition-colors relative"
      >
        {opened && (
          <div className="absolute bottom-4 -right-24 bg-zinc-950 border border-zinc-900 text-zinc-400 text-sm px-4 py-3 rounded-md flex flex-col gap-2 justify-between">
            <Link
              href="#"
              className="transition-all hover:text-zinc-400 text-zinc-500 text-sm rounded-md flex items-center cursor-pointer mb-2 gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
              <span>Edit</span>
            </Link>
            <div
              onClick={() => handleDelete(category.id)}
              className="transition-all hover:text-red-400 text-red-500 text-sm rounded-md flex items-center cursor-pointer mb-2 gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-trash opacity-75 hover:opacity-100 cursor-pointer transition-all"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 7l16 0" />
                <path d="M10 11l0 6" />
                <path d="M14 11l0 6" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>
              <span>Delete</span>
            </div>
          </div>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        </svg>
      </div>
    </div>
  );
};

export default ItemsCategory;
