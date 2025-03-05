import { socials } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import MyLogo from "./ui/myLogo";

const Footer = () => {
  return (
    <footer className="z-20">
      <div className="container mx-auto px-4 py-6 border-t text-muted-foreground">
        <div className="flex justify-between items-center gap-4 flex-wrap ">
          <div className="flex sm:h-8 justify-center items-center gap-4 flex-wrap w-full sm:w-auto">
            <Link
              href="https://uniiktheo.tech"
              className="hover:cursor-pointer"
              target="_blank"
            >
              <MyLogo />
            </Link>
            <p>All rights reserved &copy; {new Date().getFullYear()}</p>
          </div>
          <div className="flex gap-3 justify-center items-center w-full sm:w-auto">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                className="hover:cursor-pointer"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
