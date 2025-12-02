"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/mode-toggle"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function SiteHeader() {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
            </div>
            <div className="flex flex-1 items-center gap-4 md:gap-8">
                <div className="relative flex-1 md:w-2/3 lg:w-1/2">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search chords (e.g. Amaj7)..."
                        className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[400px]"
                    />
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}
