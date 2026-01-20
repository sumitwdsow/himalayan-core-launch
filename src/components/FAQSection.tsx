import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "What products does Himalayan Core offer?",
      answer: "Himalayan Core offers a complete range of Ayurvedic wellness products including Shilajit Gummies, Hair Gummies, Ashwagandha Gummies, Shilajit Gold Resin, Shilajit Energy Sips, and Night Burner capsules. All products are made with premium Himalayan ingredients and are clinically tested.",
    },
    {
      question: "What is Shilajit and why is it beneficial?",
      answer: "Shilajit is a natural mineral-rich substance found in the Himalayan mountains, formed over millions of years from decomposed plant matter. It contains 85+ minerals, fulvic acid, and powerful antioxidants that support energy, stamina, immunity, and overall vitality. It has been used in Ayurvedic medicine for centuries.",
    },
    {
      question: "How do I take Himalayan Core products?",
      answer: "For Gummies: Take 2 gummies daily. For Shilajit Gold Resin: Take a pea-sized amount (250-500mg) with warm milk or water. For Energy Sips: Mix one sachet in water. For Night Burner: Take 2 capsules before bed. Always follow the specific instructions on each product.",
    },
    {
      question: "Are your products vegetarian/vegan?",
      answer: "Yes! Most of our products are vegan-friendly. Our gummies are made with plant-based pectin instead of gelatin. Check individual product labels for specific dietary information. We use no animal-derived ingredients in most formulations.",
    },
    {
      question: "Are your products clinically tested?",
      answer: "Yes, absolutely! Our Shilajit Gummies have undergone a 90-day placebo-controlled clinical study showing 25% improvement in fitness scores and 23% reduction in stress levels. Results were published in the European Journal of Pharmaceutical and Medical Research.",
    },
    {
      question: "How long until I see results?",
      answer: "Results vary by product. For Shilajit Gummies, most customers report increased energy within 1-2 weeks. Hair Gummies show visible results in 90 days. For full benefits, we recommend consistent use for at least 30-60 days.",
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day money-back guarantee on all products. If you're not completely satisfied with your purchase, contact our customer support team for a full refund. We believe in our products and want you to try them risk-free.",
    },
    {
      question: "Is Himalayan Core Made in India?",
      answer: "Yes! All Himalayan Core products are proudly made in India using authentic Himalayan ingredients. We are FSSAI certified, GMP certified, and follow strict quality control measures to ensure purity and potency.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-card" ref={ref}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-accent font-semibold tracking-wide uppercase text-sm">
              Got Questions?
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about Himalayan Core products.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded-xl px-6 border-none shadow-soft"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
