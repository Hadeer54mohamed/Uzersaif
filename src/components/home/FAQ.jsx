"use client";

import { HelpCircle, ChevronDown } from "lucide-react";
import { useState, useCallback } from "react";

const faqData = [
  {
    id: "faq-1",
    question: "كيف يمكنني حجز رحلة؟",
    answer:
      "يمكنك حجز رحلتك بسهولة من خلال موقعنا الإلكتروني. اختر الرحلة المناسبة، حدد التاريخ وعدد المسافرين، ثم أكمل عملية الدفع. كما يمكنك التواصل معنا مباشرة عبر الهاتف أو الواتساب للمساعدة في الحجز.",
  },
  {
    id: "faq-2",
    question: "ما هي طرق الدفع المتاحة؟",
    answer:
      "نقبل جميع طرق الدفع الرئيسية بما في ذلك البطاقات الائتمانية (فيزا، ماستركارد)، التحويل البنكي، والدفع النقدي. كما نوفر خيارات التقسيط للرحلات ذات القيمة العالية.",
  },
  {
    id: "faq-3",
    question: "هل يمكنني إلغاء الحجز واسترداد المبلغ؟",
    answer:
      "نعم، يمكنك إلغاء حجزك قبل 7 أيام من موعد الرحلة واسترداد كامل المبلغ. في حالة الإلغاء قبل 3-7 أيام، يتم خصم 25% من قيمة الحجز. الإلغاء قبل أقل من 3 أيام غير قابل للاسترداد.",
  },
  {
    id: "faq-4",
    question: "ماذا تشمل باقات الرحلات؟",
    answer:
      "تشمل باقاتنا عادةً: الإقامة الفندقية، وجبات الطعام (حسب الباقة)، التنقلات الداخلية، المرشد السياحي، رسوم دخول المزارات، وتأمين السفر. التفاصيل الكاملة متوفرة في صفحة كل رحلة.",
  },
  {
    id: "faq-5",
    question: "هل تقدمون رحلات مخصصة للعائلات؟",
    answer:
      "بالتأكيد! نوفر برامج خاصة للعائلات تراعي احتياجات جميع الأعمار، مع أنشطة ترفيهية للأطفال وأماكن إقامة مناسبة للعائلات. يمكننا أيضاً تصميم رحلة خاصة حسب متطلباتكم.",
  },
  {
    id: "faq-6",
    question: "كيف أتواصل مع فريق الدعم؟",
    answer:
      "فريق الدعم متاح على مدار الساعة عبر الواتساب والهاتف. يمكنك أيضاً إرسال استفسارك عبر نموذج التواصل في موقعنا أو عبر البريد الإلكتروني. نضمن الرد خلال 24 ساعة كحد أقصى.",
  },
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = useCallback((id) => {
    setOpenItem((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section className="py-20 bg-muted/10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/20 rounded-full">
              <HelpCircle className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            الأسئلة الشائعة
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            إجابات على أكثر الأسئلة شيوعاً التي يطرحها عملاؤنا
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((faq, index) => {
            const isOpen = openItem === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center flex flex-col justify-center items-center animate-fade-in-up border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex justify-center items-center gap-3 text-xl font-bold text-primary transition-colors hover:text-primary/80"
                >
                  {faq.question}
                  <ChevronDown
                    className={`w-6 h-6 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div
          className="text-center mt-12 animate-fade-in-up"
          style={{ animationDelay: "600ms" }}
        >
          <p className="text-muted-foreground mb-4">لم تجد إجابة سؤالك؟</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
