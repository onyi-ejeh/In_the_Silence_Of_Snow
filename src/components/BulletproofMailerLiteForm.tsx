import { useState } from "react";

type Props = {
  actionUrl?: string;
};

export default function BulletproofMailerLiteForm({
  actionUrl = "https://assets.mailerlite.com/jsonp/2019276/forms/175787247721776284/subscribe",
}: Props) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mt-6 w-full max-w-md mx-auto text-left">
      {/* Hidden iframe prevents redirect */}
      <iframe
        title="ml-hidden"
        name="ml_hidden_iframe"
        style={{ display: "none" }}
      />

      <form
        action={actionUrl}
        method="post"
        target="ml_hidden_iframe"
        onSubmit={() => {
          setSubmitted(true);
          setTimeout(() => setEmail(""), 300);
        }}
        className="w-full"
      >
        <label className="block text-sm font-medium text-foreground mb-2">
          Email
        </label>

        <input
          aria-label="email"
          type="email"
          name="fields[email]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          required
          className="w-full rounded-md border border-foreground/20 bg-background px-4 py-3 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/30"
        />

        {/* Required hidden fields */}
        <input type="hidden" name="ml-submit" value="1" />
        <input type="hidden" name="anticsrf" value="true" />

        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-foreground px-4 py-3 font-semibold text-background hover:opacity-90 transition"
        >
          Subscribe
        </button>

        {submitted && (
          <p className="mt-3 text-sm text-foreground/70">
            Thanks! Please check your email for a confirmation or welcome message.
          </p>
        )}
      </form>
    </div>
  );
}
