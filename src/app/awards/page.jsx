import Awards from "@/components/awards/Awards";
import Waves from "@/components/ui/Waves";
import React from "react";

const page = () => {
    return (
        <div className="bg-black relative">
            <Waves />
            <Awards />
        </div>
    );
};

export default page;
