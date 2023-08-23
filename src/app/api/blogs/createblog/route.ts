import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import BlogPost from "@/models/postModel.js";

connect();

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const reqBody = await request.json();
    console.log("reqBody=>", reqBody);
    const { title, body, imageUrl, category, authorId } = reqBody;

    const newPost = new BlogPost({
      title: title,
      body: body,
      imageUrl: imageUrl,
      category: category,
      authorId: authorId,
    });

    const savedPost = await newPost.save();
    const res = NextResponse.json({
      message: "blog posted succesfully",
      success: true,
      savedPost,
    });
    return res;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
