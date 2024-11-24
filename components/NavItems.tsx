import { navItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="md:h-[96px]">
      <ul className="flex flex-col md:flex-row gap-8 md:gap-10 w-full md:max-w-[550px] md:h-full">
        {navItems.map((link) => (
          <li
            className={`w-full md:w-fit pl-5 md:pl-0 md:flex items-center ${
              pathname == link.link &&
              "border-r-4 border-white md:border-r-0 md:border-b-2"
            }`}
            key={link.id}
          >
            <Link
              href={link.link}
              className="text-[16px] tracking-[2px] text-white font-normal uppercase"
            >
              <span className="font-bold mr-3">{link.num}</span>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
