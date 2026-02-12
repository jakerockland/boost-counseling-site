import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Link } from "wouter";

export default function Team() {
  useDocumentTitle("Our Providers");
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Our Providers</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced, compassionate professionals dedicated to your healing journey.
          </p>
        </div>
      </section>

      {/* Provider Profile */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card className="overflow-hidden border-none shadow-xl bg-white">
            <div className="grid md:grid-cols-3">
              <div className="md:col-span-1 min-h-[300px] md:min-h-full relative bg-muted/10 flex items-center justify-center overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}images/liana-condello-resized.jpg`}
                  alt="Liana Joy Condello, MA, LISAC, CTP — Founder and Primary Clinician"
                  loading="lazy"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="md:col-span-2 p-5 sm:p-8 md:p-12">
                <h2 className="font-serif text-3xl font-bold text-primary mb-2">Liana Joy Condello</h2>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-6">
                  MA, LISAC, CTP | Founder & Primary Clinician
                </p>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Ms. Condello has worked in the field of behavioral health and substance use disorders for over 30 years. Her passion lives in helping clients navigate through their own or someone else’s substance use disorder, trauma & recovery.
                  </p>
                  <p>
                    Independently licensed in Arizona as a Substance Abuse Counselor, certified as an International Trauma Specialist, and EMDRIA trained in EMDR.
                  </p>
                  <p>
                    Ms. Condello uses a person-centered approach blended with motivational interviewing to connect to her clientele. She is currently working towards a National Certification as an Addiction Counselor.
                  </p>
                  <p>
                    Ms. Condello is a registered Clinical Supervisor with the Arizona Board of Behavioral Health Examiners.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-bold text-lg mb-4">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-secondary/20 text-primary rounded-full text-sm">Substance Use Disorders</span>
                    <span className="px-3 py-1 bg-secondary/20 text-primary rounded-full text-sm">Trauma & PTSD</span>
                    <span className="px-3 py-1 bg-secondary/20 text-primary rounded-full text-sm">EMDR</span>
                    <span className="px-3 py-1 bg-secondary/20 text-primary rounded-full text-sm">Grief & Loss</span>
                    
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-primary/5 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Work With Us</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We are always looking for dedicated professionals to join our team. If you are passionate about making a difference, we'd love to hear from you.
          </p>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
