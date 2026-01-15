import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Heart, Shield, Brain, Leaf, TrendingUp } from "lucide-react";

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Zap,
      title: "Natural Energy",
      description: "Sustained energy throughout the day without jitters or crashes. Feel vitalized and ready to conquer.",
    },
    {
      icon: TrendingUp,
      title: "Enhanced Stamina",
      description: "Improve physical endurance and performance. Perfect for active lifestyles and daily demands.",
    },
    {
      icon: Heart,
      title: "Heart Health",
      description: "Support cardiovascular wellness with minerals and antioxidants that promote healthy circulation.",
    },
    {
      icon: Shield,
      title: "Immunity Boost",
      description: "Strengthen your body's natural defenses with powerful adaptogens and trace minerals.",
    },
    {
      icon: Brain,
      title: "Mental Clarity",
      description: "Sharpen focus and cognitive function. Experience better concentration and mental alertness.",
    },
    {
      icon: Leaf,
      title: "Stress Relief",
      description: "Natural adaptogenic properties help your body manage stress and promote calmness.",
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
            Why Shilajit?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Transform Your Wellness
          </h2>
          <p className="text-muted-foreground text-lg">
            Unlock the ancient secrets of the Himalayas. Our premium Shilajit gummies 
            deliver powerful benefits backed by centuries of Ayurvedic tradition.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500"
            >
              {/* Decorative Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="relative font-display text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="relative text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
