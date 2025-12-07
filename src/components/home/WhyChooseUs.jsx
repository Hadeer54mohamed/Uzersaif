"use client";

import { Shield, Award, HeadphonesIcon, Plane } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const features = [
  {
    icon: Shield,
    title: "أمان وموثوقية",
    description: "نضمن لك رحلة آمنة ومريحة مع أفضل معايير الأمان والجودة",
  },
  {
    icon: Award,
    title: "جودة عالية",
    description: "نقدم خدمات سياحية متميزة تفوق توقعاتك في كل رحلة",
  },
  {
    icon: HeadphonesIcon,
    title: "دعم على مدار الساعة",
    description: "فريق خدمة العملاء متاح دائماً للإجابة على استفساراتك",
  },
  {
    icon: Plane,
    title: "أفضل الأسعار",
    description: "نوفر لك أفضل العروض والأسعار التنافسية لجميع الوجهات",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-titles-brown mb-4 tracking-wide">
            لماذا تختارنا؟
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed md:text-base">
            نحن نقدم أفضل تجربة سياحية مع مزايا فريدة تجعل رحلتك استثنائية.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 group animate-fade-in-up hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300 transform group-hover:scale-110">
                    <Icon className="w-10 h-10 text-primary group-hover:text-white transition-all duration-300" />
                  </div>

                  <h3 className="text-2xl font-bold text-titles-brown mb-3 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
