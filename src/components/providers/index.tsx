"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const Providers = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
