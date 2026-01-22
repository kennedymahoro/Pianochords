import { MainNavbar } from "@/components/layout/main-navbar";

export default function ContactPage() {
  return (
    <div>
      <MainNavbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg">
          This is the contact page.
        </p>
      </div>
    </div>
  );
}
