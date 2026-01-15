import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import shilajitRaw from "@/assets/shilajit-raw.jpg";
import himalayaMountains from "@/assets/himalayan-mountains.jpg";

const IngredientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ingredients = [
    {
      name: "Pure Himalayan Shilajit",
      description: "Harvested from altitudes above 16,000 feet, rich in 85+ minerals and fulvic acid.",
    },
    {
      name: "Fulvic Acid",
      description: "Nature's most powerful antioxidant, enhancing nutrient absorption and cellular health.",
    },
    {
      name: "Natural Minerals",
      description: "Iron, Zinc, Magnesium, and more trace elements essential for optimal body function.",
    },
    {
      name: "Humic Substances",
      description: "Powerful compounds that support gut health and natural detoxification.",
    },
  ];

  return (
    <section id="ingredients" className="section-padding bg-card" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-semibold tracking-wide uppercase text-sm">
              Pure & Potent
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Sourced from the Heart of the Himalayas
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our Shilajit is ethically harvested from pristine Himalayan ranges, 
              where ancient organic matter has been naturally purified over millions of years 
              into the most potent mineral-rich substance on Earth.
            </p>

            {/* Ingredients List */}
            <div className="space-y-6">
              {ingredients.map((ingredient, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {ingredient.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {ingredient.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl overflow-hidden shadow-elevated"
                >
                  <img
                    src={himalayaMountains}
                    alt="Himalayan Mountains"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl overflow-hidden shadow-elevated"
                >
                  <img
                    src={shilajitRaw}
                    alt="Raw Shilajit"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </div>
              <div className="pt-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl overflow-hidden shadow-elevated bg-primary p-6 h-64 flex flex-col justify-center"
                >
                  <p className="font-display text-3xl font-bold text-primary-foreground mb-2">
                    85+
                  </p>
                  <p className="text-primary-foreground/80 text-sm">
                    Essential Minerals & Trace Elements
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl overflow-hidden shadow-elevated bg-accent p-6 mt-4"
                >
                  <p className="font-display text-3xl font-bold text-accent-foreground mb-2">
                    16,000+
                  </p>
                  <p className="text-accent-foreground/80 text-sm">
                    Feet Above Sea Level Sourcing
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
