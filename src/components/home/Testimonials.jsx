import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Star, Quote } from "lucide-react";

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

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            آراء عملائنا
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            استمع إلى تجارب عملائنا السعداء الذين استمتعوا برحلات لا تُنسى معنا
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="hover:shadow-elegant transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-primary fill-primary"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {testimonial.comment}
                </p>

                <div className="flex items-center space-x-reverse space-x-4 border-t border-border pt-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full"
                    unoptimized
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <div className="text-sm text-foreground/60 mt-1">
                      {testimonial.location}
                    </div>
                    <div className="text-sm text-primary font-medium mt-1">
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
