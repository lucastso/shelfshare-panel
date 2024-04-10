import AppNavbar from "@/components/app_navbar";
import SideMenu from "@/components/side_menu";

export default async function About() {
  return (
    <section className="mb-auto overflow-x-hidden text-white xs:w-full lg:max-w-screen-xl mx-auto">
      <AppNavbar />

      <div className="grid grid-cols-12">
        <SideMenu />
        <div className="col-span-10 pl-4 py-4">About</div>
      </div>
    </section>
  );
}
