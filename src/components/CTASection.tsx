import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
            Begin the Journey
          </h2>

          <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10">
            Order your copy today and receive exclusive digital reflections
            from Victoria’s personal journals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary */}
            <Button
              size="lg"
              className="h-12 px-8 rounded-full bg-amber-600 text-white hover:bg-amber-700"
            >
              Order the Paperback
            </Button>

            {/* Secondary */}
            <Button
              size="lg"
              className="
                h-12 px-8 rounded-full
                bg-primary-foreground/15
                text-primary-foreground
                border border-primary-foreground/30
                backdrop-blur-sm
                hover:bg-primary-foreground/25
                transition
              "
            >
              Join the Mailing List
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
