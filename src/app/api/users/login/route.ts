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
    console.log("tokenData", tokenData);
    // creating a TOKEN using jwt and setting it as a response in browser cookie
    // 1.creating a token in cookies

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      // this is the expire time of tokenData, if token is experimentalOverrides, u cant use it
      expiresIn: "30d",
    });
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
      token: token,
    });
    // 2set a cookie in the response

    // http only means client side cant access cookies
    response.cookies.set("token", token);
    // response.cookies.set("token", token, {
    //   httpOnly: true,
    // });
    console.log("token created");
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
