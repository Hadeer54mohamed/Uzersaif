"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  MapPin,
  Clock,
  Calendar,
  Users,
  Star as StarIcon,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { StarParticle, generateStars } from "@/components/SpaceElements";
import Image from "next/image";

export default function TripDetails() {
  const { slug } = useParams();
  const [trip, setTrip] = useState(null);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "trip" && slug.current == $slug][0]`, { slug })
      .then(setTrip);
  }, [slug]);

  useEffect(() => {
    setStars(generateStars(60));
  }, []);

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-galaxy-space">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 rounded-full border-4 border-t-transparent border-fire spinner-glow"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 🌌 خلفية فضائية ثابتة */}
      <div className="fixed inset-0 z-0 bg-cosmic-space" />

      {/* ✨ طبقة النجوم */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        {stars.map((star) => (
          <StarParticle key={star.id} star={star} />
        ))}
      </div>

      {/* توهج في الزوايا */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-20 glow-purple" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-15 glow-fire" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6"
          >
            <Link
              href="/Trips"
              className="inline-flex items-center gap-2 transition-transform hover:translate-x-1 text-secondary"
            >
              <ArrowLeft
                size={20}
                className="text-fire transition-colors group-hover:text-ember"
              />
              <span className="hover:text-fire">العودة للرحلات</span>
            </Link>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-[40vh] md:h-[50vh] rounded-3xl overflow-hidden mb-8"
          >
            <Image
              src={urlFor(trip.image).url()}
              alt={trip.title}
              fill
              className="object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-image-overlay" />

            {/* Rating Badge */}
            {trip.rating && (
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm rating-badge">
                <StarIcon className="w-5 h-5 fill-current text-ember" />
                <span className="font-bold text-primary">{trip.rating}</span>
              </div>
            )}
          </motion.div>

          {/* Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2 space-y-6"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-primary">
                {trip.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4">
                {trip.location && (
                  <div className="flex items-center gap-2 text-secondary">
                    <MapPin size={18} className="text-fire" aria-label="الموقع"/>
                    <span>{trip.location}</span>
                  </div>
                )}
                {trip.duration && (
                  <div className="flex items-center gap-2 text-secondary">
                    <Clock size={18} className="text-fire" />
                    <span>{trip.duration}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="rounded-2xl p-6 backdrop-blur-sm card-cosmic-light">
                <h2 className="text-xl font-bold mb-4 text-primary">
                  وصف الرحلة
                </h2>
                <p className="leading-relaxed text-secondary">
                  {trip.description}
                </p>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* Price Card */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-2xl p-6 backdrop-blur-sm sticky top-24 card-cosmic-light"
              >
                <div className="text-center mb-6">
                  <span className="text-sm text-muted">السعر يبدأ من</span>
                  <p className="text-3xl font-bold text-fire">
                    {trip.price} ج.م
                  </p>
                  <span className="text-sm text-muted">للفرد الواحد</span>
                </div>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full py-3 rounded-xl text-center font-bold transition-all btn-fire text-primary"
                >
                  احجز الآن
                </motion.a>

                <p className="text-center text-sm mt-4 text-muted">
                  ✔ ضمان استرداد كامل قبل 7 أيام
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
      <SectionDivider />
      <Footer />
    </div>
  );
}
