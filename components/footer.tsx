import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto px-4 w-full py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="inline-block mb-6">
              <Image src="/images/bahara-logo.png" width={302} height={49} alt="logo" />
            </Link>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione inventore quibusdam sint
              unde ipsum labore.
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <h4 className="mb-6 text-xl font-semibold text-white">Links</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/room" className="hover:text-white transition-colors">
                      Rooms
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <h4 className="mb-6 text-xl font-semibold text-white">Legal</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Legal
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Term & Condition
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Payment Method
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4 className="mb-6 text-xl font-semibold text-white">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 rounded-sm bg-white text-sm"
                  placeholder="Masukan Email"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-400 p-3 font-bold text-white w-full text-center rounded-sm hover:bg-orange-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          &copy; Copyright 2025 | Thieverse | All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
