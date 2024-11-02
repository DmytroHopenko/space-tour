import Link from "next/link";
import { bellefair } from "./fonts/font";

const HomePage = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-between items-center relative py-5 md:py-20 lg:mt-[150px] lg:gap-5">
      <div className="flex flex-col items-center lg:items-start">
        <span className="uppercase text-[16px] tracking-[15%] font-normal text-blue-300 md:text-[28px] md:tracking-[4px]">
          SO, YOU WANT TO TRAVEL TO
        </span>
        <h1
          className={`${bellefair.className} text-white text-[80px] leading-[92px] uppercase my-6 md:text-[144px] md:leading-[165px]`}
        >
          SPACE
        </h1>
        <p className="text-[15px] leading-[180%] font-normal text-blue-300 text-center max-w-[327px] md:max-w-[512px] lg:max-w-[540px] md:text-[16px] lg:text-left lg:text-[18px]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link
        href="/destination"
        className="bg-white size-[144px] md:size-[272px] rounded-full mt-20 lg:mt-0 uppercase flex items-center justify-center text-blue-900 text-[18px] md:text-[32px] hover:text-slate-600 transition-all shadow-none hover:shadow-[0_0_0_40px_rgba(100,116,139,0.5)]"
      >
        Explore
      </Link>
    </section>
  );
};

export default HomePage;
