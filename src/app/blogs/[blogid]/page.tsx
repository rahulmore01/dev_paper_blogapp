"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import axios from "axios";
import BlogPreview from "@/components/blogPreview/page";
import Navbar from "@/components/navbar/page";

interface Blog {
  _id: string;
  title: string;
  content: string;
}

interface SingleBlogPageProps {
  params: {
    blogid: string;
  };
}

const SingleBlogPage: React.FC<SingleBlogPageProps> = ({ params }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  console.log("blog", blog);

  const handleLike = () => {
    console.log("Like button clicked");
  };

  useEffect(() => {
    const fetchBlogById = async () => {
      try {
        const response = await axios.get(`/api/blogs/${params.blogid}`);
        setBlog(response.data.blog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlogById();
  }, [params.blogid]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full h-screen justify-center items-center">
        {blog ? (
          blog.map((post: any) => (
            <div
              key={post._id}
              // onClick={() => handleCardClick(post._id)}
              className="cursor-pointer"
            >
              <BlogPreview
                title={post.title}
                body={post.body}
                imageUrl={post.imageUrl}
                category={post.category}
                author={post.author}
              />
            </div>
          ))
        ) : (
          <p>Loading blog...</p>
        )}
      </div>
    </>
  );
};

export default SingleBlogPage;
