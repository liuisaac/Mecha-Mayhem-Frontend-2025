import React from "react";

const QA = ({ question, answer }) => {
  return (
    <div className="flex pt-7 py-4 border-b-8 border-[#2F2F2F]">
      <div className="flex-col-left text-wrap">
        <span className="font-bebas text-3xl">Q: {question}</span>
        <p className="font-lexend text-lg pt-6">A: {answer}</p>
      </div>
    </div>
  );
};

export default QA;
