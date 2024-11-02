"use client";

import { planets } from "@/constants";
import Image from "next/image"
import { useState } from "react";

const DestinationPage = () => {

    const [pickedPlanet, setPickedPlanet] = useState<PlanetPick>("Moon");

    return (
        <section className="py-5">
            <p className=""><span className="">01</span> PICK YOUR DESTINATION</p>
            {planets.map((planet) => (
                <div className={`${pickedPlanet === planet.title ? "flex" : "hidden"} flex-col`} key={planet.id}>
                    <div className="size-[184px]">
                    <Image src={planet.img} height={445} width={445} alt={planet.title} className="object-fill"/>
                    </div>
                    <div className="">
                        <div className="">
                            <ul className="flex gap-4">
                                <li className={`cursor-pointer text-[14px] tracking-[15%] text-white ${planet.title === pickedPlanet && ''}`} onClick={() => setPickedPlanet("Moon")}>Moon</li>
                                <li className="" onClick={() => setPickedPlanet("Mars")}>Mars</li>
                                <li className="" onClick={() => setPickedPlanet("Europa")}>Europa</li>
                                <li className="" onClick={() => setPickedPlanet("Titan")}>Titan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default DestinationPage;