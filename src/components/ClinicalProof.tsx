import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import shilajitGummies from "@/assets/shilajit-gummies.png";

const ClinicalProof = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "25%", label: "Improvement in Fitness Score" },
    { value: "23%", label: "Reduction in Stress Level" },
    { value: "Better", label: "Protein Absorption" },
  ];

  return (
    <section className="section-padding bg-muted/50" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              We Don't Claim.{" "}
              <span className="text-gradient-gold">We Prove.</span>
            </h2>
            
            <div className="inline-flex items-center bg-secondary border border-primary/20 rounded-full px-5 py-2 mb-8">
              <span className="text-foreground font-medium">
                We're building a <strong>clinical-backed</strong> future
              </span>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft">
              <p className="text-foreground font-semibold mb-2">
                Based on a 90-day placebo-controlled clinical study
              </p>
              <p className="text-muted-foreground text-sm">
                Published in accredited journals: European Journal of Pharmaceutical 
                and Medical Research & International Journal
              </p>
            </div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <img
                src={shilajitGummies}
                alt="Shilajit Gummies with Clinical Stats"
                className="w-full max-w-md rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalProof;
