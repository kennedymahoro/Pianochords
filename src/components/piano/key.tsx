"use client"

import { cn } from "@/lib/utils"

interface KeyProps {
    note: string
    isBlack: boolean
    isActive: boolean
    onClick: () => void
    label?: string
}

export function Key({ note, isBlack, isActive, onClick, label }: KeyProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "relative flex items-end justify-center rounded-b-md border border-t-0 transition-all duration-100 active:scale-[0.98]",
                isBlack
                    ? "z-10 -mx-[1.5rem] h-32 w-12 bg-black text-white hover:bg-zinc-800"
                    : "h-48 w-14 bg-white text-black hover:bg-zinc-100",
                isActive && isBlack && "bg-primary hover:bg-primary/90",
                isActive && !isBlack && "bg-primary/20 hover:bg-primary/30",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            )}
        >
            {label && (
                <span className={cn("mb-2 text-xs font-medium", isBlack && "text-white")}>
                    {label}
                </span>
            )}
        </button>
    )
}
