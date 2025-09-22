import express from "express";
import cors from "cors";
import bookingRoutes from "./routes/bookingRoutes";
import { errorHandler } from "./middlewares/errorHandler";
import { AppDataSource } from "./config/db";

const app = express();
app.use(cors());
app.use(express.json());

AppDataSource.initialize().then(() => {
  console.log("Database Initialized");
});

app.use("/", bookingRoutes);
app.use(errorHandler);

export default app;
