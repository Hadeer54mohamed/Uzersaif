"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { 
  Sun, 
  Tent, 
  Car, 
  MapPin, 
  Clock, 
  CreditCard, 
  CheckCircle2, 
  AlertTriangle, 
  Camera,
  ChevronLeft,
  Loader2,
  Sparkles
} from "lucide-react";
import { dummyTrips } from "@/lib/dummyTrips";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const sidebarItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

const DesertTrip = () => {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const dayIcons = [
    <Sun key="sun" className="w-5 h-5" />,
    <Car key="car" className="w-5 h-5" />,
    <Tent key="tent" className="w-5 h-5" />,
  ];

  useEffect(() => {
    setIsLoading(true);
    client
      .fetch(`*[_type == "trip"]`)
      .then((data) => {
        if (data.length > 0) {
          setTrips(data);
          setSelectedTrip(data[0]);
        } else {
          setTrips(dummyTrips);
          setSelectedTrip(dummyTrips[0]);
        }
      })
      .catch(() => {
        setTrips(dummyTrips);
        setSelectedTrip(dummyTrips[0]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-4"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className="w-12 h-12 text-primary mx-auto" />
          </motion.div>
          <p className="text-muted-foreground text-lg">جاري تحميل الرحلات...</p>
        </motion.div>
      </div>
    );
  }

  // Get image URL (handles both Sanity images and local images)
  const getImageUrl = (trip) => {
    if (!trip?.image) return "/trip.jpg";
    if (typeof trip.image === "string") return trip.image;
    try {
      return urlFor(trip.image).url();
    } catch {
      return "/trip.jpg";
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-background via-background to-primary/5 pt-20 lg:pt-24">
      {/* Sidebar */}
      <motion.aside
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-72 bg-card/80 backdrop-blur-sm border-b lg:border-b-0 lg:border-l border-border p-6 lg:min-h-screen"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-titles-brown">الرحلات</h2>
            <p className="text-sm text-muted-foreground">{trips.length} رحلة متاحة</p>
          </div>
        </motion.div>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-3"
        >
          {trips.map((trip, index) => (
            <motion.li
              key={trip._id}
              variants={sidebarItemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                selectedTrip?._id === trip._id
                  ? "bg-gradient-to-r from-primary/20 to-primary-dark/10 border-primary/30 shadow-lg"
                  : "bg-card hover:bg-primary/5 border-transparent hover:border-primary/10"
              }`}
              onClick={() => setSelectedTrip(trip)}
            >
              <div className="flex items-center justify-between text-titles-brown">
                <span className={`font-medium ${selectedTrip?._id === trip._id ? "text-primary" : ""}`}>
                  {trip.title}
                </span>
                {selectedTrip?._id === trip._id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <ChevronLeft className="w-5 h-5 text-primary" />
                  </motion.div>
                )}
              </div>
              {trip.duration && (
                <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {trip.duration}
                </p>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 px-4 lg:px-8 py-8 overflow-y-auto">
        <AnimatePresence mode="wait">
          {selectedTrip && (
            <motion.div
              key={selectedTrip._id}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              {/* Hero Section */}
              <motion.section
                variants={itemVariants}
                className="relative h-[280px] md:h-[400px] w-full overflow-hidden rounded-3xl shadow-2xl"
              >
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  src={getImageUrl(selectedTrip)}
                  alt={selectedTrip.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute inset-0 flex flex-col justify-end p-6 md:p-10"
                >
                  <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-lg">
                    {selectedTrip.title}
                  </h1>
                  <div className="flex flex-wrap gap-4 text-white/90">
                    {selectedTrip.duration && (
                      <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <Clock className="w-4 h-4" />
                        {selectedTrip.duration}
                      </span>
                    )}
                    {selectedTrip.location && (
                      <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <MapPin className="w-4 h-4" />
                        {selectedTrip.location}
                      </span>
                    )}
                  </div>
                </motion.div>
              </motion.section>

              {/* تجمع الرحلة والتحرك */}
              {selectedTrip.gathering && selectedTrip.gathering.length > 0 && (
                <motion.div
                  variants={cardVariants}
                  className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-border"
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-titles-brown flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    تفاصيل التجمع والتحرك
                  </h2>
                  <ul className="space-y-4">
                    {selectedTrip.gathering.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-border/50"
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-muted-foreground text-lg">{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* برنامج الرحلة */}
              {selectedTrip.itinerary && selectedTrip.itinerary.length > 0 && (
                <motion.div variants={cardVariants}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-titles-brown text-center flex items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Sun className="w-5 h-5 text-primary" />
                    </div>
                    برنامج الرحلة
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {selectedTrip.itinerary.map((day, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 }}
                      >
                        <AccordionItem value={`day-${index}`} className="border-none">
                          <AccordionTrigger className="flex items-center justify-between bg-gradient-to-r from-primary/15 to-primary-dark/10 hover:from-primary/25 hover:to-primary-dark/20 text-primary rounded-2xl px-6 py-5 shadow-md border border-primary/20 transition-all duration-300">
                            <span className="flex items-center gap-3 text-lg font-semibold">
                              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                                {dayIcons[index] || <Sun className="w-4 h-4" />}
                              </div>
                              {day.day}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 mt-3 border border-border/50">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {day.activities?.map((act, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.05 }}
                                  whileHover={{ scale: 1.02 }}
                                  className="flex items-center gap-4 p-4 bg-background/80 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                  <span className="text-2xl">{act.icon}</span>
                                  <span className="text-muted-foreground">{act.text}</span>
                                </motion.div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </Accordion>
                </motion.div>
              )}

              {/* Grid للأقسام الثلاثة */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* الأسعار للفرد */}
                {(selectedTrip.prices || selectedTrip.price) && (
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-primary/10 to-primary-dark/5 rounded-3xl p-6 md:p-8 shadow-xl border border-primary/20"
                  >
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-titles-brown flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-primary" />
                      </div>
                      الأسعار للفرد
                    </h2>
                    {selectedTrip.prices ? (
                      <ul className="space-y-4">
                        {selectedTrip.prices.map((price, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex justify-between items-center p-3 bg-card/50 rounded-xl"
                          >
                            <span className="text-muted-foreground">{price.label}</span>
                            <span className="text-primary font-bold text-lg">{price.amount}</span>
                          </motion.li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-4xl font-extrabold text-primary">{selectedTrip.price}</p>
                        <p className="text-muted-foreground mt-2">جنيه مصري</p>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* السعر يشمل */}
                {selectedTrip.included && selectedTrip.included.length > 0 && (
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ y: -5 }}
                    className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-border"
                  >
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-titles-brown flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                      السعر يشمل
                    </h2>
                    <ul className="space-y-3">
                      {selectedTrip.included.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-3 text-muted-foreground"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>

              {/* الملاحظات */}
              {selectedTrip.notes && selectedTrip.notes.length > 0 && (
                <motion.div
                  variants={cardVariants}
                  className="bg-amber-500/5 rounded-3xl p-6 md:p-8 shadow-xl border border-amber-500/20"
                >
                  <h2 className="text-xl md:text-2xl font-bold mb-6 text-titles-brown flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-amber-500" />
                    </div>
                    ملاحظات مهمة
                  </h2>
                  <ul className="space-y-3">
                    {selectedTrip.notes.map((note, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        {note}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* استخراج التصاريح */}
              <motion.div
                variants={cardVariants}
                className="bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-3xl p-6 md:p-8 shadow-xl border border-primary/20 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-titles-brown">
                  استخراج التصاريح
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                  ابعتلنا صورة بطاقتك علشان نبدأ فورًا في استخراج تصاريح الرحلة الخاصة بيك.
                </p>
              </motion.div>

              {/* طرق الدفع */}
              {selectedTrip.paymentMethods && selectedTrip.paymentMethods.length > 0 && (
                <motion.div
                  variants={cardVariants}
                  className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-border"
                >
                  <h2 className="text-xl md:text-2xl font-bold mb-6 text-titles-brown flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-primary" />
                    </div>
                    طرق الحجز والدفع
                  </h2>
                  <ul className="space-y-3">
                    {selectedTrip.paymentMethods.map((method, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-3 text-muted-foreground p-3 bg-background/50 rounded-xl"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        {method}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* CTA Button */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center py-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-12 py-7 text-xl rounded-2xl font-bold shadow-2xl shadow-primary/30 transition-all duration-300">
                    <Sparkles className="w-6 h-6 ml-2" />
                    احجز الآن
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default DesertTrip;
