import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto mb-auto overflow-x-hidden h-screen flex flex-col items-center justify-center space-y-24">
        <section className="max-w-lg flex flex-col items-center justify-center space-y-4">
          <h1 className="text-gray-900 text-5xl text-center leading-tight font-bold">
            Easily Share <br /> Your{" "}
            <div className="relative inline-block">
              <Image
                src="/plus.svg"
                alt=""
                width={20}
                height={20}
                className="absolute top-0 -right-4"
              />
              <span className="bg-gradient-to-r from-[#E963FD] via-[#8233C5] to-[#E963FD] text-transparent bg-clip-text drop-shadow-lg">
                Bookmarks
              </span>
            </div>
          </h1>
          <span className="text-gray-700 text-center">
            Collaborative bookmark manager for sharing and organizing bookmarks
            across users.
          </span>

          <button className="bg-gray-900 text-white px-4 py-2 rounded-full transition-colors hover:bg-gray-700 text-sm">
            Install Chrome Extension
          </button>
        </section>

        <section>
          <Image src="/steps.png" alt="" width={640} height={512} />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
