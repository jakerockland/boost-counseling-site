import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { ArrowRight, Heart, Shield, Sun, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  useDocumentTitle();
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={`${import.meta.env.BASE_URL}images/hero-water-stones.jpg`}
            className="w-full h-full object-cover"
          >
            <source src={`${import.meta.env.BASE_URL}images/hero-video.mp4`} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="container relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Healing Begins with Hope
          </h1>
          <p className="text-lg md:text-2xl mb-8 font-light text-white/90 max-w-2xl mx-auto drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Compassionate, nonjudgmental counseling services to help you navigate life's challenges and find your path to recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                Start Your Journey
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/50 backdrop-blur-sm rounded-full px-8 py-6 text-lg">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Decorative wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/30 rounded-full blur-2xl"></div>
              <img
                src={`${import.meta.env.BASE_URL}images/growth-nature.jpg`}
                alt="Desert wildflowers representing growth and renewal through counseling"
                loading="lazy"
                className="relative rounded-[2rem] shadow-xl w-full object-cover aspect-[4/3] organic-shape"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
                Welcome to Boost Counseling Services
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Substance Use Disorders (SUD), whether our own misuse or someone else’s misuse that affects us, can be painful to navigate. Addressing SUD can in turn lead to the treatment of underlying issues such as trauma, depression, anxiety, grief, and low self-esteem.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Unpacking uncomfortable feelings and responses around this first takes the courage to want to change. We are here for you to help unpack it all while navigating next steps.
              </p>
              <Link href="/about">
                <Button variant="link" className="text-primary p-0 h-auto font-semibold text-lg group">
                  Learn more about our philosophy <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">How We Can Help</h2>
            <p className="text-muted-foreground text-lg">
              Trauma informed approaches utilized to provide interactive and exploratory sessions to identify strengths and facilitate growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 group bg-white/50 backdrop-blur-sm">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Individual & Group Counseling</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Personalized sessions to explore thoughts, feelings, and relationships in a safe, supportive environment.
                </p>
                <Link href="/services">
                  <span className="text-primary font-semibold text-sm uppercase tracking-wide cursor-pointer hover:underline">Learn More</span>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 group bg-white/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                  <Sun className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Eating Disorder IOP</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  A comprehensive, evidence-based 12-week intensive outpatient program for eating disorders and trauma.
                </p>
                <Link href="/eating-disorder-iop">
                  <span className="text-primary font-semibold text-sm uppercase tracking-wide cursor-pointer hover:underline">View Program</span>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 group bg-white/50 backdrop-blur-sm">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 bg-accent/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/40 transition-colors">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Trauma & Recovery</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Specialized care for trauma, PTSD, and substance use recovery using EMDR and other evidence-based modalities.
                </p>
                <Link href="/services">
                  <span className="text-primary font-semibold text-sm uppercase tracking-wide cursor-pointer hover:underline">Learn More</span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Program Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-center opacity-10 hidden lg:block" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/abstract-flow.jpg')` }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <span className="inline-block py-1 px-3 rounded-full bg-secondary/30 text-primary text-sm font-semibold mb-4">New Program</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
                Eating Disorder & Trauma Intensive Outpatient Program
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our IOP is a structured, clinically intensive behavioral health service designed to treat individuals whose eating disorder symptoms are compounded by trauma-related conditions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary"><Heart className="w-3 h-3" /></div>
                  <span className="text-foreground">12-week comprehensive curriculum</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary"><Heart className="w-3 h-3" /></div>
                  <span className="text-foreground">Evidence-based (CBT-E, DBT, Trauma-Informed)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary"><Heart className="w-3 h-3" /></div>
                  <span className="text-foreground">Multidisciplinary team support</span>
                </li>
              </ul>
              <Link href="/eating-disorder-iop">
                <Button size="lg" className="bg-primary text-white rounded-full px-8">
                  Learn More About IOP
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={`${import.meta.env.BASE_URL}images/counseling-session.jpg`}
                  alt="A comfortable, welcoming counseling environment"
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                <p className="font-serif text-lg font-bold text-primary mb-1">"Compassionate, nonjudgmental treatment is a basic human right."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/abstract-flow.jpg')`, backgroundSize: 'cover' }}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Ready to make a positive change?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            We are here to help you unpack it all while navigating next steps. Reach out today to begin your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold">
                Contact Us Today
              </Button>
            </Link>
            <a href="tel:520-447-2433">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg">
                Call (520) 447-2433
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
