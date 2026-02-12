import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useJsonLd } from "@/hooks/useJsonLd";
import { CheckCircle, Users, User, Heart, Activity, FileText, Video } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  useDocumentTitle({
    subtitle: "Counseling Services",
    description: "Individual, group, family, and telehealth counseling for substance use disorders, trauma, grief, and eating disorders. Insurance accepted. Sliding scale available.",
    path: "/services",
  });
  useJsonLd({
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Boost Counseling Services",
    "url": "https://boosttalkaz.com/services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Counseling Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Individual Counseling", "description": "One-on-one sessions to explore personal challenges, trauma, and growth goals in a confidential setting." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Group Counseling", "description": "Small group sessions providing peer support and shared learning experiences for specific challenges." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Eating Disorder IOP", "description": "A structured 12-week intensive outpatient program for eating disorders and co-occurring trauma." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Family & Couples Counseling", "description": "Helping families and partners navigate the impact of substance use and mental health challenges together." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Case Management", "description": "Comprehensive support to help clients navigate healthcare systems and access community resources." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Telehealth Services", "description": "Flexible, secure video counseling sessions available for clients throughout Arizona." } },
      ],
    },
  });
  const services = [
    {
      title: "Individual Counseling",
      icon: <User className="h-6 w-6 text-primary" />,
      description: "One-on-one sessions to explore personal challenges, trauma, and growth goals in a confidential setting.",
      details: ["Trauma-informed approach", "Depression & Anxiety", "Grief & Loss", "Self-esteem building", "Substance Use Disorder"]
    },
    {
      title: "Group Counseling",
      icon: <Users className="h-6 w-6 text-primary" />,
      description: "Small group sessions providing peer support and shared learning experiences for specific challenges.",
      details: ["Substance Use Disorder support", "Grief groups", "Skill-building workshops", "Shared healing"]
    },
    {
      title: "Eating Disorder IOP",
      icon: <Activity className="h-6 w-6 text-primary" />,
      description: "A structured 12-week intensive outpatient program for eating disorders and co-occurring trauma.",
      details: ["15 hours weekly", "CBT-E & DBT skills", "Nutritional counseling", "Trauma-informed care"],
      link: "/eating-disorder-iop"
    },
    {
      title: "Family & Couples",
      icon: <Heart className="h-6 w-6 text-primary" />,
      description: "Helping families and partners navigate the impact of substance use and mental health challenges together.",
      details: ["Communication skills", "Boundary setting", "Rebuilding trust", "Systemic healing", "Substance Use Disorder"]
    },
    
    {
      title: "Case Management",
      icon: <FileText className="h-6 w-6 text-primary" />,
      description: "Comprehensive support to help clients navigate healthcare systems and access community resources.",
      details: ["Resource coordination", "Advocacy", "Care planning", "Community referrals"]
    },
    {
      title: "Telehealth Services",
      icon: <Video className="h-6 w-6 text-primary" />,
      description: "Flexible, secure video counseling sessions available for clients throughout Arizona.",
      details: ["HIPAA compliant", "Accessible from home", "Flexible scheduling", "Same quality of care"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Comprehensive behavioral health services tailored to your unique needs and journey.
          </p>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">
            We operate as an Outpatient Treatment Center
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/5 group-hover:bg-primary/10 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="font-serif text-xl font-bold group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="mt-0.5 rounded-full bg-secondary/10 p-0.5">
                          <CheckCircle className="h-3.5 w-3.5 text-secondary shrink-0" />
                        </div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  {service.link ? (
                    <Link href={service.link}>
                      <Button variant="outline" className="w-full mt-auto border-primary/20 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group-hover:shadow-md">
                        Learn More
                      </Button>
                    </Link>
                  ) : (
                    <Link href="/contact">
                      <Button variant="outline" className="w-full mt-auto border-border hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300">
                        Schedule Consultation
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sessions & Cost */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8 md:mb-12 text-center">Sessions & Cost</h2>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-background p-5 sm:p-8 rounded-xl shadow-sm">
                <h3 className="font-bold text-xl mb-4 text-primary">Insurance Accepted</h3>
                <p className="text-muted-foreground mb-4">
                  Commercial insurance is accepted by Boost Counseling Services. We are in-network with the following providers:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li>• Aetna GEHA</li>
                  <li>• Aetna Meritain</li>
                  <li>• Blue Cross Blue Shield</li>
                  <li>• Cigna</li>
                  <li>• Medicare</li>
                  <li>• Meritain Health</li>
                  <li>• Optum</li>
                  <li>• Optum EAP</li>
                  <li>• Oxford Health</li>
                  <li>• Triwest Healthcare Alliance</li>
                  <li>• UMR</li>
                  <li>• UnitedHealthcare</li>
                  <li>• UBH</li>
                  <li className="font-bold text-primary">• Pending AHCCCS Approval</li>
                </ul>
              </div>

              <div className="bg-background p-5 sm:p-8 rounded-xl shadow-sm">
                <h3 className="font-bold text-xl mb-4 text-primary">Self-Pay Rates</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Fully Licensed Provider</p>
                    <p className="text-muted-foreground">$150 per session</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold">Associate Licensed Counselors</p>
                    <p className="text-muted-foreground">Sliding scale: $90 - $120 per 50-minute session</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      *Clinically supervised associate licensed counselors working towards full independent licensure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to verify your insurance or discuss our sliding scale options.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-white rounded-full px-8">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
