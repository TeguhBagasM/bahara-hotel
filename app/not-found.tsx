import Image from "next/image";
import React from "react";
import { FaArrowLeft, FaFrown } from "react-icons/fa";
import Link from "next/link";

const NOT_FOUND_IMAGE_URL = "/images/not-found.png";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-950 text-center">
      <Image
        src={NOT_FOUND_IMAGE_URL}
        alt="Not Found"
        width={360}
        height={360}
        className="h-80 w-80 md:h-96 md:w-96 object-cover"
      />
      <h2 className="text-xl flex items-center text-orange-500 mt-4">
        Oops! This page doesn’t exist. <FaFrown className="ml-2" />
      </h2>
      <Link href="/" className="mt-6 flex items-center text-orange-500 font-semibold hover:underline">
        <FaArrowLeft className="mr-2" /> Let’s get you back home!
      </Link>
    </div>
  );
}
