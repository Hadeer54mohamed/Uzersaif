"use client";

import { Button } from "../ui/button";
import { MapPin, Calendar, Tent, Users } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  StarParticle,
  ShootingStar,
  generateStars,
  generateMeteors,
} from "@/components/SpaceElements";

const statVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const Hero = () => {
  const stats = [
    {
      icon: <Tent className="w-8 h-8 icon-fire" />,
      value: "Real Deep Experience",
      label: "تجربة محسوبة",
      description:
        "برنامج مدروس بالساعة يخليك تعيش الصحراء بعمق حقيقي من غير عشوائية ولا إجهاد.",
    },
    {
      icon: <Calendar className="w-8 h-8 icon-fire" />,
      value: "26 سنة خبرة",
      label: "تنظيم بدوي",
      description:
        "خبرة طويلة وتنفيذ مئات الرحلات الناجحة بضمانات واضحة وأسلوب احترافي.",
    },
    {
      icon: <MapPin className="w-8 h-8 icon-fire" />,
      value: "Adventure مختلفة",
      label: "لناس شبهك",
      description:
        "تجربة نادرة وآمنة للي زهق من الرحلات التقليدية ويدوّر على معنى حقيقي.",
    },
    {
      icon: <Users className="w-8 h-8 icon-fire" />,
      value: "Adventure Meaningful",
      label: "تجربة معمولة ليك",
      description:
        "سواء مسافر لوحدك، مع شريك حياتك، أو مع ناس بتقدّر الهدوء والتجارب اللي ليها معنى حقيقي.",
    },
  ];

  const heroRef = useRef(null);
  const y = useMotionValue(0);
  const yTransform = useTransform(y, [0, 300], [0, -45]);
  const [isMobile, setIsMobile] = useState(false);
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const handleScroll = () => y.set(window.scrollY / 3);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [y]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setStars(generateStars(100));
    setMeteors(generateMeteors(6, { delayMultiplier: 3, baseRepeatDelay: 8 }));
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-start overflow-hidden pt-16 pb-12"
    >
      {/* ✨ طبقة النجوم */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
        {stars.map((star) => (
          <StarParticle key={star.id} star={star} />
        ))}
      </div>

      {/* ☄️ طبقة الشهب */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[6]">
        {meteors.map((meteor) => (
          <ShootingStar key={meteor.id} meteor={meteor} />
        ))}
      </div>

      {/* توهج في الزوايا */}
      <div className="absolute inset-0 pointer-events-none z-[4]">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-25 glow-purple" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 glow-fire" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 glow-blue" />
      </div>

      {/* Background with Parallax */}
      <motion.div
        style={{ y: yTransform }}
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      >
        {/* Desktop Video */}
        {!isMobile && (
          <video
            src="/uzer.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover block opacity-80"
          />
        )}

        {/* Mobile Video */}
        {isMobile && (
          <video
            src="/mob.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover block opacity-80"
          />
        )}

        {/* 🌌 Cosmic Overlay */}
        <div className="absolute inset-0 overlay-hero" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center space-y-2"
        >
          <h1
            className="text-[clamp(1.6rem,4.2vw,4.2rem)] font-bold mb-1 drop-shadow-lg text-primary"
            dir="rtl"
          >
            اكتشف سحر مصر مع{" "}
            <span className="font-bold text-gradient-fire" dir="ltr">
              UzerSaif
            </span>
          </h1>

          <h2 className="text-[clamp(0.95rem,3.2vw,2.4rem)] font-semibold drop-shadow-xl text-primary/95">
            تقدر تسيب الدنيا… وتطلع تعيش{" "}
            <span className="text-fire">3 أيام</span> على كوكب تاني
            <br />
            وانت متأكد إنك{" "}
            <span className="text-fire">مش هتندم؟</span>
          </h2>
        </motion.div>

        {/* Paragraph */}
        <p className="text-[clamp(0.85rem,1.9vw,1.15rem)] mt-2 mb-6 max-w-2xl mx-auto leading-relaxed drop-shadow text-primary/90">
          تجربة سفر متكاملة بتجمع إحساس الفضاء وجمال الصحراء البيضاء، بتنظيم
          بدوي بخبرة <span className="text-fire font-semibold">26 سنة</span>
          تديك مغامرة مختلفة وآمنة فعلًا.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
          <motion.a
            href="/Trips"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="font-bold px-10 py-5 rounded-2xl shadow-xl transition-all btn-fire"
            >
              استكشف الرحلات
            </Button>
          </motion.a>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="font-bold px-10 py-5 rounded-2xl backdrop-blur-md transition-all btn-outline-fire"
            >
              احجز الآن
            </Button>
          </motion.a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 max-w-6xl mx-auto px-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={statVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-2xl p-3 backdrop-blur-xl shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden card-cosmic"
            >
              {/* Background gradient effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br from-[#F47A1F20] to-[#FFB85C15]" />
              
              {/* Content */}
              <div className="relative z-10 flex items-start gap-2">
                <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-extrabold mb-0.5 drop-shadow-lg text-primary">
                    {stat.value}
                  </h3>
                  <p className="font-bold mb-0.5 text-xs md:text-sm text-primary/95">
                    {stat.label}
                  </p>
                  <p className="text-xs leading-relaxed text-secondary">
                    {stat.description}
                  </p>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-gradient-to-r from-[#F47A1F] to-[#FFB85C]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
