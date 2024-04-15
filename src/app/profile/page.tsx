import AppNavbar from "@/components/app_navbar";
import ProfileChangeInfo from "@/components/profile_change_info";
import SideMenu from "@/components/side_menu";
import { LoginIsRequiredServer, authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Profile() {
  await LoginIsRequiredServer();
  const session = await getServerSession(authConfig);

  return (
    <section className="mb-auto overflow-x-hidden text-white xs:w-full lg:max-w-screen-xl mx-auto">
      <AppNavbar />

      <div className="grid grid-cols-12">
        <SideMenu />
        <div className="col-span-10 pl-4 py-4 xs:w-full lg:w-1/2 space-y-8">
          <span className="font-semibold">Profile</span>

          <ProfileChangeInfo
            email={session?.user?.email as string}
            name={session?.user?.name as string}
            image={session?.user?.image as string}
          />
        </div>
      </div>
    </section>
  );
}
