"use client"

import { useChordStore } from "@/store/useChordStore"
import { CHORD_TYPES } from "@/lib/music/constants"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TheoryPanel() {
    const { root, type, inversion, selectedNotes } = useChordStore()
    const chordInfo = CHORD_TYPES[type]

    return (
        <Card>
            <CardHeader>
                <CardTitle>Theory Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="text-sm font-medium text-muted-foreground">Chord Name</div>
                        <div className="text-2xl font-bold">
                            {root} {chordInfo.name}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm font-medium text-muted-foreground">Inversion</div>
                        <div className="text-lg">
                            {inversion === 0
                                ? "Root Position"
                                : inversion === 1
                                    ? "1st Inversion"
                                    : inversion === 2
                                        ? "2nd Inversion"
                                        : `${inversion}rd Inversion`}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="text-sm font-medium text-muted-foreground">Intervals</div>
                    <div className="flex gap-2">
                        {chordInfo.intervals.map((interval, i) => (
                            <div
                                key={i}
                                className="rounded-md bg-secondary px-2 py-1 text-sm font-medium"
                            >
                                {interval} semitones
                            </div>
                        ))}
                    </div>
                </div>

                {/* Future: Add scale degrees, notation, etc. */}
            </CardContent>
        </Card>
    )
}
