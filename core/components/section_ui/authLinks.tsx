"use client";
import Link from "next/link";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

import React from "react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className="cursor-pointer hidden sm:block">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className="cursor-pointer hidden sm:block">
            Write
          </Link>
          <span
            className="cursor-pointer hidden sm:block"
            onClick={() => signOut()}
          >
            Logout
          </span>
        </>
      )}

      <div
        className="sm:hidden  space-y-2 cursor-pointer"
        onClick={() => setOpen(() => !open)}
      >
        <div className="w-8 h-1 bg-black"></div>
        <div className="w-8 h-1 bg-black"></div>
        <div className="w-8 h-1 bg-black"></div>
      </div>
      {open && (
        <div className="absolute top-30 left-0 bg-white h-calHeigth w-full flex flex-col items-center justify-center gap-[50px] text-3xl z-999 ">
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {
            //@ts-ignore
            status === "notauthenticated" ? (
              <Link href="/login">Login</Link>
            ) : (
              <>
                <Link href="/write">Write</Link>
                <span className="cursor-pointer hidden sm:block">Logout</span>
              </>
            )
          }
        </div>
      )}
    </>
  );
};

export default AuthLinks;
