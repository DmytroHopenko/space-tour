"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { NavItems } from "./NavItems";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const pathname = usePathname();
  
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  
  useEffect(() => {
    setOpenMenu(false);
  }, [pathname])
  
  return (
    <header className="sticky z-10 top-0 lg:top-10 h-[88px] md:h-[96px] w-full p-6 md:p-0 flex items-center md:gap-8 lg:gap-0 justify-between">
      <div className="md:pl-8 lg:pl-16">
        <Link href="/">
          <Image
            src="/assets/shared/logo.svg"
            height={40}
            width={40}
            alt="logo"
            priority
          />
        </Link>
      </div>
      <div className="hidden md:flex md:h-[96px] md:w-full lg:w-[60%] min-[1200px]:w-[50%] bg-white/5 backdrop-blur-sm items-center md:pr-8 lg:pr-16 justify-end">
        <NavItems/>
      </div>
      <div className="md:hidden">
        {!openMenu && (
          <Image
            src="/assets/shared/icon-hamburger.svg"
            height={21}
            width={24}
            alt="hamburger"
            onClick={toggleMenu}
          />
        )}
      </div>
        <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </header>
  );
};
