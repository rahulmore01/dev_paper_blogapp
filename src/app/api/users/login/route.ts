import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel.js";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log("reqBody", reqBody);
    // check if user exist in the db using email
    const user = await User.findOne({ email });
    // user from db
    console.log("user=>", user);
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }
    // if email is found then check password of user -(reqBody) with password inside user from db
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }
    // creating a "TOKEN OBJEECT" including user only if email and password are found in db
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    // creating a TOKEN using jwt and setting it as a response in browser cookie
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });
    response.cookies.set("token", token, { httpOnly: true });
    return response;

    // return token to client
    return NextResponse.json({ token }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
