"use client";
import { AiOutlineLike } from "react-icons/ai";
export default function singleBlogPage({ params }: any) {
  const hanldeLike = () => {
    console.log("hanldeLike cliked");
  };
  console.log("params.id = " + params.blogid);
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      {params.blogid}
      <AiOutlineLike onClick={hanldeLike} className="w-64 h-64 " />
    </div>
  );
}
