import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ShoppingCart, Check } from "lucide-react";
import productMain from "@/assets/product-main.jpg";

const ProductSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "30 Premium Shilajit Gummies",
    "500mg Himalayan Shilajit per serving",
    "Rich in 85+ Minerals & Fulvic Acid",
    "Delicious Natural Berry Flavor",
    "No Artificial Colors or Preservatives",
    "Easy-to-take Daily Wellness",
  ];

  return (
    <section id="product" className="section-padding bg-earth-gradient" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl scale-110" />
              
              {/* Product Image */}
              <div className="relative bg-gradient-to-br from-cream to-secondary/50 rounded-3xl p-8 shadow-elevated">
                <img
                  src={productMain}
                  alt="Himalayan Core Shilajit Gummies"
                  className="w-full h-auto rounded-2xl animate-float"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-gold font-semibold text-sm"
              >
                ⭐ Bestseller
              </motion.div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-accent font-semibold tracking-wide uppercase text-sm">
              Premium Quality
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              Shilajit Gummies
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-muted-foreground text-sm">
                4.9/5 (2,847 Reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Transform your daily wellness routine with our premium Shilajit Gummies. 
              Sourced from the pristine heights of the Himalayas and crafted with care, 
              each gummy delivers powerful natural energy and rejuvenation.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground/80 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Price & CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-foreground">₹1,499</span>
                  <span className="text-lg text-muted-foreground line-through">₹1,999</span>
                </div>
                <p className="text-accent font-medium text-sm mt-1">Save 25% - Limited Time!</p>
              </div>
              <Button variant="premium" size="xl" className="w-full sm:w-auto">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>

            {/* Guarantee */}
            <p className="text-muted-foreground text-sm mt-6 flex items-center gap-2">
              <span className="text-accent">✓</span>
              30-Day Money-Back Guarantee • Free Shipping on orders above ₹999
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
