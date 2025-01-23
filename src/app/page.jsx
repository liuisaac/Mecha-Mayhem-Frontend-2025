import dynamic from "next/dynamic";
import Waves from "@/components/Waves";
import Hero from "@/components/home/desktop/Hero";

// Dynamically load components with SSR disabled
const Calgary = dynamic(() => import("@/components/home/desktop/Calgary"), { ssr: false });
const Awards = dynamic(() => import("@/components/home/desktop/Awards"), { ssr: false });
const Venue = dynamic(() => import("@/components/home/desktop/Venue"), { ssr: false });

export default function Home() {
    return (
        <main className="relative w-screen bg-black overflow-x-hidden">
            <Waves />
            <Hero />   
            <Calgary />
            <Awards /> 
            <Venue />  
        </main>
    );
}
