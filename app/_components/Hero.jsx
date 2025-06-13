"use client";

import React, { useState } from "react";
import Lookup from "../_data/Lookup";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  const [logoTitle, setLogoTitle] = useState();
  return (
    <div className="bg-dots flex justify-center px-4 pt-42 pb-10"   style={{ height: "calc(100vh - 5rem)" }}>
      <div className="z-10 flex flex-col items-center gap-5">
        <h2 className="text-6xl text-center font-bold">
          AI{" "}
          <span className="relative inline-block mx-1 circle-wrap">Logo</span>{" "}
          Maker
        </h2>
        <h2 className="text-4xl text-center font-medium">
          {Lookup.HeroSubheading}
        </h2>
        <p className="text-lg text-center text-gray-500">{Lookup.HeroDesc}</p>
        <div className="flex gap-3 w-full max-w-xl">
          <input
            placeholder={Lookup.InputTitlePlaceholder}
            className="flex-1 px-7 py-3 border rounded-md shadow-md backdrop-blur-sm text-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              setLogoTitle(e.target.value);
            }}
          />
          <Link href={"/create?title=" + logoTitle}>
            <Button className="px-7 py-7 text-lg rounded-md shadow-md">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-5 text-sm text-gray-600 dark:text-gray-400">
          {[
            "🚀 Lightning Fast",
            "🎨 AI Powered",
            "💎 Premium Quality",
            "🔥 Trending Designs",
          ].map((feature, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-full backdrop-blur-sm 
                         border border-gray-200 dark:border-gray-700 hover:bg-white/70 
                         dark:hover:bg-gray-800/70 transition-all duration-300 cursor-default
                         hover:scale-105 hover:shadow-md"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
