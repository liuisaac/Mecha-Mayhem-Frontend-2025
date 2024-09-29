import Image from "next/image";
import Hero from "@/components/home/desktop/Hero";
import Calgary from "@/components/home/desktop/Calgary";
import Awards from "@/components/home/desktop/Awards";
import Waves from "@/components/Waves";
import dynamic from "next/dynamic";

// dynamically loading with ssr disabled, weird r3F drei thing
const Venue = dynamic(() => import("@/components/home/desktop/Venue"), {
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
