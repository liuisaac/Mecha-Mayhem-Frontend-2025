import React, { Suspense } from "react";

const Display = ({ data }) => {
    return (
        <Suspense>
            <div className="border-2 rounded-xl border-gray-500/50 p-8 backdrop-blur-[10px]">
                {data[0] ? (
                    <table className="w-[60vw]">
                        <thead>
                            <tr className="text-white font-rubik text-xl text-left">
                                <th className="pr-8">AWARD</th>
                                <th className="pr-8">TEAM</th>
                                <th className="pr-8">NAME</th>
                                <th className="pr-8">AFFILIATION</th>
                                <th className="pr-8">LOCATION</th>
                            </tr>
                        </thead>
                        <tbody className="text-regular text-white opacity-80">
                            {data.map((row, index) => (
                                <tr key={index}>
                                    <td className="pr-4 pt-6">
                                        {row["award"]}
                                    </td>
                                    <td className="pr-4 pt-6">{row["team"]}</td>
                                    <td className="pr-4 pt-6">{row["name"]}</td>
                                    <td className="pr-4 pt-6">
                                        {row["affiliation"]}
                                    </td>
                                    <td className="pr-4 pt-6">
                                        {row["location"]}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <h4 className="w-[60vw] text-white text-center text-xl h-screen">
                        Mecha Mayhem 2024 happens in February! Stay tuned for
                        the results!{" "}
                    </h4>
                )}
            </div>
        </Suspense>
    );
};

export default Display;
