import { ChevronDownIcon, DownloadIcon } from "lucide-react"
import { Button } from "./ui/button"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "./ui/dropdown-menu"
import { useI18n } from "@/i18n/use-i18n"

export default function CvDropdown() {
    const { messages } = useI18n()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    size="lg"
                    className="
                        w-full sm:w-auto
                        rounded-full 
                        bg-gray-900
                        px-12 py-8
                        text-base font-semibold text-white
                        shadow-lg
                        transition-colors
                        hover:bg-cyan-600/25
                        hover:border-cyan-500
                    "
                >
                    <span className="flex items-center gap-3">
                        <DownloadIcon className="size-4" />
                        {messages.cv.button}
                        <ChevronDownIcon className="size-4 opacity-70" />
                    </span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="start"
                sideOffset={8}
                className="
                    w-52
                    rounded-xl
                    border border-white/10
                    bg-gray-950
                    p-1
                    text-white
                    shadow-xl
                "
            >
                {messages.cv.items.map((item) => (
                    <DropdownMenuItem key={item.download} asChild>
                        <a
                            href={item.href}
                            download={item.download}
                            className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5"
                        >
                            {item.label}
                        </a>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
