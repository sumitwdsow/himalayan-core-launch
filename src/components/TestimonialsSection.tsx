import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Rahul Sharma",
      location: "Mumbai",
      rating: 5,
      text: "I've been using Himalayan Core Shilajit Gummies for 3 months now. My energy levels have improved dramatically, and I no longer feel tired by afternoon. Best investment in my health!",
      verified: true,
    },
    {
      name: "Priya Patel",
      location: "Bangalore",
      rating: 5,
      text: "Finally, a Shilajit product that actually tastes good! The gummy format makes it so easy to take daily. I've noticed better focus at work and improved stamina during my workouts.",
      verified: true,
    },
    {
      name: "Arjun Mehta",
      location: "Delhi",
      rating: 5,
      text: "As someone who was skeptical about supplements, I'm genuinely impressed. The quality is outstanding, and I can feel the difference in my overall vitality. Highly recommended!",
      verified: true,
    },
    {
      name: "Sneha Reddy",
      location: "Hyderabad",
      rating: 5,
      text: "These gummies have become a part of my daily routine. My immunity has improved, and I haven't fallen sick in months. The natural taste is a bonus!",
      verified: true,
    },
    {
      name: "Vikram Singh",
      location: "Jaipur",
      rating: 5,
      text: "I was looking for a natural energy booster, and Himalayan Core delivered. No jitters, no crashes - just clean, sustained energy throughout the day.",
      verified: true,
    },
    {
      name: "Anita Kumar",
      location: "Chennai",
      rating: 5,
      text: "The quality and purity of this product are unmatched. I've tried other brands, but Himalayan Core is clearly superior. Worth every rupee!",
      verified: true,
    },
  ];

  return (
    <section id="reviews" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold tracking-wide uppercase text-sm">
            Customer Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. See what our customers have to say 
            about their Himalayan Core experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-accent/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                </div>
                {testimonial.verified && (
                  <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                    Verified Buyer
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
