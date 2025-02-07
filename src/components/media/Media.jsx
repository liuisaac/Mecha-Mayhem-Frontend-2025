import React from "react";
import Image from "next/image";
import Media_Mobile from "./Media-Mobile";
import Button from "../ui/Button";

const Media = () => {
    return (
        <>  
        <div className="lg:hidden flex">
            <Media_Mobile />
        </div>
            <section className="relative w-screen h-screen lg:flex lg:flex-row-centered hidden bg-transparent">
                <aside className="w-1/2 flex-col-centered">
                    <div className="flex-col-centered">
                        <header className="font-saira 2xl:text-[10rem] lg:text-9xl">
                            MEDIA
                        </header>
                        <p className="font-lexend 2xl:text-3xl lg:text-2xl 2xl:w-[30vw] lg:w-[440px] lg:ml-10 2xl:-mt-5">
                            Top-notch photography, curated by both professionals
                            and our community.
                        </p>
                        <Button
                            href="https://www.flickr.com/photos/mercmediateam/albums/72177720314562049"
                            className="2xl:w-[27vw] 2xl:h-[10vh] lg:w-[30vw] lg:h-[8vh] bg-[#E31F2B] hover:bg-white transition duraiton-100 ease-in-out group flex-row-centered rounded-sm mt-20"
                            iconClassName="flex-row-start relative w-12 h-12"
                            alt="mecha mayhem logo"
                            textClassName="flex-row-centered h-full text-center 2xl:text-5xl lg:text-4xl z-10 font-bebas mt-2  text-black hover:text-black transition duration-1000 ease-in-out"
                        >
                            SEE IMAGES
                        </Button>
                    </div>
                </aside>

                <figure className="flex-row-start w-1/2">
                    <div className="relative w-[40vw] h-[40vw] mt-12 ml-5">
                        <Image
                            src="/media/newMedia.png"
                            alt="mecha mayhem logo"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </div>
                </figure>
            </section>
        </>
    );
};

export default Media;
