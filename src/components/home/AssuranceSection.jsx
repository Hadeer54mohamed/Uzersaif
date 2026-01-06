"use client";

import { motion } from "framer-motion";
import { Bed, Coffee, Shield, RefreshCcw } from "lucide-react";

const assurances = [
  {
    icon: Bed,
    color: "text-[#FE5F01]",
    title: "ضمان النوم المريح 😴",
    subtitle: "خيمة نظيفة… تتحمل أقصى برد ❄️",
    solutions: [
      "بطانية أو Sleeping Bag إضافية",
      "خيمة بديلة فورًا مع مرتبة + Sleeping Bag",
      "ترقية مجانية لأعلى تجهيز (Premium Setup) + خيمة سنجل لو محتاج",
    ],
  },
  {
    icon: Coffee,
    color: "text-[#FF8518]",
    title: "ضمان الأكل 🍽️",
    subtitle: "أكل طازة – كفاية – مظبوط في ميعاده",
    solutions: ["وجبة إضافية مجانية 🍪", "شاي زردا طول اليوم ☕"],
  },
  {
    icon: Shield,
    color: "text-[#FE5F01]",
    title: "ضمان الأمان 🛡️",
    subtitle: "كل لحظة تبات فيها وإنت مرتاح ومطمن",
    solutions: [
      "نقل لمكان أكثر أمانًا فورًا",
      "إضاءة إضافية / بطانية / تغيير مكان الخيمة",
      "وجود Guide بدوي جنبك طول الليل 👣",
    ],
  },
  {
    icon: RefreshCcw,
    color: "text-[#FF8518]",
    title: "ضمان الانسحاب بدون نقاش 🔄",
    subtitle: "لو لغّيت قبل 10 أيام → فلوسك كاملة",
    solutions: [
      "استرجاع كامل Cash أو تحويل",
      "تأكيد الإلغاء خلال 10 دقايق ⏱️",
    ],
  },
];

export default function AssuranceSection() {
  return (
    <section className="relative py-12 sm:py-14 md:py-18 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0e19] to-black" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FE5F01]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#FF8518]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-[clamp(1.75rem,5vw,3.2rem)] font-bold text-white mb-3 sm:mb-4 leading-tight px-2">
            ضمان بدو واحة الفرافرة
          </h2>
          <p className="text-white/90 text-[clamp(0.95rem,2.2vw,1.1rem)] leading-relaxed px-2">
            "التخييم عندنا مش فندق… لكن إحنا بدو، وكلمتنا شرف.
            وبسبب خبرتنا 26 سنة في الصحراء… بنضمن لك 4 ضمانات محددة وواضحة:"
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
          {assurances.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-xl shadow-xl md:hover:scale-[1.02] md:hover:bg-white/15 transition-all duration-300 border border-white/10"
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="transform md:group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${item.color}`} />
                  </div>
                </div>
                <h3 className="text-[clamp(1.05rem,2.8vw,1.25rem)] font-bold text-white mb-2 leading-snug text-center">
                  {item.title}
                </h3>
                <p className="text-white/85 text-[clamp(0.85rem,2vw,0.95rem)] leading-relaxed mb-3 text-center">
                  {item.subtitle}
                </p>
                <div className="mt-3 pt-3 border-t border-white/10">
                  <p className="text-[#FE5F01] text-[clamp(0.8rem,1.9vw,0.9rem)] font-medium mb-2 text-center">
                    الحلول:
                  </p>
                  <ul className="space-y-1.5 text-white/80 text-[clamp(0.75rem,1.8vw,0.85rem)] leading-relaxed">
                    {item.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#FE5F01] mt-0.5 flex-shrink-0">✓</span>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 sm:mt-10 md:mt-12 text-center"
        >
          <p className="text-white/90 text-[clamp(1rem,2.5vw,1.2rem)] font-semibold px-2 leading-relaxed">
            لأن خبرتنا 26 سنة… وكلمتنا كلمة شرف ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
}
