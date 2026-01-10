"use client";

import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "أحمد محمد",
    location: "القاهرة، مصر",
    role: "مسافر دائم",
    trip: "الأقصر وأسوان",
    rating: 5,
    comment: "تجربة رائعة! الرحلة كانت منظمة بشكل ممتاز وكل التفاصيل كانت مثالية. أنصح الجميع بالتعامل مع Uzersaif",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima"
  },
  {
    id: 2,
    name: "فاطمة علي",
    location: "الرياض، السعودية",
    role: "عميلة راضية",
    trip: "الغردقة والبحر الأحمر",
    rating: 5,
    comment: "أفضل شركة سياحية تعاملت معها. الخدمة ممتازة والأسعار تنافسية جداً. شكراً لفريق العمل الرائع!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed"
  },
  {
    id: 3,
    name: "خالد حسن",
    location: "دبي، الإمارة العربية المتحدة",
    role: "مسافر متكرر",
    trip: "واحة سيوة",
    rating: 5,
    comment: "رحلتي إلى دبي كانت لا تُنسى بفضل التنظيم المحترف والاهتمام بأدق التفاصيل. سأعود بالتأكيد!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Khaled"
  },
];

import {
  StarParticle,
  ShootingStar,
  generateStars,
  generateMeteors,
} from "@/components/SpaceElements";

const Testimonials = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    setStars(generateStars(60));
    setMeteors(generateMeteors(3, { delayMultiplier: 6, baseRepeatDelay: 15 }));
  }, []);

  return (
    <section className="relative py-8 sm:py-10 md:py-12 overflow-hidden">
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
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl opacity-15 glow-purple" />
        <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full blur-3xl opacity-15 glow-fire" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-primary">
            آراء عملائنا
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-secondary">
            استمع إلى تجارب عملائنا السعداء الذين استمتعوا برحلات لا تُنسى معنا
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="hover:shadow-xl transition-all duration-300 animate-fade-in-up backdrop-blur-sm card-cosmic"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-4">
                <Quote className="w-8 h-8 mb-2 quote-icon" />

                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current star-rating"
                    />
                  ))}
                </div>

                <p className="mb-3 leading-relaxed text-sm text-secondary">
                  {testimonial.comment}
                </p>

                <div className="flex items-center space-x-reverse space-x-3 pt-3 border-t border-fire-light">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full"
                    unoptimized
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-primary">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-muted">
                      {testimonial.role}
                    </p>
                    <div className="text-xs mt-0.5 text-secondary">
                      {testimonial.location}
                    </div>
                    <div className="text-xs font-medium mt-0.5 text-fire">
                      رحلة: {testimonial.trip}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
