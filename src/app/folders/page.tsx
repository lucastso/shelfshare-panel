import { api } from '@/lib/axios'
import AppNavbar from '@/components/app_navbar'
import SideMenu from '@/components/side_menu'
import { FolderProps } from '@/types/folder_props'
import { LoginIsRequiredServer, authConfig } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import Image from 'next/image'
import DeleteButton from '@/components/delete_button'
import FolderCollabs from '@/components/folder_collabs'

export default async function Folders() {
  const requestFolders = await api.get('/folders')
  const dataFolders: FolderProps[] = requestFolders.data

  await LoginIsRequiredServer()
  const session = await getServerSession(authConfig)

  return (
    <section className="mb-auto overflow-x-hidden text-white xs:w-full lg:max-w-screen-xl mx-auto">
      <AppNavbar />

      <div className="grid grid-cols-12">
        <SideMenu />
        <div className="col-span-10 pl-4 py-4">
          <div className="flex items-center justify-between mb-8">
            <span>Folders</span>
            <Link
              href="/folders/add"
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
              <span>Add Folder</span>
            </Link>
          </div>
          {dataFolders.length != 0 ? (
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M6 9l6 6l6 -6" />
                    </svg>
                  </th>
                  <th className="pb-4 px-4">Created by</th>
                  <th className="pb-4 px-4">Collabs</th>
                  <th className="pb-4 px-4"></th>
                </tr>
                {dataFolders.map((item) => {
                  return (
                    <tr
                      key={item.id}
                      className="text-sm transition-all group z-10 border-y-8 border-black bg-zinc-950 hover:bg-zinc-900"
                    >
                      <td className="h-14 px-4 rounded-l-xl">
                        <Link href={`/folders/${item.id}`}>
                          <div className="w-full h-full flex items-center justify-start gap-2">
                            {item.name}
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
                              className="icon icon-tabler icons-tabler-outline icon-tabler-login text-zinc-700"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                              <path d="M21 12h-13l3 -3" />
                              <path d="M11 15l-3 -3" />
                            </svg>
                          </div>
                        </Link>
                      </td>
                      <td className="h-14 px-4 text-zinc-400">
                        <div className="flex items-center gap-2">
                          <Image
                            src={item.creator.photo}
                            alt=""
                            width={512}
                            height={256}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <span>{item.creator.name}</span>
                        </div>
                      </td>
                      <td className="h-14 px-4">
                        <FolderCollabs
                          folderId={item.id}
                          userId={session?.user?.id}
                        />
                      </td>
                      {session?.user?.id == item.creator.id ? (
                        <td className="h-14 px-4 rounded-r-xl">
                          <div className="flex items-center justify-end gap-2">
                            <Link href={`/folders/edit/${item.id}`}>
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
                                className="text-zinc-400 icon icon-tabler icons-tabler-outline icon-tabler-edit opacity-75 hover:opacity-100 cursor-pointer transition-all"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                                <path d="M16 5l3 3" />
                              </svg>
                            </Link>
                            <DeleteButton
                              type="folders"
                              key={item.id}
                              id={item.id}
                            />
                          </div>
                        </td>
                      ) : (
                        <td className="h-14 px-4 rounded-r-xl flex items-center justify-end gap-2">
                          <span className="invisible">Not yours!</span>
                        </td>
                      )}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          ) : (
            <div className="flex items-center justify-center text-center">
              <span className="text-zinc-400">You have no folders! :(</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
