import React from "react";
import Image from "next/image";
import Backdrop from "../home/hero/Backdrop";
import Link from "next/link";
import Button from "../Button";
import WavesCircular from "../WavesCircular";
// import { PlayArrowIcon } from "@mui/icons-material/PlayArrow";


const Streams = () => {
    return (
        <section className="bg-transparent lg:relative w-full lg:w-screen lg:h-screen flex flex-col items-center lg:flex-row lg:justify-center">
            <h1 className="font-saira text-6xl mt-8 lg:hidden">STREAMS</h1>
            <p className="font-lexend text-xl px-8 py-4 text-center lg:hidden">High-definition streams that capture every moment of the event.</p>

            <div className="hidden lg:block lg:px-12">
                <h1 className="font-saira text-9xl">STREAMS</h1>
                <p className="font-lexend text-3xl mt-4 mb-12">High-definition streams that capture every moment of the event.</p>
                <Link href="/streams/vods" className="transition-all">
                    <button className="bg-red-600 hover:bg-white text-3xl p-4 font-bebas text-black">
                        SEE YOUR TEAM'S VODS
                    </button>
                </Link>
            </div>

            <div className="relative flex justify-center items-center mt-8 mb-12 lg:m-0">
                <div className="w-4/5 lg:w-3/5">
                    <WavesCircular />
                </div>
                <Image
                    src="/streams/newStreams.png"
                    alt="mecha mayhem logo"
                    // ignore this lazy ahh scale-150 trust
                    className="absolute lg:scale-150 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ objectFit: "contain" }}
                    width={300}
                    height={500}
                />
            </div>


            <Link href="/streams/vods" className="mb-12 lg:hidden">
                <button className="bg-red-600 hover:bg-white text-3xl p-4 font-bebas text-black">
                    SEE YOUR TEAM'S VODS
                </button>
            </Link>

        </section>
    );
};

export default Streams;


// const a = (
//     <aside className="w-1/2">
//                 <div className="flex-col-start ml-[11vw]">
//                     <header className="font-saira text-6xl">STREAMS</header>
//                     <p className="font-lexend text-3xl w-[30vw] -mt-5">
//                         High-definition streams that capture every moment of the
//                         event.
//                     </p>
//                     <Button
//                         href="/streams/matches"
//                         className="w-[27vw] h-[10vh] bg-[#E31F2B] hover:bg-white transition duraiton-100 ease-in-out group flex-row-centered rounded-sm mt-20"
//                         iconClassName="flex-row-start relative w-12 h-12"
//                         src="/streams/cameraico.svg"
//                         alt="mecha mayhem logo"
//                         textClassName="ml-5 h-full text-center text-5xl z-10 font-bebas mt-12 text-black hover:text-black transition duration-1000 ease-in-out"
//                     >
//                         SEE YOUR TEAM'S MATCHES
//                     </Button>
//                     <Link href="/streams/vods"
//                     className="w-[27vw] flex-row-centered text-center font-lexend font-light mt-4 underline">Click here to see the full VODS</Link>
//                 </div>
//             </aside>

// <figure className="flex-row-start w-1/2">
//     <div className="relative w-[50vw] h-[50vw] mt-12 -ml-12">
//         <Image
//             src="/streams/newStreams.png"
//             alt="mecha mayhem logo"
//             style={{ objectFit: "contain" }}
//             fill
//         />
//     </div>
// </figure>
// )