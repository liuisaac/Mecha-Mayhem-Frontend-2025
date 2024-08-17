import React from "react";

const Overview = ({ json }) => {
    return (
        <div className="flex-col-centered mt-20">
            <span className="font-bebas text-6xl">TEAM OVERVIEW</span>
            <div className="w-[80vw] h-24 mt-12 flex-row-start">
                <div className="w-[18vw] h-full bg-gradient-to-r from-[#5BDC8B] to-black flex-row-centered p-px rounded-2xl">
                    <div class="bg-black rounded-[calc(1rem-1px)] w-[calc(18vw-2px)] h-[calc(96px-2px)] flex-col-centered">
                        <span className="absolute -mt-24 font-semibold bg-black px-2">RANKING</span>
                        <figure className="flex-row-centered font-lexend font-semibold h-24 gap-2 mt-2">
                            <span className="text-white text-6xl h-16">20</span>
                            <span className="text-[#888888] text-3xl align-text-top h-14">/67</span>
                        </figure>
                    </div>
                </div>
                <div className="w-[18vw] border-2 border-white h-full flex-col-centered">
                    <span className="text-[#A6A6A6] text-sm">Match Win %</span>
                    <span className="font-medium text-4xl">60.0%</span>
                    <span className="text-[#A6A6A6] text-sm">6/4/0</span>
                    <figure className="w-8 h-1 bg-[#5BDC8B] rounded-full"/>
                </div>
                <div className="w-[12vw] border-2 border-white h-full flex-col-centered">
                    <span className="text-[#A6A6A6] text-sm">AWP</span>
                    <span className="font-medium text-4xl">16</span>
                    <span className="text-[#A6A6A6] text-sm">TOP 38%</span>
                    <figure className="w-8 h-1 bg-[#5BDC8B] rounded-full"/>
                </div>
                <div className="w-[12vw] border-2 border-white h-full flex-col-centered">
                    <span className="text-[#A6A6A6] text-sm">AP</span>
                    <span className="font-medium text-4xl">25</span>
                    <span className="text-[#A6A6A6] text-sm">33% CONSISTENT</span>
                    <figure className="w-8 h-1 bg-[#5BDC8B] rounded-full"/>
                </div>
                <div className="w-[20vw] border-2 border-white h-full flex-col-centered">
                    <span className="text-[#A6A6A6] text-sm">OPR/DPR</span>
                    <span className="font-medium text-4xl">32.6/-0.24</span>
                    <span className="text-[#A6A6A6] text-sm">CCWM: 12.8</span>
                    <figure className="w-8 h-1 bg-[#E6BC5C] rounded-full"/>
                </div>
            </div>
        </div>
    );
};

export default Overview;
