import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";
import { supabase } from "@/integrations/supabase/client";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+233 547 695 369",
    href: "tel:+233547695369",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@derricotech.com",
    href: "mailto:info@derricotech.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Tema, Accra, Ghana",
    href: "#map",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat: 8AM - 6PM",
    href: null,
  },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from("contact_submissions")
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          message: formData.message,
        });

      if (dbError) {
        console.error("Database error:", dbError);
        throw new Error("Failed to save your message");
      }

      // Send email notification
      const { error: fnError } = await supabase.functions.invoke("send-contact-notification", {
        body: formData,
      });

      if (fnError) {
        console.error("Function error:", fnError);
        // Don't throw - message was saved, just email failed
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      console.error("Submit error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = "233547695369";
  const whatsappMessage = "Hello! I'm interested in your welding and fabrication services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl">
              <span className="text-primary font-medium tracking-widest text-sm">CONTACT US</span>
              <h1 className="font-display text-5xl md:text-6xl text-foreground mt-4 mb-6">
                LET'S BUILD{" "}
                <span className="text-gradient">SOMETHING GREAT</span>{" "}
                TOGETHER
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ready to start your project? Get in touch with our team for a free consultation 
                and quote. We're here to bring your vision to life.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-card p-8 rounded-lg card-shadow">
                <h2 className="font-display text-3xl text-foreground mb-6">SEND US A MESSAGE</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+233 000 000 000"
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project..."
                      rows={5}
                      className="bg-background border-border resize-none"
                    />
                  </div>
                  <Button type="submit" variant="hero" size="xl" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-5 h-5" />
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <div className="space-y-8">
              <AnimatedSection delay={100}>
                <h2 className="font-display text-3xl text-foreground mb-6">GET IN TOUCH</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Have questions or need a quote? Reach out to us through any of the following 
                  channels. Our team is ready to assist you with your welding and fabrication needs.
                </p>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <AnimatedSection key={item.title} delay={150 + index * 50}>
                    <div className="bg-card p-6 rounded-lg card-shadow">
                      <item.icon className="w-8 h-8 text-primary mb-4" />
                      <h4 className="font-display text-xl text-foreground mb-1">{item.title}</h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <AnimatedSection delay={400}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#25D366] text-white p-6 rounded-lg hover:bg-[#20BD5A] transition-colors"
                >
                  <MessageCircle className="w-10 h-10" fill="white" />
                  <div>
                    <div className="font-display text-xl">CHAT ON WHATSAPP</div>
                    <div className="text-sm opacity-90">Quick response guaranteed</div>
                  </div>
                </a>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-primary font-medium tracking-widest text-sm">FIND US</span>
              <h2 className="font-display text-4xl text-foreground mt-4">OUR LOCATION</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="rounded-lg overflow-hidden card-shadow h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5!2d0.0513246!3d5.6931333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10207f000ac5bdbb%3A0x9b419e8736c8d1e1!2sDerricotech%20Engineering%20Company%20Limited!5e0!3m2!1sen!2sgh!4v1703350000000!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Derricotech Engineering Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
