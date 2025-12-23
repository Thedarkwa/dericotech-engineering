import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Factory, Building2, Cog, Hammer, Sparkles, Wind, Flame, Shield, Container, DoorOpen, Fence } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import serviceMig from "@/assets/service-mig-welding.jpg";
import serviceFab from "@/assets/service-fabrication.jpg";
import serviceStructural from "@/assets/service-structural.jpg";
import serviceStructuralWelding from "@/assets/service-structural-welding.jpg";
import serviceMetalFabrication from "@/assets/service-metal-fabrication.jpg";
import serviceCustomFabrication from "@/assets/service-custom-fabrication.jpg";
import serviceCrane from "@/assets/service-crane.jpg";
import serviceRollerDoor from "@/assets/service-roller-door.jpg";
import serviceFencing from "@/assets/service-fencing.jpg";
import serviceCompressor from "@/assets/service-compressor.jpg";
import serviceBoiler from "@/assets/service-boiler.jpg";

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
    image: serviceMetalFabrication,
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
    image: serviceStructuralWelding,
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
    image: serviceCustomFabrication,
  },
  {
    icon: Wind,
    title: "Compressor and Air Systems",
    subtitle: "Overhaul, Installation & Maintenance",
    description: "Complete compressor and air system solutions including installation of new systems, overhaul of existing equipment, and ongoing maintenance services to ensure optimal performance and reliability.",
    features: ["System Installation", "Complete Overhaul", "Preventive Maintenance", "Performance Optimization", "Troubleshooting", "Parts Replacement"],
    image: serviceCompressor,
  },
  {
    icon: Flame,
    title: "Boiler Refurbishment and Overhaul",
    subtitle: "Industrial Heating Solutions",
    description: "Professional boiler refurbishment and overhaul services to restore efficiency and extend equipment lifespan. We ensure your boilers meet safety standards and operate at peak performance.",
    features: ["Complete Refurbishment", "System Overhaul", "Safety Inspections", "Efficiency Upgrades", "Component Replacement", "Compliance Testing"],
    image: serviceBoiler,
  },
  {
    icon: Sparkles,
    title: "Stainless Steel, Aluminum Fabrication and Insulation",
    subtitle: "Specialty Materials",
    description: "Expert fabrication services for stainless steel and aluminum applications, combined with professional insulation installation for thermal efficiency and protection.",
    features: ["Stainless Steel Work", "Aluminum Fabrication", "Thermal Insulation", "Corrosion Resistant", "Food Grade Fabrication", "Custom Finishes"],
    image: serviceMetalFabrication,
  },
  {
    icon: Shield,
    title: "Coded Qualified Welding",
    subtitle: "Certified Excellence",
    description: "Certified coded welding services performed by qualified welders to meet stringent industry standards and specifications. Essential for critical applications requiring documented quality assurance.",
    features: ["Certified Welders", "Code Compliance", "Quality Assurance", "Documentation", "Inspection Ready", "Industry Standards"],
    image: serviceStructuralWelding,
  },
  {
    icon: Container,
    title: "Overhead Crane Installation",
    subtitle: "Lifting Solutions",
    description: "Professional installation of overhead crane systems for industrial facilities. We handle complete installation from planning to commissioning, ensuring safe and efficient material handling operations.",
    features: ["Complete Installation", "System Design", "Safety Compliance", "Load Testing", "Commissioning", "Training Services"],
    image: serviceCrane,
  },
  {
    icon: DoorOpen,
    title: "Roller Door Installation and Maintenance",
    subtitle: "Commercial & Domestic",
    description: "Installation and maintenance services for commercial and domestic roller doors. We provide reliable solutions for warehouses, shops, garages, and residential properties.",
    features: ["Commercial Doors", "Domestic Doors", "Installation", "Repairs", "Preventive Maintenance", "Motor Replacement"],
    image: serviceRollerDoor,
  },
  {
    icon: Shield,
    title: "Security Panels, Grilles and Automatic Gates",
    subtitle: "Property Protection",
    description: "Enhance your property security with custom security panels, grilles, and automatic gate systems. We design and install solutions that combine security with aesthetic appeal.",
    features: ["Security Panels", "Window Grilles", "Automatic Gates", "Access Control", "Custom Designs", "Motorized Systems"],
    image: serviceCustomFabrication,
  },
  {
    icon: Fence,
    title: "Fencing Solutions",
    subtitle: "Boundary & Pool Fencing",
    description: "Complete fencing solutions including boundary chain links, barbwire fencing, and swimming pool fencing. We provide durable, secure fencing for residential, commercial, and industrial properties.",
    features: ["Chain Link Fencing", "Barbwire Fencing", "Swimming Pool Fencing", "Boundary Fencing", "Security Fencing", "Gate Installation"],
    image: serviceFencing,
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
