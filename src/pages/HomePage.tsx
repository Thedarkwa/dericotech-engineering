import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-welding.jpg";
import serviceMig from "@/assets/service-mig-welding.jpg";
import homeMetalFabrication from "@/assets/home-metal-fabrication.jpg";
import homeStructuralWelding from "@/assets/home-structural-welding.jpg";

// Portfolio images
import portfolioCraneBeam from "@/assets/portfolio-crane-beam.jpg";
import portfolioContainer from "@/assets/portfolio-container.jpg";
import portfolioPiping from "@/assets/portfolio-piping.jpg";
import portfolioDuctwork from "@/assets/portfolio-ductwork.jpg";
import portfolioSteelStructure from "@/assets/portfolio-steel-structure.jpg";
import portfolioPipes from "@/assets/portfolio-pipes.jpg";
import portfolioContainerBuild from "@/assets/portfolio-container-build.jpg";
import portfolioWarehouse from "@/assets/portfolio-warehouse.jpg";
import portfolioConstructionSite from "@/assets/portfolio-construction-site.jpg";
import portfolioTankPiping from "@/assets/portfolio-tank-piping.jpg";
import portfolioContainerLift from "@/assets/portfolio-container-lift.jpg";
import portfolioRooftopDuct from "@/assets/portfolio-rooftop-duct.jpg";
import portfolioSilos from "@/assets/portfolio-silos.jpg";
import portfolioTankWork from "@/assets/portfolio-tank-work.jpg";
import portfolioDuctInstall from "@/assets/portfolio-duct-install.jpg";
import portfolioStorageTank from "@/assets/portfolio-storage-tank.jpg";
import portfolioDuctCrane from "@/assets/portfolio-duct-crane.jpg";
import portfolioDuctLine from "@/assets/portfolio-duct-line.jpg";
import portfolioBeamLift from "@/assets/portfolio-beam-lift.jpg";
import portfolioLpgTank from "@/assets/portfolio-lpg-tank.jpg";
import portfolioPlantInstall from "@/assets/portfolio-plant-install.jpg";
import portfolioPumpStation from "@/assets/portfolio-pump-station.jpg";
import portfolioFactoryWork from "@/assets/portfolio-factory-work.jpg";
import portfolioFrameBuild from "@/assets/portfolio-frame-build.jpg";

const portfolioItems = [
  { image: portfolioCraneBeam, title: "Crane Beam Fabrication" },
  { image: portfolioContainer, title: "Container Conversion" },
  { image: portfolioPiping, title: "Industrial Piping" },
  { image: portfolioDuctwork, title: "Ductwork Installation" },
  { image: portfolioSteelStructure, title: "Steel Structure" },
  { image: portfolioPipes, title: "Heavy Pipe Works" },
  { image: portfolioContainerBuild, title: "Container Building" },
  { image: portfolioWarehouse, title: "Warehouse Construction" },
  { image: portfolioConstructionSite, title: "Industrial Construction" },
  { image: portfolioTankPiping, title: "Tank Farm Piping" },
  { image: portfolioContainerLift, title: "Container Installation" },
  { image: portfolioRooftopDuct, title: "Rooftop Ductwork" },
  { image: portfolioSilos, title: "Silo Fabrication" },
  { image: portfolioTankWork, title: "Storage Tank Piping" },
  { image: portfolioDuctInstall, title: "Industrial Duct System" },
  { image: portfolioStorageTank, title: "Storage Tank Project" },
  { image: portfolioDuctCrane, title: "Duct Crane Lift" },
  { image: portfolioDuctLine, title: "Exhaust Duct Line" },
  { image: portfolioBeamLift, title: "Steel Beam Installation" },
  { image: portfolioLpgTank, title: "LPG Tank Setup" },
  { image: portfolioPlantInstall, title: "Processing Plant" },
  { image: portfolioPumpStation, title: "Pump Station" },
  { image: portfolioFactoryWork, title: "Factory Fabrication" },
  { image: portfolioFrameBuild, title: "Steel Frame Building" },
];

const stats = [
  { icon: Users, value: "500+", label: "Projects Completed" },
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: Award, value: "100%", label: "Client Satisfaction" },
  { icon: Shield, value: "24/7", label: "Support Available" },
];

const services = [
  {
    title: "MIG/TIG/ARC Welding",
    description: "Expert welding services for all metal types including aluminum and stainless steel.",
    image: serviceMig,
  },
  {
    title: "Metal Fabrication",
    description: "Custom metal structures, gates, railings, tanks, and industrial components.",
    image: homeMetalFabrication,
  },
  {
    title: "Structural Welding",
    description: "Heavy-duty structural welding for industrial and commercial applications.",
    image: homeStructuralWelding,
  },
];

const HomePage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Welding workshop with sparks"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 pt-20 relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6 border border-primary/30">
                Tema. Accra, Ghana
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-6">
                PRECISION WELDING &{" "}
                <span className="text-gradient">QUALITY FABRICATION</span>{" "}
                YOU CAN TRUST
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
                Derricotech Engineering delivers durable, high-quality welding and fabrication 
                solutions for residential, commercial, and industrial projects across Ghana.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">
                    Get a Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="heroOutline" size="xl">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="font-display text-4xl md:text-5xl text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary font-medium tracking-widest text-sm">WHAT WE DO</span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
                OUR CORE SERVICES
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From precision welding to custom fabrication, we deliver excellence in every project.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <div className="group relative overflow-hidden rounded-lg bg-card card-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  View All Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary font-medium tracking-widest text-sm">OUR WORK</span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
                FEATURED PROJECTS
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our portfolio of completed projects showcasing our expertise in welding and fabrication.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioItems.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 50}>
                <div className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display text-lg text-foreground">{item.title}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={450}>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio">
                  View Full Portfolio
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-metallic relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-spark-glow rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                READY TO START YOUR PROJECT?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Get in touch with our team for a free consultation and quote. 
                We're ready to bring your vision to life with precision and quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">
                    Contact Us Today
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="heroOutline" size="xl">
                  <a href="tel:+233547695369">Call Now</a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
