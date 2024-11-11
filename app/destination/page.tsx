"use client";

import { planets, planetsNavigation } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { bellefair } from "../fonts/font";
import { PageMark } from "@/components/PageMark";

const DestinationPage = () => {
  const [pickedPlanet, setPickedPlanet] = useState<string>("Moon");

  return (
    <section className="py-5 md:py-10 lg:py-20">
      <PageMark num="01" text="Pick your destination" />
      {planets.map((planet) => (
        <div
          className={`${
            pickedPlanet === planet.title ? "flex" : "hidden"
          } flex-col items-center lg:flex-row lg:justify-between lg:gap-10 lg:py-20`}
          key={planet.id}
        >
          <div className="size-[184px] my-16 lg:size-[539px] lg:my-0 lg:flex lg:items-center lg:justify-center">
            <Image
              src={planet.img}
              height={445}
              width={445}
              alt={planet.title}
              className="object-fill"
            />
          </div>
          <div className="max-w-[327px] md:max-w-[514px] lg:max-w-[445px]">
            <div className="flex flex-col items-center lg:items-start">
              <ul className="flex gap-4 mb-5">
                {planetsNavigation.map((navigation) => (
                  <li
                    key={navigation.id}
                    className={`h-8 border-white cursor-pointer text-[14px] md:text-[16px] tracking-[15%] text-blue-300 uppercase ${
                      pickedPlanet === navigation.title && "border-b-2 text-white"
                    }`}
                    onClick={() => setPickedPlanet(navigation.title)}
                  >
                    {navigation.title}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-5 items-center lg:items-start">
                <span
                  className={`text-white text-[56px] md:text-[80px] font-normal uppercase ${bellefair.className}`}
                >
                  {planet.title}
                </span>
                <p className="leading-[180%] text-[15px] md:text-[16px] lg:text-[18px] text-blue-300 text-center lg:text-left">
                  {planet.description}
                </p>
              </div>
              <div className="py-5 lg:py-10 border-t border-white/25 flex flex-col items-center md:flex-row md:justify-around lg:justify-start gap-5 lg:gap-20 w-full mt-5 lg:mt-10">
                <div className="text-blue-300 tracking-[2px] text-[14px] uppercase flex flex-col items-center lg:items-start">
                  Avg. Distance
                  <span className={`text-[28px] text-white ${bellefair.className}`}>{planet.distance}</span>
                </div>
                <div className="text-blue-300 tracking-[2px] text-[14px] uppercase flex flex-col items-center">
                  Est. Travel Time
                  <span className={`text-[28px] text-white ${bellefair.className}`}>{planet.time}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default DestinationPage;
