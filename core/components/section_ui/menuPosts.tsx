import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuPosts = ({ withImage }: { withImage: boolean }) => {
  return (
    <div className="mt-9 mb-16 flex flex-col gap-9">
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1  aspect-square relative">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="object-cover rounded-full  border-solid border-gray-200 border-[3px]"
            />
          </div>
        )}
        <div className="flex flex-4 flex-col gap-1">
          <span
            className={`py-1 px-2 rounded-md text-sm text-white w-max bg-[#ff7857]`}
          >
            Travel
          </span>
          <h3 className="text-xl font-medium text-[#626262]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-sm">
            <span className="">John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1  aspect-square relative">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="object-cover rounded-full  border-solid border-gray-200 border-[3px]"
            />
          </div>
        )}
        <div className="flex flex-5 flex-col gap-1">
          <span
            className={`py-1 px-2 rounded-md text-sm text-white w-max bg-[#ffb14f]`}
          >
            Culture
          </span>
          <h3 className="text-xl font-medium text-[#626262]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-sm">
            <span className="">John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1  aspect-square relative">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="object-cover rounded-full  border-solid border-gray-200 border-[3px]"
            />
          </div>
        )}
        <div className="flex flex-5 flex-col gap-1">
          <span
            className={`py-1 px-2 rounded-md text-sm text-white w-max bg-[#7fb881] `}
          >
            Food
          </span>
          <h3 className="text-xl font-medium text-[#626262]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-sm">
            <span className="">John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-1  aspect-square relative">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="object-cover rounded-full  border-solid border-gray-200 border-[3px]"
            />
          </div>
        )}
        <div className="flex flex-5 flex-col gap-1">
          <span
            className={`py-1 px-2 rounded-md text-sm text-white w-max  bg-[#ff7887]`}
          >
            Fashion
          </span>
          <h3 className="text-xl font-medium text-[#626262]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-sm">
            <span className="">John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
