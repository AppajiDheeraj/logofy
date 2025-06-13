"use client";

import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { db } from "@/configs/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Download } from "lucide-react";
import Image from "next/image";
import React, { useContext, useState, useEffect } from "react";
import { toast } from "sonner";

function LogoList() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [logoList, setLogoList] = useState([]);

  const GetUserLogos = async () => {
    const querySnapshot = await getDocs(
      collection(db, "users", userDetail?.userEmail, "logos")
    );
    const logos = querySnapshot.docs.map((doc) => doc.data());
    setLogoList(logos);
  };

  const ViewLogo = (image) => {
    const newWindow = window.open("", "_blank");
    if (newWindow) {
      newWindow.document.write(
        `<html><head><title>Logo Preview</title></head><body style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f0f0f0;"><img src="${image}" alt="Logo" style="max-width: 100%; max-height: 100%;"></body></html>`
      );
      newWindow.document.close();
    } else {
      toast.error("Failed to open logo preview in a new tab.");
    }
  }

  useEffect(() => {
    if (userDetail?.userEmail) {
      GetUserLogos();
    }
  }, [userDetail]);

  return (
    <div className="mt-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {logoList?.length > 0 ? (
          logoList.map((logo, index) => (
            <div key={index} className="m-4 hover:scale-105 transition-all cursor-pointer" onClick={()=> {
              ViewLogo(logo?.image)
            }} >
              <Image
                src={logo?.image}
                alt="logo"
                width={400}
                height={200}
                className="w-full rounded-xl"
              />

              <div className="flex justify-center gap-4 mt-4">
                <h2 className="text-center text-lg font-bold">{logo?.title}</h2>
                <a
                  href={logo?.image}
                  download={`${logo?.title}.png`}
                  onClick={() => toast.success("Logo downloaded successfully!")}
                >
                  <Download />
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-4 text-center mt-24">
            <h2 className="text-xl font-bold">No Logos Found</h2>
            <p className="text-gray-500">Create a new logo to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LogoList;
