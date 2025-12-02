"use client"

import * as React from "react"
import { useChordStore } from "@/store/useChordStore"
import { cn } from "@/lib/utils"

const KEYS = [
    "C", "G", "D", "A", "E", "B", "F#", "Db", "Ab", "Eb", "Bb", "F"
]

export function CircleOfFifths() {
    const { root, setRoot } = useChordStore()

    // Calculate rotation to put C at top (or selected key at top?)
    // Standard circle of fifths has C at top.

    const radius = 120
    const center = 150

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h3 className="mb-4 text-lg font-semibold">Circle of Fifths</h3>
            <svg width="300" height="300" viewBox="0 0 300 300" className="max-w-full">
                <circle cx={center} cy={center} r={radius} fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/20" />

                {KEYS.map((key, i) => {
                    const angle = (i * 30 - 90) * (Math.PI / 180)
                    const x = center + radius * Math.cos(angle)
                    const y = center + radius * Math.sin(angle)

                    const isSelected = root === key || (root === "C#" && key === "Db") || (root === "D#" && key === "Eb") || (root === "F#" && key === "Gb") || (root === "G#" && key === "Ab") || (root === "A#" && key === "Bb")
                    // Simple normalization for MVP

                    return (
                        <g key={key} onClick={() => setRoot(key as any)} className="cursor-pointer group">
                            <circle
                                cx={x}
                                cy={y}
                                r="20"
                                className={cn(
                                    "transition-all duration-200",
                                    isSelected ? "fill-primary stroke-primary" : "fill-background stroke-border hover:fill-muted"
                                )}
                                strokeWidth="2"
                            />
                            <text
                                x={x}
                                y={y}
                                dy="0.3em"
                                textAnchor="middle"
                                className={cn(
                                    "text-sm font-bold select-none pointer-events-none",
                                    isSelected ? "fill-primary-foreground" : "fill-foreground"
                                )}
                            >
                                {key}
                            </text>
                        </g>
                    )
                })}
            </svg>
        </div>
    )
}
