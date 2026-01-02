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
          In recent years, many people have begun to question or step away from the faith they once held. 
            This has touched families, friendships, and church communities in deeply personal ways.

          </p>

          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
           
            For some, the process brings clarity. For others, it brings confusion, distance, or pain. 
            This book does not respond with panic or judgment, but with honesty, compassion, and depth.
          </p>

        <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
        Perhaps this feels familiar:
        </p>

         <ul className="list-disc pl-6 font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
         <li>
    Someone you love is re-examining their faith, and you don’t know how to respond without pushing them away.
  </li>
  <li>
   Your relationships feel strained by disagreements about belief, values, or truth.
  </li>
  <li>
   You yourself are wrestling with doubt, difficult questions, and a quiet fear of where they might lead.
  </li>
</ul>


<p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
 Drawn from Victoria’s lived experience after spending over a decade as an atheist and later returning to Christianity, 
  In the Silence of Snow offers a thoughtful way to understand what is happening — and how to respond with clarity, wisdom, and love.

</p>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
