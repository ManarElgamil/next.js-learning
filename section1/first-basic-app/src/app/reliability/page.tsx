import Hero from "@/components/hero";
import reliabilityImg from "public/reliability.jpg";


export default function ReliabilityPage(){
    return(
        <div>
            <Hero 
                imgData={reliabilityImg}
                imgAlt="Reliability Image"
                title="Super High reliability applications"
            />
        </div> 
    );
}