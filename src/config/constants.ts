import dotenv from "dotenv";

dotenv.config();

export const port: number = Number(process.env.SERVER_PORT);
export const DB_URL: string = process.env.DB_CONNECTION_STRING ?? "mongodb://admin:admin123@192.168.49.2:32017";

export const wordleWordsUrl : string = process.env.WordleUrl || `https://random-word-api.vercel.app/api?words=1&length=5` 
export const SECRETE_KEY : string = process.env.SECRETE_KEY ?? "y34rt43q1sdy"