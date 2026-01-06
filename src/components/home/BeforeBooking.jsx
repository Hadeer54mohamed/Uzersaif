"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  WifiOff,
  ThermometerSnowflake,
  Backpack,
  RefreshCcw,
} from "lucide-react";

const notes = [
  {
    icon: WifiOff,
    color: "text-[#FE5F01]",
    title: "الشبكة ضعيفة أثناء التخييم",
    desc: "وده جزء مقصود من التجربة علشان تفصل عن الدنيا وتعيش الهدوء الحقيقي.",
    desc2: "✔ في الكامب والفندق الشبكة أفضل نسبيًا",
  },
  {
    icon: ThermometerSnowflake,
    color: "text-[#FF8518]",
    title: "الجو خفيف نهارًا وبارد ليلًا",
    desc: "التجهيزات محسوبة للبرد، ومعاك إرشادات واضحة قبل الرحلة علشان تيجي جاهز ومطمّن.",
    desc2: "✔ مع بطانيات في الكامب لضمان راحتك",
  },
  {
    icon: Backpack,
    color: "text-[#6D1200]",
    title: "المطلوب منك بسيط جدًا",
    desc: "ملابسك، حاجاتك الشخصية، والالتزام بتعليمات الرحلة.",
    desc2: "✔ وإحنا علينا باقي التفاصيل والتجهيزات",
  },
  {
    icon: RefreshCcw,
    color: "text-[#FE5F01]",
    title: "البرنامج مرن للسلامة",
    desc: "ممكن يتغيّر ترتيب بعض النقاط حسب الظروف الجوية أو الأمنية، وده علشان نضمن تجربة آمنة ومريحة.",
    desc2: "✔ كل التعديلات بتكون لصالح راحتك وسلامتك من غير ما نضيّع روح التجربة أو قيمتها",
  },
];

export default function BeforeBooking() {
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
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 text-[#FE5F01]" />
            <h2 className="text-[clamp(1.75rem,5vw,3.2rem)] font-bold text-white leading-tight">
              قبل ما تحجز
            </h2>
          </div>
          <p className="text-white/90 text-[clamp(0.95rem,2.2vw,1.15rem)] leading-relaxed px-2">
            ملاحظات مهمة علشان التجربة تبقى مريحة من أولها.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
          {notes.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 bg-white/10 backdrop-blur-xl shadow-xl md:hover:scale-[1.02] md:hover:bg-white/15 transition-all duration-300 border border-white/10"
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="transform md:group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${item.color}`} />
                  </div>
                </div>
                <h3 className="text-[clamp(1.05rem,2.8vw,1.25rem)] font-bold text-white mb-2 sm:mb-3 leading-snug text-center">
                  {item.title}
                </h3>
                <p className="text-white/85 text-[clamp(0.85rem,2vw,0.95rem)] leading-relaxed mb-2 text-center">
                  {item.desc}
                </p>
                <p className="text-[#FE5F01] text-[clamp(0.8rem,1.9vw,0.9rem)] leading-relaxed text-center font-medium mt-2 pt-2 border-t border-[#FE5F01]/20">
                  {item.desc2}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
