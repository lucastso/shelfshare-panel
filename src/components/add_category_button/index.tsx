"use client";

import { CategoryProps } from "@/types/category_props";
import { useState } from "react";

const AddCategoryButton = ({
  dataCategories,
}: {
  dataCategories: CategoryProps[];
}) => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div
      onClick={() => setOpened((opened) => !opened)}
      className="px-4 py-3 rounded-md text-zinc-600 bg-zinc-950 border border-zinc-800 w-fit flex items-center gap-2 cursor-pointer relative"
    >
      {opened && dataCategories.length != 0 ? (
        <div className="px-4 py-3 absolute -bottom-10 rounded-md bg-zinc-950 border border-zinc-800 -right-24 z-50 flex flex-col gap-2 items-start justify-start">
          {dataCategories.map((category) => {
            return (
              <div
                className="text-sm px-4 py-3 rounded-md flex items-center gap-2 cursor-pointer"
                style={{
                  background: category.backgroundColor,
                  color: category.textColor,
                }}
                key={category.name}
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-tags"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 8v4.172a2 2 0 0 0 .586 1.414l5.71 5.71a2.41 2.41 0 0 0 3.408 0l3.592 -3.592a2.41 2.41 0 0 0 0 -3.408l-5.71 -5.71a2 2 0 0 0 -1.414 -.586h-4.172a2 2 0 0 0 -2 2z" />
                  <path d="M18 19l1.592 -1.592a4.82 4.82 0 0 0 0 -6.816l-4.592 -4.592" />
                  <path d="M7 10h-.01" />
                </svg>
                <span>{category.name}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 5l0 14" />
        <path d="M5 12l14 0" />
      </svg>
      <span>Add</span>
    </div>
  );
};

export default AddCategoryButton;
