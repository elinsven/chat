import * as jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
dotenv.config();

export interface AuthTokenPayload {
  userId: number;
}

export function decodeAuthHeader(authHeader: String): AuthTokenPayload {
  const token = authHeader.replace("Bearer ", "");

  if (!token) {
    throw new Error("No token found");
  }
  return jwt.verify(token, process.env.APP_SECRET) as AuthTokenPayload;
}