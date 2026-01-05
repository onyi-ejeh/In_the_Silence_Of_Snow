type MailerLiteEmbedProps = {
  formId: string; // e.g. "Mf34HB"
};

export function MailerLiteEmbed({ formId }: MailerLiteEmbedProps) {
  return <div className="ml-embedded" data-form={formId} />;
}
