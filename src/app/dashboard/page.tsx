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
import AppNavbar from "@/components/app_navbar";

export default async function Dashboard() {
  const requestBookmarks = await api.get("/bookmarks");
  const requestFolders = await api.get("/folders");
  const dataBookmarks: BookmarkProps[] = requestBookmarks.data;
  const dataFolders: FolderProps[] = requestFolders.data;

  await LoginIsRequiredServer();
  const session = await getServerSession(authConfig);

  return (
    <section className="mb-auto overflow-x-hidden h-screen text-white">
      <AppNavbar />

      <div className="flex">
        <div className="w-24 h-full bg-red-900">a</div>
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-2 bg-blue-900">b</div>
          <div className="col-span-10 bg-green-900">c</div>
        </div>
      </div>
    </section>
  );
}
