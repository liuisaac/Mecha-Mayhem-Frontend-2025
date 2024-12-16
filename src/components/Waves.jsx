import React from "react";

const Waves = () => {
    return (
        <figure className="w-screen overflow-hidden">
            <div className="absolute top-0 left-0 opacity-20 w-[100vw] overflow-x-hidden h-[100vh] pointer-events-none hidden sm:block">
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
        </figure>
    );
};

export default Waves;
