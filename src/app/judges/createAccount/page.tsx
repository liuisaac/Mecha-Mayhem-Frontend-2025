import Waves from "@/components/Waves";
import {JudgesCreateAccount} from "@/components/judges/Judges";

const page = () => {
    return (
        <div className="bg-black relative">
            <Waves/>
            <JudgesCreateAccount/>
        </div>
    );
};


export default page;