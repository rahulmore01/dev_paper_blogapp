import Image from "next/image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { PiChatCircleText } from "react-icons/pi";

interface BlogCardProps {
  title: string;
  body: string;
  imageUrl: string;
  category: string;
  authorId: string;
}

export default function BlogCard({
  title,
  body,
  imageUrl,
  category,
  authorId,
}: BlogCardProps) {
  return (
    <div className="flex  flex-col justify-center items-start w-[750px] h-auto p-6 border-2 rounded-xl ">
      <p className="text-xs capitalize font-bold text-cTitle opacity-70">
        Artical by : {authorId}
      </p>

      <div className="flex justify-center items-center">
        <div>
          <h4 className="urbanist capitalize font-bold text-2xl mt-2 mb-1 text-cTitle">
            {title}
          </h4>

          <p className="source pt-1 text-lg leading-6 text-cBody">{body}</p>
          {/* <p className="text-xs uppercase font-semibold text-gray-600">
       {authorId}
    </p> */}
        </div>
        <div className="!w-[400px] ">
          <Image
            alt="Blog post image"
            className="object-fit rounded-lg"
            src={imageUrl}
            layout="responsive"
            width={400}
            height={225}
          />
        </div>

        {/* <div className="w-[400px] h-auto">
          <Image
            alt="Blog post image"
            className="object-cover  rounded-lg "
            src={imageUrl}
            layout="responsive"
            width={400}
            height={140}
          />
        </div> */}
      </div>
      <div className=" urbanist w-full text-cBody flex   justify-between items-start mt-4 px-2">
        <div className="flex gap-4">
          <span className="flex gap-1 justify-center items-center text-sm">
            {" "}
            <AiOutlineHeart className="w-6 h-6 " />
            150
          </span>
          <span className="flex gap-1 justify-center items-center text-sm">
            {" "}
            <PiChatCircleText className="w-6 h-6 " />4
          </span>
        </div>
        <p className="urbanist text-xs text-bgBlue bg-cTag px-4 py-2 rounded-full">
          {category}
        </p>
      </div>
    </div>
  );
}
// import Image from "next/image";
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
// import { PiChatCircleText } from "react-icons/pi";

// interface BlogCardProps {
//   title: string;
//   body: string;
//   imageUrl: string;
//   category: string;
//   authorId: string;
// }

// export default function BlogCard({
//   title,
//   body,
//   imageUrl,
//   category,
//   authorId,
// }: BlogCardProps) {
//   return (
//     <div className="flex justify-center items-center gap-6 w-[750px] h-auto p-6 border-2 rounded-xl ">
//       <div className="capitalize">
//         <div className="flex">
//           <div>
//             <h4 className="urbanist font-bold text-2xl mt-2 mb-1 text-gray-900">
//               {title}
//             </h4>
//             <p className="source text-lg text-gray-700">{body}</p>
//             {/* <p className="text-xs uppercase font-semibold text-gray-600">
//           {authorId}
//         </p> */}
//           </div>
//           <Image
//             alt="Blog post image"
//             className="object-cover w-[200px] h-full rounded-lg "
//             src={imageUrl}
//             layout="responsive"
//             width={200}
//             height={240}
//           />
//         </div>
//         <div className="flex justify-between mt-7">
//           <div className="flex gap-3">
//             <AiOutlineHeart className="w-6 h-6 text-cBody" />
//             <PiChatCircleText className="w-6 h-6 text-cBody" />
//           </div>
//           <p className="text-sm text-gray-600">{category}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
