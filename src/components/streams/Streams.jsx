import React from "react";
import Image from "next/image";
import Backdrop from "../home/hero/Backdrop";
import Link from "next/link";

const Streams = () => {
    return (
        <section className="relative w-screen h-screen flex-row-centered bg-transparent">
            <header className="font-saira text-3xl">STREAMS</header>
            <h2 className="font-lexend text-xl ">
                High-definition streams that capture every moment of the
                event.
            </h2>
        </section>
    );
};

export default Streams;

