import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";
import {client} from "@/lib/prisma";

const cookieName = "kimotify_session";
const secret = new TextEncoder().encode(process.env.AUTH_SECRET || "dev-secret-change-me");

export type SessionUser = {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
};

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export async function createSessionResponse(user: SessionUser, redirectTo: string) {
  const token = await new SignJWT(user)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);

  const res = NextResponse.redirect(new URL(redirectTo, process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"));

  res.cookies.set(cookieName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}

export function clearSessionResponse(redirectTo: string) {
  const res = NextResponse.redirect(new URL(redirectTo, process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"));
  res.cookies.set(cookieName, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return res;
}

export async function getSessionUserFromRequest(req: NextRequest): Promise<SessionUser | null> {
  try {
    const token = req.cookies.get(cookieName)?.value;
    if (!token) return null;

    const { payload } = await jwtVerify(token, secret);
    return {
      id: String(payload.id),
      email: String(payload.email),
      firstname: String(payload.firstname),
      lastname: String(payload.lastname),
    };
  } catch {
    return null;
  }
}

export async function requireUser(req: NextRequest): Promise<SessionUser | null> {
  return getSessionUserFromRequest(req);
}

export async function getCurrentUser(): Promise<SessionUser | null> {
  return null;
}
