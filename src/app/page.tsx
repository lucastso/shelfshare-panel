import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

const Home = () => {
  return (
    <section className="bg-hero">
      <Navbar />
      <div className="mx-auto mb-auto overflow-x-hidden h-screen flex flex-col items-center justify-center space-y-24">
        <section className="xs:max-w-full lg:max-w-lg flex flex-col items-center justify-center space-y-4 xs:px-6 lg:px-0">
          <h1 className="text-white xs:text-3xl lg:text-5xl text-center leading-tight font-bold">
            Easily Share <br /> Your{" "}
            <div className="relative inline-block">
              <Image
                src="/plus.svg"
                alt=""
                width={20}
                height={20}
                className="absolute top-0 -right-4"
              />
              <span className="text-zinc-400">Bookmarks</span>
            </div>
          </h1>
          <span className="text-zinc-200 text-center lg:text-base xs:text-sm">
            Collaborative bookmark manager for sharing and organizing bookmarks
            across users.
          </span>

          <button className="bg-white text-black px-4 py-2 rounded-full transition-colors hover:bg-zinc-100 text-sm">
            Install Chrome Extension
          </button>
        </section>

        <section className="xs:px-6 lg:px-0">
          <Image
            src="/steps.png"
            alt=""
            width={640}
            height={512}
            className="w-96"
          />
        </section>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
