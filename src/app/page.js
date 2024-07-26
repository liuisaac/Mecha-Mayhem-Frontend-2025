import Image from "next/image";
import Hero from "@/components/home/Hero";
import Calgary from "@/components/home/Calgary";
import Awards from "@/components/home/Awards";
import Waves from "@/components/Waves";
import dynamic from "next/dynamic";

// dynamically loading with ssr disabled, weird r3F drei thing
const Venue = dynamic(() => import("@/components/home/Venue"), {
    ssr: false,
});

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
