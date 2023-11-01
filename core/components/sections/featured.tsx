import React from "react";
import Image from "next/image";

const Featured = () => {
  return (
    <div className="mt-[30px]">
      <h1 className=" font-light text-[36px]  md:text[48px] lg:text-[64px] xl:text[72px] ">
        <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className="mt-[60px] flex items-center gap-12">
        <div className="flex-1 h-[500px] relative hidden lg:block">
          <Image src="/p1.jpeg" alt="" fill className="object-cover" />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-4xl font-medium">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className="text-base font-light text-[#a6a6a6]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className="p-3 px-6 border-none rounded-md w-max bg-black text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
