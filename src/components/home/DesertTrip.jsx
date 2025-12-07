"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Sun, Tent, Car } from "lucide-react";

const DesertTrip = () => {
  const itinerary = [
    {
      day: "اليوم الأول",
      icon: <Sun className="w-5 h-5 text-primary ml-2" />,
      activities: [
        {
          icon: "📅",
          text: "التجمع يوم الخميس 27 نوفمبر ⏰ 10:30 مساءً من عبد المنعم رياض",
        },
        { icon: "🚐", text: "التحرك 11:00 مساءً – مع وقفة ريست بالطريق" },
        {
          icon: "🌄",
          text: "6:00 صباحًا – زيارة كهف الجارة والغابة الجيولوجية المتحجرة",
        },
        {
          icon: "🥘",
          text: "9:00 صباحًا – الوصول لواحة الفرافرة (كامب يوزر سيف) + فطار بدوي",
        },
        {
          icon: "🚙",
          text: "جولة 4×4: وادي العقبات، كف العروسة، الكثبان الرملية + تجربة Sand boarding، عين خضرا (الغداء)، بيت الثلج، وادي المخيمات",
        },
        {
          icon: "🗿",
          text: "جولة في تكوينات الصحراء البيضاء (المشروم 🍄 – الفرخة 🐔 – الأرنب 🐇 – الحصان 🐎 – الجمل 🐪 – أبو الهول 🗿)",
        },
        { icon: "🌅", text: "الغروب – التخييم + تجهيز القعدة البدوية" },
        { icon: "🔥", text: "عشاء بدوي مشوي – تحت الرمال" },
        { icon: "✨", text: "سهرة نجوم وشاي زردا وجلسة حول النار" },
        {
          icon: "🛏️",
          text: "استلام أدوات النوم والتخييم (بطاطين أو sleeping bags)",
        },
      ],
    },
    {
      day: "اليوم الثاني",
      icon: <Car className="w-5 h-5 text-primary ml-2" />,
      activities: [
        { icon: "🌄", text: "الاستيقاظ على شروق الشمس + فطار بدوي" },
        {
          icon: "🚙",
          text: "تجميع الكامب والعودة بالـ Land Cruiser إلى واحة الفرافرة",
        },
        { icon: "🏨", text: "تسليم الغرف في الفندق البدوي + استراحة" },
        {
          icon: "🎨",
          text: "زيارة متحف الفنان بدر عبد المغني، قصر الفرافرة وبيت الحجة أمينة، جناين واحة الفرافرة والعيون الرومانية",
        },
        {
          icon: "🎶",
          text: "حفلة سمر بدوية مع المزمار الواحي + رقص وغناء بدوي",
        },
        { icon: "🍽️", text: "عشاء ماندي + ألعاب وحكايات حتى النوم" },
      ],
    },
    {
      day: "اليوم الثالث",
      icon: <Tent className="w-5 h-5 text-primary ml-2" />,
      activities: [
        { icon: "👜", text: "مغادرة الغرف وتحضير الأغراض" },
        { icon: "🥐", text: "الذهاب إلى كامب يوزر سيف + فطار + مشروبات ساخنة" },
        {
          icon: "🪨",
          text: "زيارة جبل الكريستال + الصحراء السوداء في طريق العودة للقاهرة",
        },
        {
          icon: "🛍️",
          text: "التوقف لشراء منتجات الواحة: بلح، زيت زيتون، تمر بأنواعه",
        },
        { icon: "⏰", text: "الوصول القاهرة حوالي الساعة 10:00 بليل" },
      ],
    },
  ];

  const notes = [
    "شبكة الموبايل ضعيفة جدًا في مكان التخييم 📵",
    "في الفرافرة (قبل دخول الصحراء) كامب يوزر سيف به حمام 🚻 وكهرباء ⚡",
    "المطلوب منك: ملابس فقط وأغراضك الشخصية",
    "الجو: خفيف نهارًا / بارد ليلا (جاكت طبقات تقيل)",
    "قد يتعدل ترتيب البرنامج حسب الظروف الجوية أو الأمنية",
  ];

  const included = [
    "كل الانتقالات (ميكروباص سياحي حديث ومكيف)",
    "عربيات 4×4 داخل الصحراء",
    "إقامة ليلة في الفندق البدوي",
    "حفلات السمر + المزمار الواحي",
    "رسوم دخول محمية الصحراء البيضاء",
    "التخييم + الخيم + البطاطين + sleeping bags",
    "حمام متنقل + كامب بدوي",
    "مياه معدنية + مشروبات ساخنة وشاي زردا وسناكس",
    "7 وجبات كاملة (3 إفطار – 2 غداء – 2 عشاء)",
  ];

  const paymentMethods = [
    "مقدّم 25% لتأكيد الحجز والتصاريح و الباقي عند ميعاد الرحلة",
    "InstaPay إيداع بنكي: بنك مصر – رقم الحساب: 3680332000000154، البنك الأهلي – رقم الحساب: 8533011492818201011",
    "فودافون كاش: 01011879549 (يضاف 2% رسوم خدمة)",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[600px] w-full overflow-hidden rounded-b-2xl shadow-elegant">
        <img
          src="/trip-desert.jpg"
          alt="صحراء بيضاء"
          className="w-full h-full object-cover brightness-[0.65]"
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)] mb-3">
            رحلة الصحراء البيضاء
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-2xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
            3 أيام / ليلتين – مغامرة لا تُنسى في قلب الصحراء المصرية
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 lg:px-16 py-16 space-y-12">
        {/* تجمع الرحلة والتحرك */}
        <div className="bg-card rounded-2xl p-6 shadow-card border border-border mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-titles-brown">
            📌 تفاصيل التجمع والتحرك
          </h2>
          <ul className="space-y-3 text-muted-foreground text-base md:text-lg">
            <li className="flex items-center gap-3">
              <span className="text-2xl">📅</span>
              <span>
                التجمع يوم الخميس 27 نوفمبر ⏰ 10:30 مساءً من عبد المنعم رياض
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-2xl">🚐</span>
              <span>التحرك 11:00 مساءً – مع وقفة ريست بالطريق</span>
            </li>
          </ul>
        </div>

        {/* برنامج الرحلة */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-titles-brown text-center">
          🗓️ برنامج الرحلة
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {itinerary.map((day, index) => (
            <AccordionItem
              key={index}
              value={`day-${index}`}
              className="border-none"
            >
              <AccordionTrigger className="flex items-center justify-between bg-gradient-to-r from-primary/15 to-primary-dark/20 text-primary rounded-xl px-6 py-4 shadow-card border border-primary/20 hover:from-primary/25 hover:to-primary-dark/25 transition-smooth text-lg font-semibold">
                <span className="flex items-center gap-2">
                  {day.day} {day.icon}
                </span>
              </AccordionTrigger>

              <AccordionContent className="bg-card/90 rounded-xl p-6 mt-2 shadow-inner border border-border grid grid-cols-1 md:grid-cols-2 gap-4 transition-smooth">
                {day.activities.map((act, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:scale-[1.03] transition-smooth"
                  >
                    <span className="text-2xl">{act.icon}</span>
                    <span className="text-muted-foreground text-sm md:text-base">
                      {act.text}
                    </span>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {/* الأسعار للفرد */}
        <div className="bg-card rounded-2xl p-6 shadow-card border border-border text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-titles-brown">
            💰 الأسعار للفرد
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex justify-between items-center">
              <span>غرفة دبل – Early Birds</span>
              <span className="text-primary font-bold">6499 جنيه</span>
            </li>
            <li className="flex justify-between items-center">
              <span>قبل الرحلة بـ 10 أيام</span>
              <span className="text-accent font-bold">6900 جنيه</span>
            </li>
          </ul>
        </div>

        {/* السعر يشمل */}
        <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-titles-brown">
            ⭐ السعر يشمل
          </h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {included.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* ملاحظات */}
        <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-titles-brown">
            ⚠️ ملاحظات مهمة
          </h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {notes.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </div>

        {/* إرسال البطاقة */}
        <div className="bg-card rounded-2xl p-6 shadow-card border border-border text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-titles-brown">
            📸 استخراج التصاريح
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            ابعتلنا صورة بطاقتك علشان نبدأ فورًا في استخراج تصاريح الرحلة الخاصة
            بيك.
          </p>
        </div>

        {/* طرق الدفع */}
        <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-titles-brown">
            📌 طرق الحجز والدفع
          </h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {paymentMethods.map((method, idx) => (
              <li key={idx}>{method}</li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Button className="gradient-hero text-white px-10 py-6 text-lg rounded-2xl font-bold shadow-elegant hover:shadow-xl hover:scale-105 transition-smooth">
            احجز الآن
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DesertTrip;
