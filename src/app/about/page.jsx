"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Globe, Users } from "lucide-react";
import Image from "next/image";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "رؤيتنا",
      description:
        "أن نكون الوجهة الأولى التي يثق بها المسافرون العرب للحصول على تجارب سفر فريدة ومصممة بعناية."
    },
    {
      icon: Heart,
      title: "مهمتنا",
      description:
        "نقدّم رحلات تُصنع بالحب والإتقان، وتهدف لخلق لحظات لا تُنسى وتفاصيل تجعل كل رحلة مختلفة."
    },
    {
      icon: Globe,
      title: "قيمنا",
      description:
        "الاحترافية، الجودة، الشفافية، الالتزام، وخدمة تتجاوز التوقعات في كل خطوة."
    },
    {
      icon: Users,
      title: "فريقنا",
      description:
        "فريق من خبراء السياحة المتخصصين بشغف في تنظيم المغامرات وتقديم تجارب متكاملة."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar transparent />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
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

        <div className="relative z-10 text-center text-white animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-4">
            من نحن
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            رحلات تُحكى… وتجارب تبقى
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-titles-brown mb-6">
              قصتنا
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              بدأت Uzersaif برؤية بسيطة: أن يصبح السفر تجربة ممتعة وسهلة وراقية.
              من أول يوم ونحن نعمل على تقديم رحلات مُعدّة بعناية، تجمع بين
              المغامرة، الراحة، والسعر المناسب.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              اليوم نفتخر بأننا رافقنا آلاف المسافرين في مغامرات داخل وخارج مصر،
              واستطعنا كسب ثقتهم عبر تقديم خدمة استثنائية مبنية على خبرة واهتمام
              بالتفاصيل.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="bg-offWhite rounded-2xl shadow-card hover:shadow-elegant transition-smooth group animate-fade-in-up"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-smooth">
                      <Icon className="w-8 h-8 text-primary group-hover:text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-titles-brown mb-3">
                      {value.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-offWhite rounded-t-3xl shadow-inner">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <h3 className="text-5xl font-bold text-primary mb-2">50+</h3>
              <p className="text-muted-foreground text-lg">وجهة سياحية</p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <h3 className="text-5xl font-bold text-primary mb-2">200+</h3>
              <p className="text-muted-foreground text-lg">رحلة سنويًا</p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <h3 className="text-5xl font-bold text-primary mb-2">5000+</h3>
              <p className="text-muted-foreground text-lg">عميل سعيد</p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <h3 className="text-5xl font-bold text-primary mb-2">98%</h3>
              <p className="text-muted-foreground text-lg">نسبة رضا العملاء</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
