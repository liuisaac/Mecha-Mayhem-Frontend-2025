"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
    const whitelist = ["/streams/matches", "/streams/vods"]
    const location = usePathname();
    const [active, setActive] = useState(String(location.pathname));
    const [hidden, setHidden] = useState(false);
    const [hidable, setHidable] = useState(true);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        setActive(`/${String(location).split("/")[1]}`);
        // console.log(String(location))
        if (whitelist.includes(String(location))) {
            setHidable(false);
            console.log(whitelist.includes(String(location)))
        }
    }, [location]);

    // weird ass chatgpt code idk either nextjs is wack
    useEffect(() => {
        let lastScrollY = document.body.scrollTop || window.scrollY; // Use document.body.scrollTop for compatibility
    
        const handleScroll = () => {
            const currentScrollY = document.body.scrollTop || window.scrollY; // Get current scroll position
    
            if (currentScrollY > lastScrollY && currentScrollY > 300) {
                setHidden(true); // Hide on scroll down
            } else {
                setHidden(false); // Show on scroll up
            }
    
            lastScrollY = currentScrollY; // Update last scroll position
        };
    
        document.body.addEventListener("scroll", handleScroll); // Attach scroll listener to document.body
    
        return () => {
            document.body.removeEventListener("scroll", handleScroll); // Cleanup event listener
        };
    }, []);
    
    return (
        <>
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={(hidden && hidable) ? "hidden" : "visible"}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-screen h-20 bg-[#111111] flex-col-centered sm:opacity-100 opacity-0 sm:pointer-events-auto pointer-events-none z-50 fixed top-0 border-b-[1px] border-white"
        >
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
                                active === url ? "text-[#939393]" : "text-white"
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
        </motion.nav>
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={(hidden && hidable) ? "hidden" : "visible"}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-screen h-16 bg-[#F85050] z-50 fixed top-0 sm:hidden flex-col-centered"
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
                {/* <section className="w-[70vw] flex justify-around font-bebas 2xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl">
                    {[
                        ["/ 9 /", "/media"],
                        ["/ STREAMS /", "/streams"],
                        ["/ AWARDS /", "/awards"],
                        ["/ INFO /", "/info"],
                    ].map(([title, url]) => (
                        <Link
                            href={url}
                            className={`${
                                active === url ? "text-[#939393]" : "text-white"
                            } rounded-lg px-3 py-2 tracking-wide select-none`}
                            key={title}
                        >
                            {title}
                        </Link>
                    ))}
                </section> */}

                <figure className="flex-row-end w-full">
                    <div className="relative w-12 mr-4 h-8">
                        <Image
                            src="/nav/menu.svg"
                            alt="mecha mayhem logo"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </div>
                </figure>
            </div>
        </motion.nav>
        </>
    );
};

export default Navbar;
