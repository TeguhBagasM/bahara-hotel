"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Rooms", href: "/rooms" },
  { name: "Contact", href: "/contact" },
  { name: "My Reservations", href: "/myreservation" },
  { name: "Dashboard", href: "/admin/dashboard" },
  { name: "Manage Room", href: "/admin/room" },
];

const Navlink = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        className="md:hidden z-50 relative text-gray-600 hover:text-blue-500 transition-colors"
      >
        {!open ? <IoMenu className="size-8" /> : <IoClose className="size-8" />}
      </button>

      {/* Navigation Overlay for Mobile */}
      {open && <div className="fixed inset-0 bg-black/50 md:hidden z-40" onClick={closeMenu} />}

      {/* Navigation Menu */}
      <div
        className={clsx(
          "fixed md:static inset-0 md:inset-auto top-0 md:top-auto md:w-auto z-50 md:z-auto",
          "transition-all duration-300 ease-in-out",
          {
            "translate-x-full md:translate-x-0": !open,
            "translate-x-0": open,
          }
        )}
      >
        <ul
          className={clsx(
            "flex flex-col md:flex-row items-stretch md:items-center",
            "bg-white md:bg-transparent shadow-lg md:shadow-none",
            "fixed md:static top-0 right-0 h-full md:h-auto w-64 md:w-auto p-6 md:p-0",
            "space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6",
            "transform md:transform-none transition-transform duration-300 ease-in-out"
          )}
        >
          {navItems.map((item, index) => (
            <li
              key={item.href}
              className={clsx(
                "hover:bg-gray-100 md:hover:bg-transparent rounded-md",
                index === navItems.length - 2 && "mt-auto md:mt-0"
              )}
            >
              <Link
                href={item.href}
                onClick={closeMenu}
                className={clsx(
                  "block py-2 px-4 md:px-3 text-gray-800 font-medium",
                  "hover:text-blue-500 transition-colors duration-200",
                  "md:hover:bg-transparent md:p-2 rounded-md"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* Sign In Button */}
          <li className="mt-4 md:mt-0">
            <Link
              href="/signin"
              onClick={closeMenu}
              className={clsx(
                "block text-center w-full md:w-auto",
                "py-2.5 px-6 bg-blue-500 text-white",
                "hover:bg-blue-600 focus:ring-2 focus:ring-blue-300",
                "rounded-md font-semibold transition-all duration-200"
              )}
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
