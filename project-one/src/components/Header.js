export default function Header() {
  return (
    <header className="relative bg-[#2D2D2D]">
      <div className="z-20 relative container">
        <h1 className=" bg-[#2D2D2D] text-[116px] font-bold leading-[110%] w-1/2 text-white pt-[122px] pb-[133px]">Formula 1 Rankings</h1>
      </div>
      <div className="absolute max-w-[50%] right-0 top-0 bottom-0 z-5 overflow-hidden">
        <img src="/cars.png" className="h-full w-auto object-cover object-right" />
        <div className="absolute bg-gradient-to-r from-[#2D2D2D] to-transparent left-0 top-0 bottom-0 right-1/2"></div>
        <img src="/white.svg" className="h-full absolute left-0 top-0" />
        <img src="/red.svg" className="h-full absolute left-[138px] top-0" />
        {/* ring 1 */}
        {/* ring 2 */}
      </div>
    </header>
  );
}