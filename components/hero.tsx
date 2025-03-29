"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Hero Background with Parallax Effect */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Luxury Hotel Room"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center w-full h-full transform scale-105 md:scale-100"
        />
        {/* Gradient Overlay instead of flat black */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col justify-center items-center h-screen text-center px-4 sm:px-6 lg:px-8">
        {/* Main Heading with Animation */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-3 sm:mb-4 capitalize text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-100 animate-fade-in">
          Book Your Luxury Room
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl opacity-90">
          Experience unparalleled comfort and elegance with exclusive offers just for you today.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
          <Link
            href="/room"
            className="bg-orange-500 text-white hover:bg-orange-600 py-2 px-8 text-lg font-semibold rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
          >
            <span>Book Now</span>
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-orange-400 text-white hover:bg-orange-400/20 py-2 px-8 text-lg font-semibold rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>

        {/* Features Badge */}
        <div className="absolute bottom-8 left-0 right-0 hidden md:flex justify-center space-x-8 px-4">
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <svg
              className="w-5 h-5 text-orange-400 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="text-sm">Free Cancellation</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <svg
              className="w-5 h-5 text-orange-400 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span className="text-sm">24/7 Support</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <svg
              className="w-5 h-5 text-orange-400 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span className="text-sm">Best Price Guarantee</span>
          </div>
        </div>
      </div>

      {/* Add some custom animations (you need to add this to your globals.css) */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;
