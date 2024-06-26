import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

interface User {
  id?: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    session({ session, token }) {
      if (session.user) {
        const user = session.user as User;
        user.id = token.sub as string;
      }
      return session;
    },
  },
};

export async function LoginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) return redirect("/");
}

export async function LoginIsRequiredClient() {
  const session = useSession();
  const router = useRouter();
  if (!session) router.push("/");
}
