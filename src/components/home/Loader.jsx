import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Loader = ({ fadeOut }) => {
    const [showLoader, setShowLoader] = useState(true);
    const [delayComplete, setDelayComplete] = useState(false); // New state to control the delay

    useEffect(() => {
        if (fadeOut) {
            // Start the delay for hiding the loader
            const timer = setTimeout(() => {
                setShowLoader(false); // Hide loader after delay
            }, 800); // Shortened delay before hiding loader (adjust this as needed)

            // Set another timer to indicate the delay has completed
            const delayTimer = setTimeout(() => {
                setDelayComplete(true); // Allow the underlying content to be visible
            }, 600); // Adjusted delay duration to match the loader fade-out duration

            return () => {
                clearTimeout(timer);
                clearTimeout(delayTimer);
            }; // Cleanup the timers on unmount
        } else {
            setShowLoader(true); // Ensure loader is visible when fadeOut is false
            setDelayComplete(false); // Reset delay completion state
        }
    }, [fadeOut]);

    if (!showLoader && delayComplete) return null; // Do not render the loader if it's not visible and the delay is complete

    return (
        <div className={`flex justify-center items-center fixed top-0 z-40 w-screen h-[120vh] bg-[#292929] transition-opacity duration-300 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
            <div className="-mt-24">
                <figure className="flex-row-centered w-[15vw]">
                    <Link className="relative w-40 h-40" href="/">
                        <Image
                            src="/loadbull.svg"
                            alt="mecha mayhem logo"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </Link>
                </figure>
            </div>
        </div>
    );
};

export default Loader;
