import Waves from "@/components/Waves";
import {JudgesLogin} from "@/components/judges/Judges";

const page = () => {
    return (
        <div className="bg-black relative">
            <Waves/>
            <JudgesLogin/>
        </div>
    );
};


export default page;