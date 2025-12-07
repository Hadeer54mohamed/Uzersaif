"use client";

import { Button } from "../ui/button";
import { MapPin, Calendar, Tent } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

// Stats animation
const statVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const Hero = () => {
  const stats = [
    {
      icon: <Calendar className="w-10 h-10 text-gradient-primary mx-auto mb-3" />,
      value: "3 أيام",
      label: "مدة الرحلة",
      description:
        "استمتع برحلة تمتد لثلاثة أيام وسط تكوينات الصحراء البيضاء وسحر الطبيعة.",
    },
    {
      icon: <MapPin className="w-10 h-10 text-gradient-secondary mx-auto mb-3" />,
      value: "وجهة واحدة",
      label: "الصحراء البيضاء",
      description:
        "وجهة ساحرة تجمع بين التكوينات الطبيعية الفريدة والكثبان الرملية.",
    },
    {
      icon: <Tent className="w-10 h-10 text-gradient-primary mx-auto mb-3" />,
      value: "تخييم ليلي",
      label: "تجربة بدوية",
      description:
        "عِش تجربة التخييم واستمتع بمشاهدة السماء ليلاً بعيدًا عن أضواء المدينة.",
    },
  ];

  const heroRef = useRef(null);
  const y = useMotionValue(0);
  const yTransform = useTransform(y, [0, 300], [0, -45]);

  useEffect(() => {
    const handleScroll = () => y.set(window.scrollY / 3);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [y]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[110vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20"
    >
      {/* Background with Parallax */}
      <motion.div
        style={{ y: yTransform }}
        className="absolute inset-0 w-full h-full overflow-hidden will-change-transform"
      >
        <img
          src="/hero-travel.jpg"
          alt="الصحراء البيضاء"
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        {/* Improved contrast */}
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
            className="text-[clamp(2rem,5vw,6rem)] font-bold text-white mb-2 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark"
            dir="rtl"
          >
            اكتشف سحر مصر مع{" "}
            <span className="text-primary" dir="ltr">
              UzerSaif
            </span>
          </h1>

          <h2 className="text-[clamp(1.1rem,4vw,3rem)] font-semibold text-white/95 drop-shadow-xl">
            رحلة خاصة إلى الصحراء البيضاء – مغامرة لا تُنسى
          </h2>
        </motion.div>

        {/* Paragraph */}
        <p className="text-[clamp(1rem,2.4vw,1.5rem)] text-white/90 mt-4 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow">
          استكشف التكوينات البيضاء الساحرة، الكثبان الذهبية، والواحات الخضراء،
          واستمتع بتجربة بدوية أصيلة تحت سماء مليئة بالنجوم.
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={statVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl p-6 bg-white/10 backdrop-blur-xl shadow-xl hover:scale-105  transition-all text-center"
            >
              {stat.icon}
              <h3 className="text-3xl font-extrabold text-white">{stat.value}</h3>
              <p className="text-white/90 font-semibold mb-1">{stat.label}</p>
              <p className="text-white/75 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
