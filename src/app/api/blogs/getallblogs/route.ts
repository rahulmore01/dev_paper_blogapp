import { NextResponse, NextRequest } from "next/server";
import BlogPost from "@/models/postModel.js";
import { connect } from "@/dbConfig/dbConfig";
connect();
// this api is hit when user is not logged in no id is there
export async function GET(request: NextRequest) {
  try {
    const blogPosts = await BlogPost.find();
    return NextResponse.json(blogPosts);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
