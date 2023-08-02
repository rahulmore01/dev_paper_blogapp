import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="fixed flex h-70 bg-blue-600 w-full pl-80 pr-80 justify-between items-center monu_ex_reg">
        <Image
          className="h-40 w-40"
          src="/assets/Logo.png"
          alt="me"
          width="64"
          height="64"
        />

        <ul className="flex gap-12 ">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Works</li>
          <li className="cursor-pointer">Resourses</li>
          <Link className="cursor-pointer" href="/blog">
            Blog
          </Link>
          {/* <li className="cursor-pointer">Blogs</li> */}
        </ul>
        <Link className="cursor-pointer" href="/login">
          <button>Login</button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
