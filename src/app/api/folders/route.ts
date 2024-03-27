import { prisma } from "@/lib/prisma";

export async function GET() {
  const folders = await prisma.folder.findMany({
    orderBy: {
      created_at: "desc",
    },
  });

  return Response.json(folders);
}
