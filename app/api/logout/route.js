import { NextResponse } from "next/server";

function clearAndRedirect(req) {
  const res = NextResponse.redirect(new URL("/login", req.url));
  res.cookies.set("vn_session", "", {
    httpOnly: true, secure: true, sameSite: "lax", path: "/", expires: new Date(0)
  });
  return res;
}

export async function GET(req)  { return clearAndRedirect(req); }
export async function POST(req) { return clearAndRedirect(req); }
