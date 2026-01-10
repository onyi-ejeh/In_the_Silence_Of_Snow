import { motion } from "framer-motion";

const AuthorSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-12 items-center"
          >
            {/* Author placeholder - could be replaced with actual photo */}
            <div className="flex justify-center md:justify-start">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-accent flex items-center justify-center shadow-soft">
                <span className="font-display text-5xl text-muted-foreground/40">VE</span>
              </div>
            </div>

            <div className="md:col-span-2 text-center md:text-left">
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-body mb-4">
                About the Author
              </p>

              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
                Victoria Onyi Ejeh
              </h2>

              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
                Victoria Onyi Ejeh is a writer and reflective thinker whose work explores 
                the intersection of faith, personal transformation and entrepreneurship. 
                Born in Nigeria and now calling Sweden home, she writes from the liminal spaces between worlds.

              </p>

              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                <span className="italic">"In the Silence of Snow"</span> is her debut memoir, written as a former atheist 
                who moved to Sweden believing it would be a place where her atheism could finally thrive. 
                Through years of journaling in the quiet of winter,the book traces an unexpected return to faith through Questioning, doubt, and finally with evidence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
