import { useEffect, useRef } from "react";

type MailerLiteEmbedProps = {
  accountId: string; // e.g. "2019276"
  formId: string;    // e.g. "Mf34HB"
};

export function MailerLiteEmbed({ accountId, formId }: MailerLiteEmbedProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) containerRef.current.innerHTML = "";

    const SCRIPT_ID = "mailerlite-universal";

    const init = () => {
      // @ts-ignore
      if (window.ml) window.ml("account", accountId);
    };

    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      init();
      return;
    }

    const s = document.createElement("script");
    s.id = SCRIPT_ID;
    s.src = "https://assets.mailerlite.com/js/universal.js";
    s.async = true;
    s.onload = init;
    document.head.appendChild(s);
  }, [accountId, formId]);

  return (
    <div ref={containerRef}>
      <div className="ml-embedded" data-form={formId} />
    </div>
  );
}

