import Image from "next/image";
import React from "react";
import Link from "next/link";

const CategoryList = () => {
 

  return (
    <>
      <h1 className="my-12 px-0">Popular Categories</h1>
      <div className="flex flex-wrap justify-between gap-5">
        <Link
          href={`/blog`}
          className="bg-[#57c4ff31] flex items-center justify-center w-full md:w-[45%] lg:w-[15%] h-20 gap-3 rounded-lg "
          //   key={item._id}
        >
          <div className="w-8 h-8 relative">
            <Image
              src="/style.png"
              alt="Description de l'image"
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
          style
        </Link>

        <Link
          href={`/blog`}
          className="bg-[#da85c731] flex items-center justify-center w-full md:w-[45%] lg:w-[15%] h-20 gap-3 rounded-lg "
          //   key={item._id}
        >
          <div className="w-8 h-8 relative">
            <Image
              src="/fashion.png"
              alt="Description de l'image"
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
          fashion
        </Link>
        <Link
          href={`/blog`}
          className="bg-[#7fb88133] flex items-center justify-center w-full md:w-[45%] lg:w-[15%] h-20 gap-3 rounded-lg "
          //   key={item._id}
        >
          <div className="w-8 h-8 relative">
            <Image
              src="/food.png"
              alt="Description de l'image"
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
          food
        </Link>
        <Link
          href={`/blog`}
          className="bg-[#ff795736] flex items-center justify-center w-full md:w-[45%] lg:w-[15%] h-20 gap-3 rounded-lg "
          //   key={item._id}
        >
          <div className="w-8 h-8 relative">
            <Image
              src="/travel.png"
              alt="Description de l'image"
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
          travel
        </Link>
        <Link
          href={`/blog`}
          className="bg-[#ffb04f45] flex items-center justify-center w-full md:w-[45%] lg:w-[15%] h-20 gap-3 rounded-lg "
          //   key={item._id}
        >
          <div className="w-8 h-8 relative">
            <Image
              src="/culture.png"
              alt="Description de l'image"
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
          culture
        </Link>
        <Link
          href={`/blog`}
          className="bg-[#5e4fff31] flex items-center justify-center w-full md:w-[45%] lg:w-[15%] h-20 gap-3 rounded-lg "
          //   key={item._id}
        >
          <div className="w-8 h-8 relative">
            <Image
              src="/coding.png"
              alt="Description de l'image"
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
          coding
        </Link>
      </div>
    </>
  );
};

export default CategoryList;
