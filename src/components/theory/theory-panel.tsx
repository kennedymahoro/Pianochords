"use client";

import { useChordStore } from "@/store/useChordStore";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CHORD_TYPES, INTERVAL_NAMES } from "@/lib/music/constants";
import { getChordNoteNames } from "@/lib/music/chord-logic";
import { useSettingsStore } from "@/store/useSettingsStore";
import { cn } from "@/lib/utils";

export function TheoryPanel({ className }: { className?: string }) {
    const { root, type, inversion } = useChordStore();
    const { accidentalType } = useSettingsStore();
    const chordInfo = CHORD_TYPES[type];

    if (!chordInfo) {
        return (
            <Card className={cn("flex flex-col", className)}>
                <CardHeader>
                    <CardTitle>Theory Breakdown</CardTitle>
                    <CardDescription>Select a chord to see details.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                    <p>No chord selected.</p>
                </CardContent>
            </Card>
        );
    }

    const chordNotes = getChordNoteNames(root, type, inversion, accidentalType);

    return (
        <Card className={cn("flex flex-col", className)}>
            <CardHeader>
                <CardTitle>Theory Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="grid flex-1 gap-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="text-sm font-medium text-muted-foreground">Chord</div>
                        <div className="text-2xl font-bold">
                            {root} {chordInfo.name}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm font-medium text-muted-foreground">Inversion</div>
                        <div className="text-lg font-semibold">
                            {inversion === 0
                                ? "Root Position"
                                : inversion === 1
                                    ? "1st Inversion"
                                    : inversion === 2
                                        ? "2nd Inversion"
                                        : `${inversion}th Inversion`}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="text-sm font-medium text-muted-foreground">Notes</div>
                    <div className="flex gap-2 pt-2">
                        {chordNotes.map((note, i) => (
                            <div
                                key={i}
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground"
                            >
                                {note}
                            </div>
                        ))}
                    </div>
                </div>


                <div>
                    <div className="text-sm font-medium text-muted-foreground">Intervals</div>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {chordInfo.intervals.map((interval, i) => (
                            <div
                                key={i}
                                className="rounded-md bg-secondary px-3 py-1 text-sm font-semibold"
                            >
                                {INTERVAL_NAMES[interval]}
                            </div>
                        ))}
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}