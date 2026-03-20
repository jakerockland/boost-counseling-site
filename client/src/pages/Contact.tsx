import { Card, CardContent } from "@/components/ui/card";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  useDocumentTitle({
    subtitle: "Contact Us",
    description: "Contact Boost Counseling Services in Tucson, AZ. Call (520) 447-2433 or send a message to schedule an appointment. Located at 2500 N Tucson Blvd, Suite 110.",
    path: "/contact",
  });
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/abstract-flow.jpg')`, backgroundSize: 'cover' }}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Reach out now to make positive changes in your life. We are here to help.
          </p>
        </div>
      </section>

      {/* Reach Out CTA */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-3">Ready to Get Started?</h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8">
            Reach out directly by email or phone to ask questions, learn more about our services, or schedule an appointment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@boosttalkaz.com"
              className="flex items-center justify-center gap-3 rounded-xl bg-primary text-white px-6 py-4 text-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail className="h-5 w-5 shrink-0" />
              contact@boosttalkaz.com
            </a>
            <a
              href="tel:520-447-2433"
              className="flex items-center justify-center gap-3 rounded-xl border-2 border-primary text-primary px-6 py-4 text-lg font-medium hover:bg-primary/5 transition-colors"
            >
              <Phone className="h-5 w-5 shrink-0" />
              (520) 447-2433
            </a>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Your privacy matters. All communication is handled through a HIPAA-compliant, secure system.
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-md bg-white">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone & Fax</h3>
                  <p className="text-muted-foreground">Ph: (520) 447-2433</p>
                  <p className="text-muted-foreground">Fax: (520) 492-1653</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-white">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a href="mailto:contact@boosttalkaz.com" className="text-primary hover:underline">contact@boosttalkaz.com</a>
                  <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-white">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">2500 N Tucson Blvd, Suite 110</p>
                  <p className="text-muted-foreground">Tucson, AZ 85716</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-white">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Hours</h3>
                  <p className="text-muted-foreground">Mon–Thu: 7:00 AM – 4:00 PM</p>
                  <p className="text-muted-foreground">Fri & Sat: By Appointment</p>
                  <p className="text-muted-foreground">Sun: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[250px] sm:h-[400px] w-full">
        <iframe
          title="Boost Counseling Services location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.2!2d-110.9376848!3d32.2525003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d6717b5e6a82a5%3A0x70bbbc38e040eb64!2sBoost%20Counseling%20Services%2C%20PLLC!5e0!3m2!1sen!2sus!4v1700000000000"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
