import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
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
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:520-447-2433" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" /> (520) 447-2433
            </a>
            <a href="mailto:contact@boosttalkaz.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" /> contact@boosttalkaz.com
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="hover:text-accent transition-colors"><Instagram className="h-4 w-4" /></a>
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
                <h1 className="font-serif text-xl font-bold text-primary leading-none">Boost Counseling Services</h1>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                  isActive(item.path) ? "text-primary font-bold" : "text-muted-foreground"
                }`}>
                  {item.name}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile Nav */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <span 
                      className={`text-lg font-medium py-2 border-b border-border/50 cursor-pointer ${
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
                    <Phone className="h-4 w-4" /> (520) 447-2433
                  </a>
                  <a href="mailto:contact@boosttalkaz.com" className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" /> contact@boosttalkaz.com
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Link href="/">
                <div className="flex items-center gap-2 mb-4 cursor-pointer">
                  <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Boost Counseling Services" className="h-10 w-auto" />
                  <span className="font-serif text-lg font-bold text-primary">Boost Counseling Services</span>
                </div>
              </Link>
              <p className="text-sm text-muted-foreground mb-4">
                Compassionate, nonjudgmental treatment to help you live beyond just "getting by".
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              </div>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services"><span className="hover:text-primary transition-colors cursor-pointer">Individual Counseling</span></Link></li>
                <li><Link href="/services"><span className="hover:text-primary transition-colors cursor-pointer">Group Therapy</span></Link></li>
                <li><Link href="/eating-disorder-iop"><span className="hover:text-primary transition-colors cursor-pointer">Eating Disorder IOP</span></Link></li>
                <li><Link href="/services"><span className="hover:text-primary transition-colors cursor-pointer">Trauma Therapy</span></Link></li>
                <li><Link href="/services"><span className="hover:text-primary transition-colors cursor-pointer">Telehealth</span></Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about"><span className="hover:text-primary transition-colors cursor-pointer">About Us</span></Link></li>
                <li><Link href="/team"><span className="hover:text-primary transition-colors cursor-pointer">Our Providers</span></Link></li>
                <li><Link href="/contact"><span className="hover:text-primary transition-colors cursor-pointer">Contact</span></Link></li>
                <li><Link href="/resources"><span className="hover:text-primary transition-colors cursor-pointer">Resources</span></Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-foreground mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1 shrink-0" />
                  <span>2500 N Tucson Blvd, Suite 110<br />Tucson AZ 85716</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a href="tel:520-447-2433" className="hover:text-primary transition-colors">(520) 447-2433</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a href="mailto:contact@boosttalkaz.com" className="hover:text-primary transition-colors">contact@boosttalkaz.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Boost Counseling Services, PLLC. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy"><span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span></Link>
              <Link href="/terms"><span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span></Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
