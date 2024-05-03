import AppNavbar from '@/components/app_navbar'
import CategoryAddInfo from '@/components/category_add_info'
import SideMenu from '@/components/side_menu'
import { LoginIsRequiredServer, authConfig } from '@/lib/auth'
import { getServerSession } from 'next-auth'

export default async function CategoriesAdd() {
  await LoginIsRequiredServer()
  const session = await getServerSession(authConfig)

  return (
    <section className="min-h-screen mb-auto overflow-x-hidden text-white xs:w-full lg:max-w-screen-xl mx-auto">
      <AppNavbar />

      <div className="grid grid-cols-12">
        <SideMenu />
        <div className="col-span-10 pl-4 py-4 xs:w-full lg:w-1/2 space-y-8">
          <span className="font-semibold">Add New Category</span>

          <CategoryAddInfo userId={session?.user?.id as string} />
        </div>
      </div>
    </section>
  )
}
