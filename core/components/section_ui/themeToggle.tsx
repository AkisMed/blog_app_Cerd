"use client";

import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/core/contexts/ThemeContext";
import { cn } from "@/core/lib/utils";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  console.log("je suis la Theme Toggle : ",theme);
  
  return (
    <div
      className="
        w-12 h-5 relative rounded-full cursor-pointer flex items-center justify-between  border-black border "
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
      onClick={() => toggle()}
    >
      <Image
        src="/moon.png"
        alt=""
        width={14}
        height={14}
        className="ml-1 mt-2 mb-2 "
      />
      <div
        className="w-4 h-4 rounded-full absolute right-0 "
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      />
      <Image
        src="/sun.png"
        alt=""
        width={14}
        height={14}
        className="mr-1 mt-2 mb-2 "
      />
    </div>
  );
};

export default ThemeToggle;
