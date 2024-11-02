import { NavItems } from "./NavItems";
import Image from "next/image";

interface MobileMenuProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileMenu = ({ openMenu, setOpenMenu }: MobileMenuProps) => {
  return (
    openMenu && (
      <div className="md:hidden h-screen w-[60%] fixed right-0 bottom-0 py-5 bg-white/5 backdrop-blur-sm flex flex-col gap-16">
        <Image src="/assets/shared/icon-close.svg" height={21} width={20} alt="close" className="cursor-pointer ml-auto mr-5 mt-4" onClick={() => setOpenMenu(!openMenu)}/>
        <NavItems/>
      </div>
    )
  );
};
