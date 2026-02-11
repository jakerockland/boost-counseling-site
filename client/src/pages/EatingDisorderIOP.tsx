import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Check, Clock, Calendar, Shield, Brain, Heart } from "lucide-react";
import { Link } from "wouter";

export default function EatingDisorderIOP() {
  useDocumentTitle("Eating Disorder IOP");
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-primary/5 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/30 text-primary text-sm font-semibold mb-4">Intensive Outpatient Program</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">
              Eating Disorder & Trauma IOP
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A structured, clinically intensive behavioral health service designed to treat individuals whose eating disorder symptoms are compounded by trauma-related conditions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-white rounded-full px-8">
                  Request Assessment
                </Button>
              </Link>
              <a href="#program-details">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Program Details
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Program Overview</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The Eating Disorder and Trauma Intensive Outpatient Program (IOP) provides a critical intermediate level of care for individuals who require more therapeutic intensity than traditional outpatient services.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our program delivers active, clinician-directed treatment focused on symptom stabilization, functional improvement, and relapse prevention in a trauma-informed, recovery-oriented environment.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Clock className="w-5 h-5" /></div>
                  <span className="font-medium">15 Hours Weekly</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Calendar className="w-5 h-5" /></div>
                  <span className="font-medium">12-Week Curriculum</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Shield className="w-5 h-5" /></div>
                  <span className="font-medium">Trauma-Informed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Brain className="w-5 h-5" /></div>
                  <span className="font-medium">Evidence-Based</span>
                </div>
              </div>
            </div>
            <div className="bg-muted/30 p-8 rounded-2xl">
              <h3 className="font-serif text-2xl font-bold mb-6">Target Population</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Adults (18+) with primary eating disorder diagnosis</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Anorexia, Bulimia, Binge Eating Disorder, OSFED</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Co-occurring trauma (PTSD), anxiety, or depression</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Medically stable but needing intensive support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Approach */}
      <section className="py-20 bg-background" id="program-details">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Clinical Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white/50">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-4 text-primary">CBT-E</h3>
                <p className="text-muted-foreground">
                  Enhanced Cognitive Behavioral Therapy targets the specific mechanisms maintaining an individual’s eating disorder, focusing on thoughts, feelings, and behaviors.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white/50">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-4 text-primary">DBT Skills</h3>
                <p className="text-muted-foreground">
                  Dialectical Behavior Therapy enhances emotion regulation, distress tolerance, interpersonal effectiveness, and mindfulness to manage dysregulation.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-white/50">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-4 text-primary">Trauma-Informed</h3>
                <p className="text-muted-foreground">
                  Emphasizing safety, choice, collaboration, trustworthiness, and empowerment. Somatic and mindfulness-based interventions address physiological effects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">12-Week Thematic Curriculum</h2>
          
          <Accordion type="single" collapsible className="w-full bg-background rounded-xl shadow-sm px-6">
            <AccordionItem value="phase-1">
              <AccordionTrigger className="text-lg font-bold text-primary">Phase 1: Foundations of Recovery (Weeks 1-4)</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="space-y-2 py-4">
                  <li>• Orientation & Building Safety</li>
                  <li>• Establishing Regular Eating Patterns</li>
                  <li>• Understanding the ED Mindset</li>
                  <li>• Distress Tolerance & Self-Soothing</li>
                  <li>• Introduction to Mindfulness & Wise Mind</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="phase-2">
              <AccordionTrigger className="text-lg font-bold text-primary">Phase 2: Deepening Insight & Skills (Weeks 5-8)</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="space-y-2 py-4">
                  <li>• Body Image & Self-Esteem</li>
                  <li>• Challenging Dietary Rules</li>
                  <li>• Mindful & Intuitive Eating</li>
                  <li>• Perfectionism & All-or-Nothing Thinking</li>
                  <li>• Emotion Regulation & Trauma Healing</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="phase-3">
              <AccordionTrigger className="text-lg font-bold text-primary">Phase 3: Integration & Relapse Prevention (Weeks 9-12)</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ul className="space-y-2 py-4">
                  <li>• Interpersonal Relationships & Boundaries</li>
                  <li>• Values & Life Worth Living</li>
                  <li>• Managing Setbacks & Lapses</li>
                  <li>• Creating a Long-Term Self-Care Plan</li>
                  <li>• Reclaiming Identity Outside the ED</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 bg-primary/5 p-8 rounded-xl">
            <h3 className="font-bold text-xl mb-4">Weekly Schedule</h3>
            <p className="text-muted-foreground mb-4">The program operates 5 days a week (Mon-Fri) from 9:00 AM to 12:00 PM.</p>
            <p className="text-sm text-primary font-semibold mb-4 italic">*Tentative schedule dependent on current census.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-white p-3 rounded shadow-sm">
                <span className="font-bold block text-primary">9:00 - 9:45 AM</span>
                Supported Breakfast
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <span className="font-bold block text-primary">9:45 - 10:00 AM</span>
                Mindful Check-in
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <span className="font-bold block text-primary">10:00 - 11:00 AM</span>
                Therapy Groups (CBT-E / DBT)
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <span className="font-bold block text-primary">11:00 AM - 12:00 PM</span>
                Specialty Groups (Trauma / Nutrition)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Take the First Step</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Recovery is possible. Our team is here to support you every step of the way.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-white rounded-full px-8">
              Contact Admissions
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
