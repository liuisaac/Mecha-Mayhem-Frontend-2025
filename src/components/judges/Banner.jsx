import Image from "next/image";
import React from "react";

const Banner = ({title}) => {

  return(
      <div className="flex items-center justify-around bg-red-600 h-[25vh] md:h-[22vh] lg:h-[30vh] sticky top-0 w-full gap-x-10">
              {/* Left Container with Image */}
              <div className="relative w-[20vw] h-[30vw] flex items-center justify-end ml-2">
                  <Image
                      src="/HexLogo.png"
                      alt="mecha mayhem logo"
                      width={250}
                      height={250}
                  />
              </div>

              {/* Right Container with "TEAMS PORTAL" */}
              <div className="flex-1 flex justify-start items-center">
                  <div className="font-bold text-3xl sm:text-4xl lg:text-6xl">
                    {title}
                  </div>
              </div>
      </div>
    );
}

export default Banner