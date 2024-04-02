import { api } from "@/lib/axios";
import { BookmarkProps } from "@/types/bookmark_props";
import Link from "next/link";
import AddFolderButton from "@/components/add_folder_button";
import { FolderProps } from "@/types/folder_props";
import DeleteButton from "@/components/delete_button";
import { getServerSession } from "next-auth";
import { authConfig, loginIsRequiredServer } from "@/lib/auth";
import LogOutButton from "@/components/log_out_button";

export default async function Dashboard() {
  const requestBookmarks = await api.get("/bookmarks");
  const requestFolders = await api.get("/folders");
  const dataBookmarks: BookmarkProps[] = requestBookmarks.data;
  const dataFolders: FolderProps[] = requestFolders.data;

  await loginIsRequiredServer();
  const session = await getServerSession(authConfig);

  return (
    <section className="p-4 flex flex-col gap-4 bg-zinc-50 h-auto">
      <h1 className="text-xl">tabdraw</h1>

      <LogOutButton />

      <span>{session?.user?.id}</span>
      <span>{session?.user?.name}</span>
      <span>{session?.user?.email}</span>

      <AddFolderButton />

      <span>bookmarks:</span>
      {dataBookmarks.map((item) => (
        <div
          className="flex flex-row items-center justify-between gap-4 bg-orange-100"
          key={item.url}
        >
          <Link href={item.url} target="_blank">
            {item.name}
          </Link>
          <DeleteButton id={item.id} type="bookmark" />
        </div>
      ))}

      <span>folders:</span>
      {dataFolders.map((item) => (
        <div
          className="bg-cyan-100 flex flex-row items-center justify-between"
          key={item.id}
        >
          <span>
            {item.name}, collabs: {item.collabs_id}
          </span>
          <DeleteButton id={item.id} type="folder" />
        </div>
      ))}
    </section>
  );
}
