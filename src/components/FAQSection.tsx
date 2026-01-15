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
      question: "What is Shilajit and why is it beneficial?",
      answer: "Shilajit is a natural mineral-rich substance found in the Himalayan mountains, formed over millions of years from decomposed plant matter. It contains 85+ minerals, fulvic acid, and powerful antioxidants that support energy, stamina, immunity, and overall vitality. It has been used in Ayurvedic medicine for centuries.",
    },
    {
      question: "How many gummies should I take daily?",
      answer: "We recommend taking 2 gummies daily, preferably in the morning with or after breakfast. Each serving provides 500mg of pure Himalayan Shilajit for optimal benefits. Consistency is key - take them regularly for best results.",
    },
    {
      question: "Are there any side effects?",
      answer: "Our Shilajit Gummies are made from 100% natural ingredients and are generally well-tolerated. However, we recommend consulting your healthcare provider before starting any new supplement, especially if you're pregnant, nursing, or have any medical conditions.",
    },
    {
      question: "How long until I see results?",
      answer: "Most customers report feeling increased energy within 1-2 weeks of consistent use. For full benefits like improved stamina, immunity, and mental clarity, we recommend using the product for at least 30-60 days.",
    },
    {
      question: "Is your Shilajit lab tested?",
      answer: "Yes, absolutely! Every batch of our Shilajit undergoes rigorous third-party testing for purity, potency, and heavy metals. We ensure our product meets the highest quality standards and is free from contaminants.",
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, simply contact our customer support team for a full refund. We believe in our product and want you to try it risk-free.",
    },
    {
      question: "Is this product suitable for vegetarians?",
      answer: "Yes! Our Shilajit Gummies are made with plant-based pectin instead of gelatin, making them 100% vegetarian-friendly. We use no animal-derived ingredients in our formulation.",
    },
    {
      question: "How should I store the gummies?",
      answer: "Store the gummies in a cool, dry place away from direct sunlight. Keep the jar tightly closed after each use. There's no need for refrigeration, but avoid exposure to heat or humidity.",
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
              Find answers to common questions about our Shilajit Gummies.
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
