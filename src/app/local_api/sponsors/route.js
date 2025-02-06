import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const sponsorTiers = ["presenting", "gold", "silver", "bronze", "supporter"];

export async function GET() {
  try {
    const sponsors = {};

    sponsorTiers.forEach((tier) => {
      const tierPath = path.join(process.cwd(), "public", "sponsors", tier);
      if (fs.existsSync(tierPath)) {
        const sponsorFiles = fs.readdirSync(tierPath);
        sponsors[tier] = sponsorFiles.map((file) => ({
          tier,
          image: `/sponsors/${tier}/${file}`,
          name: path.parse(file).name,
        }));
      } else {
        sponsors[tier] = [];
      }
    });

    console.log(sponsors);

    return NextResponse.json({ sponsors });
  } catch (error) {
    console.error("Failed to get sponsors:", error);
    return NextResponse.json({ error: "Failed to get sponsors" }, { status: 500 });
  }
}