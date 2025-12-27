"use client"

import * as React from "react"
import { useChordStore } from "@/store/useChordStore"
import { cn } from "@/lib/utils"

const KEYS = [
    "C", "G", "D", "A", "E", "B", "F#", "Db", "Ab", "Eb", "Bb", "F"
]

export function CircleOfFifths() {
    const { root, setRoot } = useChordStore()

    const radius = 80
    const center = 100

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h3 className="mb-4 text-lg font-semibold">Circle of Fifths</h3>
            <svg width="200" height="200" viewBox="0 0 200 200" className="max-w-full">
                <circle cx={center} cy={center} r={radius} fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/20" />
                {KEYS.map((key, i) => {
                    const angle = (i / KEYS.length) * 2 * Math.PI - Math.PI / 2
                    const x = center + radius * Math.cos(angle)
                    const y = center + radius * Math.sin(angle)
                    const isSelected = root === key

                    return (
                        <g
                            key={key}
                            transform={`translate(${x}, ${y})`}
                            className="cursor-pointer"
                            onClick={() => setRoot(key)}
                        >
                            <circle
                                r="15"
                                className={cn(
                                    "fill-background stroke-muted-foreground/20",
                                    isSelected && "fill-primary stroke-primary-foreground"
                                )}
                                strokeWidth="1"
                            />
                            <text
                                x="0"
                                y="0"
                                dy=".3em"
                                textAnchor="middle"
                                className={cn(
                                    "text-sm font-medium",
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