import Image from "next/image";
import homeImg from "public/home.jpg";
import Hero from "@/components/hero";

export default function Home() {
  return <div>
    <Hero 
      imgData={homeImg}
      imgAlt="Home Image"
      title="Professional Cloud Hosting"
      />
  </div>
  
  
}
