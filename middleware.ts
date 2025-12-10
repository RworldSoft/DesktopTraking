import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;

  // Public routes
  const publicRoutes =  ["/login", "/signup"];

  const isPublic = publicRoutes.some((route) => pathname.startsWith(route));

  // If NOT logged in & trying to access protected route → redirect
  if (!isPublic && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If logged in & trying to access login page → redirect to dashboard
  if (isPublic && token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/dashboard/:path*",
    "/inventory/:path*",
    "/analytics/:path*",
    "/users/:path*",
    "/auth/login",
    "/auth/sign-up",
    "/login",
    "/signup",
  ],
};
