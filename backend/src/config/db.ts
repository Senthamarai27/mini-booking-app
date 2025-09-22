import "reflect-metadata";
import { DataSource } from "typeorm";
import { Booking } from "../models/Booking";

export const AppDataSource = new DataSource({
  type: "sqlite", 
  database: "db.sqlite",
  synchronize: true,
  entities: [Booking],
});
