import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, Star, Leaf, Wheat, Candy } from "lucide-react";

// Product Images
import shilajitGummies from "@/assets/shilajit-gummies.png";
import hairGummies from "@/assets/hair-gummies-1.png";
import ashwagandhaGummies from "@/assets/ashwagandha-gummies.png";
import shilajitGoldResin from "@/assets/shilajit-gold-resin.png";
import shilajitEnergySips from "@/assets/shilajit-energy-sips.png";
import nightBurner from "@/assets/night-burner.png";

interface Product {
  id: string;
  name: string;
  tagline: string;
  image: string;
  price: number;
  originalPrice: number;
  features: string[];
  badges: { icon: React.ElementType; label: string }[];
  rating: number;
  reviews: number;
  badge?: string;
}

const products: Product[] = [
  {
    id: "shilajit-gummies",
    name: "Shilajit Gummies",
    tagline: "Active Nutrition for Energy & Stamina",
    image: shilajitGummies,
    price: 1499,
    originalPrice: 1999,
    features: ["25% Fitness Improvement", "23% Stress Reduction", "Better Protein Absorption"],
    badges: [
      { icon: Leaf, label: "Vegan" },
      { icon: Wheat, label: "No Gelatin" },
      { icon: Check, label: "Non GMO" },
    ],
    rating: 4.9,
    reviews: 2847,
    badge: "Bestseller",
  },
  {
    id: "hair-gummies",
    name: "Hair Gummies",
    tagline: "Visible Results in 90 Days",
    image: hairGummies,
    price: 1299,
    originalPrice: 1799,
    features: ["DHT Blocker", "Biotin & Zinc", "Multivitamins"],
    badges: [
      { icon: Leaf, label: "Vegan" },
      { icon: Candy, label: "No Sugar" },
      { icon: Wheat, label: "Gluten Free" },
    ],
    rating: 4.8,
    reviews: 1523,
    badge: "Stage 1",
  },
  {
    id: "ashwagandha-gummies",
    name: "Ashwagandha Gummies",
    tagline: "Stress Relief, Focus & Balanced Energy",
    image: ashwagandhaGummies,
    price: 1199,
    originalPrice: 1599,
    features: ["Stress Relief", "Balanced Energy", "Focus & Clarity"],
    badges: [
      { icon: Leaf, label: "Vegan" },
      { icon: Check, label: "Root Extract" },
      { icon: Candy, label: "No Sugar" },
    ],
    rating: 4.8,
    reviews: 1892,
  },
  {
    id: "shilajit-gold-resin",
    name: "Shilajit Gold Resin",
    tagline: "For Strength & Stamina",
    image: shilajitGoldResin,
    price: 1999,
    originalPrice: 2499,
    features: ["Shilajit & Ashwagandha", "Black Musli & Gokshura", "Swarna Bhasma"],
    badges: [
      { icon: Check, label: "Pure Resin" },
      { icon: Leaf, label: "Ayurvedic" },
      { icon: Check, label: "20g Net" },
    ],
    rating: 4.9,
    reviews: 956,
    badge: "Premium",
  },
  {
    id: "shilajit-energy-sips",
    name: "Shilajit Energy Sips",
    tagline: "Ginger Honey - Instant Energy",
    image: shilajitEnergySips,
    price: 1799,
    originalPrice: 2299,
    features: ["30 Sachets", "Improves Stamina", "Instant Energy Boost"],
    badges: [
      { icon: Leaf, label: "Natural" },
      { icon: Check, label: "Honey" },
      { icon: Check, label: "On-the-go" },
    ],
    rating: 4.7,
    reviews: 734,
    badge: "New",
  },
  {
    id: "night-burner",
    name: "Night Burner",
    tagline: "Night-Time Weight Management",
    image: nightBurner,
    price: 1399,
    originalPrice: 1899,
    features: ["Improve Sleep Quality", "Curb Night Cravings", "Reduce Stress"],
    badges: [
      { icon: Check, label: "L-Carnitine" },
      { icon: Leaf, label: "Garcinia" },
      { icon: Check, label: "60 Capsules" },
    ],
    rating: 4.6,
    reviews: 612,
  },
];

const ProductShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <section id="products" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold tracking-wide uppercase text-sm">
            Our Products
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Premium Himalayan Wellness Range
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our clinically-backed, natural supplements designed to elevate your 
            health and vitality with the power of Himalayan ingredients.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-gold">
                  {product.badge}
                </div>
              )}

              {/* Product Image */}
              <div className="relative bg-gradient-to-br from-muted to-secondary/30 p-6 aspect-square flex items-center justify-center overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  animate={{
                    scale: hoveredProduct === product.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-accent text-accent"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground text-xs">
                    {product.rating} ({product.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Name & Tagline */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.tagline}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-foreground/70 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.badges.map((badge, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1 bg-secondary/50 px-2 py-1 rounded-full"
                    >
                      <badge.icon className="w-3 h-3 text-primary" />
                      <span className="text-xs text-foreground/70">{badge.label}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-foreground">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-accent text-xs font-medium">
                      Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </p>
                  </div>
                  <Button variant="premium" size="sm" className="group/btn">
                    <ShoppingCart className="w-4 h-4 mr-1 group-hover/btn:scale-110 transition-transform" />
                    Add
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
