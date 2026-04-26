import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/aboutsection";
import InvestmentStrategies from "@/components/investment-strategies";
import WhyChooseSection from "@/components/why-chooose-section";
import HomeContent from "@/components/home-content";

export const page = () => {
  return (
    <>
      <Navbar />

      <HomeContent/>

      {/* <HeroSection badge={"AMFI REGISTERED DISTRIBUTOR"} title={"Secure Your Future with Expert Mutual Fund Distribution"} highlight={"Empowering your financial journey with data-driven insights and personalized mutual fund strategies tailored to your long-term wealth goals."} image={"/hero-img.jpg"} />

      <AboutSection/>

      <InvestmentStrategies/> */}

      {/* <WhyChooseSection/> */}

    </>
  );
}


export default page