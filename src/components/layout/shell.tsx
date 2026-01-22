"use client"

import { usePathname } from 'next/navigation'
import { AppSidebar } from "@/components/layout/app-sidebar"
import { SiteHeader } from "@/components/layout/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export function Shell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isMarketingPage = pathname === '/' || pathname === '/about' || pathname === '/contact' || pathname === '/login'

    if (isMarketingPage) {
        return <>{children}</>
    }

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
