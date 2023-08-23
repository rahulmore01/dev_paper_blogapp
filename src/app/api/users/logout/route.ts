import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logout successfully",
      success: true,
    });
    // replacing created token in login with "" empty string
    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    return response;
    // or this
    // return response = NextResponse.json({
    //     message: "Logout successfully",
    //     success: true,
    //   });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
