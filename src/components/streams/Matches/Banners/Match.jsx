import Link from "next/link";
import React from "react";

const Match = ({ json }) => {
    const truncate = (text) => {
        if (text.length >= 20) {
            return text.substring(0, 17) + "...";
        }
        return text;
    };

    return (
        <Link
            href={`/streams/matches/${json.season}/${json.redAlliance[0].number}%${json.redAlliance[1].number}%vs%${json.blueAlliance[0].number}%${json.blueAlliance[1].number}=?${json.matchNumber}`}
            className="pl-[15vw] bg-transparent w-full h-36 border-[#252C32] flex-row-start"
        >
            <div
                className={`w-56 h-full flex-row flex ${
                    json.redScore > json.blueScore
                        ? "text-white bg-[#c70010]"
                        : "bg-[#1D273A]"
                }`}
            >
                <div
                    className={`h-full w-2 ${
                        json.isLive ? "bg-red-500" : "bg-[#0F1519]"
                    }`}
                />
                <div className="flex-col-start">
                    <div
                        className={`flex-row-centered mt-5 ml-3 ${
                            json.isLive ? "visible" : "invisible"
                        }`}
                    >
                        <figure className="h-3 w-3 rounded-full bg-red-500 mr-1" />
                        <span className="font-lexend">LIVE</span>
                    </div>
                    <h3 className="font-bebas text-6xl ml-5 mt-1">
                        {json.division.charAt(0) +
                            json.division.charAt(1) +
                            json.division.charAt(2)}
                    </h3>
                </div>
            </div>

            {/* Match INFO */}
            <figure className="flex-row-centered font-lexend text-4xl w-full h-full">
                <div
                    className={`flex-row-centered gap-10 w-full h-full ${
                        json.redScore > json.blueScore
                            ? "text-white bg-[#c70010]"
                            : "bg-[#1D273A]"
                    }`}
                >
                    {json.redAlliance.map((team, key) => {
                        return (
                            <span
                                className={`flex-col-centered w-1/2 font-medium ${
                                    json.redScore > json.blueScore
                                        ? "text-white"
                                        : "text-white"
                                }`}
                                key={key}
                            >
                                {team.number}
                                <span className={`text-sm ${(json.redScore > json.blueScore) ? "text-[#dbdbdb]" : "text-red-500"} font-light`}>
                                    {truncate(team.name)}
                                </span>
                            </span>
                        );
                    })}
                </div>

                <figure className="w h-full flex-row-centered align-middle text-[#939393]">
                    <div className="w-full h-full flex-row-centered font-bold">
                        <span
                            className={`${
                                json.redScore > json.blueScore
                                    ? "text-white bg-[#e81d2d]"
                                    : "bg-[#222D40]"
                            } w-36 h-36 flex-row-centered`}
                        >
                            {json.redScore}
                        </span>
                        {/* <span className="w-1/3 flex-row-centered">-</span> */}
                        <span
                            className={`${
                                json.blueScore > json.redScore
                                    ? "text-white bg-[#1d93e8]"
                                    : "bg-[#222D40]"
                            } w-36 h-36 flex-row-centered`}
                        >
                            {json.blueScore}
                        </span>
                    </div>
                </figure>

                <div className="flex-row-start w-full h-full">
                    {json.blueAlliance.map((team, key) => {
                        return (
                            <span
                                className={`flex-col-centered w-1/2 h-full font-medium ${
                                    json.blueScore > json.redScore
                                        ? "text-white bg-[#1985D3]"
                                        : "bg-[#1D273A]"
                                }`}
                                key={key}
                            >
                                {team.number}
                                <span
                                    className={`text-sm ${
                                        json.blueScore > json.redScore
                                            ? "text-[#dbdbdb]"
                                            : "text-[#1f95ea]"
                                    } font-light`}
                                >
                                    {truncate(team.name)}
                                </span>
                            </span>
                        );
                    })}
                </div>
            </figure>

            <div
                className={`flex-col-right w-56 pr-8 text-[#939393] h-full font-lexend font-medium text-xl ${
                    json.blueScore > json.redScore
                        ? "text-white bg-[#1985D3]"
                        : "bg-[#1D273A]"
                }`}
            >
                <span>{json.matchNumber}</span>
                <span>{json.matchType}</span>
            </div>
        </Link>
    );
};

export default Match;
