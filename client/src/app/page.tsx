import { api } from "@/lib/axios";
import { BookmarkProps } from "@/types/bookmark_props";
import Link from "next/link";
import Image from "next/image";

export default async function Bookmarks() {
  const request = await api.get("/bookmarks");
  const data: BookmarkProps[] = request.data;

  return (
    <main className="p-4 flex flex-col gap-4 bg-zinc-800 h-screen text-white">
      <h1 className="text-xl">tabdraw</h1>

      <span>username:</span>
      <span>password:</span>

      <span>bookmarks:</span>
      {data.map((item) => (
        <Link
          href={item.url}
          className="flex flex-row items-center gap-4 bg-zinc-700"
          target="_blank"
          key={item.url}
        >
          <span>{item.name}</span>
          <Image
            alt=""
            src={item.icon}
            width="512"
            height="256"
            className="w-8"
          />
        </Link>
      ))}
    </main>
  );
}
