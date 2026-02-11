import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  useDocumentTitle("Contact Us");
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/abstract-flow.jpg')`, backgroundSize: 'cover' }}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Reach out now to make positive changes in your life. We are here to help.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">Get in Touch</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Whether you have questions about our services, insurance, or want to schedule an appointment, we are ready to assist you.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="border-none shadow-md bg-muted/30">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone & Fax</h3>
                      <p className="text-muted-foreground">Ph: (520) 447-2433</p>
                      <p className="text-muted-foreground">Fax: (520) 492-1653</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-muted/30">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <a href="mailto:contact@boosttalkaz.com" className="text-primary hover:underline">contact@boosttalkaz.com</a>
                      <p className="text-sm text-muted-foreground mt-1">We aim to respond within 24 hours.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-muted/30">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Location</h3>
                      <p className="text-muted-foreground">2500 N Tucson Blvd, Suite 110</p>
                      <p className="text-muted-foreground">Tucson, AZ 85716</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md bg-muted/30">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Hours</h3>
                      <p className="text-muted-foreground">Monday - Thursday: 7:00 AM - 4:00 PM</p>
                      <p className="text-muted-foreground">Friday & Saturday: By Appointment</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-border/50">
              <h3 className="font-serif text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-6" action="https://formsubmit.co/contact@boosttalkaz.com" method="POST">
                <input type="hidden" name="_subject" value="New inquiry from Boost Counseling website" />
                <input type="hidden" name="_next" value={`${window.location.origin}${import.meta.env.BASE_URL}contact`} />
                <input type="hidden" name="_captcha" value="true" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" name="first-name" placeholder="Jane" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" name="last-name" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" placeholder="jane@example.com" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" placeholder="(555) 555-5555" type="tel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service of Interest</Label>
                  <select id="service" name="service" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="General Inquiry">Select a service...</option>
                    <option value="Individual Counseling">Individual Counseling</option>
                    <option value="Group Counseling">Group Counseling</option>
                    <option value="Eating Disorder IOP">Eating Disorder IOP</option>
                    <option value="Trauma Therapy">Trauma Therapy</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="How can we help you?" className="min-h-[120px]" required />
                </div>
                <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full">
        <iframe
          title="Boost Counseling Services location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.2!2d-110.944!3d32.253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDE1JzEwLjgiTiAxMTDCsDU2JzM4LjQiVw!5e0!3m2!1sen!2sus!4v1700000000000"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
