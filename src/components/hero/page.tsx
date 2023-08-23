"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "@/components/blogCard/page";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar/page";

export default function Hero() {
  const router = useRouter();
  const [blogsData, setBlogsData] = useState([]);
  console.log("blogsData=>", blogsData);

  const fetchBlogsData = async () => {
    try {
      const response = await axios.get("/api/blogs/getallblogs");
      setBlogsData(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleCardClick = (blogId: string) => {
    router.push(`/blogs/${blogId}`);
  };

  useEffect(() => {
    fetchBlogsData();
  }, []);

  function trimToWords(text: any, numWords: any) {
    const words = text.split(" ");
    if (words.length > numWords) {
      return words.slice(0, numWords).join(" ") + " ...";
    }
    return text;
  }
  return (
    <>
      {/* <Navbar /> */}
      <div className="container mx-auto mt-8 px-4">
        <h1 className="text-3xl font-semibold mb-4">Blogs Page</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogsData.length === 0 ? (
            <p>Loading blogs...</p>
          ) : (
            blogsData.map((post: any) => (
              <div
                key={post._id}
                onClick={() => handleCardClick(post._id)}
                className="cursor-pointer"
              >
                <BlogCard
                  title={post.title}
                  body={trimToWords(post.body, 20)}
                  imageUrl={post.imageUrl}
                  category={post.category}
                  authorId={post.authorId}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
