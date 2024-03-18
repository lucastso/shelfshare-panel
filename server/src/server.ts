import fastify from "fastify";
import cors from "@fastify/cors";
import { bookmarkRoutes } from "./routes/bookmarks";
import { folderRoutes } from "./routes/folders";

const app = fastify();
const PORT = 5000;

app.register(cors, {
  origin: true,
});
app.register(bookmarkRoutes);
app.register(folderRoutes);

app.get("/", (req, res) => {
  res.send("Hello there!");
});

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`🚀 Server running on port ${PORT}!`);
  });
