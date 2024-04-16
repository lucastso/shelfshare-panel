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

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  await prisma.category.delete({
    where: { id: Number(id) },
  });

  return Response.json("deleted");
}
