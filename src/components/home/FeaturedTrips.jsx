"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const trip = {
  id: 1,
  title: "رحلة الصحراء البيضاء",
  location: "الواحات البحرية – الفرافرة",
  duration: "3 أيام / 2 ليلة",
  price: "6499",
  rating: 4.9,
  image: "/trip.jpg",
  description:
    "مغامرة 3 أيام تشمل كهف الجارة، التكوينات البيضاء، التخييم وسط النجوم، الساند بوردينج، زيارات الفرافرة، جبل الكريستال والصحراء السوداء — مع فندق بدوي، حفلات سمر و7 وجبات كاملة.",
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function WhiteDesertFeatured() {
  return (
    <section className="py-24 bg-gradient-to-b from-off-white to-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-16">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-titles-brown">
            رحلتنا المميزة
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            رحلة واحدة مُخصصة — تجربة لا تُنسى في قلب الصحراء البيضاء
          </p>
        </div>

        {/* Trip Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <Link href={`/Trips`} className="block group">
            <Card className="overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">

              {/* IMAGE WRAPPER */}
              <div className="relative h-80 md:h-96 overflow-hidden rounded-b-3xl">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  sizes="100%"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-lg px-3 py-1.5 rounded-full flex items-center gap-1 shadow">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="text-sm font-bold">{trip.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-center">
                  {trip.title}
                </h3>

                <div className="flex items-center text-muted-foreground text-sm mb-2">
                  <MapPin className="w-4 h-4 ml-1" />
                  <span>{trip.location}</span>
                </div>

                <div className="flex items-center text-muted-foreground text-sm mb-4">
                  <Clock className="w-4 h-4 ml-1" />
                  <span>{trip.duration}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {trip.description}
                </p>

                <div className=" justify-between pt-5 border-t border-border text-center">
                  <div>
                    <span className="text-sm text-muted-foreground">السعر</span>
                    <p className="text-2xl font-bold text-primary">
                      {trip.price} <span className="text-base">ج.م</span>
                    </p>
                  </div>
                </div>
              </CardContent>

            </Card>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
