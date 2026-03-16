import { MailIcon, MessageCircleIcon } from "lucide-react";

import { useI18n } from "@/i18n/use-i18n";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const WHATSAPP_URL = "https://wa.me/5511950049668";

export default function ContactSection() {
  const { messages } = useI18n();

  return (
    <section
      id="contact"
      className="px-6 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28 xl:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur-md sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <span className="font-open-sans text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                {messages.contact.eyebrow}
              </span>

              <h2 className="mt-4 font-open-sans text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {messages.contact.title}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                {messages.contact.intro}
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.5rem] border border-cyan-500/15 bg-[#0b1226]/70 p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                    <MailIcon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                      {messages.contact.emailLabel}
                    </p>
                    <a
                      href={`mailto:${messages.contact.emailValue}`}
                      className="mt-3 block break-all font-open-sans text-xl font-semibold text-white transition-colors hover:text-cyan-300 sm:text-2xl"
                    >
                      {messages.contact.emailValue}
                    </a>
                    <p className="mt-3 text-sm leading-7 text-white/70 sm:text-[15px]">
                      {messages.contact.emailDescription}
                    </p>
                  </div>
                </div>

                <Separator className="my-5 bg-white/10" />

                <Button asChild className="w-full rounded-full bg-gray-900 py-7 text-sm font-semibold text-white hover:bg-cyan-600/25 hover:border-cyan-500">
                  <a href={`mailto:${messages.contact.emailValue}`}>
                    {messages.contact.emailAction}
                  </a>
                </Button>
              </div>

              <div className="rounded-[1.5rem] border border-cyan-500/15 bg-[#0b1226]/70 p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                    <MessageCircleIcon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                      {messages.contact.phoneLabel}
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 block font-open-sans text-xl font-semibold text-white transition-colors hover:text-cyan-300 sm:text-2xl"
                    >
                      {messages.contact.phoneValue}
                    </a>
                    <p className="mt-3 text-sm leading-7 text-white/70 sm:text-[15px]">
                      {messages.contact.phoneDescription}
                    </p>
                  </div>
                </div>

                <Separator className="my-5 bg-white/10" />

                <Button asChild className="w-full rounded-full bg-gray-900 py-7 text-sm font-semibold text-white hover:bg-cyan-600/25 hover:border-cyan-500">
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    {messages.contact.phoneAction}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
