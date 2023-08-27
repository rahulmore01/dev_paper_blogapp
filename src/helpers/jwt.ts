import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

// no POST or GET fun? = because its a controller function for "currentUser" data route
export function getDataFromToken(request: NextRequest) {
  try {
    // get token from cookies
    const token = request.cookies.get("token")?.value || " ";
    console.log("token in getDataFromToken=>" + token);

    // token is encrypted , decode it and get data from it
    const decodeToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    console.log("decodeToken=>" + decodeToken);

    // return only id from cookie token
    return decodeToken.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

// signing jwt / creating a jwt token using secret key and payload(user data)
// payload can Change, it can be user instead of NextRequest
export function signJwtToken(payload: NextRequest, options = {}) {
  const secret = process.env.TOKEN_SECRET!;
  const token = jwt.sign(payload, secret, options);
  return token;
}

// verifying jwt
export function verifyJwtToken(token: any) {
  try {
    const secret = process.env.TOKEN_SECRET!;
    const payload = jwt.verify(token, secret);
    // console.log("payload", payload);
    return payload;
  } catch (error) {
    console.error(error);
    return null;
  }
}
// export function verifyJwtToken(token) {
//   try {
//     const token = request.cookies.get("token")?.value || " ";

//     const secret = process.env.TOKEN_SECRET!;
//     const payload = jwt.verify(token, secret);
//     return payload;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }
