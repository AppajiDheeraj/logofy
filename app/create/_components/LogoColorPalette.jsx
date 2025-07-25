"use client";

import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import Colors from "@/app/_data/Colors";

function LogoColorPalette({ onHandleInputChange, formData }) {
  const [selectedOption, setSelectedOption] = useState(formData?.palette);

  return (
    <div>
      <HeadingDescription
        title={Lookup.LogoColorPaletteTitle}
        description={Lookup.LogoColorPaletteDesc}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        {Colors.map((palette, index) => (
          <div
            key={index}
            className={`flex p-1 cursor-pointer ${
              selectedOption == palette.name && "border-2 rounded-lg p-1"
            } flex-row`}
            onClick={() => {
              setSelectedOption(palette.name);
              onHandleInputChange(palette.name);
            }}
          >
            {palette?.colors.map((color, index) => (
              <div
                className="h-24 w-full"
                key={index}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoColorPalette;