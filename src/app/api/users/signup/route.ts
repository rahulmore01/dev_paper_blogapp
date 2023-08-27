import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel.js";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

// connection instanceof db Connection

export async function POST(request: NextRequest) {
  await connect();
  console.log(request);

  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    console.log("reqBody", reqBody);

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const userData = {
      username: username,
      email: email,
      password: hashedPassword,
      role: "admin",
    };

    const savedUser = await User.create(userData);

    console.log("User created:", savedUser);

    return NextResponse.json({
      message: "user created successfully",
      success: true,
      savedUser: savedUser,
    });
  } catch (error: any) {
    console.error("Error creating user:", error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
