import { api } from "@/lib/axios";
import AppNavbar from "@/components/app_navbar";
import SideMenu from "@/components/side_menu";
import { FolderProps } from "@/types/folder_props";

export default async function Folders() {
  const requestFolders = await api.get("/folders");
  const dataFolders: FolderProps[] = requestFolders.data;

  return (
    <section className="mb-auto overflow-x-hidden text-white xs:w-full lg:max-w-screen-xl mx-auto">
      <AppNavbar />

      <div className="grid grid-cols-12">
        <SideMenu />
        <div className="col-span-10 pl-4 py-4">Folders</div>
      </div>
    </section>
  );
}
