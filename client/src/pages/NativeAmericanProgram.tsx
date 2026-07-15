import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useJsonLd } from "@/hooks/useJsonLd";
import { Check, Wind, Leaf, Heart, Users, Brain, Shield, Flame, Clock, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function NativeAmericanProgram() {
  useDocumentTitle({
    subtitle: "Native American Program — Winds of Change",
    description: "Winds of Change is an outpatient behavioral health program integrating evidence-based clinical therapy with Native American cultural values. Healing from substance use disorders, trauma, and grief in Tucson, AZ.",
    path: "/winds-of-change",
  });
  useJsonLd({
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Winds of Change — Boost Counseling Services",
    "url": "https://boosttalkaz.com/winds-of-change",
    "description": "An outpatient behavioral health program integrating evidence-based clinical therapy with Native American cultural values for substance use recovery, trauma reclamation, and grief support.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Winds of Change Program Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Substance Use Recovery", "description": "Holistic relapse prevention, traditional medicine, community support, and Native-focused Wellbriety groups." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Trauma Reclamation", "description": "Historical and intergenerational trauma processing using CBT, EMDR, and culturally informed approaches." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Grief and Loss Support", "description": "Culturally safe mourning spaces, ancestral connection work, narrative therapy, and community grief support." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cultural and Holistic Practices", "description": "Talking Circles, Smudging Rituals, Storytelling Medicine, and Wellbriety Principles." } },
      ],
    },
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="bg-primary/5 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-12 transform translate-x-20 hidden sm:block"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/30 text-primary text-sm font-semibold mb-4">Outpatient Behavioral Health Program</span>
            <h1 id="hero-heading" className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-6">
              Winds of Change
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground mb-4 leading-relaxed">
              An outpatient behavioral health program integrating evidence-based clinical therapy with Native American cultural values. Serving individuals healing from substance use disorders, deep trauma, and complex grief or loss.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              We provide a sacred, supportive space for holistic recovery. We believe recovery is a journey of returning to balance. The "Winds of Change" symbolize the inevitable transformations in life. We help participants embrace these winds, guiding them to find strength in their roots, harmony in their present, and hope for their future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-white rounded-full px-8">
                <Link href="/contact">Begin Your Journey</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                <a href="#program-details">Program Details</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section aria-labelledby="mission-heading philosophy-heading" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 id="mission-heading" className="font-serif text-3xl font-bold text-foreground mb-6">Mission Statement</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Winds of Change is an outpatient healing center rooted in Indigenous wisdom and evidence-based clinical practices. We guide individuals through the transformative winds of recovery from substance use disorders, deep-rooted trauma, and profound grief and loss. By honoring the interconnectedness of mind, body, spirit, and community, we provide a sacred space for lasting restoration and renewal.
              </p>
            </div>
            <div>
              <h2 id="philosophy-heading" className="font-serif text-3xl font-bold text-foreground mb-6">Program Philosophy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our philosophy views healing not as a destination, but as a circular journey of alignment. We blend traditional Native American healing concepts—such as the Medicine Wheel and storytelling—with modern behavioral health therapies. We believe that true recovery requires addressing historical and individual trauma while empowering the spirit to foster resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Treatment Tracks */}
      <section aria-labelledby="treatment-tracks-heading" className="py-12 md:py-20 bg-muted/30" id="program-details">
        <div className="container mx-auto px-4">
          <h2 id="treatment-tracks-heading" className="font-serif text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12">Core Treatment Tracks</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-none shadow-lg bg-white/50">
              <CardContent className="p-5 sm:p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-primary">Substance Use Recovery</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <span>Holistic relapse prevention strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <span>Traditional medicine and community support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <span>Native-focused 12-Step/Wellbriety groups</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white/50">
              <CardContent className="p-5 sm:p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-primary">Trauma Reclamation</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <span>Historical and intergenerational trauma processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <span>Cognitive Behavioral Therapy (CBT)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <span>Eye Movement Desensitization and Reprocessing (EMDR)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white/50">
              <CardContent className="p-5 sm:p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-primary">Grief and Loss Honor</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <span>Culturally safe mourning spaces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <span>Ancestral connection and legacy work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <span>Narrative therapy for life transitions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <span>Chronic loss and community grief support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Holistic and Traditional Modalities */}
      <section aria-labelledby="modalities-heading" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 id="modalities-heading" className="font-serif text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12">Holistic and Traditional Modalities</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-primary/5 p-5 sm:p-8 rounded-2xl text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-primary">Talking Circles</h3>
              <p className="text-muted-foreground">Sacred, non-judgmental spaces for community sharing and peer vulnerability.</p>
            </div>
            <div className="bg-primary/5 p-5 sm:p-8 rounded-2xl text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-primary">The Medicine Wheel</h3>
              <p className="text-muted-foreground">Framework aligning physical, mental, emotional, and spiritual health.</p>
            </div>
            <div className="bg-primary/5 p-5 sm:p-8 rounded-2xl text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-primary">Expressive Arts</h3>
              <p className="text-muted-foreground">Healing through traditional beadwork, drumming, pottery, and songwriting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section aria-labelledby="structure-heading" className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 id="structure-heading" className="font-serif text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12">Program Structure</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg bg-white/50">
              <CardContent className="p-5 sm:p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-primary">General Outpatient Program (OP)</h3>
                <p className="text-muted-foreground">Flexible weekly counseling sessions tailored to maintenance and independent living.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white/50">
              <CardContent className="p-5 sm:p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-primary">Family Healing Circles</h3>
                <p className="text-muted-foreground">Dedicated sessions to mend familial bonds and break cycles of trauma.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white/50">
              <CardContent className="p-5 sm:p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-primary">Aftercare Circle</h3>
                <p className="text-muted-foreground">Ongoing alumni support, peer mentorship, and community integration resources.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Pillars of Healing */}
      <section aria-labelledby="pillars-heading" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 id="pillars-heading" className="font-serif text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12">Core Pillars of Healing</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-base mb-2">Substance Use Recovery</h3>
              <p className="text-sm text-muted-foreground">Group and individual counseling focused on sobriety.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-base mb-2">Trauma-Informed Care</h3>
              <p className="text-sm text-muted-foreground">Specialized therapies to safely process historical and personal trauma.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-base mb-2">Grief and Loss Support</h3>
              <p className="text-sm text-muted-foreground">Compassionate guidance through individual, family, and community loss.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-base mb-2">Cultural Integration</h3>
              <p className="text-sm text-muted-foreground">Traditional practices woven into every stage of clinical treatment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical and Traditional Services */}
      <section aria-labelledby="clinical-services-heading" className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 id="clinical-services-heading" className="font-serif text-2xl sm:text-3xl font-bold text-center mb-4">Clinical and Traditional Services</h2>
          <p className="text-lg text-muted-foreground text-center mb-8 md:mb-12">
            Our program balances modern psychological frameworks with indigenous healing philosophies.
          </p>

          <Accordion type="single" collapsible className="w-full bg-background rounded-xl shadow-sm px-4 sm:px-6">
            <AccordionItem value="evidence-based">
              <AccordionTrigger className="text-base sm:text-lg font-bold text-primary">Evidence-Based Therapies</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="space-y-3 py-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <span><strong>CBT & DBT:</strong> Tools for emotional regulation and behavior modification.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <span><strong>EMDR:</strong> Specialized trauma processing for deep-seated emotional wounds.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <span><strong>Seeking Safety:</strong> Concurrent treatment for trauma and substance abuse.</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cultural">
              <AccordionTrigger className="text-base sm:text-lg font-bold text-primary">Cultural and Holistic Practices</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="space-y-3 py-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <span><strong>Talking Circles:</strong> Peer-led communal sharing focused on mutual respect.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <span><strong>Smudging Rituals:</strong> Traditional cleansing ceremonies using sacred medicines.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <span><strong>Storytelling Medicine:</strong> Narrative therapy rooted in indigenous oral traditions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                    <span><strong>Wellbriety Principles:</strong> 12-step recovery adapted for Native American cultural values.</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* General Outpatient Program Details */}
      <section aria-labelledby="op-heading" className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 id="op-heading" className="font-serif text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12">General Outpatient Program (OP)</h2>
          <div className="bg-primary/5 p-5 sm:p-8 rounded-xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-1">Frequency</h3>
                <p className="text-muted-foreground">1 to 2 days per week</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-1">Duration</h3>
                <p className="text-muted-foreground">1 to 2 hours per day</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Flame className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-1">Focus</h3>
                <p className="text-muted-foreground">Maintenance, individual counseling, and long-term relapse prevention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="cta-heading" className="py-12 md:py-20 bg-primary text-white relative overflow-hidden text-center">
        <div className="container mx-auto px-4">
          <h2 id="cta-heading" className="font-serif text-2xl sm:text-3xl font-bold mb-6">Begin Your Healing Journey</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Recovery is a journey of returning to balance. Our team is here to walk with you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 rounded-full px-8">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8">
              <a href="tel:520-447-2433">Call (520) 447-2433</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
