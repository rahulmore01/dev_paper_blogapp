"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: " ",
    password: " ",
  });
  console.log("user", user);

  const onLogin = () => {
    console.log("user: " + user);
  };
  return (
    <form
      //   action="submit"
      className="flex gap-8 flex-col h-screen w-full items-center justify-center"
    >
      <div className="font-bold text-lg">Login</div>
      <hr />
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          className=" h-12 w-96 rounded-md bg-gray-300 p-4"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Password">Password</label>
        <input
          id="Password"
          name="Password"
          type="text"
          className=" h-12 w-96 rounded-md bg-gray-300 p-4"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
      </div>
      <button className="w-40 h-12 rounded-md  bg-blue-400" onClick={onLogin}>
        Login
      </button>
      <Link href="/login" className="text-blue-700">
        Visit SignUp page
      </Link>
    </form>
  );
}
