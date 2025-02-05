"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

const sponsorTiers = ["presenting", "gold", "silver", "bronze", "supporter"];
const colorMap = {
  gold: "#F1C232",
  silver: "#CCCCCC",
  bronze: "#B47606",
};

function Sponsor({ name, image, tier }) {
  return (
    <figure className="flex-row-centered w-64 mx-12">
      <div className="relative w-full h-40">
        <Image
          src={image}
          alt={`${name} : ${tier}`}
          className="object-contain"
          sizes="(max-width: 640px) 100vw, 640px"
          fill
          priority
        />
      </div>
    </figure>
  );
}

export default function SponsorsPage() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    fetch("/local_api/sponsors")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setSponsors(data.sponsors || []);
      })
      .catch((err) => {
        console.error("Failed to fetch sponsors:", err);
      });
  }, []);

  return (
    <section className="py-12 w-screen">
                <header className="hidden sm:flex flex-row-centered text-8xl z-10 ml-16 font-saira w-full">
                    OUR SPONSORS
                </header>

                <header className="sm:hidden text-5xl z-10 font-saira flex-col-centered w-full">
                    OUR
                    <span className="text-7xl z-10 font-saira">SPONSORS</span>
                </header>
      <figure className="flex-row-centered w-full px-4 mt-16">
        <div className="relative w-full h-48">
          <Image
            src="/sponsors/event_2025.svg"
            alt="Mecha Mayhem Event 2025"
            className="object-contain"
            fill
          />
        </div>
      </figure>

      <div className="flex flex-row items-center justify-center mt-16 w-screen px-20">
        <figure className="w-[75vw] h-[1px] bg-white rounded-sm" />
        <h2 className="font-bebas text-4xl w-96 text-center">
          PRESENTED BY
        </h2>
        <figure className="w-[75vw] h-[1px] bg-white rounded-sm" />
      </div>

      {sponsorTiers.map((tier) => {
        const tierSponsors = sponsors.filter((s) => s.tier === tier);
        if (tierSponsors.length === 0) return null;

        return (
          <div key={tier}>
            {tier !== "presenting" && (
              <div className="w-screen flex-row-centered my-8">
                <h2 className="font-bebas text-7xl text-center text-white">
                  {tier === "supporter" ? (
                    "SUPPORTERS"
                  ) : (
                    <>
                      <span className={colorMap[tier]}>
                        {tier}
                      </span>{" "}
                      SPONSORS
                    </>
                  )}
                </h2>
              </div>
            )}
            <div
              className={`w-screen mb-12 ${
                tier === "presenting" ? "bg-transparent" : "bg-white"
              } flex flex-row items-center justify-center`}
            >
              <div className={`grid lg:${tier == "presenting" ? "grid-cols-2" : "grid-cols-3"} md:grid-cols-2 sm:grid-cols-1 gap-8 w-full max-w-6xl px-4 place-items-center`}>
                {tierSponsors.map((sponsorItem) => (
                  <Sponsor key={sponsorItem.name} {...sponsorItem} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}