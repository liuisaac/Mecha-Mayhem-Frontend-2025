import React from "react";

const QA = ({ question, answer }) => {
    return (
        <div className="flex- w-[80vw] pt-10 pb-10 border-b-8 border-[#2F2F2F]">
            <div className="flex-col-left w-[80vw] text-wrap">
                <span className="font-bebas text-6xl">Q: {question}</span>
                <p className="font-lexend text-4xl mt-24">A: {answer}</p>
            </div>
        </div>
    );
};

export default QA;
