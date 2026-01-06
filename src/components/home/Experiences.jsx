"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Camera,
  Compass,
  ShieldCheck,
  Map,
  Home,
  MoonStar,
  Brain,
  CheckCircle,
  Crown,
  Smile,
  UserCheck,
} from "lucide-react";

const values = [
  {
    icon: Globe,
    color: "text-[#FE5F01]",
    title: "إحساس الفضاء الحقيقي",
    desc: "مكان طبيعي شكله كوكب تاني فعلًا، من غير ديكور، من غير تمثيل، ومن غير خداع سياحي.",
    desc2: "Real space-like experience… on Earth.",
  },
  {
    icon: Camera,
    color: "text-[#FF8518]",
    title: "صور مش شبه أي حد",
    desc: "تاخد صور كأنها من برّه الكوكب -لأنك واقف فعلًا في مكان مش شبه أي مكان تاني، تكوينات بيضا، مساحات فاضية، وسماء مفتوحة بلا حدود - صور مش متكررة، مش سياحية، ومش عند أي حد تاني",
    desc2: "Natural. Raw. Unfiltered.",
  },
  {
    icon: Compass,
    color: "text-[#6D1200]",
    title: "تعيش تجربة مغامرة",
    desc: "من غير ما تحس إنك بتغامر بنفسك بتدرّج ذكي يخليك تستمتع وانت مطمّن: كامب مجهز → تخييم محسوب → فندق بدوي",
    desc2: "مغامرة فيها إحساس… من غير ضغط ولا بهدلة.",
  },
  {
    icon: ShieldCheck,
    color: "text-[#FE5F01]",
    title: "قرار آمن من البداية",
    desc: "تحجز وانت ضامن إنك مش هتندم لأن في ضمان بدو واحة الفرافرة اللي يحفظ حقك ويخلّي القرار آمن نفسيًا من البداية",
    desc2: "✔ ضمان بدو واحة الفرافرة",
  },
  {
    icon: Map,
    color: "text-[#FF8518]",
    title: "برنامج رقم واحد في فئته",
    desc: "برنامج مقفول ومُجرب، كل خطوة معروفة وكل وقت محسوب.",
    desc2: "✔ مفيش ارتجال ولا “نظبطها في السكة”",
  },
  {
    icon: Home,
    color: "text-[#6D1200]",
    title: "ضيافة بدوية حقيقية",
    desc: "ضيافة بدو واحة الفرافرة داخل على بدو عايشين كل حياتهم في الصحراء",
    desc2: "بتحس كانك قاعد وسط اهلك وناسك فعلا",
  },
  {
    icon: MoonStar,
    color: "text-[#FE5F01]",
    title: "فصل حقيقي عن الدنيا",
    desc: "صمت، نجوم، نار، وهدوء نضيف من غير هلس، من غير زحمة",
    desc2: "✔ عدد محدود علشان التجربة تفضل Clean & Meaningful.",
  },
  {
    icon: Brain,
    color: "text-[#FF8518]",
    title: "ترجع بحاجة أعمق من الصور",
    desc: "تحس إنك أهدى، أنضف ذهنيًا، وكأنك أخدت فاصل أطول من مدته.",
    desc2: "مش بس Memories على الموبايل، لكن Mental reset",
  },
  {
    icon: CheckCircle,
    color: "text-[#6D1200]",
    title: "ما تشيلش هم أي تفاصيل",
    desc: "نوم، أكل، تنقلات، تجهيزات … كل حاجة محسوبة داخل السعر.",
    desc2: "✔ من غير مصاريف خفية ولا حسابات مفاجئة",
  },
  {
    icon: Crown,
    color: "text-[#FE5F01]",
    title: "تجربة مش معمولة للكل",
    desc: "مش لأنك بتدور على أرخص رحلة ولا لأنك عايز تمشي مع الترند.",
    desc2: "✔ تجربة تختارها لأنك فاهم قيمتها",
  },
  {
    icon: Smile,
    color: "text-[#FF8518]",
    title: "تحس إن قرارك كان صح من أول لحظة",
    desc: "مش بعد ما ترجع، لأن الاطمئنان موجود من البداية، ومكمّل معاك طول الرحلة.",
    desc2: "✔ الاطمئنان موجود من أول لحظة",
  },
  {
    icon: UserCheck,
    color: "text-[#6D1200]",
    title: "Guide بدوي من أهل المكان",
    desc: "مسؤول عن راحتكم، وبيحكيلكم عن الصحراء من منظور اللي عايشها.",
    desc2: "✔ Guide بدوي من أهل المكان متاح لدعمكم طوال الرحلة",
  },
];

export default function Experiences() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-[#FFF9F3]">
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-[clamp(1.75rem,5vw,2.8rem)] font-bold text-[#010101] mb-3 sm:mb-4 leading-tight px-2">
            إيه اللي هتخرج بيه جديد من رحلة الصحراء البيضاء؟
          </h2>
          <p className="text-[#6D1200] text-[clamp(0.95rem,2.2vw,1.1rem)] leading-relaxed px-2">
            حاجات مش متاحة في أي رحلة تانية… لأن التجربة دي متصممة من قبل ما تبدأ علشانك.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
          {values.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group rounded-xl sm:rounded-2xl p-5 sm:p-6 bg-[#FFFFFF] shadow-md hover:shadow-xl md:hover:scale-[1.02] transition-all duration-300 border border-transparent hover:border-[#FE5F01]/20"
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="transform md:group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${item.color}`} />
                  </div>
                </div>
                <h3 className="text-[clamp(1.05rem,2.8vw,1.25rem)] font-bold text-[#010101] mb-2 sm:mb-3 leading-snug text-center">
                  {item.title}
                </h3>
                <p className="text-[#6D1200] text-[clamp(0.85rem,2vw,0.95rem)] leading-relaxed mb-2 text-center">
                  {item.desc}
                </p>
                <p className="text-[#FE5F01] text-[clamp(0.8rem,1.9vw,0.9rem)] leading-relaxed text-center font-medium mt-2 pt-2 border-t border-[#FE5F01]/10">
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
