import express from "express";
import morgan from "morgan";
import path from "path";

import { uploadRouter } from "./routes";

const app = express();

// Settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", uploadRouter);

export default app;
