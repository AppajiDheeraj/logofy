"use client";

import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  const { user } = useUser();
  return (
    <>
      <div className="z-10 px-10 py-4 flex items-center justify-between shadow-sm bg-white">
        <Link href="/" className="flex flex-row items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={55} height={55} />
          <h2 className="text-2xl">Logofy.ai</h2>
        </Link>
        <div className="flex flex-row items-center gap-4">
          {user ? (
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          ) : (
            <Button>Get Started</Button>
          )}
          <UserButton />
        </div>
      </div>
    </>
  );
}

export default Header;
