import { api } from "@/lib/axios";
import { BookmarkProps } from "@/types/bookmark_props";
import AppNavbar from "@/components/app_navbar";
import SideMenu from "@/components/side_menu";
import Link from "next/link";
import FavouritesCategory from "@/components/favourites_category";
import Image from "next/image";
import moment from "moment";

export default async function Dashboard() {
  const requestBookmarks = await api.get("/bookmarks");
  const dataBookmarks: BookmarkProps[] = requestBookmarks.data;

  const categories = [
    {
      name: "Maps",
      background: "rgb(23, 37, 84)",
      text: "rgb(96, 165, 250)",
    },
    {
      name: "Homework",
      background: "rgb(26, 46, 5)",
      text: "rgb(190, 242, 100)",
    },
  ];

  return (
    <section className="mb-auto overflow-x-hidden text-white xs:w-full lg:max-w-screen-xl mx-auto">
      <AppNavbar />

      <div className="grid grid-cols-12">
        <SideMenu />
        <div className="col-span-2 p-4 space-y-8">
          <span>Your Board</span>

          <div className="flex flex-col space-y-2">
            <FavouritesCategory />

            {categories.map((category) => {
              return (
                <div
                  className="text-sm px-4 py-3 rounded-md flex items-center justify-between cursor-pointer"
                  style={{
                    background: category.background,
                    color: category.text,
                  }}
                  key={category.name}
                >
                  <div className="flex items-center gap-2">
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
                      className="icon icon-tabler icons-tabler-outline icon-tabler-tags"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 8v4.172a2 2 0 0 0 .586 1.414l5.71 5.71a2.41 2.41 0 0 0 3.408 0l3.592 -3.592a2.41 2.41 0 0 0 0 -3.408l-5.71 -5.71a2 2 0 0 0 -1.414 -.586h-4.172a2 2 0 0 0 -2 2z" />
                      <path d="M18 19l1.592 -1.592a4.82 4.82 0 0 0 0 -6.816l-4.592 -4.592" />
                      <path d="M7 10h-.01" />
                    </svg>
                    <span>{category.name}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical hover:bg-white hover:bg-opacity-10 rounded-full transition-colors"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  </svg>
                </div>
              );
            })}

            <Link
              href="#"
              className="bg-zinc-950 border border-zinc-900 text-zinc-400 text-sm px-4 py-3 rounded-md flex items-center justify-center cursor-pointer space-x-2"
            >
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
              </svg>
              <span>Add Category</span>
            </Link>
          </div>
        </div>
        <div className="col-span-8 pl-4 py-4">
          <table className="text-left w-full">
            <tbody>
              <tr>
                <th className="pb-4 px-4 flex items-center gap-1 cursor-pointer">
                  <span>Bookmark</span>
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
                <th className="pb-4 px-4">Category</th>
                <th className="pb-4 px-4">Folder</th>
                <th className="pb-4 px-4 flex items-center gap-1 cursor-pointer">
                  <span>Date</span>
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
              </tr>
              {dataBookmarks.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className="text-sm opacity-75 hover:opacity-100 transition-colors group"
                  >
                    <td className="h-14 px-4">
                      <Link
                        href={item.url}
                        target="_blank"
                        className="flex items-center gap-3 text-zinc-200"
                      >
                        <Image
                          src={item.icon}
                          alt=""
                          width={512}
                          height={256}
                          className="w-6 rounded-md"
                        />
                        <span>
                          {item.name.length > 25
                            ? item.name.slice(0, 25) + "..."
                            : item.name}
                        </span>
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
                          className="icon icon-tabler icons-tabler-outline icon-tabler-link text-blue-500"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 15l6 -6" />
                          <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                          <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="icon icon-tabler icons-tabler-filled icon-tabler-star text-yellow-700 opacity-0 group-hover:opacity-100 hover:text-yellow-400 transition-colors"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
                        </svg>
                      </Link>
                    </td>
                    <td className="h-14 px-4">
                      <div className="px-4 py-3 rounded-md text-blue-400 bg-blue-950 w-fit">
                        Maps
                      </div>
                    </td>
                    <td className="h-14 px-4">
                      <div className="px-4 py-3 rounded-md text-zinc-600 bg-zinc-950 border border-zinc-800 w-fit flex items-center gap-2">
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
                          className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 5l0 14" />
                          <path d="M5 12l14 0" />
                        </svg>
                        <span>Add</span>
                      </div>
                    </td>
                    <td className="h-14 px-4 text-zinc-400">
                      {moment(item.created_at).format("MMM Do YY")}
                    </td>
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
