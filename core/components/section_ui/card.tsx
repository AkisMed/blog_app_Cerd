import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <>
      <div className="mb-12 flex items-center gap-12">
        <div className="flex-1 h-80 relative hidden lg:block ">
          <Image src="/p1.jpeg" alt="" fill className="object-cover rounded-sm" />
        </div>

        <div className="flex flex-1 flex-col gap-[30px]">
          <div className="">
            <span className="text-gray-400">
              {/* {item.createdAt.substring(0, 10)} -{" "} */}
              25/05/2022 - {"  "}
            </span>
            <span className="text-red-700 font-medium">catSlug</span>
          </div>
          <Link href={`/posts/a`}>
            <h1 className="font-semibold text-lg">Lorem ipsum dolor sit amet consectetur</h1>
          </Link>
          {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
          {/* <div
          className="text-lg font-light text-[#626262] "
          dangerouslySetInnerHTML={{ __html: "akis des cription" }}
        /> */}
          <h3 className="text-base font-light text-[#626262] ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            possimus porro dicta, voluptas fuga et eos inventore qui totam,
            corporis, quis debitis culpa. Voluptatem non, eligendi quia earum
            vitae consequatur.
          </h3>
          <div>
            <Link
              href={`/posts/akis`}
              className="border-b-red-600 border-b-2 w-max  py-1 px-0"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-12 flex items-center gap-12">
        <div className="flex-1 h-80 relative hidden lg:block ">
          <Image src="/style.png" alt="" fill className="object-cover rounded-sm" />
        </div>

        <div className="flex flex-1 flex-col gap-[30px]">
          <div className="">
            <span className="text-gray-400">
              {/* {item.createdAt.substring(0, 10)} -{" "} */}
              25/05/2022 - {"  "}
            </span>
            <span className="text-red-700 font-medium">catSlug</span>
          </div>
          <Link href={`/posts/a`}>
            <h1 className="font-semibold text-lg">Lorem ipsum dolor sit amet consectetur</h1>
          </Link>
          {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
          {/* <div
          className="text-lg font-light text-[#626262] "
          dangerouslySetInnerHTML={{ __html: "akis des cription" }}
        /> */}
          <h3 className="text-base font-light text-[#626262] ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            possimus porro dicta, voluptas fuga et eos inventore qui totam,
            corporis, quis debitis culpa. Voluptatem non, eligendi quia earum
            vitae consequatur.
          </h3>
          <div>
            <Link
              href={`/posts/akis`}
              className="border-b-red-600 border-b-2 w-max  py-1 px-0"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-12 flex items-center gap-12">
        <div className="flex-1 h-80 relative hidden lg:block ">
          <Image src="/food.png" alt="" fill className="object-cover rounded-sm " />
        </div>

        <div className="flex flex-1 flex-col gap-[30px]">
          <div className="">
            <span className="text-gray-400">
              {/* {item.createdAt.substring(0, 10)} -{" "} */}
              25/05/2022 - {"  "}
            </span>
            <span className="text-red-700 font-medium">catSlug</span>
          </div>
          <Link href={`/posts/a`}>
            <h1 className="font-semibold text-lg">Lorem ipsum dolor sit amet consectetur</h1>
          </Link>
          {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
          {/* <div
          className="text-lg font-light text-[#626262] "
          dangerouslySetInnerHTML={{ __html: "akis des cription" }}
        /> */}
          <h3 className="text-base font-light text-[#626262] ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            possimus porro dicta, voluptas fuga et eos inventore qui totam,
            corporis, quis debitis culpa. Voluptatem non, eligendi quia earum
            vitae consequatur.
          </h3>
          <div>
            <Link
              href={`/posts/akis`}
              className="border-b-red-600 border-b-2 w-max  py-1 px-0"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-12 flex items-center gap-12">
        <div className="flex-1 h-80 relative hidden lg:block ">
          <Image src="/fashion.png" alt="" fill className="object-cover rounded-sm" />
        </div>

        <div className="flex flex-1 flex-col gap-[30px]">
          <div className="">
            <span className="text-gray-400">
              {/* {item.createdAt.substring(0, 10)} -{" "} */}
              25/05/2022 - {"  "}
            </span>
            <span className="text-red-700 font-medium">catSlug</span>
          </div>
          <Link href={`/posts/a`}>
            <h1 className="font-semibold text-lg">Lorem ipsum dolor sit amet consectetur</h1>
          </Link>
          {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
          {/* <div
          className="text-lg font-light text-[#626262] "
          dangerouslySetInnerHTML={{ __html: "akis des cription" }}
        /> */}
          <h3 className="text-base font-light text-[#626262] ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            possimus porro dicta, voluptas fuga et eos inventore qui totam,
            corporis, quis debitis culpa. Voluptatem non, eligendi quia earum
            vitae consequatur.
          </h3>
          <div>
            <Link
              href={`/posts/akis`}
              className="border-b-red-600 border-b-2 w-max  py-1 px-0"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
