import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export const bookmarkRoutes = async (app: FastifyInstance) => {
  app.get("/bookmarks", async () => {
    const bookmarks = await prisma.bookmark.findMany({
      orderBy: {
        created_at: "desc",
      },
    });

    return bookmarks;
  });

  app.post("/bookmark", async (request) => {
    const bodySchema = z.object({
      user_id: z.number(),
      folder_id: z.number(),
      url: z.string(),
      name: z.string(),
      color: z.string(),
      icon: z.string(),
    });

    const { name, color, folder_id, icon, url, user_id } = bodySchema.parse(
      request.body
    );

    prisma.bookmark.create({
      data: {
        user_id,
        folder_id,
        url,
        name,
        color,
        icon,
      },
    });
  });
};
