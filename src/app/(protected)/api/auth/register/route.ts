import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/prisma";
import { hashPassword, createSessionResponse } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = String(body.email || "").toLowerCase();
    const password = String(body.password || "");
    const firstname = String(body.firstname || "");
    const lastname = String(body.lastname || "");

    if (!email || !password || !firstname || !lastname) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const existing = await client.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: "Email already in use" }, { status: 409 });
    }

    const passwordHash = await hashPassword(password);

    const user = await client.user.create({
      data: {
        email,
        passwordHash,
        firstname,
        lastname,
      },
    });

    return createSessionResponse(
      {
        id: user.id,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
      },
      "/dashboard"
    );
  } catch (e) {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
