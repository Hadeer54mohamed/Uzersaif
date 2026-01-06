"use client";

import Hero from "../components/home/Hero";
import FeaturedTrips from "../components/home/FeaturedTrips.jsx";
/* import WhyChooseUs from "../components/home/WhyChooseUs"; */
import FAQ from "../components/home/FAQ";
import Testimonials from "../components/home/Testimonials";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Guarantee from "../components/home/Guarantee";
import { SectionDivider } from "../components/ui/SectionDivider";
import Experiences from "../components/home/Experiences";
import BeforeBooking from "../components/home/BeforeBooking";
import AssuranceSection from "../components/home/AssuranceSection";

const Home = () => {
  return (
    <div className="min-h-screen">
     <Navbar transparent />
      <Hero />
      <SectionDivider />
       <Guarantee />
      <SectionDivider />
      <Experiences />
      <SectionDivider />
      <BeforeBooking />
      <SectionDivider />
      <AssuranceSection />
      <SectionDivider />
      <FeaturedTrips />
      {/* <WhyChooseUs /> */}
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
