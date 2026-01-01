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
           In recent years, many people have begun to question, rethink, or step away from the faith they once held. 
            This process is often called “deconstruction”. This movement has touched families, friendships, 
            and church communities in deeply personal ways.

          </p>

          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
           
            For some, it has led to clarity and growth. For others, it has brought confusion, distance, and pain. 
            This book offers a way to understand what is happening. Without panic, judgment, or denial, 
            but to respond with honesty, compassion, and depth.

          </p>

        <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
         Perhaps:
        </p>

         <ul className="list-disc pl-6 font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
         <li>
    You have a loved one who is questioning or re-examining their faith, and you’re unsure 
           how to respond without pushing them further away.
  </li>
  <li>
    You’re trying to understand the profound spiritual shift a friend or family member is going through.
  </li>
  <li>
    Your relationships have become strained because of disagreements about faith, belief, or values—and 
    you don’t know how to hold both truth and love.
  </li>
  <li>
    You yourself are wrestling with doubt and difficult questions about God, the Bible, and meaning, 
    and you’re afraid of where those questions might lead.
  </li>
</ul>

<p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
  Some who step away from the faith do so carrying deep wounds from the church. 
  Others struggle under moral expectations they can no longer reconcile with their conscience.
</p>

<p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
  For some, the process leads to a highly personalized form of spirituality. 
  For others, it results in a shift toward agnosticism, atheism, humanism, 
  or other belief systems as they search for coherence and meaning.
</p>



             <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">

            This book is drawn from Victoria’s lived experience, after spending over a decade as an atheist and later returning to Christianity. 
            It helps you understand what faith deconstruction is, where it comes from, and why it can feel compelling, while also examining how it can leave people disoriented. 
            The book offers thoughtful ways to respond with wisdom, clarity, and love, grounded in a biblical, archaeological, and philosophical worldview.

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
