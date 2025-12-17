"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NavLink } from "../NavLink";
import { Button } from "../ui/button";

const Navbar = ({ transparent = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => setIsScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/Trips", label: "الرحلات" },
    { href: "/about", label: "من نحن" },
    { href: "/contact", label: "تواصل معنا" },
  ];

  return (
    <nav
    className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-white text-black shadow-lg backdrop-blur-md"
        : transparent
        ? "bg-transparent text-white"
        : "bg-white text-black shadow-sm"
    }`}
    
    >
      <div className="flex items-center justify-between h-20 px-4 md:px-8">
        {/* Logo */}
        <NavLink
          href="/"
          className="flex items-center gap-2 hover:scale-[1.03] transition-all duration-300"
        >
          <Image
            src="/TOURS.png"
            alt="Uzer Saif Tours Logo"
            width={64}
            height={64}
            className="drop-shadow-md"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              className={`relative font-medium transition-all
                ${
                  isScrolled || !transparent
                    ? "text-foreground/80 hover:text-primary"
                    : "text-white/90 hover:text-white"
                }
                after:absolute after:bottom-0 after:right-0 after:h-[2px]
                after:w-0 after:bg-primary after:transition-all
                hover:after:w-full hover:after:left-0
              `}

              activeClassName="text-primary after:w-full"
            >
              {link.label}
            </NavLink>
          ))}

          <Button className="bg-gradient-to-r from-primary to-primary-dark px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-all hover:from-primary-dark hover:to-primary font-bold">
            احجز الآن
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-primary/10 transition-all"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
  className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden`}
  style={{
    maxHeight: isMobileMenuOpen ? "500px" : "0",
    opacity: isMobileMenuOpen ? 1 : 0,
  }}
>
  <div
    className={`py-4 space-y-4 px-4 bg-white/95 shadow-lg rounded-b-2xl transform transition-transform duration-500 ${
      isMobileMenuOpen ? "translate-y-0" : "-translate-y-10"
    }`}
  >
    {navLinks.map((link) => (
      <NavLink
        key={link.href}
        href={link.href}
        onClick={() => setIsMobileMenuOpen(false)}
        className="block text-foreground/80 hover:text-primary font-medium transition-colors py-2 px-2 rounded-lg"
        activeClassName="text-primary"
      >
        {link.label}
      </NavLink>
    ))}

    <Button
      className="w-full bg-gradient-to-r from-primary to-primary-dark py-3 rounded-xl shadow-md hover:from-primary-dark hover:to-primary font-bold transition-all"
    >
      احجز الآن
    </Button>
  </div>
</div>

    </nav>
  );
};

export default Navbar;
