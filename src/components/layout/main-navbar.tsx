import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MainNavbar() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">PianoKey</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href="/#about">
              <Button variant="ghost">About</Button>
            </Link>
            <Link href="/#contact">
              <Button variant="ghost">Contact</Button>
            </Link>
            <Link href="/login">
              <Button>Log in / Sign up</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
