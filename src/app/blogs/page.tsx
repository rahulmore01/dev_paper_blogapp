"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "@/components/blogCard/page";

import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar/page";

export default function Page() {
  const router = useRouter();
  // make a req to get all the blogs on the first page render
  const [blogsData, setBlogsData] = useState([]);

  const [selectedBlogid, setSelectedBlogid] = useState("");

  const handleClick = async () => {
    try {
      const response = await axios.get("/api/blogs/getallblogs");
      setBlogsData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleCardClick = (blogId: any) => {
    setSelectedBlogid(blogId);
    router.push(`/blogs/${blogId}`);
  };

  return (
    <>
      <Navbar />
      <div className="flex gap-8 flex-col h-screen w-full items-center justify-center">
        <h1>blogs page</h1>
        <hr />
        <ul className="flex flex-col gap-8">
          {blogsData &&
            blogsData.map((post: any) => (
              <div key={post._id} onClick={() => handleCardClick(post._id)}>
                <BlogCard
                  title={post.title}
                  body={post.body}
                  imageUrl={post.imageUrl}
                  category={post.category}
                  authorId={post.authorId}
                />
                {/* {console.log("post", post)} */}
              </div>
            ))}
        </ul>
        <button onClick={handleClick} className="bg-red">
          get blogs
        </button>
      </div>
    </>
  );
}
