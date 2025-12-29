import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8">
            About the Book
          </h2>

          <div className="w-16 h-px bg-camel mx-auto mb-10" />

          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            In the hushed landscapes of Sweden, where winter stretches long and stillness speaks volumes, 
            Victoria Onyi Ejeh embarks on an unexpected journey—not away from faith, but deeper into its 
            most uncomfortable questions.
          </p>

          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            This memoir doesn't offer easy answers or tidy resolutions. Instead, it invites you into the 
            sacred space of honest doubt, where the crumbling of certainty becomes the foundation for 
            something more resilient, more authentic, more human.
          </p>

          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
            <span className="italic">"In the Silence of Snow"</span> is for anyone who has felt the weight of 
            inherited beliefs, the loneliness of questioning, and the quiet hope that perhaps God meets 
            us not in our certainty, but in our surrender.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
