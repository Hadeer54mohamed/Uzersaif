"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Target, Heart, Globe, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      color: "text-[#FE5F01]",
      bgColor: "bg-[#FE5F01]/10",
      hoverBg: "group-hover:bg-[#FE5F01]",
      title: "رؤيتنا",
      description:
        "أن نكون الوجهة الأولى التي يثق بها المسافرون العرب للحصول على تجارب سفر فريدة ومصممة بعناية."
    },
    {
      icon: Heart,
      color: "text-[#FF8518]",
      bgColor: "bg-[#FF8518]/10",
      hoverBg: "group-hover:bg-[#FF8518]",
      title: "مهمتنا",
      description:
        "نقدّم رحلات تُصنع بالحب والإتقان، وتهدف لخلق لحظات لا تُنسى وتفاصيل تجعل كل رحلة مختلفة."
    },
    {
      icon: Globe,
      color: "text-[#6D1200]",
      bgColor: "bg-[#6D1200]/10",
      hoverBg: "group-hover:bg-[#6D1200]",
      title: "قيمنا",
      description:
        "الاحترافية، الجودة، الشفافية، الالتزام، وخدمة تتجاوز التوقعات في كل خطوة."
    },
    {
      icon: Users,
      color: "text-[#FE5F01]",
      bgColor: "bg-[#FE5F01]/10",
      hoverBg: "group-hover:bg-[#FE5F01]",
      title: "فريقنا",
      description:
        "فريق من خبراء السياحة المتخصصين بشغف في تنظيم المغامرات وتقديم تجارب متكاملة."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar transparent />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="/uzer.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold drop-shadow-lg mb-3 sm:mb-4 leading-tight">
            من نحن
          </h1>
          <p className="text-[clamp(1.1rem,3vw,1.5rem)] text-white/90 leading-relaxed">
            لأن خبرتنا 26 سنة… وكلمتنا كلمة شرف 
          </p>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#FFF9F3]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-10 sm:mb-12 md:mb-16"
          >
            <h2 className="text-[clamp(1.75rem,5vw,2.8rem)] font-bold text-[#010101] mb-4 sm:mb-6 leading-tight px-2">
              من نحن
            </h2>

            <div className="space-y-4 text-right">
              <p className="text-[clamp(0.95rem,2.2vw,1.1rem)] text-[#6D1200] leading-relaxed">
                نحن بدو واحة الفرافرة الأصليين، حياتنا كلها في الصحراء البيضاء وعارفين أسرارها، مش مجرد منظمين. خبرة أكتر من 26 سنة في الصحراء البيضاء تحديدًا، ومعرفتنا دقيقة بكل مسار وتكوين ومكان تخييم آمن في كل موسم.
              </p>

              <p className="text-[clamp(0.95rem,2.2vw,1.1rem)] text-[#6D1200] leading-relaxed">
                البرنامج الحالي اتنفّذ اكتر من 1000 مرة بنفس التفاصيل قبل كده ونجح مع مجموعات مختلفة، من غير ارتجال أو تجارب على الضيوف.
              </p>

              <p className="text-[clamp(0.95rem,2.2vw,1.1rem)] text-[#6D1200] leading-relaxed">
                القرار دايمًا في إيد <strong className="text-[#FE5F01]">guide أمين من بدو الفرافرة</strong>، ملازم للمجموعة طوال الرحلة، وقادر يتصرف فورًا لو أي ظرف جوي أو ميداني اتغير.
              </p>

              <p className="text-[clamp(0.95rem,2.2vw,1.1rem)] text-[#6D1200] leading-relaxed">
                الفريق متعوّد يتعامل مع أنواع مختلفة من الضيوف (أفراد – أزواج – مجموعات صغيرة – مصريين وأجانب) مع احترام الاختلافات واحتياجات كل شخص.
              </p>

              <p className="text-[clamp(0.95rem,2.2vw,1.1rem)] text-[#6D1200] leading-relaxed">
                إدارة الرحلة مبنية على المسؤولية قبل المتعة. لو حد تعب الحل بيكون فوري من غير جدال أو تسويف.
              </p>

              <p className="text-[clamp(0.95rem,2.2vw,1.1rem)] text-[#6D1200] leading-relaxed">
                سمعتنا مبنية على سنين تنفيذ حقيقي، مش حملة تسويقية أو وعود على السوشيال.
              </p>

              <p className="text-[clamp(0.95rem,2.2vw,1.1rem)] text-[#6D1200] leading-relaxed">
                التزام كامل بقوانين محمية الصحراء البيضاء في المسارات، أماكن التخييم، وعدد الأفراد، حفاظًا على الأمان والطبيعة.
              </p>

              <p className="text-[clamp(0.95rem,2.2vw,1.1rem)] text-[#6D1200] leading-relaxed">
                التعامل عندنا مبني على الاحترام، راحة الضيف أولوية، والتزامنا قدّامه واضح من البداية.
              </p>

              <p className="text-[clamp(0.95rem,2.2vw,1.1rem)] text-[#6D1200] leading-relaxed">
                نرفض تنفيذ الرحلة لأي شخص مش مناسب لروحها، لأن جودة التجربة أهم عندنا من زيادة العدد.
              </p>

              <p className="text-[clamp(0.95rem,2.2vw,1.1rem)] text-[#FE5F01] leading-relaxed font-medium">
                نفضّل نخسر حجز… ولا نخسر ثقة أو نبوّظ تجربة باقي الضيوف.
              </p>
            </div>
          </motion.div>

          {/* Values Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group rounded-xl sm:rounded-2xl p-5 sm:p-6 bg-white shadow-md hover:shadow-xl md:hover:scale-[1.02] transition-all duration-300 border border-transparent hover:border-[#FE5F01]/20"
                >
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${value.bgColor} flex items-center justify-center ${value.hoverBg} md:group-hover:scale-110 transition-all duration-300`}>
                      <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${value.color} group-hover:text-white transition-colors duration-300`} />
                    </div>
                  </div>

                  <h3 className="text-[clamp(1.05rem,2.8vw,1.25rem)] font-bold text-[#010101] mb-2 sm:mb-3 leading-snug text-center">
                    {value.title}
                  </h3>

                  <p className="text-[clamp(0.85rem,2vw,0.95rem)] text-[#6D1200] leading-relaxed text-center">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-white to-[#FFF9F3]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <h3 className="text-[clamp(2.5rem,6vw,4rem)] font-bold text-[#FE5F01] mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </h3>
              <p className="text-[clamp(0.85rem,2vw,1rem)] text-[#6D1200] font-medium">
                وجهة سياحية
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <h3 className="text-[clamp(2.5rem,6vw,4rem)] font-bold text-[#FF8518] mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                200+
              </h3>
              <p className="text-[clamp(0.85rem,2vw,1rem)] text-[#6D1200] font-medium">
                رحلة سنويًا
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <h3 className="text-[clamp(2.5rem,6vw,4rem)] font-bold text-[#FE5F01] mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                5000+
              </h3>
              <p className="text-[clamp(0.85rem,2vw,1rem)] text-[#6D1200] font-medium">
                عميل سعيد
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group"
            >
              <h3 className="text-[clamp(2.5rem,6vw,4rem)] font-bold text-[#FF8518] mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </h3>
              <p className="text-[clamp(0.85rem,2vw,1rem)] text-[#6D1200] font-medium">
                نسبة رضا العملاء
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
