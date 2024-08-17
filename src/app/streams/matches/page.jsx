import Matches from "@/components/streams/Matches/Matches";
import Sidebar from "@/components/streams/Matches/Sidebar";
import React from "react";

const page = () => {
    return (
        <div>
            <div className="flex-row-centered w-screen h-full">
                <Sidebar />
                <Matches />
            </div>
        </div>
    );
};

export default page;
