"use client";

import React, { useState, useEffect } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import { useSearchParams } from "next/navigation";

function LogoTitle({ onHandleInputChange, formData }) {
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

export default LogoTitle;