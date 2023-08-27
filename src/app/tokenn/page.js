"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserPage() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get("/api/users/currentuserdata");
        setUserData(response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>User Data</h1>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
}

// "use client";

// import React, { useEffect } from "react";
// import Cookie from "js-cookie";
// import jwt from "jsonwebtoken";

// export default function TokenPage() {
//   useEffect(() => {
//     // Get the token value from cookies
//     const token = Cookie.get("token"); // Replace with your actual token cookie name
//     console.log("token==> " + token);

//     // You can verify the token here if needed
//     try {
//       const secret = "rahul321"; // Make sure you have TOKEN_SECRET set
//       const payload = jwt.verify(token, secret);
//       console.log("Token payload:", payload);
//     } catch (error) {
//       console.error("Token verification failed:", error.message);
//     }
//   }, []);

//   return <div>TokenPage</div>;
// }
