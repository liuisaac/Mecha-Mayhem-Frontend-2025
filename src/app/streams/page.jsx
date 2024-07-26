import Matches from "@/components/streams/Matches";
import Sidebar from "@/components/streams/Sidebar";
import Streams from "@/components/streams/Streams";
import Waves from "@/components/Waves";
import React from "react";

const page = () => {
    return (
        <div className="bg-black relative">
            <Waves />
            <Streams />
            <div className="flex-row-centered w-screen h-[200vh]">
                <Sidebar />
                <Matches />
            </div>
        </div>
    );
};

export default page;
