import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const tokenCookie = request.cookies.get("token");

    if (!tokenCookie) {
      throw new Error("Token cookie not found.");
    }

    const token = tokenCookie.value;
    console.log("token=>" + token);

    // const decodeToken: any = jwt.verify(token, "rahul321");
    // console.log("decodeToken=>" + decodeToken);

    // if (!decodeToken.id) {
    //   throw new Error("Invalid token format.");
    // }

    // return decodeToken.id;
    return token;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
}
// import { connect } from "@/dbConfig/dbConfig";
// import { NextRequest, NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// connect();

// export async function POST(request: NextRequest, response: NextResponse) {
//   try {
//     const reqBody = await request.json(); // Use request.body to get the token
//     const { token } = reqBody; // Use request.body to get the token

//     const secret = process.env.TOKEN_SECRET;

//     if (!secret) {
//       return NextResponse.json(
//         { error: "Token secret not configured." },
//         { status: 500 }
//       );
//     }

//     const payload = jwt.verify(token, secret);

//     const response = NextResponse.json({
//       message: "Token verified",
//       success: true,
//       payload: payload,
//     });

//     return response;
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 401 });
//   }
// }
