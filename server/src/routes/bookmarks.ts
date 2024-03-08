import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export const bookmarkRoutes = async (app: FastifyInstance) => {
  app.get("/bookmarks", async () => {
    const bookmarks = await prisma.bookmark.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return bookmarks;
  });

  app.post("/bookmark/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    });

    const { id } = paramsSchema.parse(request.params);

    await prisma.bookmark.update({
      where: {
        id,
      },
    });
  });
};
