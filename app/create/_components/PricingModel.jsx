"use client";

import React, { useEffect } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

function PricingModel({ onHandleInputChange, formData }) {
  const { user } = useUser();
  useEffect(() => {
    if (formData?.title && typeof window !== "undefined") {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData]);

  return (
    <div>
      <HeadingDescription
        title={Lookup.LogoPricingModelTitle}
        description={Lookup.LogoPricingModelDesc}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
        {Lookup.pricingOption.map((pricing, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-5 border rounded-xl"
          >
            <Image
              src={pricing.icon}
              alt={pricing.title}
              height={60}
              width={60}
            />
            <h2 className="font-medium text-2xl">{pricing.title}</h2>
            <div>
              {pricing.features.map((feature, index) => (
                <h2 key={index} className="mt-3 text-lg">
                  {feature}
                </h2>
              ))}
            </div>
            {user ? (
              <Link href={`/generate-logo?type=${pricing.title}`}>
                <Button className="mt-5">{pricing.button}</Button>
              </Link>
            ) : (
              <div className="flex flex-row gap-7 mt-5">
                <SignInButton
                  mode="modal"
                  forceRedirectUrl={`/generate-logo?type=${pricing.title}`}
                >
                  <Button variant="default">Sign In</Button>
                </SignInButton>
                <SignUpButton
                  mode="modal"
                  forceRedirectUrl={`/generate-logo?type=${pricing.title}`}
                >
                  <Button variant="secondary">Sign Up</Button>
                </SignUpButton>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingModel;