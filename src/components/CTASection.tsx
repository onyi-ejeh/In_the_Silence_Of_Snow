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

          <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8">
            Order your paperback directly from this site and receive exclusive digital bonuses
            from Victoria’s personal journals.
          </p>

          {/* BONUS BOX */}
          <div className="mx-auto mb-10 text-left max-w-xl rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-6">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <p className="font-body text-base md:text-lg font-medium">
                Direct-purchase bonuses (free)
              </p>
              <span className="text-xs px-3 py-1 rounded-full bg-primary-foreground/15 border border-primary-foreground/20">
                Delivered by email after checkout
              </span>
            </div>

            <ul className="mt-4 space-y-2 text-sm md:text-base text-primary-foreground/85">
              <li className="flex gap-2">
                <span aria-hidden="true">✔</span>
                <span>Bonus PDF: Selected journal reflections</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true">✔</span>
                <span>Reflection guide (printable)</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true">✔</span>
                <span>Bonus essay / extra chapter</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true">✔</span>
                <span>Instant download link sent to your email</span>
              </li>
            </ul>

            <p className="mt-4 text-xs text-primary-foreground/70">
              Bonuses are available only for purchases made on this site.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-10">
            <div className="flex flex-col items-center">
              <Button
                size="default"
                className="h-12 px-8 rounded-full bg-amber-600 text-white hover:bg-amber-700 focus-visible:ring-amber-600 shadow-sm"
                onClick={() =>
                  window.open(
                    "https://buy.stripe.com/5kQcN591o0lo8Ib5UK0gw02",
                    "_blank"
                  )
                }
              >
                Order Paperback
              </Button>
              <p className="text-xs text-primary-foreground/70 mt-2">
                Includes free digital bonuses (email delivery)
              </p>
            </div>

            <div className="hidden sm:flex items-center justify-center px-1">
              <span className="text-xs text-primary-foreground/50">or</span>
            </div>

            <div className="flex flex-col items-center">
              <Button
                size="default"
                variant="ghost"
                className="h-12 px-8 rounded-full border-2 border-primary-foreground/35 text-primary-foreground hover:bg-primary-foreground/10"
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
                Instant Kindle delivery via Amazon
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
