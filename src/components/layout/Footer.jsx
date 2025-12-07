"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ChevronLeft, Send, Heart } from "lucide-react";
import { motion ,AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { useState } from "react";

const Footer = () => {
const currentYear = new Date().getFullYear();
const canvasRef = useRef(null);
const [showPopup, setShowPopup] = useState(false);

const handleSubmit = () => {
  setShowPopup(true);
  setTimeout(() => setShowPopup(false), 3000);
};

useEffect(() => {
const canvas = canvasRef.current;
const ctx = canvas.getContext("2d");
let particlesArray = [];
const colors = ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.05)"];

class Particle {
  constructor(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.fill();
  }
}

const init = () => {
  particlesArray = [];
  for (let i = 0; i < 50; i++) {
    const size = Math.random() * 2 + 1;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const speedX = (Math.random() - 0.5) * 0.3;
    const speedY = (Math.random() - 0.5) * 0.3;
    particlesArray.push(new Particle(x, y, size, speedX, speedY));
  }
};

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
};

const resize = () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  init();
};
window.addEventListener("resize", resize);
resize();
animate();

return () => window.removeEventListener("resize", resize);


}, []);

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const quickLinks = [ { href: "/", label: "الرئيسية" }, { href: "/Trips", label: "الرحلات" }, { href: "/about", label: "من نحن" }, { href: "/contact", label: "تواصل معنا" } ];
const socialLinks = [
{ icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-[#1877F2] shadow-glow" },
{ icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] shadow-glow" },
{ icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-[#1DA1F2] shadow-glow" },
];

return ( <footer className="relative overflow-hidden bg-gradient-to-br from-titles-brown via-[hsl(10,80%,18%)] to-[hsl(10,70%,12%)]"> <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />


  {/* Decorative circles */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

  <div className="relative z-10 container mx-auto px-4 pt-7 pb-8">
    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
      {/* Logo & Description */}
      <motion.div variants={itemVariants} className="space-y-5 lg:col-span-1">
        <Link href="/" className="inline-block group">
          <img src="/logo.png" alt="Uzersaif" className="h-25 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-lg" />
        </Link>
        <p className="text-white/70 text-sm leading-relaxed max-w-xs">
          نقدم لك أفضل تجارب السفر والرحلات السياحية المميزة. استمتع برحلات لا تُنسى في أجمل المناطق الطبيعية.
        </p>
        <div className="pt-2">
          <p className="text-white/90 font-medium text-sm mb-3">تواصل معنا </p>
          <div className="pt-2 relative">

      <div className="flex gap-2">
        <motion.input
          type="email"
          placeholder="بريدك الإلكتروني"
          className="flex-1 min-w-0 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          whileFocus={{
            scale: 1.02,
            boxShadow: "0 0 8px rgba(255, 95, 1, 0.5)",
          }}
        />

        <motion.button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-primary to-primary-dark p-2.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/30"
          whileHover={{ scale: 1.1, boxShadow: "0 0 12px rgba(255, 95, 1, 0.6)" }}
        >
          <Send size={18} className="text-white" />
        </motion.button>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-[-55px] left-1/2 -translate-x-1/2 bg-primary text-white text-sm px-4 py-2 rounded-xl shadow-lg"
          >
            التفاصيل هتوصلك على بريدك ❤️
          </motion.div>
        )}
      </AnimatePresence>
    </div>
        </div>
      </motion.div>

      {/* Quick Links */}
      <motion.div variants={itemVariants} className="lg:pr-8">
        <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
          <span className="w-8 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full" />
          روابط سريعة
        </h3>
        <ul className="space-y-3">{quickLinks.map(link => <li key={link.href}><Link href={link.href} className="group flex items-center gap-2 text-white/70 hover:text-primary transition-all duration-300"><ChevronLeft size={16} className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" /><span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span></Link></li>)}</ul>
      </motion.div>

      {/* Contact Info */}
      <motion.div variants={itemVariants}>
        <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
          <span className="w-8 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full" />
          تواصل معنا
        </h3>
        <ul className="space-y-4">
          {[
            { icon: Phone, label: "+20 123 456 7890", href: "tel:+201234567890" },
            { icon: Mail, label: "info@uzersaif.com", href: "mailto:info@uzersaif.com" },
          ].map(item => (
            <li key={item.label}>
              <a href={item.href} className="group flex items-center gap-3 text-white/70 hover:text-white transition-all">
                <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300"><item.icon size={18} className="text-primary group-hover:text-white" /></span>
                <span className="text-sm">{item.label}</span>
              </a>
            </li>
          ))}
          <li>
            <div className="group flex items-center gap-3 text-white/70">
              <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"><MapPin size={18} className="text-primary" /></span>
              <span className="text-sm">القاهرة، مصر</span>
            </div>
          </li>
        </ul>
      </motion.div>

      {/* Social Media */}
      <motion.div variants={itemVariants}>
        <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
          <span className="w-8 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full" />
          تابعنا
        </h3>
        <p className="text-white/60 text-sm mb-5">تابعنا على منصات التواصل الاجتماعي لمعرفة آخر العروض والرحلات</p>
        <div className="flex gap-3">
          {socialLinks.map(social => (
            <motion.a key={social.label} href={social.href} className={`w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/80 ${social.color}`} whileHover={{ scale: 1.15, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }} aria-label={social.label}>
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>

    {/* Divider */}
    <div className="mt-12 mb-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

    {/* Copyright */}
    <motion.div
  variants={itemVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="flex flex-col md:flex-row items-center justify-center gap-4 text-center"
>

  {/* Left Side — الحقوق */}
  <p className="text-white/50 text-sm flex items-center gap-2" dir="rtl">
    © {currentYear} &nbsp;
   جميع الحقوق محفوظة
    <span className="text-primary font-semibold" dir="ltr">UzerSaif</span>

  </p>

  {/* Right Side — المطور */}
  <span className="text-white/50 text-sm flex items-center gap-1" dir="rtl">
    تم التطوير بواسطة&nbsp;
    <a
      href="https://www.facebook.com/ENSEGYPTEG"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary font-semibold hover:underline"
      dir="ltr"
    >
      ENS
    </a>
  </span>
</motion.div>



  </div>
</footer>


);
};

export default Footer;
