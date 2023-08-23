import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY <= prevScrollY || currentScrollY < 20); // Show if scrolling up or near the top
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <div
      className={`fixed top-0 w-full bg-blue-600 transition-transform ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } duration-300 ease-in-out`}
    >
      <div className="flex h-20 pl-20 pr-20 justify-between items-center monu_ex_reg">
        <Image
          className="h-10 w-10"
          src="/assets/Logo.png"
          alt="me"
          width="64"
          height="64"
        />

        <ul className="flex gap-12 ">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Works</li>
          <li className="cursor-pointer">Resourses</li>
          <li className="cursor-pointer">
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>
        <Link href="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
