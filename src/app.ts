import express from "express";
import morgan from "morgan";
import { uploadRouter } from "./routes";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", uploadRouter);

export default app;
