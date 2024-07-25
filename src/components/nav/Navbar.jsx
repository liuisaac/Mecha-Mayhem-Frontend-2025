"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
    const router = useRouter()
    const location = usePathname();
    const [active, setActive] = useState(String(location.pathname));
    const [transition, setTransition] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [menu, setMenu] = useState(false);

    const { scrollY } = useScroll();

    useEffect(() => {
        setActive(`/${String(location).split("/")[1]}`);
    });

    useMotionValueEvent(scrollY, "change", (latest) => {
        // const previous = scrollY.getPrevious();
        // if (latest > previous && latest > 0) {
        //     setHidden(true);
        //     console.log("hide");
        // } else {
        //     setHidden(false);
        //     console.log("show");
        // }
        console.log(latest);
    });


    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-screen h-20 bg-[#111111] flex-col-centered z-50 fixed top-0 border-b-[1px] border-white"
        >
            <div className="w-[100vw] flex-row-centered h-12">
                <figure className="flex-row-start w-[15vw]">
                    <Link className="relative w-40 h-12 -ml-4" href="/">
                        <Image
                            src="/nav/whitebull.svg"
                             className="hover:fill-black fill-white"
                            alt="mecha mayhem logo"
                            style={{objectFit: "contain"}}
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
                            style={{objectFit: "contain"}}
                            fill
                        />
                    </div>
                </figure>
            </div>
        </motion.nav>
    );
};

export default Navbar;
