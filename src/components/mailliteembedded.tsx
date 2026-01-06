import { useEffect } from "react";

type MailerLiteEmbedProps = {
  formId: string; // e.g. "Mf34HB"
};

export function MailerLiteEmbed({ formId }: MailerLiteEmbedProps) {
  useEffect(() => {
    // Ask MailerLite to re-scan the DOM (safe to call multiple times)
    // @ts-ignore
    window.ml?.("reinitialize");
  }, []);

  return <div className="ml-embedded" data-form={formId} />;
}

