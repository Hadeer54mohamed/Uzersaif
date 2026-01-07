"use client";

import { Wallet, Clock, HeartHandshake,Stamp  } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const guaranteeItems = [
 {
  icon: (
    <Stamp className="w-7 h-7 text-primary rotate-[-8deg]" />
  ),
  title: "ختم بدو واحة الفرافرة",
  desc: "مش شرط مكتوب… ده عهد وكلمة شرف بدوية قدّامك.",
},

  {
    icon: <Clock className="w-7 h-7 text-primary" />,
    title: "إحترام الوقت والعقل والمال",
    desc: "ده لقوة صدق كلمتنا، واحترامًا ليك كضيف، ولمالك، ولعقلك.",
  },
  {
    icon: <Wallet className="w-7 h-7 text-primary" />,
    title: "فلوسك في أمان",
    desc: "تسترد فلوسك كاملة بدون نقاش لو لغّيت قبل موعد الرحلة بـ 7 أيام.",
  },
  {
    icon: <HeartHandshake className="w-7 h-7 text-primary" />,
    title: "راحتك مسؤوليتنا",
    desc: "أثناء الرحلة، راحتك أولويتنا في حدود احترام المحمية وروح التجربة.",
  },
];

export default function Guarantee() {
  return (
    <section className="relative pt-8 pb-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#0a0e19] to-black/95" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold text-white mb-4">
            ضــمـان بدو واحة الفرافرة
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
          التخييم عندنا مش فندق… لكن إحنا بدو، وكلمتنا شرف. وبسبب خبرتنا 26 سنة في الصحراء
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {guaranteeItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15, duration: 0.45 }}
              className="
                rounded-2xl p-4
                bg-white/10 backdrop-blur-xl
                shadow-xl hover:scale-105
                transition-all
              "
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Line */}
      
        <motion.div
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.6 }}
  className="mt-13 text-center"
>
  <p className="text-white/80 mb-6 text-lg">
    With <span className="text-primary font-semibold">Uzer Saif</span>, you’re in safe hands.
  </p>

  <motion.a
    href="/contact"
    whileHover={{ scale: 1.06, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="inline-block"
  >
    <Button
      size="lg"
      className="bg-gradient-to-r from-primary to-primary-dark text-white font-bold px-6 py-3 rounded-2xl shadow-xl hover:shadow-primary/40 transition-all"
    >
      احجز وأنت مطمّن
    </Button>
  </motion.a>
</motion.div>

      </div>
    </section>
  );
}
