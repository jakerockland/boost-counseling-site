import { Button } from "@/components/ui/button";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Link } from "wouter";

export default function About() {
  useDocumentTitle({
    subtitle: "About Us",
    description: "Learn about Boost Counseling Services — a licensed outpatient treatment center in Tucson, AZ dedicated to compassionate, evidence-based care for substance use, trauma, and mental health.",
    path: "/about",
  });
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">About Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated to providing compassionate, evidence-based care for our community.
          </p>
        </div>
      </section>

      {/* Mission & Beliefs */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <img
                src={`${import.meta.env.BASE_URL}images/growth-nature.jpg`}
                alt="Nature scene representing growth and healing"
                loading="lazy"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">What We Believe</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  At Boost Counseling Services we believe that compassionate, nonjudgmental treatment is a basic human right.
                </p>
                <p>
                  We believe that our work is about sustaining hope by helping people live beyond just "getting by". Our aim is to meet clients where they are to help guide them towards identifying & unveiling needed changes within themselves.
                </p>
                <p className="font-medium text-primary">
                  With kind, direct, and honest conversation clarity and healing begins!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Who We Serve</h2>
            <p className="text-lg text-muted-foreground">
              Boost Counseling Services is a general mental health provider offering comprehensive care for a wide range of mental health conditions. We also provide specialized services for Substance Use Disorders (SUD) and an Intensive Outpatient Program (IOP) for Eating Disorders.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="bg-background p-6 md:p-8 rounded-xl shadow-sm border border-border/50">
              <h3 className="font-serif text-xl font-bold text-primary mb-4">Substance Use</h3>
              <p className="text-muted-foreground">
                Support for individuals navigating their own substance use or the impact of a loved one's use.
              </p>
            </div>
            <div className="bg-background p-6 md:p-8 rounded-xl shadow-sm border border-border/50">
              <h3 className="font-serif text-xl font-bold text-primary mb-4">Trauma & Grief</h3>
              <p className="text-muted-foreground">
                Addressing underlying issues such as trauma, depression, anxiety, and grief that often accompany SUD.
              </p>
            </div>
            <div className="bg-background p-6 md:p-8 rounded-xl shadow-sm border border-border/50">
              <h3 className="font-serif text-xl font-bold text-primary mb-4">Self-Esteem</h3>
              <p className="text-muted-foreground">
                Helping clients unpack uncomfortable feelings and build the courage to change and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Info */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="bg-muted/30 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">Our Organization</h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="font-bold text-xl mb-2">Comprehensive Care</h3>
                <p className="text-muted-foreground mb-6">
                  Boost Counseling Services is a multi-disciplinary behavioral health organization dedicated to advancing cutting-edge treatments for substance abuse and related mental health disorders. We are a general mental health agency committed to holistic recovery.
                </p>
                <h3 className="font-bold text-lg mb-4">Licensed & Certified</h3>
                <p className="text-muted-foreground">
                  We operate under a license issued by the Arizona Department of Health Services (ADHS) as an Outpatient Treatment Center. Our services are firmly rooted in a Bio-Psycho-Social framework and employ Cognitive-Behavioral interventions.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Our Approach</h3>
                <p className="text-muted-foreground mb-6">
                  Our professional team boasts extensive experience, training, skills, and knowledge drawn from diverse fields such as addiction counseling, psychology, education, and social work.
                </p>
                <p className="text-muted-foreground">
                  This multidisciplinary approach enables us to conceive, execute, and assess innovative programs in substance abuse treatment, domestic violence intervention, and comprehensive mental health services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get to know the dedicated professionals who are here to support your journey.
          </p>
          <Link href="/team">
            <Button size="lg" className="bg-primary text-white rounded-full px-8">
              View Our Providers
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
