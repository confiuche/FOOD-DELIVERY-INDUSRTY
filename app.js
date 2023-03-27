import express from "express"
import dotenv from "dotenv"
import userRoutes from "./Routes/userRoutes.js";
import { database } from "./Config/dBconnect.js";

dotenv.config();
database();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.use("/app/v1/users", userRoutes);

app.listen(PORT, console.log(`App started at ${PORT}`));