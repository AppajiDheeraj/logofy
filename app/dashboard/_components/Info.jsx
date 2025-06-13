"use client";

import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import React, { useContext } from "react";
import Link from "next/link";

function Info() {
  const { userDetail } = useContext(UserDetailContext);

  return (
    <div className="flex flex-col px-4 pb-6 gap-6">
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-primary">
            Hello, {userDetail?.userName} <span className="inline-block">👋</span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Welcome back to your logo dashboard
          </p>
        </div>

        {/* Credit Display */}
        <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-xl shadow-sm">
          <Image src="/coin.png" alt="coin" width={32} height={32} />
          <span className="text-xl font-semibold">{userDetail?.credits} Credits Left</span>
        </div>
      </div>

      {/* Dashboard Controls */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-medium">Your Logos</h2>
        <Link href="/create">
          <Button className="flex items-center gap-2">
            <PlusIcon className="w-5 h-5" />
            Add New Logo
          </Button>
        </Link>
      </div>
      <hr className="border-t border-gray-600" />
    </div>
  );
}

export default Info;
