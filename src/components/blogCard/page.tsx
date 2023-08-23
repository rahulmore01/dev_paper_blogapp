"use client";

import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function BlogCard({ title, body, imageUrl, category, author }) {
  return (
    <Card className="py-4 bg-slate-200 px-4 rounded-xl">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{author}</p>
        <small className="text-default-500">{body}</small>
        <h4 className="font-bold text-large">{title}</h4>
        <h4 className="font-bold text-large">{category}</h4>
        <h4 className="font-bold text-large">{imageUrl}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/assets/blog.png"
          width={270}
        />
      </CardBody>
    </Card>
  );
}
