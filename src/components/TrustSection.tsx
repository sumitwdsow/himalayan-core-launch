import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, FlaskConical, Leaf, Award, Truck, BadgeCheck } from "lucide-react";

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const trustBadges = [
    {
      icon: FlaskConical,
      title: "Lab Tested",
      description: "Third-party verified for purity and potency",
    },
    {
      icon: Leaf,
      title: "100% Natural",
      description: "No artificial colors, flavors, or preservatives",
    },
    {
      icon: Shield,
      title: "FSSAI Certified",
      description: "Meets all food safety standards",
    },
    {
      icon: Award,
      title: "GMP Certified",
      description: "Manufactured in certified facilities",
    },
    {
      icon: BadgeCheck,
      title: "Made in India",
      description: "Proudly crafted with Indian expertise",
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Delivered to your doorstep safely",
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-forest-gradient" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold tracking-wide uppercase text-sm">
            Trust & Quality
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-6">
            Why Choose Himalayan Core?
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            We're committed to delivering the purest, most effective Shilajit products. 
            Every batch is carefully tested and verified for your peace of mind.
          </p>
        </motion.div>

        {/* Trust Badges Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors duration-300">
                <badge.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-primary-foreground text-lg mb-2">
                {badge.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "50,000+", label: "Happy Customers" },
            { number: "4.9★", label: "Average Rating" },
            { number: "100%", label: "Natural Ingredients" },
            { number: "30-Day", label: "Money Back Guarantee" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.number}
              </p>
              <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
