"use client"

import { useSettingsStore } from "@/store/useSettingsStore"
import { useTheme } from "next-themes"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SettingsPage() {
    const { theme, setTheme } = useTheme()
    const { accidentalPreference, setAccidentalPreference } = useSettingsStore()

    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <h1 className="text-2xl font-bold">Settings</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Appearance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <Label>Theme</Label>
                        <Select value={theme} onValueChange={setTheme}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select theme" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Music Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <Label>Accidentals</Label>
                        <Select
                            value={accidentalPreference}
                            onValueChange={(v) => setAccidentalPreference(v as any)}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select preference" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="sharp">Sharps (#)</SelectItem>
                                <SelectItem value="flat">Flats (b)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
