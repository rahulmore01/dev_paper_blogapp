"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import Header from "@/components/header/page";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

export default function CreateBlogPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");

  const token = useSelector((state: any) => state.user.token);

  const handlePublish = async () => {
    try {
      const decodedToken: any = jwtDecode(token);
      const authorId = decodedToken._id;
      console.log("authorId: " + authorId);

      const postData = {
        title: title,
        body: body,
        imageUrl: imageUrl,
        category: category,
        authorId: authorId, // If you have the authorId, include it here
      };

      await axios.post("/api/blogs/createblog", postData);

      toast.success("Blog created successfully");
    } catch (error) {
      toast.error("An error occurred while creating the blog");
    }
  };

  const handleUrlChange = (e: any) => {
    setImageUrl(e.target.value);
  };

  const handleCategoryChange = (e: any) => {
    setCategory(e.target.value);
  };

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e: any) => {
    setBody(e.target.value);
  };

  return (
    <div className="flex flex-col items-center h-screen w-full bg-slate-50">
      <Header onPublish={handlePublish} />
      <div className="flex flex-col gap-8 items-start justify-center mt-28">
        <div className="cursor-auto flex">
          <AiOutlineLink className="h-12 w-12 p-[10px]" />
          <input
            type="text"
            placeholder="Enter image URL"
            className="ml-4 px-2 py-1 border rounded focus:outline-none"
            value={imageUrl}
            onChange={handleUrlChange}
          />
          <select
            className="ml-4 px-2 py-1 border rounded focus:outline-none"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">Select Category</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            {/* Add more category options as needed */}
          </select>
        </div>
        <input
          type="text"
          placeholder="Article Title .."
          className="h-20 min-w-[1080px] urbanist font-bold text-[42px] p-6 border:none rounded focus:outline-none"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Article Content goes here ..."
          className="min-h-[400px] min-w-[1080px] urbanist font-extralight text-[24px] p-6 border:none rounded focus:outline-none"
          value={body}
          onChange={handleBodyChange}
        />
      </div>
    </div>
  );
}
// "use client";
// import React, { useEffect, useState } from "react";
// import { AiOutlineLink } from "react-icons/ai";
// import Header from "@/components/header/page";
// import axios from "axios";
// import { toast } from "react-hot-toast";

// export default function CreateBlogPost() {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [category, setCategory] = useState("");

//   const handlePublish = async () => {
//     try {

//       const postData = {
//         title: title,
//         body: body,
//         imageUrl: imageUrl,
//         category: category,
//         authorId: authorId, // If you have the authorId, include it here
//       };

//       await axios.post("/api/blogs/createblog", postData);

//       toast.success("Blog created successfully");
//     } catch (error) {
//       toast.error("An error occurred while creating the blog");
//     }
//   };

//   const handleUrlChange = (e: any) => {
//     setImageUrl(e.target.value);
//   };

//   const handleCategoryChange = (e: any) => {
//     setCategory(e.target.value);
//   };

//   const handleTitleChange = (e: any) => {
//     setTitle(e.target.value);
//   };

//   const handleBodyChange = (e: any) => {
//     setBody(e.target.value);
//   };

//   return (
//     <div className="flex flex-col items-center h-screen w-full bg-slate-50">
//       <Header onPublish={handlePublish} />
//       <div className="flex flex-col gap-8 items-start justify-center mt-28">
//         <div className="cursor-auto flex">
//           <AiOutlineLink className="h-12 w-12 p-[10px]" />
//           <input
//             type="text"
//             placeholder="Enter image URL"
//             className="ml-4 px-2 py-1 border rounded focus:outline-none"
//             value={imageUrl}
//             onChange={handleUrlChange}
//           />
//           <select
//             className="ml-4 px-2 py-1 border rounded focus:outline-none"
//             value={category}
//             onChange={handleCategoryChange}
//           >
//             <option value="">Select Category</option>
//             <option value="Frontend">Frontend</option>
//             <option value="Backend">Backend</option>
//             {/* Add more category options as needed */}
//           </select>
//         </div>
//         <input
//           type="text"
//           placeholder="Article Title .."
//           className="h-20 min-w-[1080px] urbanist font-bold text-[42px] p-6 border:none rounded focus:outline-none"
//           value={title}
//           onChange={handleTitleChange}
//         />
//         <textarea
//           placeholder="Article Content goes here ..."
//           className="min-h-[400px] min-w-[1080px] urbanist font-extralight text-[24px] p-6 border:none rounded focus:outline-none"
//           value={body}
//           onChange={handleBodyChange}
//         />
//       </div>
//     </div>
//   );
// }
