"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Comments = ({ postSlug }: { postSlug: string }) => {
  const { status } = useSession();
  const [desc, setDesc] = useState<string>("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    // mutate();
  };

  return (
    <div className="mt-14">
      <h1 className="text-[#626262] mb-8">Comments</h1>

      <div className="flex items-center justify-between gap-8">
        <textarea
          placeholder="write a comment..."
          className="p-5 w-full border-black border-2 rounded-sm"
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          className="py-4 px-5 bg-teal-500 text-white font-bold border-none rounded-sm cursor-pointer"
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>

      <div className="mt-14">
        <div className="mb-14">
          <div className="flex items-center gap-5 mb-5 ">
            <div className="relative h-10 w-10">
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col gap-1 text-[#626262]">
              <span className="font-medium">
                temporibus autem. Veritatis ex, nobis iste{" "}
              </span>
              <span className="text-sm">25/01/2023</span>
            </div>
          </div>
          <p className="text-lg font-light">
            quas provident dignissimos excepturi. Sint dicta soluta repudiandae
            odit sed reiciendis saepe nam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
