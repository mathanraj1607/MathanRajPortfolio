import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { UnderlineLink } from "../ui/UnderlineLink";
import { submitContactForm } from "../../lib/contact";
import { links } from "../../data/links";
import { fadeUp, viewportOnce } from "../../lib/motion";

const SOCIALS = [
  { label: "GitHub", href: links.github },
  { label: "LinkedIn", href: links.linkedin },
  { label: "Fiverr", href: links.fiverr },
  { label: "Instagram", href: links.instagram },
];

const inputClass =
  "w-full rounded-xl border border-border bg-bg-elevated px-4 py-3 text-fg outline-none transition-[border-color,box-shadow] duration-300 focus:border-border-hover focus:shadow-glow-focus";

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    setStatus(null);
    try {
      await submitContactForm(data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-section-sm sm:py-section">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          description="Need a full-stack web application or an AI automation workflow? Tell me about your project."
          align="center"
        />

        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mt-12 space-y-5"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-fg-muted">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className={inputClass}
            />
            {errors.name && (
              <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-fg">
                <AlertCircle size={14} className="shrink-0" aria-hidden="true" />
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-fg-muted">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
              })}
              className={inputClass}
            />
            {errors.email && (
              <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-fg">
                <AlertCircle size={14} className="shrink-0" aria-hidden="true" />
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-fg-muted">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              {...register("message", {
                required: "Message is required",
                minLength: { value: 10, message: "Tell me a bit more (10+ characters)" },
              })}
              className={inputClass}
            />
            {errors.message && (
              <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-fg">
                <AlertCircle size={14} className="shrink-0" aria-hidden="true" />
                {errors.message.message}
              </p>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full justify-center sm:w-auto">
            {isSubmitting ? "Sending…" : "Send Message"}
          </Button>

          <p aria-live="polite" className="flex items-center gap-2 text-sm font-medium text-fg">
            {status === "success" && (
              <>
                <CheckCircle2 size={16} className="shrink-0" aria-hidden="true" />
                Thanks — I'll get back to you soon.
              </>
            )}
            {status === "error" && (
              <>
                <AlertCircle size={16} className="shrink-0" aria-hidden="true" />
                Something went wrong. Please try again.
              </>
            )}
          </p>
        </motion.form>

        <div className="mt-12 flex flex-col items-center gap-6 border-t border-border pt-10 sm:flex-row sm:justify-between">
          <Button href={links.resumeUrl} target="_blank" rel="noreferrer" variant="secondary">
            View Resume
          </Button>
          <div className="flex items-center gap-6">
            {SOCIALS.map(({ label, href }) => (
              <UnderlineLink key={label} href={href} muted target="_blank" rel="noreferrer">
                {label}
              </UnderlineLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
