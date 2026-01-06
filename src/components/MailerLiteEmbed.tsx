import { useEffect } from "react";

type MailerLiteEmbedProps = {
  formId: string;
  accountId?: string;
};

export function MailerLiteEmbed({ formId, accountId = "2019276" }: MailerLiteEmbedProps) {
  useEffect(() => {
    // Trigger ML to scan again by re-setting the account after the div exists
    // (This is supported and you already confirmed it returns "2019276")
    // @ts-ignore
    window.ml?.("account", accountId);
  }, [accountId]);

  return <div className="ml-embedded" data-form={formId} />;
}
