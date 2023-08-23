"use client";
import Hero from "@/components/hero/page";
import Navbar from "@/components/navbar/page";
import Image from "next/image";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <NextUIProvider>
        <Navbar />
        <Hero />
      </NextUIProvider>
    </>
  );
}
