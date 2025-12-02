import dotenv from "dotenv";

dotenv.config();

export const port: number = Number(process.env.SERVER_PORT);
export const DB_URL: string = process.env.DB_CONNECTION_STRING ?? "mongodb://admin:admin123@192.168.49.2:32017"