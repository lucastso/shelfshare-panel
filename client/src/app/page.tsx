import { api } from "@/lib/axios";
import { BookmarkProps } from "@/types/bookmark_props";
import Link from "next/link";
import Image from "next/image";
import AddFolderButton from "@/components/add_folder_button";
import { FolderProps } from "@/types/folder_props";

export default async function Bookmarks() {
  const requestBookmarks = await api.get("/bookmarks");
  const requestFolders = await api.get("/folders");
  const dataBookmarks: BookmarkProps[] = requestBookmarks.data;
  const dataFolders: FolderProps[] = requestFolders.data;

  return (
    <main className="p-4 flex flex-col gap-4 bg-zinc-800 h-screen text-white">
      <h1 className="text-xl">tabdraw</h1>

      <AddFolderButton />

      <span>username:</span>
      <span>password:</span>

      <span>bookmarks:</span>
      {dataBookmarks.map((item) => (
        <Link
          href={item.url}
          className="flex flex-row items-center gap-4 bg-orange-900"
          target="_blank"
          key={item.url}
        >
          <span>{item.name}</span>
          {/* <Image
            alt=""
            src={item.icon}
            width="512"
            height="256"
            className="w-8"
          /> */}
        </Link>
      ))}

      <span>folders:</span>
      {dataFolders.map((item) => (
        <div className="bg-cyan-900 flex flex-col">
          <span>{item.name}</span>
          <span>collabs: {item.collabs_id}</span>
        </div>
      ))}
    </main>
  );
}
