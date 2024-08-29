"use client";

import React, { useEffect, useState } from "react";

const Overview = ({ stats }) => {
    const [rankColor, setRankColor] = useState("");

    const STIER = "#3ECBFF";
    const ATIER = "#5BDC8B";
    const BTIER = "#E6BC5C";
    const CTIER = "#A7C6CC";
    const DTIER = "#BF868F";

    const rateRanking = (rank) => {
        if (rank <= 8) {
            setRankColor(STIER); // guaranteed to at least pick
        } else if (rank <= 16) {
            setRankColor(ATIER); // guaranteed to make elims
        } else if (rank <= 32) {
            setRankColor(BTIER); // good chance to make elims
        } else if (rank <= 48) {
            setRankColor(CTIER); // may make elims
        } else {
            setRankColor(DTIER); // low chance of making elims
        }
    };

    const rateMetric = (metric, minS, minA, minB, minC) => {
        if (metric >= minS) {
            return STIER;
        } else if (metric >= minA) {
            return ATIER;
        } else if (metric >= minB) {
            return BTIER;
        } else if (metric >= minC) {
            return CTIER;
        } else {
            return DTIER;
        }
    };

    useEffect(() => {
        rateRanking(stats.data.rank);
    }, [stats]);

    return (
        <div className="flex-col-centered mt-20">
            <span className="font-bebas text-6xl">TEAM OVERVIEW</span>
            <div className="w-[80vw] h-24 mt-12 flex-row-start">
                <div
                    className="w-[18vw] h-full flex-row-centered p-px rounded-2xl"
                    style={{
                        background: `linear-gradient(to right, ${rankColor}, black)`,
                    }}
                >
                    <div className="bg-black rounded-[calc(1rem-1px)] w-[calc(18vw-2px)] h-[calc(96px-2px)] flex-col-centered">
                        <span className="absolute -mt-24 font-semibold bg-black px-2">
                            RANKING
                        </span>
                        <figure className="flex-row-centered font-lexend font-semibold h-24 gap-2 mt-2">
                            <span className="text-white text-6xl h-16">
                                {stats.data.rank}
                            </span>
                            <span className="text-[#888888] text-3xl align-text-top h-14">
                                /67
                            </span>
                        </figure>
                    </div>
                </div>
                <div className="w-[18vw] border-2 border-white h-full flex-col-centered">
                    <span className="text-[#A6A6A6] text-sm">Match Win %</span>
                    <span className="font-medium text-4xl">
                        {(
                            (stats.data.wins * 100) /
                            (stats.data.losses +
                                stats.data.ties +
                                stats.data.wins)
                        ).toFixed(1)}
                        %
                    </span>
                    <span className="text-[#A6A6A6] text-sm">
                        {stats.data.wins}/{stats.data.losses}/{stats.data.ties}
                    </span>
                    <figure
                        className="w-8 h-1 rounded-full"
                        style={{
                            backgroundColor: rateMetric(
                                (
                                    (stats.data.wins * 100) /
                                    (stats.data.losses +
                                        stats.data.ties +
                                        stats.data.wins)
                                ).toFixed(1),
                                90,
                                70,
                                40,
                                20
                            ),
                        }}
                    />
                </div>
                <div className="w-[12vw] border-2 border-white h-full flex-col-centered">
                    <span className="text-[#A6A6A6] text-sm">AWP</span>
                    <span className="font-medium text-4xl">
                        {stats.data.wp - stats.data.wins * 2}
                    </span>
                    <span className="text-[#A6A6A6] text-sm">
                        {((stats.data.wp - stats.data.wins * 2) * 100) /
                            (
                                stats.data.losses +
                                stats.data.ties +
                                stats.data.wins
                            ).toFixed(1)}
                        % CONSISTENT
                    </span>
                    <figure
                        className="w-8 h-1 rounded-full"
                        style={{
                            backgroundColor: rateMetric(
                                ((stats.data.wp - stats.data.wins * 2) * 100) /
                                    (
                                        stats.data.losses +
                                        stats.data.ties +
                                        stats.data.wins
                                    ).toFixed(1),
                                90,
                                70,
                                40,
                                20
                            ),
                        }}
                    />
                </div>
                <div className="w-[12vw] border-2 border-white h-full flex-col-centered">
                    <span className="text-[#A6A6A6] text-sm">AP</span>
                    <span className="font-medium text-4xl">
                        {stats.data.ap}
                    </span>
                    <span className="text-[#A6A6A6] text-sm">
                        {(
                            ((stats.data.ap / 6) * 100) /
                            (stats.data.losses +
                                stats.data.ties +
                                stats.data.wins)
                        ).toFixed(1)}
                        % AUTO WIN
                    </span>
                    <figure
                        className="w-8 h-1 rounded-full"
                        style={{
                            backgroundColor: rateMetric(
                                (
                                    ((stats.data.ap / 6) * 100) /
                                    (stats.data.losses +
                                        stats.data.ties +
                                        stats.data.wins)
                                ).toFixed(1),
                                80,
                                60,
                                40,
                                20
                            ),
                        }}
                    />
                </div>
                <div className="w-[20vw] border-2 border-white h-full flex-col-centered">
                    <span className="text-[#A6A6A6] text-sm">OPR/DPR</span>
                    <span className="font-medium text-4xl">{32.6}/{-0.24}</span>
                    <span className="text-[#A6A6A6] text-sm">CCWM: 12.8</span>
                    <figure
                        className="w-8 h-1 rounded-full"
                        style={{
                            backgroundColor: rateMetric(
                                (
                                    (stats.data.wins * 100) /
                                    (stats.data.losses +
                                        stats.data.ties +
                                        stats.data.wins)
                                ).toFixed(1),
                                90,
                                70,
                                40,
                                20
                            ),
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Overview;
