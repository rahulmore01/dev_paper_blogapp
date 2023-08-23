import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogNav = () => {
  return (
    <>
      <div className="absolute flex bg-gray-300 h-10 w-full pl-20 pr-20 justify-between items-center monu_ex_reg">
        <Image
          className="h-40 w-40"
          src="/assets/blogLogo.svg"
          alt="me"
          width="64"
          height="64"
        />

        <ul className="flex gap-12 ">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Works</li>
          <li className="cursor-pointer">Resourses</li>
          <Link className="cursor-pointer" href="/blogs">
            Blogs
          </Link>
        </ul>
        <Link className="cursor-pointer" href="/login">
          <button>Login</button>
        </Link>
      </div>
    </>
  );
};

export default BlogNav;
