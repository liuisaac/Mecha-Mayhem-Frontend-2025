import Info from "@/components/info/Info";
import Waves from "@/components/ui/Waves";
import React from "react";

const page = () => {
    return (
        <div className="bg-black relative w-screen overflow-hidden">
            <Waves />
            <Info />
        </div>
    );
};

export default page;
