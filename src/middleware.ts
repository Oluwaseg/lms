import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const path = req.nextUrl.pathname;

  const redirectTo = (url: string) =>
    NextResponse.redirect(new URL(url, req.url));

  console.log("🔐 Middleware ran for:", path);

  // Skip auth routes
  const skipAuthPaths = [
    "/students/login",
    "/students/register",
    "/students/verify",
    "/parents/login",
    "/parents/register",
    "/parents/verify",
    "/instructors/login",
    "/instructors/register",
    "/instructors/verify",
    "/moderators/login",
    "/moderators/register",
    "/moderators/verify",
    "/admin/login",
  ];
  if (skipAuthPaths.includes(path)) {
    return NextResponse.next();
  }

  // Protect routes
  if (path.startsWith("/students") && !token) {
    return redirectTo("/students/login");
  }

  if (path.startsWith("/parents") && !token) {
    return redirectTo("/parents/login");
  }

  if (path.startsWith("/instructors") && !token) {
    return redirectTo("/instructors/login");
  }

  if (path.startsWith("/moderators") && !token) {
    return redirectTo("/moderators/login");
  }

  if (path.startsWith("/admin") && !token) {
    return redirectTo("/admin/login");
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/students/:path*",
    "/parents/:path*",
    "/instructors/:path*",
    "/moderators/:path*",
    "/admin/:path*",
  ],
};
