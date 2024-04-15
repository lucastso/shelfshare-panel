import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const favouriteState = await prisma.bookmark.findFirst({
    where: { id: Number(id) },
    select: { favourite: true },
  });

  await prisma.bookmark.update({
    where: { id: Number(id) },
    data: { favourite: !favouriteState?.favourite },
  });

  return Response.json(
    { message: "Successfully favourited!" },
    { status: 200 }
  );
}
