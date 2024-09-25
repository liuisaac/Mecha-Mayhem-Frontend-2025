"use client";

import React, { useEffect, useRef, useState } from "react";
import Match from "./Banners/Match";
import axios from "axios";
import Banner from "./Banners/Banner";

const Matches = () => {
    const [matches, setMatches] = useState([]);
    const eventSourceRef = useRef(null);

    useEffect(() => {
        console.log("Component mounted");
        setMatches([]);

        // Check if the EventSource has already been created
        if (!eventSourceRef.current) {
            console.log("Creating a new EventSource connection...");
            eventSourceRef.current = new EventSource(
                `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/matches/2024/prairies`
            );

            eventSourceRef.current.onmessage = (event) => {
                try {
                    const match = JSON.parse(event.data);
                    setMatches((prevMatches) => [...prevMatches, match]);
                } catch (error) {
                    console.error("Error parsing match data", error);
                }
            };

            eventSourceRef.current.onerror = (event) => {
                console.error("SSE Error:", event);
                if (event.target.readyState === EventSource.CLOSED) {
                    console.log("Connection closed");
                } else {
                    eventSourceRef.current.close();
                }
            };
        }

        return () => {
            console.log("Component unmounted");
            if (eventSourceRef.current) {
                eventSourceRef.current.close();
                eventSourceRef.current = null;
                console.log(matches);
            }
        };
    }, []); // Empty dependency array ensures this runs only once

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
            })}
        </div>
    );
};

export default Matches;
