import React from "react";

const WavesCircular = () => {
    return (
        <figure className="w-full h-full aspect-square rounded-full overflow-hidden">
            <video
                className="w-full h-full object-cover"
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
        </figure>
    );
};

export default WavesCircular;
