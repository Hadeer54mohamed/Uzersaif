"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "اتصل بنا",
      content: "+20 123 456 7890",
      link: "tel:+201234567890",
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      content: "info@uzersaif.com",
      link: "mailto:info@uzersaif.com",
    },
    {
      icon: MapPin,
      title: "العنوان",
      content: "القاهرة، مصر",
      link: "#",
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      content: "السبت - الخميس: 9 صباحاً - 6 مساءً",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar transparent />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
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
            تواصل معنا
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            يسعدنا دائماً أن نكون جزءًا من رحلتك القادمة
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Form Card */}
            <Card className="bg-off-white rounded-2xl shadow-elegant animate-fade-in-up overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-titles-brown">أرسل لنا رسالة</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-titles-brown mb-2">
                      الاسم الكامل
                    </label>
                    <Input 
                      placeholder="أدخل اسمك الكامل" 
                      required 
                      className="w-full bg-white border-border focus:border-primary focus:ring-primary rounded-xl h-12" 
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-titles-brown mb-2">
                        البريد الإلكتروني
                      </label>
                      <Input 
                        type="email" 
                        placeholder="example@email.com" 
                        required 
                        className="w-full bg-white border-border focus:border-primary focus:ring-primary rounded-xl h-12" 
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-titles-brown mb-2">
                        رقم الهاتف
                      </label>
                      <Input 
                        type="tel" 
                        placeholder="+20 123 456 7890" 
                        required 
                        className="w-full bg-white border-border focus:border-primary focus:ring-primary rounded-xl h-12" 
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-titles-brown mb-2">
                      الرسالة
                    </label>
                    <Textarea 
                      placeholder="اكتب رسالتك هنا... كيف يمكننا مساعدتك؟" 
                      required 
                      className="min-h-32 bg-white border-border focus:border-primary focus:ring-primary rounded-xl resize-none" 
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold rounded-xl shadow-elegant hover:shadow-lg transition-all duration-300"
                  >
                    <Send className="w-5 h-5 ml-2" />
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold text-titles-brown mb-4">
                  معلومات الاتصال
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  لديك سؤال أو استفسار؟ فريقنا على استعداد لمساعدتك في أي وقت.
                  تواصل معنا عبر أي من الطرق التالية.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card 
                      key={index} 
                      className="bg-off-white rounded-2xl shadow-card hover:shadow-elegant transition-smooth group animate-fade-in-up"
                      style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    >
                      <CardContent className="p-5">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-smooth">
                            <Icon className="w-7 h-7 text-primary group-hover:text-white transition-smooth" />
                          </div>
                          <div>
                            <h3 className="font-bold text-titles-brown mb-1">{info.title}</h3>
                            {info.link !== "#" ? (
                              <a 
                                href={info.link}
                                className="text-muted-foreground hover:text-primary transition-smooth"
                                dir={info.link.startsWith("tel") ? "ltr" : "rtl"}
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{info.content}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <Card 
                className="overflow-hidden rounded-2xl shadow-elegant animate-fade-in-up"
                style={{ animationDelay: "500ms" }}
              >
                <div className="relative h-64 bg-gradient-to-br from-primary/20 via-primary-dark/10 to-off-white flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('/hero-travel.jpg')] bg-cover bg-center opacity-20" />
                  <div className="relative text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-titles-brown font-bold text-lg">القاهرة، مصر</p>
                    <p className="text-muted-foreground text-sm">موقعنا على الخريطة</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-titles-brown mb-4">
              جاهز لبدء مغامرتك؟
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              تواصل معنا الآن ودعنا نساعدك في تخطيط رحلتك المثالية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+201234567890">
                <Button className="w-full sm:w-auto h-12 px-8 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-bold rounded-xl shadow-elegant">
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل بنا الآن
                </Button>
              </a>
              <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto h-12 px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-xl transition-smooth"
                >
                  <MessageCircle className="w-5 h-5 ml-2" />
                  واتساب
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
