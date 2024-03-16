import { api } from "@/lib/axios";
import { BookmarkProps } from "@/types/bookmark_props";

export default async function Bookmarks() {
  const request = await api.get("/bookmarks");
  const data: BookmarkProps[] = request.data;

  return (
    <main className="p-4 flex flex-col gap-4 bg-zinc-900 h-screen text-white">
      <h1 className="text-xl">tabdraw</h1>

      <span>username:</span>
      <span>password:</span>

      <span>bookmarks:</span>
      {data.map((item) => (
        <div className="flex flex-col">
          <span>name: {item.name}</span>
          <span>color: {item.color}</span>
          <span>icon: {item.icon}</span>
          <span>url: {item.url}</span>
        </div>
      ))}
    </main>
  );
}
