import Waves from "@/components/Waves";
import { JudgesForm } from "@/components/judges/JudgesLogin";

const page = () => {
    return (
        <div className="bg-black relative">
            <Waves/>
            <JudgesForm isLogin={true}/>
        </div>
    );
};


export default page;