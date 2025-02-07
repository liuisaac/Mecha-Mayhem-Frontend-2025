import dynamic from "next/dynamic";
import Waves from "@/components/ui/Waves";
import Hero from "@/components/home/Hero";

// Dynamically load components with SSR disabled
const Calgary = dynamic(() => import("@/components/home/Calgary"), { ssr: false });
const Awards = dynamic(() => import("@/components/home/Awards"), { ssr: false });
const Venue = dynamic(() => import("@/components/home/Venue"), { ssr: false });
const Sponsors = dynamic(() => import("@/components/home/Sponsors"), { ssr: false });

export default function Home() {
    return (
        <main className="relative w-screen bg-black overflow-x-hidden">
            <Waves />
            <Hero />   
            <Calgary />
            <Awards /> 
            <Venue />  
            <Sponsors />
        </main>
    );
}
