import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/jwt";

connect();

export async function GET(request: NextRequest) {
  try {
    // as we only have id from cookies, get that id and save
    const userId: any = await getDataFromToken(request);
    // now search user in db with the same id
    const user = await User.findOne({
      _id: userId,
    }).select("-password");
    // send the user data without password as a response
    return NextResponse.json({ message: "User found", data: user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
