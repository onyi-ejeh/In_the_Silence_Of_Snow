type MailerLiteEmbedProps = {
  formId: string;
};

export function MailerLiteEmbed({ formId }: MailerLiteEmbedProps) {
  return <div className="ml-embedded" data-form={formId} />;
}
