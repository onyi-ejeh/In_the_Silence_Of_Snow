import { motion } from "framer-motion";
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
            <br />
            <br />
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

          {/* Reassurance */}
          <p className="text-sm text-foreground/60 mb-10">
            No spam. No preaching. You can leave anytime.
          </p>

          {/* Anchor heading (scroll target) */}
          <h3
            id="community-form"
            className="text-xl font-medium mb-4 scroll-mt-28"
          >
            Join the Community
          </h3>

          {/* Email Form */}
          <div className="mx-auto max-w-md">
            <MailerLiteEmbed formId="Mf34HB" />
          </div>

          <p className="text-sm text-foreground/60 mt-4">
            Your email stays private. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
