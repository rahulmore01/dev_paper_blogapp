import Image from "next/image";

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
    <div className="flex justify-center items-center gap-6 w-[750px] h-auto p-6 border-2 rounded-xl ">
      <div className="capitalize">
        <h4 className="urbanist font-bold text-2xl mt-2 mb-1 text-gray-900">
          {title}
        </h4>
        <p className="source text-lg text-gray-700">{body}</p>
        <p className="text-xs uppercase font-semibold text-gray-600">
          {authorId}
        </p>
        <p className="text-sm text-gray-600">{category}</p>
      </div>
      <div className="w-[400px]">
        <Image
          alt="Blog post image"
          className="object-cover w-full h-full rounded-lg "
          src={imageUrl}
          layout="responsive"
          width={400}
          height={240}
        />
      </div>
    </div>
  );
}
// import Image from "next/image";

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
//     <div className="py-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out">
//       <div className="pb-4 pt-3 px-6 flex flex-col items-start">
//         <div className="overflow-hidden h-44">
//           <Image
//             alt="Blog post image"
//             className="object-cover w-full h-full rounded-b-lg"
//             src={imageUrl}
//             layout="responsive"
//             width={500}
//             height={300}
//           />
//         </div>
//         <h4 className="font-bold text-lg mt-2 mb-1 text-gray-900">{title}</h4>
//         <p className="text-sm text-gray-700">{body}</p>
//         <p className="text-xs uppercase font-semibold text-gray-600">
//           {authorId}
//         </p>
//         <p className="text-sm text-gray-600">{category}</p>
//       </div>
//     </div>
//   );
// }
