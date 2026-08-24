import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  if (request.nextUrl.searchParams.get("utm_source") === "web") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.searchParams.set("utm_source", "web");
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api/|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|otf|ttf|woff|woff2)$).*)",
  ],
};
