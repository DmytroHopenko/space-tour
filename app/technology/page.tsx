"use client";

import { PageMark } from "@/components/PageMark";
import { technologies } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { bellefair } from "../fonts/font";

const TechnologyPage = () => {
  const [activeSlide, setAcriveSlide] = useState<number>(1);
  console.log(activeSlide);

  return (
    <section className="py-5 md:py-10 lg:py-20 min-h-[1024px]">
      <PageMark num="03" text="Space launch 101" />
      {technologies.map((technology) => (
        <div
          className={`${
            technology.id === activeSlide ? "block" : "hidden"
          } mt-20`}
          key={technology.id}
        >
          <div className="absolute left-0 w-full overflow-hidden flex flex-col lg:flex-row-reverse items-center lg:gap-10">
            <Image
              src={technology.srcM}
              alt={technology.title}
              width={790}
              height={527}
              className="object-fill lg:hidden"
            />
            <Image
              src={technology.srcD}
              alt={technology.title}
              width={608}
              height={600}
              className="hidden lg:block"
            />
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:pl-[165px]">
              <div className="flex gap-4 my-10 lg:my-0 lg:flex-col lg:justify-start justify-center">
                {technologies.map((_, btnIndex) => (
                  <div
                    key={btnIndex}
                    className={`${
                      activeSlide === btnIndex + 1
                        ? "bg-white border-white text-blue-900"
                        : "border-white/20 text-white"
                    } ${
                      bellefair.className
                    } rounded-full cursor-pointer border  size-14 lg:size-20 flex items-center justify-center hover:bg-white hover:text-blue-900 text-[24px] lg:text-[32px]`}
                    onClick={() => setAcriveSlide(btnIndex + 1)}
                  >
                    {btnIndex + 1}
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center lg:items-start max-w-[327px] md:max-w-[512px] pb-10">
                <span
                  className={`${bellefair.className} uppercase text-[18px] md:text-[24px] lg:text-[32px] text-white/50`}
                >
                  The terminology…
                </span>
                <h1
                  className={`${bellefair.className} text-[24px] md:text-[40px] lg:text-[56px] text-white my-5 lg:my-0 uppercase`}
                >
                  {technology.title}
                </h1>
                <p className="text-blue-300 text-[15px] leading-[180%] md:text-[16px] lg:text-[18px] text-center lg:text-left">
                  {technology.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TechnologyPage;
