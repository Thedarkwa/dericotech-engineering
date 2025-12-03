import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Factory, Building2, Cog, Hammer, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import serviceMig from "@/assets/service-mig-welding.jpg";
import serviceFab from "@/assets/service-fabrication.jpg";
import serviceStructural from "@/assets/service-structural.jpg";

const services = [
  {
    icon: Wrench,
    title: "All Welding Types",
    subtitle: "MIG / TIG / ARC",
    description: "Expert welding services covering all major techniques. Whether you need MIG welding for speed and efficiency, TIG welding for precision on thin materials, or ARC welding for heavy-duty applications, our certified welders deliver superior results.",
    features: ["MIG Welding", "TIG Welding", "ARC Welding", "Aluminum Welding", "Stainless Steel Welding", "Cast Iron Welding"],
    image: serviceMig,
  },
  {
    icon: Factory,
    title: "Metal Fabrication",
    subtitle: "Custom Solutions",
    description: "From concept to completion, we fabricate custom metal structures to your exact specifications. Our fabrication shop is equipped with modern machinery to cut, bend, and shape metal for any application.",
    features: ["Gates & Doors", "Railings & Balustrades", "Tanks & Containers", "Metal Furniture", "Frames & Supports", "Decorative Metalwork"],
    image: serviceFab,
  },
  {
    icon: Building2,
    title: "Industrial Fabrication",
    subtitle: "Large Scale Projects",
    description: "We handle large-scale industrial fabrication projects including structural components, machinery parts, and specialized equipment. Our team has experience working with factories, construction sites, and industrial facilities.",
    features: ["Structural Components", "Machinery Parts", "Equipment Fabrication", "Platform & Walkways", "Industrial Shelving", "Conveyor Systems"],
    image: serviceStructural,
  },
  {
    icon: Hammer,
    title: "Heavy-Duty Structural Welding",
    subtitle: "Built to Last",
    description: "When strength and durability matter most, our heavy-duty structural welding services deliver. We work on construction projects, infrastructure, and industrial applications requiring maximum load-bearing capacity.",
    features: ["Steel Structures", "Building Frameworks", "Bridge Components", "Support Columns", "Reinforcements", "Load-Bearing Joints"],
    image: serviceStructural,
  },
  {
    icon: Cog,
    title: "Repairs & Maintenance",
    subtitle: "Quick Turnaround",
    description: "Keep your equipment and structures in top condition with our repair and maintenance services. We provide quick, reliable repairs for all types of metal work, minimizing downtime and extending the life of your assets.",
    features: ["Equipment Repairs", "Structural Repairs", "Weld Repairs", "Preventive Maintenance", "Emergency Services", "On-Site Repairs"],
    image: serviceMig,
  },
  {
    icon: Sparkles,
    title: "Custom Fabrication Projects",
    subtitle: "Your Vision, Our Craft",
    description: "Have a unique project in mind? We bring your ideas to life with custom fabrication services. From artistic metalwork to specialized industrial components, we work closely with you to deliver exactly what you need.",
    features: ["Prototype Development", "One-Off Pieces", "Artistic Metalwork", "Specialized Equipment", "Custom Modifications", "Design Consultation"],
    image: serviceFab,
  },
];

const ServicesPage = () => {
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
              <span className="text-primary font-medium tracking-widest text-sm">OUR SERVICES</span>
              <h1 className="font-display text-5xl md:text-6xl text-foreground mt-4 mb-6">
                COMPREHENSIVE WELDING &{" "}
                <span className="text-gradient">FABRICATION SOLUTIONS</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From precision welding to large-scale industrial fabrication, we offer a complete 
                range of services to meet your metalworking needs.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <AnimatedSection key={service.title}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full aspect-[4/3] object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-3 rounded-lg">
                        <service.icon className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <span className="text-primary font-medium tracking-widest text-sm">
                      {service.subtitle}
                    </span>
                    <h2 className="font-display text-4xl text-foreground mt-2 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button asChild variant="default" size="lg">
                      <Link to="/contact">
                        Request Quote
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                NEED A CUSTOM SOLUTION?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Don't see exactly what you're looking for? Contact us to discuss your specific 
                requirements. We're always ready to take on unique challenges.
              </p>
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
