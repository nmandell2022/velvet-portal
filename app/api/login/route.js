import { NextResponse } from "next/server";

export async function GET(req) {
  // If someone browses /api/login directly, send them to the form.
  return NextResponse.redirect(new URL("/login", req.url));
}

export async function POST(req) {
  const form = await req.formData();
  const password = form.get("password");
  const next = new URL(req.url).searchParams.get("next") || "/members";
  const expected = process.env.MEMBERS_PASS;

  if (expected && password === expected) {
    const res = NextResponse.redirect(new URL(next, req.url));
    res.cookies.set("vn_session", "ok", {
      httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 7
    });
    return res;
  }

  return NextResponse.redirect(
    new URL(`/login?error=1&next=${encodeURIComponent(next)}`, req.url)
  );
}
