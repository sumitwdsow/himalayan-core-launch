import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Heart, Shield, Brain, Leaf, TrendingUp, Moon, Scissors } from "lucide-react";
import shilajitBenefits from "@/assets/shilajit-benefits.png";

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Zap,
      title: "Natural Energy & Stamina",
      description: "Supports cellular energy production for sustained vitality without stimulants.",
    },
    {
      icon: TrendingUp,
      title: "Strength & Physical Recovery",
      description: "Helps improve endurance and supports faster recovery after physical effort.",
    },
    {
      icon: Shield,
      title: "Stress Resilience & Balance",
      description: "Supports the body's ability to adapt to physical and mental stress.",
    },
    {
      icon: Leaf,
      title: "Enhanced Nutrient Absorption",
      description: "Rich in fulvic acid, aiding better absorption of essential minerals.",
    },
    {
      icon: Brain,
      title: "Cognitive Clarity & Focus",
      description: "Supports mental sharpness, focus, and long-term brain health.",
    },
    {
      icon: Heart,
      title: "Heart & Immune Health",
      description: "Powerful antioxidants that support cardiovascular and immune wellness.",
    },
    {
      icon: Scissors,
      title: "Hair Health & Growth",
      description: "DHT blockers, biotin, and zinc for stronger, healthier hair.",
    },
    {
      icon: Moon,
      title: "Better Sleep & Recovery",
      description: "Night-time formulas that support restful sleep and metabolism.",
    },
  ];

  return (
    <section id="benefits" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold tracking-wide uppercase text-sm">
            Why Himalayan Core?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Benefits of Pure Shilajit & Ayurvedic Wellness
          </h2>
          <p className="text-muted-foreground text-lg">
            Unlock the ancient secrets of the Himalayas. Our premium range delivers 
            powerful benefits backed by clinical studies and centuries of Ayurvedic tradition.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Benefits Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <img
              src={shilajitBenefits}
              alt="Benefits of Pure Shilajit"
              className="w-full rounded-2xl shadow-elevated"
            />
          </motion.div>

          {/* Benefits Grid */}
          <div className="order-1 lg:order-2 grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card rounded-xl p-5 shadow-soft hover:shadow-elevated transition-all duration-500"
              >
                {/* Decorative Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <benefit.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="relative font-display text-base font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="relative text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
