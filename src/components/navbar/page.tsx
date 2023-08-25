import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../searchBar/page";
import { TbPencilMinus } from "react-icons/tb";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const isLogin = true;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY <= prevScrollY || currentScrollY < 20);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <div
      className={`bg-white border-b-[1px] fixed top-0 w-full  transition-transform ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } duration-300 ease-in-out`}
    >
      <div className="flex h-20 pl-20 pr-20 justify-between items-center monu_ex_reg">
        <div className="">
          <Image
            alt="no img"
            src="/assets/devpaper.png"
            width={140}
            height={100}
          ></Image>
        </div>
        <div className="flex  items-center justify-center gap-8">
          <SearchBar />

          <Link href="/blogs/createblog">
            <button className="flex gap-2 bg-bgBlue px-5 py-2 rounded-full text-white">
              <TbPencilMinus className="w-5 h-5" /> Write
            </button>
          </Link>

          {isLogin === true ? (
            <div className=" bg-transparent p-[2px] rounded-full border-2 border-bgBlue  ">
              <div className=" bg-bgBlue px-4 py-2 rounded-full text-white ">
                R
              </div>
            </div>
          ) : (
            <Link href="/login">
              <button> Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
