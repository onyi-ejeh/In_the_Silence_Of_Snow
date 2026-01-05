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
            Join thousands of readers finding solace in honest faith. Order your copy today
            and receive exclusive bonus content from Victoria's personal journals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="xl"
              className="bg-amber-600 text-white hover:bg-amber-700 focus-visible:ring-amber-600"
              onClick={() =>
                window.open(
                  "https://buy.stripe.com/5kQcN591o0lo8Ib5UK0gw02",
                  "_blank"
                )
              }
            >
              Order Paperback Now
            </Button>

            <div className="flex flex-col items-center sm:items-start">
              <Button
                variant="ghost"
                size="xl"
                className="border-2 border-primary-foreground/30 hover:bg-primary-foreground/10"
                asChild
              >
                <a
                  href="https://www.amazon.com/dp/B0G31F428K"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Ebook on Amazon
                </a>
              </Button>

              <p className="text-xs text-primary-foreground/70 mt-2">
                Instant digital delivery via Amazon
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
