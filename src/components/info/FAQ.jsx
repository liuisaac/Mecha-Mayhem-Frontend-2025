import React from "react";
import QA from "./QA";
import Link from "next/link";

const FAQ = () => {
  return (
    <div className="flex-col-centered max-w-screen-lg px-6 z-10">
      <div className="flex-col-centered">
        <h1 className="text-4xl font-saira text-center pb-4">FREQUENTLY ASKED QUESTIONS</h1>
        <figure className="flex-col-centered">
          <div className="flex pt-7 pb-4 border-t-8 border-b-8 border-[#2F2F2F]">
            <div className="flex-col-left text-wrap">
              <span className="font-bebas text-3xl">Q: How do I register for the event?</span>
              <span className="font-lexend text-lg flex-col-left gap-4">
                <p>
                  A: You can sign up for the event{" "}
                  <Link
                    href={"https://www.zeffy.com/ticketing/7f86c0af-0963-462e-ad8e-c350a9b042ab"}
                    className="text-blue-500 underline"
                  >
                    here
                  </Link>{" "}
                  if you are a spectator. There isn&#39;t any cost; we just use this to help track
                  how many people attend.
                </p>
                <span>If you want to compete, please visit one of the following links.</span>
                <span className="flex-col-left">
                  <span className="font-bold">Middle School Competition:</span>
                  <Link
                    href={"https://www.zeffy.com/ticketing/7f86c0af-0963-462e-ad8e-c350a9b042ab"}
                    className="text-blue-500 underline"
                  >
                    https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-V5RC-24-5505.html#general-info
                  </Link>
                </span>
                <span className="flex-col-left">
                  <span className="font-bold">High School Competition:</span>
                  <Link
                    href={"https://www.zeffy.com/ticketing/7f86c0af-0963-462e-ad8e-c350a9b042ab"}
                    className="text-blue-500 underline"
                  >
                    https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-V5RC-24-5504.html#general-info
                  </Link>
                </span>
                <span className="flex-col-left">
                  <span className="font-bold">University Competition:</span>
                  <Link
                    href={"https://www.zeffy.com/ticketing/7f86c0af-0963-462e-ad8e-c350a9b042ab"}
                    className="text-blue-500 underline"
                  >
                    https://www.robotevents.com/robot-competitions/college-competition/RE-VURC-24-5506.html#general-info
                  </Link>
                </span>
              </span>
            </div>
          </div>
          <QA
            question={"What days should I attend?"}
            answer={`
                Mecha Mayhem 2025 will take place over three days, from February 7-9, 2025.
                We recommend attending all three days to experience the full event, including team competitions,
                interactive booths, and the award ceremonies.
                Each day offers different activities and opportunities to engage with the event.
                However, if you can only attend one day, we recommend Sunday, February 9, that will feature
                the eliminations bracket and crown the Mecha Mayhem 2025 Champions!`}
          />
          <QA
            question={"Is the event free?"}
            answer={`Yes, all spectators are free to attend Mecha Mayhem 2025.
              We encourage everyone—students, parents, educators, and the general public—to come and explore the exciting
              world of robotics and STEM education.`}
          />
          <QA
            question={"What should I expect at Mecha Mayhem?"}
            answer={`At Mecha Mayhem, you can expect a thrilling robotics competition featuring over 250 teams from around the world. 
              In addition to the matches, the event includes interactive booths from local tech companies and universities,
              opportunities to meet and network with industry professionals, and inspiring showcases of the latest in robotics
              and STEM innovation.
              Its a high-energy environment where innovation and teamwork take center stage.`}
          />
          <QA
            question={"Is there parking at the event?"}
            answer={`Yes, parking is available at the BMO Centre, where the event will be held.
              There are several parking lots around the venue. We recommend arriving early to secure a spot, 
              as parking can fill up quickly, especially on peak days. Unfortunately, there is no free parking.`}
          />
          <QA
            question={"What ages is the event for?"}
            answer={`Mecha Mayhem is designed for a wide age range, from middle school students
                to collegiate participants. However, the event is family-friendly and open to all ages.
                Whether you're a student interested in robotics, a parent supporting your child, or simply curious about STEM, there’s something for everyone at Mecha Mayhem.`}
          />
        </figure>
      </div>
    </div>
  );
};

export default FAQ;
