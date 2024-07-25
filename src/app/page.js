import Image from "next/image";
import Hero from "@/components/home/Hero";
import Calgary from "@/components/home/Calgary";
import Awards from "@/components/home/Awards";
import Venue from "@/components/home/Venue";
import Waves from "@/components/Waves";

export default function Home() {
    return (
        <main className="relative w-screen bg-black">
            <Waves />

            <Hero />
            <Calgary />
            <Awards />
            <Venue />
        </main>
    );
}
