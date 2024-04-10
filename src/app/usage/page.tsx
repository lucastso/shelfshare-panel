import AppNavbar from "@/components/app_navbar";
import SideMenu from "@/components/side_menu";
import Link from "next/link";

export default async function Usage() {
  return (
    <section className="mb-auto overflow-x-hidden text-white xs:w-full lg:max-w-screen-xl mx-auto">
      <AppNavbar />

      <div className="grid grid-cols-12">
        <SideMenu />
        <div className="col-span-10 pl-4 py-4 flex flex-col gap-2 text-zinc-200">
          <span className="font-semibold text-lg">First of all... 🥇</span>
          <span>
            You must install our{" "}
            <Link href="#" className="text-blue-500 underline">
              Chrome Extension.
            </Link>
            Yep, we're just available in Chrome nowadays, but pretending to make
            our path into other browsers. We offer this platform so you can
            manage your bookmarks, folders, share your items and manage them.
          </span>

          <span className="font-semibold text-lg">
            The core of this application is done in the Extension! 🔖
          </span>

          <span className="font-semibold text-lg">Like this...</span>

          <span>
            Following these steps, you're almost done to manage your bookmarks.
            You just need to create an account. It's very simple!
          </span>
        </div>
      </div>
    </section>
  );
}
