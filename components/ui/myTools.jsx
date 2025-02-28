"use client";

import { tools } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";

const MyTools = () => {
  const { theme } = useTheme();
  return (
    <>
      {tools.map((tool, index) => (
        <div
          key={index}
          className="w-[60px] h-[60px] border relative rounded shadow p-4 hover:scale-105"
        >
          <Image
            // src={
            //   theme === "dark" && tool.name === "github"
            //     ? "github.dark.svg"
            //     : `${tool.imgSrc}`
            // }
            src={tool.imgSrc}
            alt={tool.name}
            fill
            className="p-2"
          />
        </div>
      ))}
    </>
  );
};

export default MyTools;
