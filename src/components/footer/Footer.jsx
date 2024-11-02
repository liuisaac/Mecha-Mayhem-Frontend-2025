import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <div className="w-screen overflow-hidden h-[90vh] sm:h-[80vh] md:h-[70vh] lg:h-[60vh] bg-[#171717] z-50 flex-col-centered text-white font-lexend">
            <div className="w-[90vw] flex-row-start mt-10 sm:mt-16 font-lexend mb-5 sm:mb-2">
                <figure className="w-8 h-8 relative overflow-hidden">
                    <Image
                        src={"/footer/whitebull.svg"}
                        alt="A picture of our facility's stations"
                        style={{ objectFit: "contain" }}
                        fill
                    />
                </figure>
                » Mecha Mayhem 2024
            </div>
            <div className="w-[90vw] h-2/3 border-b-2 border-white border-opacity-40 flex flex-col sm:flex-row items-center justify-start">
                <div className="flex flex-col sm:items-start font-extralight text-base lg:text-xl sm:gap-6 sm:mr-12 mb-10 w-3/4 sm:w-1/4">
                    <span className="font-semibold flex items-start sm:w-full">Contact Us:</span>
                    <span className="flex flex-row items-center sm:flex-row-centered">
                        <figure className="w-[1.5vw] h-[1.5vw] relative overflow-hidden mr-2">
                            <Image
                                src={"/footer/Gmail Icon.svg"}
                                alt="A picture of our facility's stations"
                                style={{ objectFit: "contain" }}
                                fill
                            />
                        </figure>
                        <span className="max-md:break-all">Mecha@westernmech.ca</span>
                    </span>
                    <span className="flex flex-row items-center sm:flex-row-centered">
                        <figure className="w-[1.5vw] h-[1.5vw] relative overflow-hidden mr-2">
                            <Image
                                src={"/footer/Phone Icon.svg"}
                                alt="A picture of our facility's stations"
                                style={{ objectFit: "contain" }}
                                fill
                            />
                        </figure>
                        <span className="max-md:break-all">403-991-3277</span>
                    </span>
                </div>
                <div className="flex flex-col sm:items-start font-extralight text-base lg:text-xl sm:gap-6 sm:mr-12 mb-10 w-3/4 sm:w-1/4">
                    <span className="font-semibold flex items-start sm:w-full">Follow Us:</span>
                    <figure className="flex flex-row items-center sm:flex-row-centered">
                        <figure className="w-[1.5vw] h-[1.5vw] relative overflow-hidden mr-2">
                            <Image
                                src={"/footer/Instagram Icon.svg"}
                                alt="A picture of our facility's stations"
                                style={{ objectFit: "cover" }}
                                fill
                            />
                        </figure>
                        <span className="max-md:break-all">@western_mechatronic</span>
                    </figure>
                    <figure className="flex flex-row items-center sm:flex-row-centered">
                        <figure className="w-[1.5vw] h-[1.5vw] relative overflow-hidden mr-2">
                            <Image
                                src={"/footer/Youtube Icon.svg"}
                                alt="A picture of our facility's stations"
                                style={{ objectFit: "cover" }}
                                fill
                            />
                        </figure>
                        <span className="max-md:break-all">@westernmechatronics</span>
                    </figure>
                </div>
                <div className="flex flex-col sm:items-start font-extralight text-base lg:text-xl sm:gap-6 sm:mr-12 mb-10 w-3/4 sm:w-1/4">
                    <span className="font-semibold flex items-start sm:w-full">Report an Issue:</span>
                    <span className="flex flex-row items-center sm:flex-row-centered">
                        <figure className="w-[1.5vw] sm:w-[1.5vw] h-[1.5vw] relative overflow-hidden mr-2">
                            <Image
                                src={"/footer/Git Icon.svg"}
                                alt="A picture of our facility's stations"
                                style={{ objectFit: "cover" }}
                                fill
                            />
                        </figure>
                        <span className="max-md:break-all">liuisaac/Mecha_Mayhem_App/issues</span>
                    </span>
                    <span className="flex flex-row items-center sm:flex-row-centered">
                        <figure className="w-[1.5vw] h-[1.5vw] relative overflow-hidden mr-2">
                            <Image
                                src={"/footer/Star Icon.svg"}
                                alt="A picture of our facility's stations"
                                style={{ objectFit: "cover" }}
                                fill
                            />
                        </figure>
                        <span className="max-md:break-all">Star the repo :{")"}</span>
                    </span>
                </div>
            </div>
            <div className="w-[90vw] h-1/3 flex flex-col sm:flex-row text-xl pt-[2vh] sm:pt-[8vh] font-light">
                <span className="sm:w-[50vw]">
                    @2021 - 2024 Western Mechatronics
                </span>
                <div className="sm:w-[40vw] flex flex-row items-start sm:justify-end mt-3 sm:mt-0">
                    <span>mechamayhem.ca</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
