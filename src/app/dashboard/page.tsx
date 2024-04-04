import { api } from "@/lib/axios";
import { BookmarkProps } from "@/types/bookmark_props";
import Link from "next/link";
import AddFolderButton from "@/components/add_folder_button";
import { FolderProps } from "@/types/folder_props";
import DeleteButton from "@/components/delete_button";
import { getServerSession } from "next-auth";
import { authConfig, LoginIsRequiredServer } from "@/lib/auth";
import LogOutButton from "@/components/log_out_button";
import Image from "next/image";
import SidenavItems from "@/components/sidenav_items";

export default async function Dashboard() {
  const requestBookmarks = await api.get("/bookmarks");
  const requestFolders = await api.get("/folders");
  const dataBookmarks: BookmarkProps[] = requestBookmarks.data;
  const dataFolders: FolderProps[] = requestFolders.data;

  await LoginIsRequiredServer();
  const session = await getServerSession(authConfig);

  return (
    <section className="h-auto grid grid-cols-8">
      <div className="col-span-1 bg-red-100 flex flex-col space-y-24 p-8">
        <Image
          src="/logo.png"
          alt=""
          width={512}
          height={256}
          className="w-24"
        />

        <SidenavItems />
      </div>
      <div className="col-span-7 bg-blue-100">b</div>
    </section>
  );
}
