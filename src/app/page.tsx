import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MainNavbar } from "@/components/layout/main-navbar";

export default function Home() {
  return (
    <div>
      <MainNavbar />
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          Unlock Your Musical Potential
        </h1>
        <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground mb-8">
          An interactive piano chord visualization tool to help you learn and explore music theory.
        </p>
        <div className="flex gap-4">
          <Link href="/login">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
