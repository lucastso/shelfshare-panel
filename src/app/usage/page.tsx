import AppNavbar from "@/components/app_navbar";
import SideMenu from "@/components/side_menu";
import Image from "next/image";
import Link from "next/link";

export default async function Usage() {
  return (
    <section className="mb-auto overflow-x-hidden text-white xs:w-full lg:max-w-screen-xl mx-auto">
      <AppNavbar />

      <div className="grid grid-cols-12">
        <SideMenu />
        <div className="col-span-10 pl-4 py-4 flex flex-col gap-2 text-zinc-200">
          <span className="font-semibold text-lg">First of all...</span>
          <span>
            You must install our{" "}
            <Link href="#" className="text-blue-500 underline">
              Chrome Extension.
            </Link>
            Yep, we're just available in Chrome now, but pretending to make our
            path into other browsers. We offer this platform so you can manage
            your bookmarks and folders, and share them if you want.
          </span>

          <span className="font-semibold text-lg">
            The core of this application is done inside the Extension! 🔖
          </span>

          <span className="font-semibold text-lg">Like this...</span>

          <Image
            src="/help.png"
            alt=""
            width={512}
            height={256}
            className="self-center w-[40rem] py-8"
          />

          <span>
            Following these steps, you're almost done to manage your bookmarks.
            You just need to create an account, which is simple.
          </span>
        </div>
      </div>
    </section>
  );
}
