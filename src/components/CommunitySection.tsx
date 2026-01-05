import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MailerLiteEmbed } from "@/components/MailerLiteEmbed";


const CommunitySection = () => {
  return (
    <section
      id="community"
      className="py-24 lg:py-32 bg-background text-foreground"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto text-center"
        >
          {/* Heading */}
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
            Join the Community
          </h2>

          {/* Subheading */}
          <p className="font-body text-lg text-foreground/80 mb-8">
            A quiet space for those questioning, wandering, or returning.
          </p>

          {/* Body copy */}
          <p className="font-body text-base md:text-lg leading-relaxed text-foreground/75 mb-8">
            This community is for readers who resonate with honest faith,
            reflection, and the courage to sit with difficult questions.
            <br /><br />
            When you join, you’ll receive occasional reflections from my personal
            journals, thoughtful updates, and early access to new writing —
            shared gently, without noise or pressure.
          </p>

          {/* What they'll receive */}
          <ul className="text-left mx-auto max-w-md space-y-3 mb-10 text-foreground/75">
            <li className="flex gap-2">
              <span aria-hidden="true">—</span>
              <span>Reflections from my personal journals</span>
            </li>
            <li className="flex gap-2">
              <span aria-hidden="true">—</span>
              <span>Early access to new essays and books</span>
            </li>
            <li className="flex gap-2">
              <span aria-hidden="true">—</span>
              <span>
                Occasional updates — only when there’s something worth sharing
              </span>
            </li>
          </ul>

          {/* Gentle reassurance */}
          <p className="text-sm text-foreground/60 mb-8">
            No spam. No preaching. You can leave anytime.
          </p>

          {/* CTA */}
         {/* CTA Button stays */}
<div className="mx-auto max-w-md">
  <div className="ml-embedded" data-form="Mf34HB" />
</div>

          <p className="text-sm text-foreground/60 mt-3">
  Enter your email on the next step.
</p>


<Button
  size="lg"
  className="
    h-12 px-8 rounded-full
    bg-primary
    text-primary-foreground
    hover:bg-primary/90
    transition
  "
  onClick={() => {
    const el = document.getElementById("community-form");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }}
>
  Join the Community
</Button>

          
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;

