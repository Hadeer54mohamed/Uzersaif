"use client";

import { Shield, Award, HeadphonesIcon, Plane } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  StarParticle,
  ShootingStar,
  generateStars,
  generateMeteors,
} from "@/components/SpaceElements";

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
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    setStars(generateStars(60));
    setMeteors(generateMeteors(3, { delayMultiplier: 6, baseRepeatDelay: 15 }));
  }, []);

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* 🌌 خلفية فضائية غامقة */}
      <div className="absolute inset-0 bg-cosmic-space" />

      {/* ✨ طبقة النجوم */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <StarParticle key={star.id} star={star} />
        ))}
      </div>

      {/* ☄️ طبقة الشهب */}
      <div className="absolute inset-0 pointer-events-none">
        {meteors.map((meteor) => (
          <ShootingStar key={meteor.id} meteor={meteor} />
        ))}
      </div>

      {/* توهج في الزوايا */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl opacity-20 glow-purple" />
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-15 glow-fire" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide text-primary">
            لماذا تختارنا؟
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed md:text-base text-secondary">
            نحن نقدم أفضل تجربة سياحية مع مزايا فريدة تجعل رحلتك استثنائية.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group animate-fade-in-up hover:-translate-y-2 backdrop-blur-sm card-cosmic"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 icon-container">
                    <Icon className="w-8 h-8 transition-all duration-300 icon-fire" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 tracking-wide text-primary">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-sm text-secondary">
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
