import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Eating Disorder IOP", path: "/eating-disorder-iop" },
    { name: "Our Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Skip to content */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md">
        Skip to main content
      </a>

      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:520-447-2433" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" aria-hidden="true" /> (520) 447-2433
            </a>
            <a href="mailto:contact@boosttalkaz.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" aria-hidden="true" /> contact@boosttalkaz.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Boost Counseling Services" className="h-12 w-auto" />
              <div className="hidden lg:block">
                <span className="font-serif text-xl font-bold text-primary leading-none">Boost Counseling Services</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    isActive(item.path) ? "text-primary font-bold" : "text-muted-foreground"
                  }`}
                  {...(isActive(item.path) ? { "aria-current": "page" as const } : {})}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              <Link href="/contact">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile Nav */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <nav className="flex flex-col gap-4 mt-8 px-5" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <span
                      className={`text-lg font-medium py-2 border-b border-border/50 cursor-pointer block ${
                        isActive(item.path) ? "text-primary" : "text-foreground"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-4">
                  <a href="tel:520-447-2433" className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" aria-hidden="true" /> (520) 447-2433
                  </a>
                  <a href="mailto:contact@boosttalkaz.com" className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" aria-hidden="true" /> contact@boosttalkaz.com
                  </a>
                </div>
                <Link href="/contact" className="mt-2">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Page Content */}
      <main id="main-content" className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/">
                <div className="flex items-center gap-2 mb-4 cursor-pointer">
                  <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Boost Counseling Services" className="h-10 w-auto" />
                  <span className="font-serif text-lg font-bold text-primary">Boost Counseling Services</span>
                </div>
              </Link>
              <p className="text-sm text-muted-foreground">
                Compassionate, nonjudgmental treatment to help you live beyond just "getting by".
              </p>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-serif font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 text-sm text-muted-foreground">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path}>
                      <span className="hover:text-primary transition-colors cursor-pointer">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-foreground mb-4">Contact Us</h3>
              <address className="not-italic">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-1 shrink-0" aria-hidden="true" />
                    <span>2500 N Tucson Blvd, Suite 110<br />Tucson AZ 85716</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <a href="tel:520-447-2433" className="hover:text-primary transition-colors">(520) 447-2433</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <a href="mailto:contact@boosttalkaz.com" className="hover:text-primary transition-colors">contact@boosttalkaz.com</a>
                  </li>
                </ul>
              </address>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Boost Counseling Services, PLLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
