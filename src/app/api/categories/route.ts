import { prisma } from "@/lib/prisma";

export async function GET() {
  const categories = await prisma.category.findMany({
    orderBy: [
      {
        created_at: "desc",
      },
    ],
  });

  return Response.json(categories);
}
