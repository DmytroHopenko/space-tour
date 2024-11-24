"use client";

import { PageMark } from "@/components/PageMark";
import { crews } from "@/constants";
import { useState } from "react";
import { bellefair } from "../fonts/font";

const CrewPage = () => {
    const [activeCrew, setActiveCrew] = useState<number>(0);

    return(
        <section className="py-5 md:pt-10 md:pb-0 lg:py-20">
            <PageMark num="02" text="Meet your crew" />
                {crews.map((crew, index) => (
                    <div className={`${index === activeCrew ? "flex" : "hidden"} flex-col lg:flex-row items-center lg:justify-between gap-10 w-full py-10 md:pt-10 md:pb-0`} key={crew.id}>
                        <div className="max-w-[327px] md:max-w-[512px] lg:max-w-[539px] h-[300px] lg:h-[600px] flex flex-col justify-end">
                            <span className={`${bellefair.className} text-[18px] md:text-[24px] lg:text-[32px] text-white opacity-50 uppercase text-center lg:text-left lg:mb-3`}>{crew.role}</span>
                            <span className={`${bellefair.className} text-[24px] md:text-[40px] lg:text-[56px] lg:leading-[60px] uppercase text-white text-center lg:text-left mb-5`}>{crew.name}</span>
                            <p className="text-blue-300 text-[15px] md:text-[16px] lg:text-[18px] leading-[180%] text-center lg:text-left">{crew.description}</p>
                            <div className="flex gap-4 justify-center lg:justify-start mt-auto lg:mt-[200px]">
                                {crews.map((_, btnIndex) => (
                                    <div className={`${index === btnIndex ? "opacity-100" : "opacity-20"} bg-white size-[10px] rounded-full hover:opacity-100 transition cursor-pointer`} key={btnIndex} onClick={() => {
                                        setActiveCrew(btnIndex)
                                        console.log(activeCrew)
                                    }}/>
                                ))}
                            </div>
                        </div>
                        <div>
                            <img src={crew.src} alt={crew.name} className="max-w-[327px] md:max-w-[446px] max-h-[365px] md:max-h-[600px] object-cover object-center"/>
                        </div>
                    </div>
                ))}
        </section>
    )
}

export default CrewPage;