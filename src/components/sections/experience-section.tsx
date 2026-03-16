import { BriefcaseBusiness, BrainCircuit, Layers3 } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { useI18n } from "@/i18n/use-i18n";

export default function ExperienceSection() {
    const { messages } = useI18n();

    return (
        <section
            id="experience"
            className="px-6 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28 xl:px-24"
        >
            <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                    <span className="font-open-sans text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                        {messages.experience.eyebrow}
                    </span>

                    <h2 className="mt-4 font-open-sans text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        {messages.experience.title}
                    </h2>

                    <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
                        {messages.experience.intro}
                    </p>
                </div>

                <Separator className="my-8 bg-white/10 lg:my-10" />

                <div className="grid gap-6">
                    {messages.experience.items.map((experience) => (
                        <Card
                            key={experience.company}
                            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 py-0 text-white shadow-2xl shadow-cyan-950/10 backdrop-blur-md"
                        >
                            <CardHeader className="gap-5 px-6 pt-6 lg:px-8 lg:pt-8">
                                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                                    <div className="space-y-3">
                                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                                            <BriefcaseBusiness className="h-3.5 w-3.5" />
                                            {experience.role}
                                        </div>

                                        <div>
                                            <CardTitle className="font-open-sans text-2xl font-semibold text-white sm:text-3xl">
                                                {experience.company}
                                            </CardTitle>
                                            <CardDescription className="mt-3 max-w-3xl text-sm leading-7 text-white/65 sm:text-base">
                                                {experience.description}
                                            </CardDescription>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent className="px-6 pb-6 lg:px-8 lg:pb-8">
                                <div className="grid gap-6 lg:grid-cols-2">
                                    <div className="rounded-[1.5rem] border border-white/10 bg-[#0b1226]/70 p-5">
                                        <div className="mb-4 flex items-center gap-3">
                                            <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-2 text-cyan-300">
                                                <BrainCircuit className="h-4 w-4" />
                                            </div>
                                            <h3 className="font-open-sans text-lg font-semibold text-white">
                                                {messages.experience.learnedTitle}
                                            </h3>
                                        </div>

                                        <div className="space-y-3">
                                            {experience.learned.map((item) => (
                                                <p
                                                    key={item}
                                                    className="text-sm leading-7 text-white/75 sm:text-[15px]"
                                                >
                                                    {item}
                                                </p>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="rounded-[1.5rem] border border-white/10 bg-[#0b1226]/70 p-5">
                                        <div className="mb-4 flex items-center gap-3">
                                            <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-2 text-cyan-300">
                                                <Layers3 className="h-4 w-4" />
                                            </div>
                                            <h3 className="font-open-sans text-lg font-semibold text-white">
                                                {messages.experience.impactTitle}
                                            </h3>
                                        </div>

                                        <div className="space-y-3">
                                            {experience.impact.map((item) => (
                                                <p
                                                    key={item}
                                                    className="text-sm leading-7 text-white/75 sm:text-[15px]"
                                                >
                                                    {item}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <Separator className="my-6 bg-white/10" />

                                <div className="flex flex-wrap gap-3">
                                    {experience.stack.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-white/10 bg-[#0b1226] px-3 py-1.5 text-xs font-medium tracking-wide text-cyan-200 sm:text-sm"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
