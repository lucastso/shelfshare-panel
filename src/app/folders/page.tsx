import { api } from "@/lib/axios";
import AppNavbar from "@/components/app_navbar";
import SideMenu from "@/components/side_menu";
import { FolderProps } from "@/types/folder_props";
import { LoginIsRequiredServer, authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Folders() {
  const requestFolders = await api.get("/folders");
  const dataFolders: FolderProps[] = requestFolders.data;

  /*await LoginIsRequiredServer();
  const session = await getServerSession(authConfig);*/

  return (
    <section className="mb-auto overflow-x-hidden text-white xs:w-full lg:max-w-screen-xl mx-auto">
      <AppNavbar />

      <div className="grid grid-cols-12">
        <SideMenu />
        <div className="col-span-10 pl-4 py-4">
          <table className="text-left w-full">
            <tbody>
              <tr>
                <th className="pb-4 px-4 flex items-center gap-1 cursor-pointer">
                  <span>Folder</span>
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 9l6 6l6 -6" />
                  </svg>
                </th>
                <th className="pb-4 px-4">Created by</th>
                <th className="pb-4 px-4">Collabs</th>
                <th className="pb-4 px-4">Bookmarks</th>
              </tr>
              {dataFolders.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className="text-sm transition-all group z-10 border-y-8 border-black"
                    style={{ background: item.color }}
                  >
                    <td className="h-16 px-4 rounded-l-xl">
                      <span>{item.name}</span>
                    </td>
                    <td className="h-16 px-4"></td>
                    <td className="h-16 px-4"></td>
                    <td className="h-16 px-4 rounded-r-xl"></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
