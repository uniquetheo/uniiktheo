"use client";

import { tools } from "@/lib/data";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const MyTools = () => {
  const { theme } = useTheme();
  const [githubLogo, setGithubLogo] = useState("/images/github.svg");
  const [vercelLogo, setVercelLogo] = useState("/images/vercel.svg");

  useEffect(() => {
    if (theme === "dark") {
      setGithubLogo("/images/github.dark.svg");
      setVercelLogo("/images/vercel.dark.svg");
    } else {
      setGithubLogo("/images/github.svg");
      setVercelLogo("/images/vercel.svg");
    }
  }, [theme]);

  return (
    <>
      {tools.map((tool, index) => (
        <div
          key={index}
          className="w-[60px] h-[60px] border relative rounded shadow p-4 hover:scale-105"
        >
          <Image
            src={
              tool.name === "github"
                ? githubLogo
                : tool.name === "vercel"
                ? vercelLogo
                : tool.imgSrc
            }
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
