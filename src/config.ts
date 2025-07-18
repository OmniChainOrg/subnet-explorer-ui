import dotenv from 'dotenv';

dotenv.config();

export const RPC_WS_URL = process.env.RPC_WS_URL!;
export const POSTGRES_URL = process.env.POSTGRES_URL!;
export const API_PORT = parseInt(process.env.API_PORT || '4000', 10);
