import React from "react";
import Image from "next/image";
import Backdrop from "../home/hero/Backdrop";
import Link from "next/link";
import Button from "../Button";

const Media_Mobile = () => {
    return (
        <section className="relative w-screen flex-col-centered bg-transparent">
            <div className="flex-col-centered mt-[15vh]">
                <header className="font-saira text-8xl sm:text-9xl">
                    MEDIA
                </header>
                <p className="font-lexend text-center w-[80vw] text-xl">
                    Top-notch photography, curated by both professionals and our
                    community.
                </p>
            </div>

            <div className="relative sm:w-[60vw] w-96 sm:h-[60vw] h-96 sm:-my-4 my-10">
                <Image
                    src="/media/newMedia.png"
                    alt="mecha mayhem logo"
                    style={{ objectFit: "contain" }}
                    fill
                />
            </div>
            <Button
                href="https://photos.app.goo.gl/7tMPBiM4B5AyAJe17"
                className="sm:w-[50vw] w-[70vw] h-[8vh] bg-[#E31F2B] hover:bg-white transition duraiton-100 ease-in-out group flex-row-centered rounded-sm mt-4"
                iconClassName="flex-row-start relative w-10 h-10"
                src="/media/driveico.svg"
                alt="mecha mayhem logo"
                textClassName="flex-row-centered ml-5 h-full text-center sm:text-4xl text-3xl z-10 font-bebas mt-1 text-black hover:text-black transition duration-1000 ease-in-out"
            >
                OPEN DRIVE FOLDER
            </Button>
        </section>
    );
};

export default Media_Mobile;
