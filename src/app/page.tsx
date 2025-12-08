import { Piano } from "@/components/piano/piano";
import { TheoryPanel } from "@/components/theory/theory-panel";
import { ChordControls } from "@/components/theory/chord-controls";
import { CircleOfFifths } from "@/components/theory/circle-of-fifths";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="grid gap-4 p-4 md:grid-cols-12">
        <div className="md:col-span-4 lg:col-span-3 space-y-4">
          <ChordControls />
          <TheoryPanel />
        </div>
        <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-4">
          <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
            <CircleOfFifths />
          </div>
        </div>
      </div>
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm min-h-[300px]">
        <Piano />
      </div>
    </div>
  );
}
