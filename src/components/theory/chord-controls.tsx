"use client"

import { useChordStore } from "@/store/useChordStore"
import { CHORD_TYPES, NOTES, NOTES_FLAT } from "@/lib/music/constants"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function ChordControls() {
    const { root, type, inversion, setRoot, setType, setInversion } = useChordStore()

    return (
        <div className="grid gap-4 p-4 border rounded-lg bg-card text-card-foreground shadow-sm">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label>Root Note</Label>
                    <Select value={root} onValueChange={(v) => setRoot(v as any)}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {NOTES.map((note) => (
                                <SelectItem key={note} value={note}>
                                    {note}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label>Chord Type</Label>
                    <Select value={type} onValueChange={(v) => setType(v as any)}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.entries(CHORD_TYPES).map(([key, info]) => (
                                <SelectItem key={key} value={key}>
                                    {info.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between">
                    <Label>Inversion</Label>
                    <span className="text-sm text-muted-foreground">{inversion}</span>
                </div>
                <Slider
                    value={[inversion]}
                    onValueChange={(v) => setInversion(v[0])}
                    max={3}
                    step={1}
                    className="w-full"
                />
            </div>
        </div>
    )
}
