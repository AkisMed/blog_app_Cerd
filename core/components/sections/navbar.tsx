import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "@/core/components/section_ui/authLinks";
import ThemeToggle from "../section_ui/themeToggle";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px]">
      <div className="hidden lg:flex gap-3 flex-1 ">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className="flex-1  text-[30px] font-bold text-left">lamablog</div>
      <div className="flex items-center gap-5 flex-1 text-lg md:text-base justify-end md:justify-normal">
        <ThemeToggle />
        <Link href="/" className="hidden md:block">
          Homepage
        </Link>
        <Link href="/" className="hidden md:block">
          Contact
        </Link>
        <Link href="/" className="hidden md:block">
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
