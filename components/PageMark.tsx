interface PageMarkProps{
    num: string;
    text: string;
}

export const PageMark = ({num, text}: PageMarkProps) => {
  return (
    <p className="text-white tracking-[15%] lg:tracking-[4px] font-normal text-[16px] md:text-[20px] lg:text-[28px] uppercase flex gap-3 justify-center md:justify-start">
      <span className="opacity-25">{num}</span>{text}
    </p>
  );
};
