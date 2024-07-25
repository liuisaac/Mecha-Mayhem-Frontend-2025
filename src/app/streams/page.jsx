import Streams from "@/components/streams/Streams";
import Waves from "@/components/Waves";
import React from "react";

const page = () => {
    return (
        <div className="bg-black relative">
            <Waves />
            <Streams />
        </div>
    );
};

export default page;
