"use client";

import { api } from "@/lib/axios";
import { BookmarkProps } from "@/types/bookmark_props";
import Link from "next/link";
import AddFolderButton from "@/components/add_folder_button";
import { FolderProps } from "@/types/folder_props";

export default async function Dashboard() {
  const requestBookmarks = await api.get("/bookmarks");
  const requestFolders = await api.get("/folders");
  const dataBookmarks: BookmarkProps[] = requestBookmarks.data;
  const dataFolders: FolderProps[] = requestFolders.data;

  const handleDelete = (id: number, type: string) => {
    api.delete(`/${type}/${id}`);
  };

  return (
    <main className="p-4 flex flex-col gap-4 bg-zinc-50 h-auto">
      <h1 className="text-xl">tabdraw</h1>

      <AddFolderButton />

      <Link href="/sign-in">Entrar</Link>

      <span>bookmarks:</span>
      {dataBookmarks.map((item) => (
        <div
          className="flex flex-row items-center justify-between gap-4 bg-orange-100"
          key={item.url}
        >
          <Link href={item.url} target="_blank">
            {item.name}
          </Link>
          <button onClick={() => handleDelete(item.id, "bookmark")}>
            delete
          </button>
        </div>
      ))}

      <span>folders:</span>
      {dataFolders.map((item) => (
        <div className="bg-cyan-100 flex flex-row items-center justify-between">
          <span>
            {item.name}, collabs: {item.collabs_id}
          </span>
          <button onClick={() => handleDelete(item.id, "folder")}>
            delete
          </button>
        </div>
      ))}
    </main>
  );
}
