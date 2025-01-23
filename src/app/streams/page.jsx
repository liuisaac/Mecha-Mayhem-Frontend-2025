import Matches from "@/components/streams/Matches/Matches";
import Sidebar from "@/components/streams/Matches/Sidebar";
import Streams from "@/components/streams/Streams";
import Waves from "@/components/Waves";
import React from "react";

const page = () => {
    return (
        <div className="bg-black mt-[64px]">
            <Waves />
            <Streams />
            {/* <div className="flex-row-centered w-screen h-[200vh]">
                <Sidebar />
                <Matches />
            </div> */}
        </div>
    );
};

export default page;
