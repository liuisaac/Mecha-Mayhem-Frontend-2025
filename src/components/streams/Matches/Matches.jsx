"use client";

import React, { useEffect, useRef, useState } from "react";
import Match from "./Banners/Match";
import axios from "axios";
import Banner from "./Banners/Banner";

const Matches = () => {
    const [matches, setMatches] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // current page number
    const [triggerNextPage, setTriggerNextPage] = useState(true); // boolean whether we should get matches for next page
    const [currentRoundIndex, setCurrentRoundIndex] = useState(0); // index of whichever round we're on now
    const [wasLastMatches, setWasLastMatches] = useState(false); // indicating whether we've retrieved all the matches 
    const paginationRef = useRef(); // for determining if we are at the last element
    
    // function to get the matches
    const fetchData = async () => {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/matches/2024/prairies`, 
            {
                currentPage,
                currentRoundIndex
            }
        );

        // Checking if user has finished fetching data
        if (response.data.reachedEndOfMatches) {
            setWasLastMatches(true);
        }

        setMatches([...matches, ...response.data.data]);
        setCurrentRoundIndex(response.data.nextRoundIndex);
        setCurrentPage(response.data.nextPage);
    }

    useEffect(() => { 
        // only fetch next matches if user has scrolled to end of current page and not retrieved the last matches
        if (triggerNextPage && !wasLastMatches) {
            fetchData();
            setTriggerNextPage(false);
        }
    }, [triggerNextPage]);

    // determines when user has scrolled to last match on current page
    const onScroll = () => {
        if (paginationRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = paginationRef.current;
            if (scrollTop + clientHeight === scrollHeight) {
                setTriggerNextPage(true);
            }
        }
    }

    return (
        <div className="bg-[#0F1519] fixed top-0 w-full z-10 pt-20 h-[100vh] overflow-auto flex flex-col gap-1" ref={paginationRef} onScroll={onScroll}>
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
            })}
        </div>
    );
};

export default Matches;
