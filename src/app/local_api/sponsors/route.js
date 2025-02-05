import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const sponsorTiers = ["presenting", "gold", "silver", "bronze", "supporter"];

export async function GET(request) {
  try {
    const sponsors = [];

    sponsorTiers.forEach((tier) => {
      const tierPath = path.join(process.cwd(), "public", "sponsors", tier);
      if (fs.existsSync(tierPath)) {
        const sponsorFiles = fs.readdirSync(tierPath);
        sponsorFiles.forEach((file) => {
          const sponsor = {
            tier,
            image: `/sponsors/${tier}/${file}`,
            name: path.parse(file).name,
          };
          // Prevent duplicates
          if (!sponsors.some((s) => s.image === sponsor.image)) {
            sponsors.push(sponsor);
          }
        });
      }
    });

    return NextResponse.json({ sponsors });
  } catch (error) {
    console.error("Failed to get sponsors:", error);
  }
}