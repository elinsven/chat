import * as jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
dotenv.config();

export interface Context {
  userId: number;
}

export function decodeAuthHeader(authHeader: string): Context {
  const token = authHeader.replace("Bearer ", "");

  if (!token) {
    return null;
  }
  return jwt.verify(token, process.env.JWT_SECRET) as Context;
}