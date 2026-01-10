module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        'xs': '0.6rem',      
        'sm': '0.7rem',      
        'base': '0.8rem',    
        'lg': '0.9rem',      
        'xl': '1rem',        
        '2xl': '1.2rem',     
        '3xl': '1.5rem',     
        '4xl': '1.75rem',    
        '5xl': '2.25rem',    
        '6xl': '3rem',       
        '7xl': '3.75rem',    
        '8xl': '5rem',       
        '9xl': '6.5rem',     
      },
      colors: {
        // ===== Cosmic Desert Theme Colors =====
        
        // Galaxy / Space Colors
        "space-black": "#070A13",
        "galaxy-navy": "#0D1324",
        "cosmic-blue": "#1B2A4A",
        "nebula-purple": "#2A1F3F",
        "midnight-indigo": "#151B3A",
        
        // Stars / Glow
        "star-white": "#F4F7FF",
        "soft-starlight": "#C9D6FF",
        
        // Desert / Fire (Primary Accents)
        "desert-fire": "#F47A1F",
        "burnt-sunset": "#D9641E",
        "golden-ember": "#FFB85C",
        
        // Desert / Sand
        "desert-sand": "#D8C39A",
        "soft-dune": "#BFA77A",
        "oasis-clay": "#8C6A4A",
        
        // Text Colors
        "text-primary": "#F5F7FA",
        "text-secondary": "#B6BDD6",
        "text-muted": "#8A91A8",
        
        // System Colors (HSL-based)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        // Hero Gradients
        "hero-cosmic": "radial-gradient(circle at top, #1B2A4A, #070A13)",
        "cosmic-overlay": "linear-gradient(180deg, rgba(42,31,63,0.6), rgba(7,10,19,0.9))",
        
        // CTA Gradients
        "cta-fire": "linear-gradient(135deg, #F47A1F, #FFB85C)",
        "cta-fire-hover": "linear-gradient(135deg, #D9641E, #F47A1F)",
        
        // Section Gradients
        "section-galaxy": "linear-gradient(180deg, #070A13 0%, #0D1324 30%, #1B2A4A 60%, #2A1F3F 100%)",
        "section-sand": "linear-gradient(180deg, #D8C39A 0%, #BFA77A 50%, #8C6A4A 100%)",
        "galaxy-to-sand": "linear-gradient(180deg, #070A13 0%, #0D1324 20%, #1B2A4A 40%, #8C6A4A 70%, #D8C39A 100%)",
        
        // Card Gradients
        "card-galaxy": "linear-gradient(135deg, rgba(13,19,36,0.8) 0%, rgba(27,42,74,0.6) 50%, rgba(42,31,63,0.4) 100%)",
        "card-sand": "linear-gradient(135deg, rgba(216,195,154,0.9) 0%, rgba(191,167,122,0.8) 50%, rgba(140,106,74,0.7) 100%)",
      },
      boxShadow: {
        "glow-fire": "0 0 30px rgba(244, 122, 31, 0.4)",
        "glow-ember": "0 0 30px rgba(255, 184, 92, 0.3)",
        "glow-starlight": "0 0 30px rgba(201, 214, 255, 0.2)",
        "elegant": "0 10px 40px -10px rgba(244, 122, 31, 0.3)",
        "card-dark": "0 4px 20px -2px rgba(0, 0, 0, 0.4)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "twinkle": {
          "0%, 100%": {
            opacity: "0.3",
            transform: "scale(0.8)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.2)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(244, 122, 31, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(244, 122, 31, 0.6)",
          },
        },
        "float-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-80px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "twinkle": "twinkle 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float-up": "float-up 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
