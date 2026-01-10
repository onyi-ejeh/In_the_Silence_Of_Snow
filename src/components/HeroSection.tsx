import { motion } from "framer-motion";
import bookCover from "@/assets/book-cover.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero overflow-hidden">
      {/* Subtle snow particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-foreground/10 rounded-full animate-snow-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-muted-foreground font-body text-sm tracking-[0.2em] uppercase mb-6"
            >
              A Memoir by Victoria Onyi Ejeh
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground leading-tight mb-8"
            >
              In the Silence
              <span className="block text-muted-foreground">of Snow</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
            >
              A Rarely Honest Account of Faith, Doubt, and the invisible Work of Deconstruction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
           <Button
                size="xl"
                className="h-12 px-8 rounded-full bg-amber-600 text-white hover:bg-amber-700 focus-visible:ring-amber-600 shadow-sm"
                onClick={() =>
                  window.open(
                    "https://buy.stripe.com/5kQcN591o0lo8Ib5UK0gw02",
                    "_blank"
                  )
                }
              >
                Order Now
              </Button>
          
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-8 text-sm text-muted-foreground/70 font-body italic"
            >
              "I thought I left God behind, But He met me in the quiet places of Sweden"
            </motion.p>
          </motion.div>

          {/* Book Cover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full transform scale-110" />
              <img
                src={bookCover}
                alt="In the Silence of Snow - Book Cover"
                className="relative w-64 md:w-80 lg:w-96 shadow-book rounded-sm"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
