import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const cookieName = "kimotify_session";
const secret = new TextEncoder().encode(process.env.AUTH_SECRET || "dev-secret-change-me");

export type SessionUser = {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
};

export async function getCurrentUserServer(): Promise<SessionUser | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(cookieName)?.value;
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
