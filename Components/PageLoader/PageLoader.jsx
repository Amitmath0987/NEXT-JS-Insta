import Image from "next/image";
import React from "react";
import Logo from "@assets/images/instagram-logo.png";
const PageLoader = () => {
  return (
    <div className="h-screen flex items-center justify-center animate-pulse bg-gray-200 blur-sm">
      <div
        className="relative animate-pulse"
        style={{ height: "4rem", width: "5rem" }}
      >
        <Image src={Logo} layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default PageLoader;
