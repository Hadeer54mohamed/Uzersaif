"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DesertTrip from "@/components/home/DesertTrip";
import { SectionDivider } from "@/components/ui/SectionDivider";
import {
  StarParticle,
  ShootingStar,
  generateStars,
  generateMeteors,
} from "@/components/SpaceElements";
import { Sparkles, Compass, Map } from "lucide-react";

const TripsPage = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    setStars(generateStars(80));
    setMeteors(generateMeteors(5, { delayMultiplier: 4, baseRepeatDelay: 10 }));
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden pt-18">
      {/* 🌌 خلفية فضائية ثابتة */}
      <div className="fixed inset-0 z-0 bg-cosmic-space" />

      {/* ✨ طبقة النجوم */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        {stars.map((star) => (
          <StarParticle key={star.id} star={star} />
        ))}
      </div>

      {/* ☄️ طبقة الشهب */}
      <div className="fixed inset-0 pointer-events-none z-[2]">
        {meteors.map((meteor) => (
          <ShootingStar key={meteor.id} meteor={meteor} />
        ))}
      </div>

      {/* توهج في الزوايا */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 bg-[#2A1F3F]" />
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full blur-[100px] opacity-12 bg-[#F47A1F]" />
      </div>

      <Navbar transparent />

      {/* Hero Section */}
      <section className="relative z-10 h-[30vh] min-h-[220px] flex items-center justify-center overflow-hidden">

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-16 h-16 opacity-20"
        >
          <Compass className="w-full h-full text-[#F47A1F]" />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-28 left-10 w-14 h-14 opacity-15"
        >
          <Map className="w-full h-full text-[#FFB85C]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-4 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F47A1F]/10 border border-[#F47A1F]/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#FFB85C]" />
            <span className="text-sm text-[#B6BDD6]">اكتشف مغامراتنا</span>
          </motion.div>
          
          <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-black mb-4 leading-tight">
            <span className="text-gradient-fire">رحلاتنا</span>
            <span className="text-[#F5F7FA]"> المميزة</span>
          </h1>
          
          <p className="text-[clamp(1rem,2.5vw,1.35rem)] text-[#B6BDD6] leading-relaxed max-w-xl mx-auto">
            اختر رحلتك المثالية واستعد لمغامرة 
            <span className="text-[#FFB85C]"> لا تُنسى</span>
          </p>
        </motion.div>

      
      </section>

      <SectionDivider />

      {/* Desert Trip Component */}
      <div className="relative z-10">
        <DesertTrip />
      </div>

      <SectionDivider />
      <Footer />
    </div>
  );
};

export default TripsPage;
