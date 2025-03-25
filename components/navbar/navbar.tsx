import Link from "next/link";
import React from "react";
import Navlink from "@/components/navbar/navlink";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.jpeg"
            alt="ThievHotel Logo"
            width={40}
            height={40}
            style={{
              width: 40,
              height: 40,
              objectFit: "cover", // This ensures the image covers the area without distortion
              borderRadius: "9999px", // Equivalent to rounded-full
            }}
          />
          <span className="text-2xl font-bold text-blue-600 tracking-wider">ThievHotel</span>
        </Link>
        <Navlink />
      </div>
    </nav>
  );
};

export default Navbar;
