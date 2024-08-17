"use client";

import React, { useEffect, useRef, useState } from "react";
import Match from "./Banners/Match";
import axios from "axios";
import Banner from "./Banners/Banner";
import Loading from "./Loading"; // Ensure you have a Loading component

const Matches = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [nextSet, setNextSet] = useState(["2024", "prairies", "elimination"]);
    const [setIndex, setSetIndex] = useState(0);
    const [loadingButton, setLoadingButton] = useState(false);
    const runOnce = useRef(false);

    const setArray = [
        ["2024", "prairies", "qualification"],
        ["2024", "prairies", "practice"],
        ["2024", "rockies", "elimination"],
        ["2024", "rockies", "qualification"],
        ["2024", "rockies", "practice"],
        ["2023", "prairies", "qualification"],
        ["2023", "rockies", "qualification"],
    ];

    useEffect(() => {
        if (!runOnce.current) {
            loadMatches(setIndex);
            runOnce.current = true;
            setSetIndex(setIndex + 1);
        }
    }, []);

    const getMatchSet = async (year, div, type) => {
        let output = [];
        try {
            output.push({
                banner: true,
                year: year,
                div: div,
                type: type,
            });

            const requests = Array.from({ length: 200 }, (_, i) =>
                axios.get(
                    `http://localhost:8080/matches/${year}/${div}/${type}/${
                        i + 1
                    }`
                )
            );

            const responses = await Promise.all(requests);

            responses.forEach((res) => {
                const matchData = res.data[0];
                if (matchData !== undefined) {
                    output.push(matchData);
                }
            });

            return output;
        } catch (error) {
            console.error("Error fetching match set:", error);
            return output;
        }
    };

    const fetchMatches = async (index) => {
        setNextSet(setArray[index]);
        try {
            const newMatchSet = await getMatchSet(
                nextSet[0],
                nextSet[1],
                nextSet[2]
            );
            setMatches((prevMatches) => [...prevMatches, ...newMatchSet]);
            setLoadingButton(false);
        } catch (error) {
            console.error("Error fetching matches:", error);
        }
    };

    const loadMatches = async (index) => {
        setLoading(true); // Start loading
        setNextSet(setArray[index]);
        try {
            const newMatchSet = await getMatchSet(
                nextSet[0],
                nextSet[1],
                nextSet[2]
            );
            setMatches((prevMatches) => [...prevMatches, ...newMatchSet]);
        } catch (error) {
            console.error("Error fetching matches:", error);
        }
        setLoading(false); // End loading
    };

    if (loading) {
        return <Loading />; // Show loading indicator while fetching data
    }

    return (
        <div className="bg-[#0F1519] w-full z-10 pt-20 flex-col-centered gap-1">
            {matches.map((matchData, index) => {
                return matchData.banner ? (
                    <Banner
                        key={index}
                        year={matchData.year}
                        div={matchData.div}
                        type={matchData.type}
                    />
                ) : (
                    <Match json={matchData} key={index} />
                );
            })}{" "}
            <div className="w-full h-full text-4xl flex-row-centered pl-[15vw]">
                <button
                    onClick={() => {
                        setLoadingButton(true);
                        fetchMatches(setIndex);
                        setSetIndex(setIndex + 1);
                    }}
                    className={`${
                        loadingButton ? "bg-white" : "bg-[#E31F2B]"
                    } w-[27vw] h-[10vh] hover:bg-white transition duraiton-100 ease-in-out group flex-row-centered rounded-sm mt-20`}
                >
                    <h2
                        className={`${
                            loadingButton ? "animate-pulse" : ""
                        } ml-5 h-full text-center text-5xl z-10 font-bebas mt-12 text-black hover:text-black transition duration-1000 ease-in-out`}
                    >
                        {loadingButton ? "LOADING..." : "LOAD MORE MATCHES"}
                    </h2>
                </button>
            </div>
        </div>
    );
};

export default Matches;
