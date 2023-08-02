import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel.js";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

// connection instanceof db Connection
connect();

export async function POST(request: NextRequest) {
  try {
    // request is like req.body in express
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    console.log("reqBody", reqBody);

    // check if user already exist- awai because it return promise
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    // if user not already registerd
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // updating pass
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    console.log("savedUser", savedUser);
    return NextResponse.json({
      message: "user created successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
