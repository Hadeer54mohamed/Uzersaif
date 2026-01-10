"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  StarParticle,
  ShootingStar,
  generateStars,
  generateMeteors,
} from "@/components/SpaceElements";

export default function TripsSection() {
  const [trips, setTrips] = useState([]);
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "trip"] | order(_createdAt desc)`)
      .then(setTrips)
      .catch(console.error);
  }, []);

  useEffect(() => {
    setStars(generateStars(70));
    setMeteors(generateMeteors(4));
  }, []);

  if (!trips.length) return null;

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
        <div className="absolute -top-20 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 glow-purple" />
        <div className="absolute -bottom-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-15 glow-fire" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-primary">
            رحلاتنا
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-secondary">
            اختاري رحلتك المناسبة من تجاربنا المميزة
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip) => (
            <motion.div
              key={trip._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/Trips">
                <Card className="overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full group backdrop-blur-sm card-cosmic">
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={
                        trip.image
                          ? urlFor(trip.image).url()
                          : "/trip.jpg"
                      }
                      alt={trip.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 overlay-bottom" />

                    {trip.rating && (
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full flex items-center gap-1 shadow backdrop-blur-sm rating-badge">
                        <Star className="w-4 h-4 fill-current star-rating" />
                        <span className="text-sm font-bold text-primary">
                          {trip.rating}
                        </span>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-4 text-center">
                    <h3 className="text-lg sm:text-xl font-bold mb-1 text-primary">
                      {trip.title}
                    </h3>

                    <div className="flex justify-center items-center gap-1 text-sm mb-0.5 text-secondary">
                      <MapPin className="w-4 h-4 icon-ember" />
                      <span>{trip.location}</span>
                    </div>

                    <div className="flex justify-center items-center gap-1 text-sm mb-2 text-secondary">
                      <Clock className="w-4 h-4 icon-ember" />
                      <span>{trip.duration}</span>
                    </div>

                    <p className="text-sm line-clamp-3 mb-2 text-muted">
                      {trip.description}
                    </p>

                    <div className="pt-2 border-t border-fire-light">
                      <span className="text-sm text-muted">
                        السعر
                      </span>
                      <p className="text-xl font-bold price-text">
                        {trip.price} ج.م
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
