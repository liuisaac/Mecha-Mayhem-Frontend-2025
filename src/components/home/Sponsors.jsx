import fs from "fs";
import path from "path";
import Image from "next/image";
const sponsorTiers = ["presenting", "gold", "silver", "bronze", "supporter"];

const colorMap = {
    gold: "#F1C232",
    silver: "#CCCCCC",
    bronze: "#B47606",
};

function getSponsors() {
    const sponsors = [];

    sponsorTiers.forEach((tier) => {
        const tierPath = path.join(process.cwd(), "public", "sponsors", tier);
        if (fs.existsSync(tierPath)) {
            const sponsorFiles = fs.readdirSync(tierPath);
            sponsorFiles.forEach((file) => {
                console.log(`/sponsors/${tier}/${file}`);
                sponsors.push({
                    tier,
                    image: `/sponsors/${tier}/${file}`,
                    name: path.parse(file).name,
                });
            });
        }
    });

    return sponsors;
}

const Sponsor = ({ name, image, tier }) => (
    <figure className="flex-row-centered w-64 mx-12">
        <div className="relative w-full h-40" href="/">
            <Image
                src={image}
                alt={`${name} : ${tier}`}
                style={{ objectFit: "contain" }}
                fill
                priority
            />
        </div>
    </figure>
);

function getGridColumns(count) {
    if (count <= 3) return `grid-cols-${count}`;
    if (count % 3 === 0) return "grid-cols-3";
    if (count % 2 === 0) return "grid-cols-2";
    return "grid-cols-3";
}

export default function Sponsors() {
    const sponsors = getSponsors();

    return (
        <section className="py-12 w-screen">
            <header className="flex flex-row items-center justify-center font-saira text-8xl">
                OUR SPONSORS
            </header>

            <figure className="flex-row-centered w-full px-4 mt-16">
                <div className="relative w-full h-48" href="/">
                    <Image
                        src={"/sponsors/event_2025.svg"}
                        alt={`Mecha Mayhem Event 2025`}
                        style={{ objectFit: "contain" }}
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
                const tierSponsors = sponsors.filter(
                    (sponsor) => sponsor.tier === tier
                );
                if (tierSponsors.length === 0) return null;

                const gridColumns = getGridColumns(tierSponsors.length);

                return (
                    <>
                        {!(tier == "presenting") && (
                            <div className="w-screen flex-row-centered my-8">
                                <h2 className="font-bebas text-7xl text-center text-white">
                                    {tier == "supporter" ? (
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
                            key={tier}
                            className={`w-screen mb-12 ${
                                tier == "presenting"
                                    ? "bg-transparent"
                                    : "bg-white"
                            } flex flex-row items-center justify-center`}
                        >
                            <div
                                className={`grid ${gridColumns} gap-8 w-full max-w-6xl px-4 place-items-center`}
                            >
                                {tierSponsors.map((sponsor) => (
                                    <Sponsor key={sponsor.name} {...sponsor} />
                                ))}
                            </div>
                        </div>
                    </>
                );
            })}
        </section>
    );
}
