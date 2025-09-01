import dotenv from "dotenv";

dotenv.config({ quiet: true });

export const TOKEN = process.env.TOKEN as string;
