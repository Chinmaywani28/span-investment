import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/aboutsection";
import InvestmentStrategies from "@/components/investment-strategies";
import WhyChooseSection from "@/components/why-chooose-section";

export const page = () => {
  return (
    <>
      <HeroSection badge={"SEBI REGISTERED ADVISORY"} title={"Smart Investing Simplified"} image={"/hero-img.jpg"} highlight={"Navigate the complex world of mutual funds with data-driven insights. wheter you seek aggressive growth or stable income , our expert led strategies aligned with your financial destiny"} />
    </>
  );
}


export default page