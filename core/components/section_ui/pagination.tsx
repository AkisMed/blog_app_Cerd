"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Pagination = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between">
      <button
        className="w-28 border-none p-2 rounded-sm text-sm bg-red-600 text-white cursor-pointer disabled:bg-red-900 disabled:cursor-not-allowed"
        // disabled={!hasPrev}
        onClick={() => router.push(`?page=${1}`)}
      >
        Previous
      </button>
      <button
        className="w-28 border-none p-2 rounded-sm text-sm bg-red-600 text-white cursor-pointer disabled:bg-red-900 disabled:cursor-not-allowed"
        // disabled={!hasNext}
        onClick={() => router.push(`?page=${1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
