import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-frost relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-camel-light/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="font-display text-6xl md:text-8xl text-muted-foreground/20 leading-none mb-4">
            "
          </div>

          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-8 -mt-8">
            Deconstruction is not the opposite of faith. It is faith doing its hardest, most honest work.
          </blockquote>

          <div className="w-16 h-px bg-camel mx-auto mb-6" />

          <cite className="font-body text-muted-foreground not-italic tracking-wide">
            — From In the Silence of Snow
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
