import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET() {
  const bookmarks = await prisma.bookmark.findMany({
    orderBy: {
      created_at: "desc",
    },
  });

  return Response.json(bookmarks);
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { user_id, folder_id, url, name, color, icon } = data;

  const bookmark = await prisma.bookmark.create({
    data: {
      user_id,
      folder_id,
      url,
      name,
      color,
      icon,
    },
  });

  return Response.json(bookmark);
}

export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  await prisma.bookmark.delete({
    where: { id: id },
  });

  return Response.json("deleted");
}
