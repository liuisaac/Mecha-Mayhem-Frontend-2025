"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";

const LinkAndIcon = ({
    title,
    url,
    currentRoute,
    targetRoute = "",
    setMenu,
}) => {
    console.log(currentRoute, targetRoute);
    return (
        <Link
            href={targetRoute}
            className={`w-full h-10 flex flex-row justify-between items-start select-none ${
                currentRoute == targetRoute ? "text-white" : "text-[#A3A3A3]"
            }`}
            onClick={() => {
                setMenu(false);
            }}
        >
            <span>{title}</span>
            <div className="relative w-8 h-8">
                <Image
                    src={url}
                    alt="mecha mayhem logo"
                    style={{
                        objectFit: "contain",
                        filter:
                            currentRoute == targetRoute
                                ? ""
                                : "grayscale(0) brightness(0.5)",
                    }}
                    fill
                />
            </div>
        </Link>
    );
};

const SmallLinkAndIcon = ({ title, url }) => {
    return (
        <div className="w-full h-10 flex flex-row justify-between items-center font-lexend font-light text-xl select-none text-[#A3A3A3]">
            <span className="w-full">{title}</span>
            <div className="relative w-6 h-6 mr-1">
                <Image
                    src={url}
                    alt="mecha mayhem logo"
                    style={{
                        objectFit: "contain",
                        filter: "grayscale(0) brightness(0.5)",
                    }}
                    fill
                />
            </div>
        </div>
    );
};

const HexNut = ({ currentRoute }) => {
    const getRouteValue = () => {
        const streamOffset = "15.3";
        if (currentRoute.startsWith("/streams")) {
            return streamOffset;
        }
        switch (currentRoute) {
            case "/media":
                return "7.3";
            case "/streams":
                return streamOffset;
            case "/awards":
                return "46.7";
            case "/info":
                return "55.5";
        }
    };
    return (
        <div
            style={{ marginTop: `calc(${getRouteValue()}vh)` }}
            className={`absolute -ml-[9px] ${
                currentRoute == "/" && "-mt-2"
            }`}
        >
            <div className="relative w-5 h-5">
                <Image
                    src="/nav/hexnut.svg"
                    alt="mecha mayhem logo"
                    style={{ objectFit: "contain" }}
                    fill
                />
            </div>
        </div>
    );
};

