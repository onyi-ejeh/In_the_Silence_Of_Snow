import { useEffect } from "react";

type MailerLiteEmbedProps = {
  formId: string; // e.g. "Mf34HB"
};

declare global {
  interface Window {
    ml?: (...args: any[]) => void;
  }
}

export function MailerLiteEmbed({ formId }: MailerLiteEmbedProps) {
  useEffect(() => {
    let tries = 0;

    const timer = window.setInterval(() => {
      if (window.ml) {
        window.ml("reinitialize");
        window.clearInterval(timer);
      }

      tries += 1;
      if (tries > 20) {
        // stop after ~5 seconds
        window.clearInterval(timer);
      }
    }, 250);

    return () => window.clearInterval(timer);
  }, [formId]);

  return <div className="ml-embedded" data-form={formId} />;
}

