"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="absolute z-10 top-0 h-[88px] w-full p-6 flex items-center justify-between">
      <div className="">
        <Link href="/">
          <Image
            src="/assets/shared/logo.svg"
            height={40}
            width={40}
            alt="logo"
          />
        </Link>
      </div>
      <div className="md:hidden">
        {!openMenu && (
          <Image
            src="/assets/shared/icon-hamburger.svg"
            height={21}
            width={21}
            alt="hamburger"
            onClick={toggleMenu}
          />
        )}
      </div>
    </header>
  );
};
