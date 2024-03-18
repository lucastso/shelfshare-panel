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

    await prisma.bookmark.create({
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

  app.get("/bookmark/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.number(),
    });

    const { id } = paramsSchema.parse(request.params);

    const bookmark = await prisma.bookmark.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return bookmark;
  });

  app.put("/bookmark/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.number(),
    });

    const { id } = paramsSchema.parse(request.params);

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

    await prisma.bookmark.update({
      where: {
        id,
      },
      data: {
        name,
        color,
        folder_id,
        icon,
        url,
        user_id,
      },
    });
  });

  app.delete("/bookmark/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.number(),
    });

    const { id } = paramsSchema.parse(request.params);

    await prisma.bookmark.delete({
      where: {
        id,
      },
    });
  });
};
