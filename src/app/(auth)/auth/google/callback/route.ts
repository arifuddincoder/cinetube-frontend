import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAMES } from "@/utils/cookie.constants";

export async function GET(request: NextRequest) {
	const accessToken = request.nextUrl.searchParams.get("accessToken");
	const refreshToken = request.nextUrl.searchParams.get("refreshToken");

	if (!accessToken || !refreshToken) {
		return NextResponse.redirect(new URL("/login?error=oauth_failed", "https://cinetube.arifuddincoder.site"));
	}

	// ✅ hardcode করো অথবা env থেকে নাও
	const response = NextResponse.redirect(new URL("/dashboard", "https://cinetube.arifuddincoder.site"));

	response.cookies.set(COOKIE_NAMES.ACCESS_TOKEN, accessToken, {
		httpOnly: true,
		secure: true,
		sameSite: "lax",
		path: "/",
	});

	response.cookies.set(COOKIE_NAMES.REFRESH_TOKEN, refreshToken, {
		httpOnly: true,
		secure: true,
		sameSite: "lax",
		path: "/",
	});

	return response;
}
