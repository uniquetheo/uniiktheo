"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

const MyLogo = () => {
  const [logo, setLogo] = useState("/images/uniik-plain.png");
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      setLogo("/images/uniik.dark-plain.png");
    } else {
      setLogo("/images/uniik-plain.png");
    }
  }, [theme]);

  return (
    <>
      <Image
        src={logo}
        alt="uniiktheo logo"
        width={106}
        height={500}
        className="object-contain max-h-16"
      />
    </>
  );
};

export default MyLogo;
