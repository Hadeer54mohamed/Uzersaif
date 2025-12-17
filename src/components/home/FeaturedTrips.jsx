"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { client, urlFor } from "@/lib/sanityClient";

export default function TripsSection() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "trip"] | order(_createdAt desc)`)
      .then(setTrips)
      .catch(console.error);
  }, []);

  if (!trips.length) return null;

  return (
    <section className="py-24 bg-gradient-to-b from-off-white to-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-16">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-titles-brown">
            رحلاتنا
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اختاري رحلتك المناسبة من تجاربنا المميزة
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip) => (
            <motion.div
              key={trip._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/*  <Link href={`/Trips/${trip.slug?.current || trip._id}`}> */}     
              <Link href="/Trips">

           <Card className="overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 h-full">

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={
                        trip.image
                          ? urlFor(trip.image).url()
                          : "/trip.jpg"
                      }
                      alt={trip.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />

                    {trip.rating && (
                      <div className="absolute top-4 right-4 bg-white/90 px-3 py-1.5 rounded-full flex items-center gap-1 shadow">
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <span className="text-sm font-bold">
                          {trip.rating}
                        </span>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">
                      {trip.title}
                    </h3>

                    <div className="flex justify-center items-center gap-1 text-muted-foreground text-sm mb-1">
                      <MapPin className="w-4 h-4" />
                      <span>{trip.location}</span>
                    </div>

                    <div className="flex justify-center items-center gap-1 text-muted-foreground text-sm mb-3">
                      <Clock className="w-4 h-4" />
                      <span>{trip.duration}</span>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {trip.description}
                    </p>

                    <div className="pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">السعر</span>
                      <p className="text-xl font-bold text-primary">
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
