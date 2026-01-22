import { MainNavbar } from "@/components/layout/main-navbar";

export default function AboutPage() {
  return (
    <div>
      <MainNavbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">
          This is the about page.
        </p>
      </div>
    </div>
  );
}
