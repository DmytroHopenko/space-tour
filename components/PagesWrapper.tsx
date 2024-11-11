"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";

interface PagesWrapperProps {
  children: React.ReactNode;
}

export const PagesWrapper = ({ children }: PagesWrapperProps) => {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`wrapper 
        ${
          pathname === "/" &&
          "bg-home-pattern-m md:bg-home-pattern-t lg:bg-home-pattern-d"
        }
        ${
          pathname === "/destination" &&
          "bg-destination-pattern-m md:bg-destination-pattern-t lg:bg-destination-pattern-d"
        }
        ${
          pathname === "/crew" &&
          "bg-crew-pattern-m md:bg-crew-pattern-t lg:bg-crew-pattern-d"
        }
        ${
          pathname === "/technology" &&
          "bg-tech-pattern-m md:bg-tech-pattern-t lg:bg-tech-pattern-d"
        }
        `}
      >
        <div className="max-w-[1440px] mx-auto">
            <Header />
             <main className="w-full h-full relative px-6 lg:px-[165px]">
                {children}
            </main>
        </div>
      </div>
    </>
  );
};
