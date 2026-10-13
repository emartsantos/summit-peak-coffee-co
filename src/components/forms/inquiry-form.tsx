"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AlertCircle, CircleCheckBig, Loader2, MessageCircle } from "lucide-react";
import { config } from "@/lib/config";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { SelectMenu } from "@/components/ui/select";
import { Field, FieldError, Label } from "@/components/ui/field";

const { inquiry, contact } = config;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.email("Enter a valid email address."),
  topic: z.string().min(1, "Choose a topic."),
  message: z
    .string()
    .trim()
    .min(10, "A little more detail helps us respond well."),
  company: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

type Status = "idle" | "submitting" | "success" | "error";

function topicLabel(value: string) {
  return inquiry.topics.find((t) => t.value === value)?.label ?? value;
}

export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [started, setStarted] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      topic: inquiry.topics[0].value,
      message: "",
      company: "",
    },
  });

  const beginOnce = () => {
    if (started) return;
    setStarted(true);
    track("form_start");
  };

  const onSubmit = async (values: FormValues) => {
    if (values.company) return; // honeypot — silently ignore bots

    setStatus("submitting");
    try {
      const subject = `[${topicLabel(values.topic)}] Enquiry from ${values.name}`;
      const body = `Name: ${values.name}\nEmail: ${values.email}\nTopic: ${topicLabel(
        values.topic,
      )}\n\n${values.message}`;

      track("form_submit", { topic: values.topic });

      const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      window.location.assign(mailto);

      setStatus("success");
    } catch {
      track("form_error", { reason: "submit" });
      setStatus("error");
    }
  };

  const openWhatsApp = () => {
    const values = getValues();
    const detail = values.message
      ? `\n\n${values.message}\n— ${values.name || "Website enquiry"}`
      : "";
    const text = `${contact.whatsappMessage}${detail}`;
    track("whatsapp_click", { location: "inquiry_form" });
    window.open(
      `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-start gap-5 border border-forest/15 bg-surface p-8 md:p-10"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest text-cream">
          <CircleCheckBig className="h-7 w-7" />
        </span>
        <h3 className="font-display text-[length:var(--step-3)]">
          {inquiry.successTitle}
        </h3>
        <p className="measure text-muted">{inquiry.successBody}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button variant="primary" onClick={() => setStatus("idle")}>
            Send another enquiry
          </Button>
          <Button variant="secondary" onClick={openWhatsApp}>
            <MessageCircle className="h-4 w-4" />
            Message on WhatsApp
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit, () =>
        track("form_error", { reason: "validation" }),
      )}
      onFocus={beginOnce}
      className="flex flex-col gap-7"
    >
      <div className="grid gap-7 sm:grid-cols-2">
        <Field>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          <FieldError>{errors.name ? <span id="name-error">{errors.name.message}</span> : null}</FieldError>
        </Field>

        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          <FieldError>{errors.email ? <span id="email-error">{errors.email.message}</span> : null}</FieldError>
        </Field>
      </div>

      <Field>
        <Label htmlFor="topic">What is this about?</Label>
        <Controller
          control={control}
          name="topic"
          render={({ field }) => (
            <SelectMenu
              id="topic"
              options={inquiry.topics}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              invalid={Boolean(errors.topic)}
              aria-describedby={errors.topic ? "topic-error" : undefined}
            />
          )}
        />
        <FieldError>{errors.topic ? <span id="topic-error">{errors.topic.message}</span> : null}</FieldError>
      </Field>

      <Field>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us a little about what you need…"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        <FieldError>{errors.message ? <span id="message-error">{errors.message.message}</span> : null}</FieldError>
      </Field>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      {status === "error" ? (
        <p
          role="alert"
          className="flex items-center gap-2 font-sans text-sm text-terracotta-deep"
        >
          <AlertCircle className="h-4 w-4" />
          Something went wrong opening your email client. Please email us at{" "}
          <a className="link-underline" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          .
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <Button type="submit" variant="primary" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            inquiry.submitLabel
          )}
        </Button>
        <Button type="button" variant="ghost" onClick={openWhatsApp} className="gap-2">
          <MessageCircle className="h-4 w-4" />
          {inquiry.whatsappLabel}
        </Button>
      </div>
      <p className="font-sans text-xs text-muted">{contact.responseNote}</p>
    </form>
  );
}
