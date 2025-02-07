import Gallery from "@/components/media/Gallery/Gallery";
import Media from "@/components/media/Media";
import Waves from "@/components/ui/Waves";
import React from "react";

const page = () => {
    return (
        <div className="bg-black relative">
            <Waves />
            <Media />
            <Gallery />
        </div>
    );
};


export default page;
