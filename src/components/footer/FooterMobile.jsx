import Image from "next/image";
import React from "react";

const FooterMobile = () => {
    return (
        <div className="w-full bg-black z-50 text-white font-lexend">

            <div className="w-full p-4 border-b-2 border-white border-opacity-40 flex flex-col">
                
                
                {/* CONTACT US */}
                <div className="flex-col-left font-extralight text-xl gap-2">
                    <span className="font-semibold text-2xl">Contact Us</span>

                    <span className="flex-row-centered gap-2 ml-4">
                        <figure className="size-5 relative overflow-hidden">
                            <Image
                                src={"/footer/Gmail Icon.svg"}
                                style={{ objectFit: "contain" }}
                                fill
                            />
                        </figure>
                        <a className="hover:cusor-pointer" href="mailto:mecha@westernmech.ca" target="_blank" rel="noopener noreferrer">
                            mecha@westernmech.ca
                        </a>
                    </span>

                    <span className="flex-row-centered gap-2 ml-4">
                        <figure className="size-6 relative overflow-hidden">
                            <Image
                                src={"/footer/Phone Icon.svg"}
                                style={{ objectFit: "contain" }}
                                fill
                            />
                        </figure>
                        <p>403-991-3277</p>
                    </span>
                </div>


                {/* FOLLOW US */}
                <div className="flex-col-left font-extralight text-xl gap-4 mt-8">
                    <span className="font-semibold text-2xl">Follow Us</span>

                    <span className="flex-row-centered gap-2 ml-4">
                        <figure className="size-5 relative overflow-hidden">
                            <Image
                                src={"/footer/Instagram Icon.svg"}
                                style={{ objectFit: "cover" }}
                                fill
                            />
                        </figure>
                        <a className="hover:cusor-pointer" href="http://instagram.com/western_mechatronics" target="_blank" rel="noopener noreferrer">@western_mechatronics</a>
                    </span>

                    <span className="flex-row-centered justify-center gap-2 ml-4">
                        <figure className="size-5 relative overflow-hidden">
                            <Image
                                src={"/footer/Youtube Icon.svg"}
                                style={{ objectFit: "cover" }}
                                fill
                            />
                        </figure>
                        <a className="hover:cusor-pointer" href="https://www.youtube.com/channel/UCzIGIOC30ne4qzChe6lRZ0g" target="_blank" rel="noopener noreferrer">@western_mechatronics</a>
                    </span>
                </div>


                {/* REPORT AN ISSUE */}
                <div className="flex-col-left font-extralight text-xl gap-4 mt-8">
                    <span className="font-semibold text-2xl">Report an Issue</span>

                    <span className="flex-row-centered gap-2 ml-4">
                        <figure className="size-5 relative overflow-hidden">
                            <Image
                                src={"/footer/Git Icon.svg"}
                                style={{ objectFit: "cover" }}
                                fill
                            />
                        </figure>
                        <a className="text-[18px] hover:cursor-pointer" href="https://github.com/liuisaac/Mecha-Mayhem-Frontend-2025/issues" target="_blank" rel="noopener noreferrer">
                            liuisaac/Mecha_Mayhem_App/issues
                        </a>
                    </span>

                    <span className="flex-row-centered justify-center gap-2 ml-4">
                        <figure className="size-5 relative overflow-hidden">
                            <Image
                                src={"/footer/Star Icon.svg"}
                                style={{ objectFit: "cover" }}
                                fill
                            />
                        </figure>
                        <a className="hover:cusor-pointer" href="https://github.com/liuisaac/Mecha-Mayhem-Frontend-2025" target="_blank" rel="noopener noreferrer">
                            Star the repo :{")"}
                        </a>
                    </span>
                </div>

            </div>
        </div>
    );
};

export default FooterMobile;
