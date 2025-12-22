// This function is basic React component that represents the Scale page.
// without it there is no react components, 
// so if you visit the route without exporting the function it will throw an error
import Hero from "@/components/hero";
import scaleImg from "public/scale.jpg";

export default function ScalePage() {
    return (
        <div>
            <Hero 
                imgData={scaleImg}
                imgAlt="Scale Image"
                title="No limits for scaling"
            />
        </div> 
    );
}