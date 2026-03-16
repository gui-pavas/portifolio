import { Separator } from "../ui/separator";
import { useI18n } from "@/i18n/use-i18n";

export default function AboutSection() {
    const { messages } = useI18n();

    return (
        <section
            id="about"
            className="relative px-6 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28 xl:px-24"
        >
            <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:gap-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {messages.about.stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-[1.75rem] border border-white/10 bg-[#0b1226]/80 p-6 shadow-xl shadow-cyan-950/10"
                        >
                            <div className="font-open-sans text-3xl font-bold text-cyan-400 sm:text-4xl">
                                {stat.value}
                            </div>
                            <p className="mt-3 max-w-xs text-sm leading-6 text-white/70 sm:text-base">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur-md sm:p-10">
                    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                        <div>
                            <span className="font-open-sans text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                                {messages.about.eyebrow}
                            </span>

                            <h2 className="mt-4 font-open-sans text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                                {messages.about.title}
                            </h2>

                            <Separator className="my-6 bg-white/10" />

                            <div className="space-y-5 text-base leading-8 text-white/75 sm:text-lg">
                                {messages.about.paragraphs.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-4">
                            {messages.about.highlights.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="rounded-[1.5rem] border border-cyan-500/15 bg-[#0b1226]/70 p-5"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <div>
                                                <h3 className="font-open-sans text-base font-semibold text-white sm:text-lg">
                                                    {item.title}
                                                </h3>
                                                <p className="mt-2 text-sm leading-7 text-white/70 sm:text-[15px]">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
