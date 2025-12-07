"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DesertTrip from "@/components/home/DesertTrip";

const TripsPage = () => {
  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />
      <DesertTrip />
      <Footer />
    </div>
  );
};

export default TripsPage;
