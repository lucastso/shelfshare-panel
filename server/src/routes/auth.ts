import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";

export const authRoutes = async (app: FastifyInstance) => {
  app.post("/register", async (request, reply) => {
    const bodySchema = z.object({
      email: z.string(),
      password: z.string(),
      subscription: z.string(),
    });

    const { email, password, subscription } = bodySchema.parse(request.body);

    const existingUser = await prisma.user.findUniqueOrThrow({
      where: { email },
    });

    if (existingUser) {
      return reply.code(400).send({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        subscription,
      },
    });

    return newUser;
  });

  app.post("/login", async (request, reply) => {
    const bodySchema = z.object({
      email: z.string(),
      password: z.string(),
    });

    const { email, password } = bodySchema.parse(request.body);

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return reply.code(404).send({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return reply.code(401).send({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user.id }, "your-secret-key", {
      expiresIn: "1h",
    });

    return token;
  });
};
