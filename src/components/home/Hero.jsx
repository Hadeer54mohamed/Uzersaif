"use client";

import { Button } from "../ui/button";
import { MapPin, Calendar, Tent, Users  } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Stats animation
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
      icon: <Tent className="w-10 h-10 text-gradient-primary mx-auto mb-3" />,
      value: "Real Deep Experience",
      label: "تجربة محسوبة",
      description:
        "برنامج مدروس بالساعة يخليك تعيش الصحراء بعمق حقيقي من غير عشوائية ولا إجهاد.",
    },
    {
      icon: (
        <Calendar className="w-10 h-10 text-gradient-secondary mx-auto mb-3" />
      ),
      value: "26 سنة خبرة",
      label: "تنظيم بدوي",
      description:
        "خبرة طويلة وتنفيذ مئات الرحلات الناجحة بضمانات واضحة وأسلوب احترافي.",
    },
    {
      icon: <MapPin className="w-10 h-10 text-gradient-primary mx-auto mb-3" />,
      value: "Adventure مختلفة",
      label: "لناس شبهك",
      description:
        "تجربة نادرة وآمنة للي زهق من الرحلات التقليدية ويدوّر على معنى حقيقي.",
    },
    {
      icon: <Users className="w-10 h-10 text-gradient-secondary mx-auto mb-3" />,
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

  return (
    <section
    ref={heroRef}
    className="relative bg-black flex flex-col items-center justify-start overflow-hidden pt-20 pb-24"
  >
  
  
  
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
   className="absolute inset-0 w-full h-full object-cover block"
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
      className="absolute inset-0 w-full h-full object-cover block"
    />
  )}

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
</motion.div>


      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center space-y-4"
        >
          <h1
            className="text-[clamp(1.6rem,4.2vw,4.2rem)] font-bold text-white mb-2 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark"
            dir="rtl"
          >
            اكتشف سحر مصر مع{" "}
            <span className="text-primary" dir="ltr">
              UzerSaif
            </span>
          </h1>

          <h2 className="text-[clamp(0.95rem,3.2vw,2.4rem)] font-semibold text-white/95 drop-shadow-xl">
            تقدر تسيب الدنيا… وتطلع تعيش{" "}
            <span className="text-primary">3 أيام</span> على كوكب تاني
            <br />
             وانت متأكد إنك {" "}
             <span className="text-primary">مش هتندم؟</span>
          </h2>
        </motion.div>

        {/* Paragraph */}
        <p className="text-[clamp(0.85rem,1.9vw,1.15rem)] text-white/90 mt-4 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow">
          تجربة سفر متكاملة بتجمع إحساس الفضاء وجمال الصحراء البيضاء، بتنظيم
          بدوي بخبرة <span className="text-primary font-semibold">26 سنة</span>
          تديك مغامرة مختلفة وآمنة فعلًا.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-14">
          <motion.a
            href="/Trips"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-dark text-white font-bold px-12 py-6 rounded-2xl shadow-xl transition-all hover:shadow-primary/40"
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
              className="border-2 border-white/40 text-white font-bold px-12 py-6 rounded-2xl backdrop-blur-md hover:bg-white/20 hover:border-white/60 transition-all"
            >
              احجز الآن
            </Button>
          </motion.a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={statVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-3xl p-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl border border-white/20 shadow-2xl hover:shadow-primary/30 hover:scale-105 hover:border-primary/50 transition-all duration-500 text-center overflow-hidden"
            >
              {/* Background gradient effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-lg md:text-2xl font-extrabold text-white mb-3 drop-shadow-lg">
                  {stat.value}
                </h3>
                <p className="text-white/95 font-bold mb-2 text-sm md:text-base">{stat.label}</p>
                <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-dark to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
