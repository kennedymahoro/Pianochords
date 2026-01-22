export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container flex h-16 items-center justify-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Blank Industries. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
