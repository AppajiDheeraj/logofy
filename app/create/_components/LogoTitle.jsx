"use client";

import React, { useState, useEffect, Suspense } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import { useSearchParams } from "next/navigation";

function LogoTitleContent({ onHandleInputChange, formData }) {
  const searchParam = useSearchParams();
  const [title, setTitle] = useState("");

  useEffect(() => {
    let initialTitle = formData?.title ?? searchParam?.get("title") ?? "";
    setTitle(initialTitle);
    onHandleInputChange(initialTitle);
  }, []); // Only on first mount

  const handleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    onHandleInputChange(newTitle);
  };

  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup?.LogoTitle}
        description={Lookup?.LogoTitleDesc}
      />
      <input
        placeholder={Lookup?.InputTitlePlaceholder}
        type="text"
        className="p-4 rounded-lg border mt-5 w-full"
        value={title}
        onChange={handleChange}
      />
    </div>
  );
}

function LogoTitle({ onHandleInputChange, formData }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LogoTitleContent onHandleInputChange={onHandleInputChange} formData={formData} />
    </Suspense>
  );
}

export default LogoTitle;