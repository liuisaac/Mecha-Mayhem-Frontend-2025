import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const buttonRef = "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-V5RC-24-5504.html#general-info";
const specRef = "https://www.zeffy.com/en-CA/ticketing/7f86c0af-0963-462e-ad8e-c350a9b042ab"
const RegisterButton = () => {
    return (
      <div className="flex-col mt-20 sm:flex hidden">
        <a
          href={specRef}
          className="w-[30vw] h-24 bg-[#E31F2B] hover:bg-white transition duration-100 ease-in-out group flex-row-centered rounded-sm"
        >
          <span className="w-full mt-2 text-center text-5xl z-10 font-bebas text-black hover:text-black transition duration-1000 ease-in-out">
            {/* REGISTER TODAY */}
            REGISTER AS A SPECTATOR
          </span>
        </a>
  
        {/* <p className="w-full flex-row-centered mt-4 text-sm">
          Registration closes Oct 13
        </p> */}
        <p className="w-full flex-row-centered mt-4 text-sm">
          Note: Spectating is free!
        </p>
      </div>
    );
  };
  

const MobileButton = () => {
    return (
        <div className="flex-col items-center sm:items-start sm:hidden flex">
            <Button
                href={buttonRef}
                className="sm:w-[30vw] w-56 ml-20 h-[10vh] bg-[#E31F2B] hover:bg-white transition duraiton-100 ease-in-out group flex-row-centered rounded-sm "
                textClassName="w-full mt-2 text-center text-5xl z-10 font-bebas text-black hover:text-black transition duration-1000 ease-in-out"
            >
                REGISTER TODAY
            </Button>

            <p className="sm:w-[30vw] w-[80vw] flex-row-centered sm:ml-20 mt-4 text-sm">
                Registration closes Oct 13
            </p>
        </div>
    );
};
const Calgary = () => {
    return (
        <>
            <div className="flex flex-wrap relative w-screen sm:h-[100vh] h-[100vh] bg-transparent sm:mt-[40vh] sm:items-start mt-[20vh] text-white flex-col items-center justify-start overflow-hidden">
                <header className="hidden sm:flex text-8xl z-10 ml-16 font-saira">
                    WELCOME TO CALGARY.
                </header>

                <header className="sm:hidden text-5xl z-10 font-saira flex-col-centered w-full">
                    WELCOME TO
                    <span className="text-7xl z-10 font-saira">CALGARY</span>
                </header>

                <h2 className="sm:text-5xl z-10 sm:flex sm:text-left inline text-3xl sm:ml-20 font-bebas mt-8 mb-0 text-center w-[80vw]">
                    HOME TO THE LARGEST ROBOTICS COMPETITION IN CANADA
                </h2>
                <section className="relative flex-col items-centered z-10">
                    <div className="w-screen sm:flex-row flex flex-col">
                        <div className="flex flex-col sm:flex-row sm:items-start items-center sm:justify-start mt-8 sm:mt-0 sm:ml-20 w-full">
                            <div className="w-[70vw] sm:w-[30vw] sm:h-auto 2xl:text-3xl xl:text-2xl lg:text-xl text-xl sm:text-base text-[#7c7c7c] sm:ml-0 sm:mt-10">
                                Mecha Mayhem brings together{" "}
                                <span className="text-white font-semibold">
                                    over 200 teams
                                </span>{" "}
                                from around the world to compete at the BMO
                                Centre in Calgary, AB, Canada. Teams battle for
                                the title of{" "}
                                <span className="text-white font-semibold">
                                    Mecha Mayhem Tournament Champions
                                </span>{" "}
                                and to guarantee a qualification spot to the VEX
                                Robotics{" "}
                                <span className="text-white font-semibold">
                                    World Championships
                                </span>{" "}
                                in Dallas, TX.
                                <RegisterButton />
                            </div>

                            <div className="w-[80vw] sm:w-[40vw] sm:h-[25vw] h-[45vw] border-2 border-white mt-10 xl:ml-72 sm:ml-40">
                                <iframe
                                    src="https://www.youtube.com/embed/e-PBs0b2zsc"
                                    frameBorder="0"
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                    </div>

                    <MobileButton />
                </section>

                <figure className="absolute sm:w-[130vw] w-[100vw] h-[100vh] sm:ml-[16vw] sm:mt-[5vh] ml-[10vw] mt-[15vh] z-0">
                    <Image
                        src="/home/calgary/cityscape.svg"
                        alt="background picture of a robot"
                        style={{ objectFit: "cover" }}
                        fill
                        priority
                    />
                </figure>
            </div>
        </>
    );
};

export default Calgary;
