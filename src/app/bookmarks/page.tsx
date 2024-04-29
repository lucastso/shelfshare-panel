import { api } from "@/lib/axios";
import { BookmarkProps } from "@/types/bookmark_props";
import AppNavbar from "@/components/app_navbar";
import SideMenu from "@/components/side_menu";
import Link from "next/link";
import FavouritesCategory from "@/components/favourites_category";
import DeleteButton from "@/components/delete_button";
import FavouriteButton from "@/components/favourite_button";
import { CategoryProps } from "@/types/category_props";
import AddCategoryButton from "@/components/add_category_button";
import ItemsCategory from "@/components/item_categories";
import BookmarkCategory from "@/components/bookmark_category";
import BookmarkFolder from "@/components/bookmark_folder";
import AddFolderButton from "@/components/add_folder_button";
import { FolderProps } from "@/types/folder_props";

export default async function Dashboard() {
  const requestBookmarks = await api.get("/bookmarks");
  const requestCategories = await api.get("/categories");
  const requestFolders = await api.get("/folders");
  const dataBookmarks: BookmarkProps[] = requestBookmarks.data;
  const dataCategories: CategoryProps[] = requestCategories.data;
  const dataFolders: FolderProps[] = requestFolders.data;

  const favourites = dataBookmarks.filter(
    (item) => item.favourite == true
  ).length;

  return (
    <section className="mb-auto overflow-x-hidden text-white xs:w-full lg:max-w-screen-xl mx-auto">
      <AppNavbar />

      <div className="grid grid-cols-12">
        <SideMenu />
        <div className="col-span-2 p-4 space-y-8">
          <span>Your Board</span>

          <div className="flex flex-col space-y-2">
            <FavouritesCategory size={favourites} />

            {dataCategories.map((category) => {
              return <ItemsCategory category={category} key={category.id} />;
            })}

            <Link
              href="/categories/add"
              className="bg-zinc-950 border border-zinc-900 text-zinc-400 text-sm px-4 py-3 rounded-md flex items-center justify-center cursor-pointer space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
          {dataBookmarks.length != 0 ? (
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 9l6 6l6 -6" />
                    </svg>
                  </th>
                  <th className="pb-4 px-4">Category</th>
                  <th className="pb-4 px-4">Folder</th>
                  <th className="pb-4 px-4"></th>
                </tr>
                {dataBookmarks.map((item) => {
                  return (
                    <tr
                      key={item.id}
                      className="text-sm transition-all group z-10"
                    >
                      <td className="h-14 px-4">
                        <div
                          title="Clicking will open this page."
                          className="flex items-center gap-3 text-zinc-200"
                        >
                          <Link
                            href={item.url}
                            target="_blank"
                            className="flex items-center gap-3 text-zinc-200"
                          >
                            <img
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
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="icon icon-tabler icons-tabler-outline icon-tabler-link text-blue-500"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M9 15l6 -6" />
                              <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                              <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                            </svg>
                          </Link>
                          <FavouriteButton
                            id={item.id}
                            favourite={item.favourite}
                          />
                        </div>
                      </td>
                      <td className="h-14 px-4 z-10">
                        {item.categoryId == null ? (
                          <AddCategoryButton
                            bookmarkId={item.id}
                            dataCategories={dataCategories}
                          />
                        ) : (
                          <BookmarkCategory item={item} />
                        )}
                      </td>
                      <td className="h-14 px-4 z-10">
                        {item.folderId == null ? (
                          <AddFolderButton
                            folderId={item.id}
                            dataFolders={dataFolders}
                          />
                        ) : (
                          <BookmarkFolder item={item} />
                        )}
                      </td>
                      <td className="h-14 px-4 text-zinc-400 flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-edit opacity-75 hover:opacity-100 cursor-pointer transition-all"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                          <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                          <path d="M16 5l3 3" />
                        </svg>
                        <DeleteButton
                          type="bookmarks"
                          key={item.id}
                          id={item.id}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="flex items-center justify-center text-center">
              <span className="text-zinc-400">You have no bookmarks! :(</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
