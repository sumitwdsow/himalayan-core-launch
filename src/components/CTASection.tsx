import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Gift } from "lucide-react";
import productMain from "@/assets/product-main.jpg";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-hero-gradient relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-2 mb-6">
              <Gift className="w-4 h-4 text-accent" />
              <span className="text-cream text-sm font-medium">Limited Time Offer</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6">
              Start Your Wellness Journey Today
            </h2>

            <p className="text-cream/80 text-lg mb-8 leading-relaxed">
              Join thousands of happy customers who have transformed their health 
              with Himalayan Core. Order now and experience the power of pure 
              Himalayan Shilajit.
            </p>

            {/* Offer Details */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-4xl font-bold text-cream">₹1,499</span>
                <span className="text-xl text-cream/60 line-through">₹1,999</span>
                <span className="bg-accent text-accent-foreground text-sm font-semibold px-3 py-1 rounded-full">
                  Save 25%
                </span>
              </div>
              <ul className="space-y-2 text-cream/80 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span> Free shipping on orders above ₹999
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span> 30-day money-back guarantee
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span> Secure payment options
                </li>
              </ul>
            </div>

            <Button variant="hero" size="xl" className="group w-full sm:w-auto">
              Order Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl scale-90" />
              
              <img
                src={productMain}
                alt="Himalayan Core Shilajit Gummies"
                className="relative w-80 h-80 object-contain animate-float drop-shadow-2xl"
              />

              {/* Floating Badge */}
              <div className="absolute -right-4 top-8 bg-cream text-foreground px-4 py-2 rounded-full shadow-elevated font-semibold text-sm animate-pulse-glow">
                🔥 Selling Fast!
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
