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
      name: z.string(),
      color: z.string(),
      icon: z.string(),
      url: z.string(),
      created_at: z.string(),
    });

    const { name, color, folder_id, icon, url, user_id, created_at } =
      bodySchema.parse(request.body);

    const products = prisma.bookmark.create({
      data: {
        name,
        color,
        folder_id,
        icon,
        url,
        user_id,
        created_at,
      },
    });

    return products;
  });
};
