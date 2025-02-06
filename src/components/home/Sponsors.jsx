"use client";

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
            <div className="relative w-full h-40 overflow-hidden">
                <img
                    key={name}
                    src={image}
                    alt={`${name} : ${tier}`}
                    className="object-contain w-full h-40"
                />
            </div>
        </figure>
    );
}

export default function SponsorsPage() {
    const [sponsors, setSponsors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadImages = async () => {
            try {
                const res = await fetch("/local_api/sponsors");
                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                setSponsors(data.sponsors || []);
            } catch (err) {
                console.error("Failed to fetch sponsors:", err);
            } finally {
                setLoading(false);
            }
        };

        loadImages();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

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
                const tierSponsors = sponsors[tier] || [];
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
                                            <span
                                                style={{
                                                    color: colorMap[tier],
                                                }}
                                            >
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
                                tier === "presenting"
                                    ? "bg-transparent"
                                    : "bg-white"
                            } flex flex-row items-center justify-center`}
                        >
                            <div
                                className={`grid lg:${
                                    tier == "presenting"
                                        ? "grid-cols-2"
                                        : "grid-cols-3"
                                } md:grid-cols-2 sm:grid-cols-1 gap-8 w-full max-w-6xl px-4 place-items-center`}
                            >
                                {tierSponsors.map((sponsorItem) => (
                                    <Sponsor
                                        key={sponsorItem.name}
                                        {...sponsorItem}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
