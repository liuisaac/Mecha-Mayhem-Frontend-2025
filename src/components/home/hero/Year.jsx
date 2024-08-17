"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Year = ({ startYear, targetYear }) => {
    const yearPadding = 2; // amount of padding years to add to each side
    const startPoint = yearPadding; // the first initally focused year
    const difference = targetYear - startYear;

    const [fIndex, setFIndex] = useState(startPoint); // index representing the currently focused year

    const rotationConst = 333; // travel needed to traverse one figure
    const animationTime = 100; // time for each animation

    // list of years to display (+- 2)
    const yearList = [];
    for (let i = startYear - yearPadding; i <= targetYear + yearPadding; i++) {
        yearList.push(i);
    }

    const maxYear = difference + yearPadding;
    const minYear = difference - yearPadding;

    // Trigger on mount once to trigger other useEffect
    useEffect(() => {
        setFIndex(startPoint);
    }, []);

    
    useEffect(() => {
        if (fIndex < maxYear) {
            const timer = setTimeout(() => {
                setFIndex(fIndex + 1); // increment
            }, animationTime);
            // console.log(fIndex);
            return () => clearTimeout(timer);
        }
    }, [fIndex]);

    // animate opacity based on if it is focused (index)
    const calcOpacity = (focused, subfocused, index) => {
        if (focused) {
            // if the index represents the target year
            if (difference == index - yearPadding) {
                return 1;
            } else {
                return 0.3;
            }
        } else {
            return (subfocused ? 0.3 : 0.2);
        }
    }

    return (
        <figure className="relative w-full h-[10vh] mt-8 flex-row-start pl- overflow-x-clip">
            {yearList.map((year, index) => {
                const focused = index == fIndex;
                const subfocused = index == fIndex + 1 || index == fIndex - 1;
                
                return (
                    <div
                        key={index}
                        className="w-96"
                    >
                        <motion.p
                            initial={{
                                skew: -12,
                                opacity: calcOpacity(focused, subfocused, index),
                                scale: focused ? 1.05 : subfocused ? 0.9 : 0.75,
                                marginRight: focused ? 50 : subfocused ? 5 : 4,
                                marginLeft: focused ? 40 : subfocused ? 5 : 4,
                                x: -50,
                            }}
                            animate={{
                                opacity: calcOpacity(focused, subfocused, index),
                                scale: focused ? 1.05 : subfocused ? 0.9 : 0.75,
                                marginRight: focused ? 50 : subfocused ? 5 : 4,
                                marginLeft: focused ? 40 : subfocused ? 5 : 4,
                                x: -50 - rotationConst * (fIndex - 2),
                            }}
                            className={`                      
                            font-saira text-9xl`}
                        >
                            {year}
                        </motion.p>
                    </div>
                );
            })}
        </figure>
    );
};

export default Year;
