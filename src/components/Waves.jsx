import React from "react";

const Waves = () => {
    return (
        <figure>
            <div className="absolute top-0 left-0 opacity-20 scale-150 pointer-events-none hidden sm:block">
                <video
                    className="w-screen h-[120vh]"
                    muted
                    loop
                    autoPlay
                    preload="auto"
                >
                    <source
                        src="/home/hero/repeating_waves.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="w-full h-[50vh] bg-gradient-to-b from-[#00000000] from-10% to-[#000000] to-90% absolute -mt-[45vh]"></div>
            </div>

            <div className="absolute top-0 left-0 opacity-100 scale-[5] pointer-events-none sm:hidden block">
                <video
                    className="w-screen h-[120vh]"
                    muted
                    loop
                    autoPlay
                    preload="auto"
                >
                    <source
                        src="/home/hero/repeating_waves.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="w-full h-[75vh] bg-gradient-to-b from-transparent to-[#000000] to-99% absolute top-0"></div>
            </div>
        </figure>
    );
};

export default Waves;
