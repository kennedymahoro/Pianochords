"use client"

import * as React from "react"
import { Home, Music, Settings, BookOpen, Layers } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"

const navMain = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Chords",
        url: "/chords",
        icon: Music,
        isActive: true,
    },
    {
        title: "Theory",
        url: "/theory",
        icon: BookOpen,
    },
    {
        title: "Progressions",
        url: "/progressions",
        icon: Layers,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
    },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <div className="flex items-center gap-2 px-4 py-2">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Music className="size-4" />
                    </div>
                    <div className="flex flex-col gap-0.5 leading-none">
                        <span className="font-semibold">PianoChord</span>
                        <span className="">Modern</span>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navMain.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive={item.isActive}>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}
