import { LoginIsRequiredServer, authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import AppNavbarUserInfo from "../app_navbar_userinfo";

const AppNavbar = async () => {
  await LoginIsRequiredServer();
  const session = await getServerSession(authConfig);

  return (
    <nav className="py-3 flex items-center justify-between">
      <Image src="/logo.png" alt="" width={512} height={256} className="w-32" />

      <AppNavbarUserInfo
        image={session?.user?.image as string}
        name={session?.user?.name as string}
      />
    </nav>
  );
};

export default AppNavbar;
