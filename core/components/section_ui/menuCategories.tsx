import Link from "next/link";
import React from "react";

const MenuCategories = () => {
  return (
    <div className="mt-9 mb-16 flex flex-wrap gap-5">
      <Link
        href="/blog?cat=style"
        className={`py-3 px-6 rounded-sm text-sm bg-[#57c4ff31]  `}
      >
        Style
      </Link>
      <Link
        href="/blog"
        className={`py-3 px-6 rounded-sm text-sm bg-[#da85c731]  `}
      >
        Fashion
      </Link>
      <Link
        href="/blog"
        className={`py-3 px-6 rounded-sm text-sm bg-[#7fb88133]  `}
      >
        Food
      </Link>
      <Link
        href="/blog"
        className={`py-3 px-6 rounded-sm text-sm bg-[#ff795736]`}
      >
        Travel
      </Link>
      <Link
        href="/blog"
        className={`py-3 px-6 rounded-sm text-sm bg-[#ffb04f45] `}
      >
        Culture
      </Link>
      <Link
        href="/blog"
        className={`py-3 px-6 rounded-sm text-sm bg-[#5e4fff31]`}
      >
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
