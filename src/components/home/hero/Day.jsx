"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Day = ({ startDay, targetDay }) => {
    const startingFIndex = 20; //starting day
    const dayPadding = 6;
    const maxDay = startDay + dayPadding;
    const minDay = targetDay - dayPadding;

    const [fIndex, setFIndex] = useState(startingFIndex);

    const rotationConst = 1270 / (startingFIndex - targetDay + 2);
    const animationTime = 45;

    const yearList = [];
    for (let i = minDay; i <= maxDay; i++) {
        yearList.push(String(i));
    }

    // console.log(yearList);

    // Trigger on mount once to trigger other useEffect
    useEffect(() => {
        setFIndex(startingFIndex);
    }, []);

    // decrement fIndex until target is reached
    useEffect(() => {
        if (fIndex > targetDay) {
            const timer = setTimeout(() => {
                setFIndex(fIndex - 1); // decrement
            }, animationTime);
            // console.log(fIndex);
            return () => clearTimeout(timer);
        }
    }, [fIndex]);

    // animate opacity based on if it is focused (index)
    const calcOpacity = (focused, hideMiddle, subfocused, index, fIndex) => {
        // fIndex + (targetDay - dayPadding) == day Value
        const distance = index - fIndex;
        if (hideMiddle) {
            return 1; // target middle, hide
        }
        if (index == fIndex) {
            return 0.3; // middle but not target
        }
        if (focused) {
            if (index - 1 == targetDay || index + 1 == targetDay) {
                return 1;
            } else {
                return 0.3;
            }
        } else if (subfocused) {
            return 0.3;
        } else {
            return (0.2 * 2) / Math.abs(distance);
        }
    };

    return (
        <figure className="relative w-full h-[10vh] 2xl:mt-8 xl:mt-12 mt-0 flex-row-start overflow-x-clip ">
            {yearList.map((day, index) => {
                const focused = index == fIndex - 1 || index == fIndex + 1;
                const middle = index == fIndex;
                const middleHide = index == fIndex && index == targetDay;
                const subfocused = index == fIndex + 2 || index == fIndex - 2;

                const single = parseInt(day, 10) < 10;

                return (
                    <div key={index} className="sm:w-[8vw] w-14 flex-row-centered 2xl:-translate-x-[8vw] xl:-translate-x-[18vw] xl:-mt-6 lg:-translate-x-[26vw] lg:-mt-8 md:-translate-x-[30vw] -translate-x-[calc(34rem-50vw)]">
                        <motion.p
                            initial={{
                                skew: -12,
                                opacity: calcOpacity(
                                    focused,
                                    middleHide,
                                    subfocused,
                                    index,
                                    fIndex
                                ),
                                scale:
                                    focused || middle
                                        ? 1.05
                                        : subfocused
                                        ? 0.9
                                        : 0.75,
                                        paddingRight:
                                    (focused ? 50 : subfocused ? 5 : 4) +
                                    (single ? 10 : 0),
                                    paddingLeft:
                                    (focused ? 40 : subfocused ? 5 : 4) +
                                    (single ? 10 : 0),
                                x: -1000,
                            }}
                            animate={{
                                opacity: calcOpacity(
                                    focused,
                                    middleHide,
                                    subfocused,
                                    index,
                                    fIndex
                                ),
                                scale:
                                    focused || middle
                                        ? 1.05
                                        : subfocused
                                        ? 0.9
                                        : 0.75,
                                paddingRight:
                                    (focused ? 50 : subfocused ? 5 : 4) +
                                    (single ? 10 : 0),
                                    paddingLeft:
                                    (focused ? 40 : subfocused ? 5 : 4) +
                                    (single ? 10 : 0),
                                x:
                                    -1000 +
                                    rotationConst * (startingFIndex - fIndex),
                            }}
                            className={`                      
                            font-bebas text-center ${
                                day < 10 ? "ml-8" : ""
                            } ${(day == targetDay + 1) ? "2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl" : "2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-6xl"}`}
                        >
                            {(day == targetDay + 1) ? "to" : day}
                        </motion.p>
                    </div>
                );
            })}
        </figure>
    );
};

export default Day;
