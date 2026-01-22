import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MainNavbar } from "@/components/layout/main-navbar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/layout/footer";

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

      <section id="about" className="container mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold">About PianoKey</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          PianoKey was born from a passion for music and technology. We believe that learning piano and music theory should be an engaging and visual experience. Our interactive tool helps musicians of all levels, from beginners to advanced players, to visualize chord structures, understand voicings, and explore the beautiful world of harmony. Our mission is to make music education accessible, fun, and effective for everyone.
        </p>
      </section>

      <section id="contact" className="container mx-auto py-16">
        <div className="max-w-xl mx-auto">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle>Contact Us</CardTitle>
                    <CardDescription>
                        Have a question or feedback? Fill out the form below.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Enter your name" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Type your message here." />
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Send Message</Button>
                </CardFooter>
            </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}
