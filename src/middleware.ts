import { NextRequest, NextResponse } from "next/server";
import { getSessionUserFromRequest } from "@/lib/auth";

const publicRoutes = ["/", "/api/auth/login", "/api/auth/register"];

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname;

  const isPublic = publicRoutes.some((route) => {
    if (route.endsWith("/*")) {
      const base = route.replace("/*", "");
      return url.startsWith(base);
    }
    return url === route;
  });

  if (isPublic) {
    return NextResponse.next();
  }

  if (url.startsWith("/api")) {
    const user = await getSessionUserFromRequest(req);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.next();
  }

  if (url.startsWith("/dashboard")) {
    const user = await getSessionUserFromRequest(req);
    if (!user) {
      const loginUrl = new URL("/", req.url);
      loginUrl.searchParams.set("from", url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|public).*)"],
};
