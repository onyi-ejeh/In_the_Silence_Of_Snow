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
            Join thousands of readers finding solace in honest faith. Pre-order your copy today 
            and receive exclusive bonus content from Victoria's personal journals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="camel" 
              size="xl"
              className="text-primary"
            >
              Pre-Order Now
            </Button>
            <Button 
              variant="ghost" 
              size="xl"
              className="border-2 border-primary-foreground/30 hover:bg-primary-foreground/10"
            >
              Join the Mailing List
            </Button>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/60 font-body">
            Expected release: Spring 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
