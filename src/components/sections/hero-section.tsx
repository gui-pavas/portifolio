import { GithubIcon, LinkedinIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import redirect from "@/lib/redirect";
import GlowBlobBackground from "../glowing-orbs-background";
import CvDropdown from "../cv-dropdown";
import { useI18n } from "@/i18n/use-i18n";

export default function HeroSection() {
    const { messages } = useI18n();

    const btn_variants = {
        PRIMARY: `
            w-full sm:w-auto rounded-full border-2 px-18 py-8
            text-base font-semibold cursor-pointer transition-colors hover:bg-cyan-600/25
            hover:border-cyan-500 bg-gray-900 shadow-lg
        `,
    };

    const socials = {
        github: "https://github.com/gui-pavas",
        linkedin: "https://www.linkedin.com/in/guilherme-pavani-06271729b/"
    }

    return (
        <section className="relative isolate grid min-h-screen w-full grid-cols-1 overflow-hidden px-6 pt-28 pb-12 sm:px-8 md:px-12 lg:grid-cols-2 lg:px-16 lg:pt-32 xl:px-24" id="home">
            <GlowBlobBackground />

            <div className="relative z-10 order-2 col-span-1 lg:order-1">
                <div className="flex h-full w-full items-center justify-start py-8 lg:py-12">
                    <div className="flex w-full max-w-3xl flex-col space-y-6 md:space-y-8 md:text-center sm:text-center lg:text-left">
                        <div className="space-y-5">
                            <h1 className="font-open-sans text-4xl leading-[1.05] font-bold text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                                Guilherme Pavani
                            </h1>

                            <h2 className="font-open-sans text-xl font-bold text-cyan-500 sm:text-2xl lg:text-3xl">
                                {messages.hero.role}
                            </h2>
                        </div>

                        <Separator className="bg-white/10 p-px" />

                        <div className="flex flex-col gap-8 md:gap-10">
                            <p className="font-open-sans max-w-2xl text-lg leading-relaxed text-white sm:text-xl lg:text-2xl">
                                {messages.hero.summaryPrefix}
                                <span className="font-bold text-cyan-500">
                                    {messages.hero.summaryHighlight}
                                </span>
                            </p>

                            <div className="flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-5 md:justify-center">
                                <Button className={btn_variants.PRIMARY} size={"lg"} onClick={() => redirect(socials.github)}>
                                    <span className="flex items-center gap-2">
                                        <GithubIcon />
                                        Github
                                    </span>
                                </Button>

                                <Button className={btn_variants.PRIMARY} size={"lg"} onClick={() => redirect(socials.linkedin)}>
                                    <span className="flex items-center gap-2">
                                        <LinkedinIcon />
                                        Linkedin
                                    </span>
                                </Button>

                                <CvDropdown />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 order-1 col-span-1 lg:order-2">
                <div className="flex h-full w-full items-center justify-center">
                    <div className="overflow-hidden rounded-full border-4 border-cyan-900 outline-4 outline-offset-8 outline-cyan-600 shadow-2xl shadow-cyan-500/50 size-32 sm:size-72 md:size-80 lg:size-96 xl:size-112">
                        <img
                            src={"https://avatars.githubusercontent.com/u/102663575?v=4"}
                            alt={messages.hero.profileAlt}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
