import { NextRequest } from "next/server";
import { clearSessionResponse } from "@/lib/auth";

export async function POST(req: NextRequest) {
  return clearSessionResponse("/");
}
