import express, { Express, Request, Response } from "express";
const app: Express = express();
import cors from "cors";

app.use(express.json());

const allowedOrigins = ["http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello from admin-backend</h1>");
});

app.get("/home", (req: Request, res: Response) => {
  res.json({ name: "gopuuuuuuu" });
});

app.listen(5000, () => {
  console.log("Listening to port 5000...");
});
