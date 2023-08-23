import { NextResponse, NextRequest } from "next/server";
import BlogPost from "@/models/postModel.js";
import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken, verifyJwtToken } from "@/helpers/jwt";
import mongoose from "mongoose";

connect();

// getting all BlogPost, of current user,
export async function GET(request: NextRequest, { params }: any) {
  const id = params.id;
  // console.log("id=>", id);

  try {
    const blog = await BlogPost.find({ _id: id });
    if (blog.length === 0) {
      return NextResponse.json({ message: "blog not found" }, { status: 404 });
    }
    console.log("blog", blog);

    return NextResponse.json({ message: "working", success: true, blog });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// updating current users BlogPost with object id of blog, also header as request
export async function PUT(request: NextRequest, { params }: any) {
  await connect();
  const id: any = params.id.trim(); // Clean and trim the id value
  console.log("id=>" + id);

  const authorizationHeader: any = request.headers.get("authorization");
  const token: any = authorizationHeader.split(" ")[0];

  const decodedToken = verifyJwtToken(token);
  // console.log("decodedToken", decodedToken);

  if (!authorizationHeader || !decodedToken) {
    return NextResponse.json({
      message: "Unauthorized, expired, or invalid token",
      status: 403,
    });
  }
  // if token is verified and user is authorized
  try {
    const reqBody = await request.json();
    console.log("reqBody", reqBody);

    // Find the blog by its _id
    const blog = await BlogPost.findOne({ _id: id });
    // console.log("decodedToken.id:", decodedToken.id);
    // console.log("author:", author);

    if (!blog) {
      return NextResponse.json({ message: "Blog not found", status: 404 });
    }

    // Check if the author of the blog matches the authorized user
    // if (blog.authorId.id.toString() !== decodedToken.id.toString()) {
    //   return NextResponse.json({
    //     message: "Only author can update the blog",
    //     status: 403,
    //   });
    // }

    // Update the blog and return the updated document
    const updatedBlog = await BlogPost.findByIdAndUpdate(
      id,
      { $set: { ...reqBody } },
      { new: true }
    ).populate("authorId");

    return NextResponse.json({
      message: "Blog updated successfully",
      status: 200,
      updatedBlog,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: any) {
  await connect();
  const id: any = params.id;

  const authorizationHeader: any = request.headers.get("authorization");
  const token: any = authorizationHeader.split(" ")[0];

  const decodedToken = verifyJwtToken(token);

  if (!authorizationHeader || !decodedToken) {
    return NextResponse.json({
      message: "Unauthorized, expired, or invalid token",
      status: 403,
    });
  }

  try {
    // Find the blog to delete
    const blog = await BlogPost.findOne({ _id: id });

    if (!blog) {
      return NextResponse.json({ message: "Blog not found", status: 404 });
    }

    // Perform the actual deletion
    await BlogPost.findByIdAndRemove(id);

    return NextResponse.json({
      message: "Blog deleted successfully",
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
