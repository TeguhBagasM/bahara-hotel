"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Navlink = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 justify-center text-sm to-gray-500 rounded-md md:hidden hover:bg-gray-100"
      >
        {!open ? <IoMenu className="size-8" /> : <IoClose className="size-8" />}
      </button>
      <div
        className={clsx("w-full md:block md:w-auto", {
          hidden: !open,
        })}
      >
        <ul className="flex flex-col font-semibold text-sm uppercase p-4 mt-4 rounded-sm bg-gray-50 md:flex-row md:items-center md:space-x-10 md:p-0 md:mt-0 md:border-0 md:bg-white">
          <li>
            <Link
              href="/"
              className="block py-2.5 px-3 text-gray-800 hover:text-orange-500 hover:bg-gray-50 rounded-md md:hover:bg-transparent md:p-0 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block py-2.5 px-3 text-gray-800 hover:text-orange-500 hover:bg-gray-50 rounded-md md:hover:bg-transparent md:p-0 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/room"
              className="block py-2.5 px-3 text-gray-800 hover:text-orange-500 hover:bg-gray-50 rounded-md md:hover:bg-transparent md:p-0 transition-colors"
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-2.5 px-3 text-gray-800 hover:text-orange-500 hover:bg-gray-50 rounded-md md:hover:bg-transparent md:p-0 transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/myreservation"
              className="block py-2.5 px-3 text-gray-800 hover:text-orange-500 hover:bg-gray-50 rounded-md md:hover:bg-transparent md:p-0 transition-colors"
            >
              My Reservations
            </Link>
          </li>
          <li>
            <Link
              href="/admin/dashboard"
              className="block py-2.5 px-3 text-gray-800 hover:text-orange-500 hover:bg-gray-50 rounded-md md:hover:bg-transparent md:p-0 transition-colors"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/admin/room"
              className="block py-2.5 px-3 text-gray-800 hover:text-orange-500 hover:bg-gray-50 rounded-md md:hover:bg-transparent md:p-0 transition-colors"
            >
              Manage Room
            </Link>
          </li>
          <li className="pt-2 md:pt-0">
            <Link
              href="'signin"
              className="py-2.5 px-6 bg-orange-400 text-white hover:bg-orange-500 rounded-sm"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navlink;