const Navbar = () => {
    const whitelist = ["/streams/matches", "/streams/vods"];
    const location = usePathname();
    
    const [active, setActive] = useState(String(location.pathname));
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        setActive(`/${String(location).split("/")[1]}`);
        console.log(String(location));
        if (whitelist.includes(String(location))) {
            console.log(whitelist.includes(String(location)));
        }
    }, [location]);

    return (
        <>
            <nav className="w-screen h-20 bg-[#111111] flex-col-centered sm:opacity-100 opacity-0 sm:pointer-events-auto pointer-events-none z-50 fixed top-0 border-b-[1px] border-white">
                <div className="w-[100vw] flex-row-centered h-12">
                    <figure className="flex-row-start w-[15vw]">
                        <Link className="relative w-40 h-12 -ml-4" href="/">
                            <Image
                                src="/nav/whitebull.svg"
                                className="hover:fill-black fill-white"
                                alt="mecha mayhem logo"
                                style={{ objectFit: "contain" }}
                                fill
                            />
                        </Link>
                    </figure>
                    <section className="w-[70vw] flex justify-around font-bebas text-4xl">
                        {[
                            ["/ MEDIA /", "/media"],
                            ["/ STREAMS /", "/streams"],
                            ["/ AWARDS /", "/awards"],
                            ["/ INFO /", "/info"],
                        ].map(([title, url]) => (
                            <Link
                                href={url}
                                className={`${
                                    active === url
                                        ? "text-[#939393]"
                                        : "text-white"
                                } rounded-lg px-3 py-2 tracking-wide select-none`}
                                key={title}
                            >
                                {title}
                            </Link>
                        ))}
                    </section>

                    <figure className="flex-row-end w-[15vw]">
                        <div className="relative w-40 h-12 -ml-4">
                            <Image
                                src="/nav/whiteprofile.svg"
                                alt="mecha mayhem logo"
                                style={{ objectFit: "contain" }}
                                fill
                            />
                        </div>
                    </figure>
                </div>
            </nav>
            <nav
                className={`w-screen h-16 ${
                    menu ? "bg-[#131313]" : "bg-[#F85050]"
                } z-50 fixed top-0 sm:hidden flex-col-centered transition-colors duration-500 ease-in-out`}
            >
                <div className="w-[100vw] flex-row-centered h-12">
                    <figure className="flex-row-start w-20">
                        <Link className="relative w-16 ml-4 h-12 " href="/">
                            <Image
                                src="/nav/home.svg"
                                className="hover:fill-black fill-white"
                                alt="mecha mayhem logo"
                                style={{ objectFit: "contain" }}
                                fill
                            />
                        </Link>
                    </figure>
                    <figure className="flex-row-end w-full">
                        <div
                            className={`relative ${
                                menu ? "opacity-0" : "w-12 mr-4 h-8 opacity-100"
                            }`}
                            onClick={() => {
                                setMenu(true);
                            }}
                        >
                            <Image
                                src="/nav/menu.svg"
                                alt="mecha mayhem logo"
                                style={{ objectFit: "contain" }}
                                fill
                            />
                        </div>
                        <div
                            className={`relative ${
                                menu
                                    ? "opacity-100 w-12 mr-4 h-8"
                                    : " opacity-0"
                            }`}
                            onClick={() => {
                                setMenu(false);
                            }}
                        >
                            <Image
                                src="/nav/close.svg"
                                alt="mecha mayhem logo"
                                style={{ objectFit: "contain" }}
                                fill
                            />
                        </div>
                    </figure>
                </div>
            </nav>
            <div
                className={`${
                    menu ? "-translate-x-[100vw]" : "translate-x-[0vw]"
                } top-0 left-0 ml-[100vw] fixed z-40 w-screen h-screen bg-[#232323] transition ease-in-out duration-[700ms] flex-col-centered`}
            >
                <div className="w-screen h-[80vh] flex-row-centered font-bebas">
                    <div className="h-[calc(60vh-30px)] w-[1px] bg-white flex flex-col items-start justify-start ml-5">
                        <div className="w-3 h-[1px] bg-white" />
                        <div className="w-2 h-full" />
                        <div className="w-3 h-[1px] bg-white" />
                        <HexNut currentRoute={active} />
                    </div>
                    <div className="w-full h-[60vh] flex flex-col justify-between items-start font-bebas text-4xl ml-5 mr-5">
                        <LinkAndIcon
                            title="Home"
                            url="/nav/mobile_icons/home.svg"
                            currentRoute={active}
                            targetRoute="/"
                            setMenu={setMenu}
                        />
                        <LinkAndIcon
                            title="Media"
                            url="/nav/mobile_icons/media.svg"
                            currentRoute={active}
                            targetRoute="/media"
                            setMenu={setMenu}
                        />
                        <LinkAndIcon
                            title="Streams"
                            url="/nav/mobile_icons/streams.svg"
                            currentRoute={active}
                            targetRoute="/streams"
                            setMenu={setMenu}
                        />
                        <div className="w-full flex flex-col justify-between items-start h-[20vh]">
                            <SmallLinkAndIcon
                                title="Coming soon"
                                url="/nav/mobile_icons/ext_link.svg"
                            />
                            <SmallLinkAndIcon
                                title="Coming soon"
                                url="/nav/mobile_icons/ext_link.svg"
                            />
                            <SmallLinkAndIcon
                                title="Coming soon"
                                url="/nav/mobile_icons/ext_link.svg"
                            />
                            <SmallLinkAndIcon
                                title="Coming soon"
                                url="/nav/mobile_icons/ext_link.svg"
                            />
                        </div>
                        <LinkAndIcon
                            title="Awards"
                            url="/nav/mobile_icons/awards.svg"
                            currentRoute={active}
                            targetRoute="/awards"
                            setMenu={setMenu}
                        />
                        <LinkAndIcon
                            title="Info"
                            url="/nav/mobile_icons/info.svg"
                            currentRoute={active}
                            targetRoute="/info"
                            setMenu={setMenu}
                        />
                    </div>
                </div>
                <Button
                    href="https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-V5RC-24-5504.html#general-info"
                    className="sm:w-[30vw] w-[80vw] h-15 bg-[#E31F2B] hover:bg-white transition duraiton-100 ease-in-out group flex-row-centered rounded-sm "
                    textClassName="w-full my-2 text-center text-3xl z-10 font-bebas text-black hover:text-black transition duration-1000 ease-in-out"
                >
                    REGISTER TODAY
                </Button>
                <p className="mt-2 text-[12px] text-[#A3A3A3] tracking-wide">
                    Registration closes Oct 13
                </p>
            </div>
        </>
    );
};

export default Navbar;
