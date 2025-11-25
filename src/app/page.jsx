import CTA from "@/Components/CTA";
import FAQ from "@/Components/FAQ";
import Features from "@/Components/Features";
import Hero from "@/Components/Hero";
import Testimonials from "@/Components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <title>EduMaster</title>
      <Hero></Hero>
      <Features></Features>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      <CTA></CTA>
    </div>
  );
}
