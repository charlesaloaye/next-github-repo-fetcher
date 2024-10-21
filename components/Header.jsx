"use client";

import Link from "next/link";
import GithubLogo from "@/app/github.png";
import Image from "next/image";
import clsx from "clsx";

import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <Link className="flex flex-shrink-0 items-center mr-4" href="/">
                <Image
                  className="h-10 w-auto bg-white rounded-full"
                  src={GithubLogo}
                  alt="GRF"
                />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  GRF
                </span>
              </Link>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <Link
                    href="/"
                    className={clsx(`
                    text-white  hover:bg-gray-900 hover:text-white rounded-md px-4 py-2 mb-1, {
                    ${pathname === "/" && "bg-black"}
                    }`)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/code/repos"
                    className={clsx(`
                      text-white  hover:bg-gray-900 hover:text-white rounded-md px-4 py-2 mb-1, {
                      ${pathname === "/code/repos" && "bg-black"}
                      }`)}
                  >
                    Repos
                  </Link>
                  <Link
                    href="/about"
                    className={clsx(`
                      text-white  hover:bg-gray-900 hover:text-white rounded-md px-4 py-2 mb-1, {
                      ${pathname === "/about" && "bg-black"}
                      }`)}
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
