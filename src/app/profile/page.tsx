"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

export default function ProfilePage() {
  const [user, setUser] = useState("");
  console.log("user", user);

  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("User logged out successfully");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const getCurrentUserDetails = async () => {
    try {
      const user = await axios.get("/api/users/currentuserdata");
      setUser(user.data.data._id);
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="flex flex-col h-screen w-full items-center justify-center">
        <h1>profile page</h1>
        <button className="py-4 px-12 mt-16 bg-blue-500" onClick={logout}>
          Logout
        </button>
        <button
          className="py-3 px-11 mt-40 bg-green-500"
          onClick={getCurrentUserDetails}
        >
          getUserDetails
        </button>
        <h3 className="bg-red-300">
          {/* from here we are redirected into profile/id page */}
          <Link href={`/profile/${user}`}>{user}</Link>
        </h3>
      </div>
    </>
  );
}
