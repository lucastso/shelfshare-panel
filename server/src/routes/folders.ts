import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export const folderRoutes = async (app: FastifyInstance) => {
  app.get("/folders", async () => {
    const folders = await prisma.folder.findMany({
      orderBy: {
        created_at: "desc",
      },
    });

    return folders;
  });

  app.post("/folder", async (request) => {
    const bodySchema = z.object({
      creator_id: z.number(),
      collabs_id: z.number().array(),
      name: z.string(),
    });

    const { creator_id, collabs_id, name } = bodySchema.parse(request.body);

    await prisma.folder.create({
      data: {
        creator_id,
        collabs_id,
        name,
      },
    });
  });

  app.get("/folder/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.number(),
    });

    const { id } = paramsSchema.parse(request.params);

    const folder = await prisma.folder.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return folder;
  });

  app.put("/folder/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.number(),
    });

    const { id } = paramsSchema.parse(request.params);

    const bodySchema = z.object({
      creator_id: z.number(),
      collabs_id: z.number().array(),
      name: z.string(),
    });

    const { creator_id, collabs_id, name } = bodySchema.parse(request.body);

    await prisma.folder.update({
      where: {
        id,
      },
      data: {
        creator_id,
        collabs_id,
        name,
      },
    });
  });

  app.delete("/folder/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.number(),
    });

    const { id } = paramsSchema.parse(request.params);

    await prisma.folder.delete({
      where: {
        id,
      },
    });
  });
};
