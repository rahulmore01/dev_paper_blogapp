import Image from "next/image";

interface BlogCardProps {
  title: string;
  body: string;
  imageUrl: string;
  category: string;
  authorId: string;
}
export default function BlogPreview({
  title,
  body,
  imageUrl,
  category,
  authorId,
}: BlogCardProps) {
  console.log("authorId: " + authorId);

  return (
    <div className="px-[240px] w-full h-screen">
      <div className="pb-4  px-6 pt-20 flex flex-col items-center">
        <div className="overflow-hidden h-[504px] w-[896px]">
          <Image
            alt="Blog post image"
            className="object-contain h-full w-full"
            src={imageUrl}
            layout="responsive"
            width={896}
            height={504}
          />
        </div>
        <h4 className="text-5xl urbanist font-bold mt-12 text-center capitalize">
          {title}
        </h4>
        <span className="text-xl text-right">Article by : {authorId}</span>
        <p className="text-lg mt-12 text-gray-700">{body}</p>
        <p className="text-lg mt-12 text-gray-700">{authorId}</p>
        {/* <p className="text-sm text-gray-600">{category}</p> */}
      </div>
    </div>
  );
}
