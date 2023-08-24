import { NextResponse, NextRequest } from "next/server";
import BlogPost from "@/models/postModel.js";
import { connect } from "@/dbConfig/dbConfig";
import { verifyJwtToken } from "@/helpers/jwt";

export async function PUT(request: NextRequest, { params }: any) {
  await connect();
  const id: any = params.id; // Clean and trim the id value
  console.log("id=>" + id);

  const authorizationHeader: any = request.headers.get("authorization");
  const token: any = authorizationHeader.split(" ")[0]; // Use index 1 to get the token

  const decodedToken: any = verifyJwtToken(token);
  console.log("decodedToken", decodedToken);

  const userId: any = decodedToken?.id;
  console.log("userId", userId);

  if (!userId) {
    return NextResponse.json({
      message: "Unauthorized, expired, or invalid token",
      status: 403,
    });
  }

  try {
    const blog = await BlogPost.findOne({ _id: id });
    // console.log("blog=>", blog);

    if (blog.likes.includes(userId)) {
      blog.likes = blog.likes.filter(
        (id: any) => id.toString() !== userId.toString()
      );
    } else {
      blog.likes.push(userId);
    }
    console.log("likes", blog.likes);

    await blog.save(); // Save the updated blog
    return NextResponse.json({
      message: "Unauthorized, expired, or invalid token",
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request: NextRequest, { params }: any) {
  await connect();
  const id: any = params.id; // Clean and trim the id value
  //   console.log("id=>" + id);
  try {
    const blog = await BlogPost.findOne({ _id: id });

    const likeLenght = blog.likes.length;
    //   console.log("likes=>", blog.likes.length);

    return NextResponse.json({
      message: "fetched likes successfully",
      likeLenght,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
