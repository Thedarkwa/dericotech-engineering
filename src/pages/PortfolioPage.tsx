import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

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

const projects = [
  {
    id: 1,
    title: "Crane Beam Fabrication",
    category: "Structural Works",
    description: "Heavy-duty yellow crane beam fabricated for an industrial facility. This project involved precision cutting, welding, and assembly of large-scale steel components designed to support overhead crane systems in a manufacturing plant.",
    image: portfolioCraneBeam,
  },
  {
    id: 2,
    title: "Container Office Conversion",
    category: "Container Projects",
    description: "Custom shipping container conversion into a fully functional office space. Features include installed windows, doors, electrical systems, and interior finishing for on-site accommodation at construction projects.",
    image: portfolioContainer,
  },
  {
    id: 3,
    title: "Industrial Piping System",
    category: "Piping & Tanks",
    description: "Complete industrial piping installation for a processing facility. Includes multiple pump stations, valve assemblies, and pressure-rated connections for fluid transfer operations.",
    image: portfolioPiping,
  },
  {
    id: 4,
    title: "Ductwork Installation",
    category: "Industrial Projects",
    description: "Large-scale industrial ductwork fabrication and installation. Custom-designed ventilation system components including curved sections and support structures for efficient air flow management.",
    image: portfolioDuctwork,
  },
  {
    id: 5,
    title: "Steel Frame Structure",
    category: "Structural Works",
    description: "Structural steel framework for an industrial building. Heavy I-beam columns and cross-bracing designed to meet load specifications for warehouse and manufacturing facilities.",
    image: portfolioSteelStructure,
  },
  {
    id: 6,
    title: "Heavy Pipe Fabrication",
    category: "Piping & Tanks",
    description: "Large diameter pipe fabrication for industrial applications. Precision-cut and welded steel pipes ready for installation in processing plants and infrastructure projects.",
    image: portfolioPipes,
  },
  {
    id: 7,
    title: "Multi-Story Container Building",
    category: "Container Projects",
    description: "Two-story modular building constructed from shipping containers. Includes window cutouts, structural reinforcement, and preparation for interior finishing as temporary or permanent structures.",
    image: portfolioContainerBuild,
  },
  {
    id: 8,
    title: "Warehouse Construction",
    category: "Structural Works",
    description: "Large-scale industrial warehouse with steel truss roof system. Features heavy-duty foundations, crane rails, and structural elements designed for heavy manufacturing operations.",
    image: portfolioWarehouse,
  },
  {
    id: 9,
    title: "Industrial Construction Site",
    category: "Structural Works",
    description: "Major industrial construction project featuring steel frame erection with mobile crane support. Large-scale structural steel installation for factory and warehouse facilities.",
    image: portfolioConstructionSite,
  },
  {
    id: 10,
    title: "Tank Farm Piping",
    category: "Piping & Tanks",
    description: "Complete piping network installation at a petroleum storage facility. Includes manifold systems, isolation valves, and connections to large storage tanks with proper safety markings.",
    image: portfolioTankPiping,
  },
  {
    id: 11,
    title: "Container Crane Installation",
    category: "Container Projects",
    description: "Container lifting and positioning using heavy crane equipment. Precision placement of modified shipping containers for modular construction projects.",
    image: portfolioContainerLift,
  },
  {
    id: 12,
    title: "Rooftop Ductwork System",
    category: "Industrial Projects",
    description: "Large-diameter industrial ductwork installed at rooftop level. Custom fabricated sections connected to ventilation and exhaust systems for manufacturing facilities.",
    image: portfolioRooftopDuct,
  },
  {
    id: 13,
    title: "Industrial Silo Fabrication",
    category: "Industrial Projects",
    description: "Cyclone separator and silo installation for dust collection and material handling. Steel structures with support frameworks designed for industrial processing applications.",
    image: portfolioSilos,
  },
  {
    id: 14,
    title: "Storage Tank Piping",
    category: "Piping & Tanks",
    description: "Pipeline installation connecting to large storage tanks. Includes flanged connections, support saddles, and coating for corrosion protection at petroleum storage facilities.",
    image: portfolioTankWork,
  },
  {
    id: 15,
    title: "Industrial Duct Assembly",
    category: "Industrial Projects",
    description: "Heavy industrial ductwork assembly using crane lifting equipment. Large-diameter curved sections fabricated and installed for factory ventilation systems.",
    image: portfolioDuctInstall,
  },
  {
    id: 16,
    title: "Storage Tank Project",
    category: "Piping & Tanks",
    description: "Large petroleum storage tank with connected piping infrastructure. Features multiple nozzle connections, ladder access, and proper markings for safe operations at tank farm facilities.",
    image: portfolioStorageTank,
  },
  {
    id: 17,
    title: "Duct Crane Lift",
    category: "Industrial Projects",
    description: "Heavy-duty industrial ductwork being lifted and positioned using crane equipment. Large-diameter curved duct sections installed on rooftop steel support structures.",
    image: portfolioDuctCrane,
  },
  {
    id: 18,
    title: "Exhaust Duct Line",
    category: "Industrial Projects",
    description: "Extended exhaust ductwork system with multiple support stands. Features large-diameter galvanized steel ducts with curved transition sections for factory ventilation.",
    image: portfolioDuctLine,
  },
  {
    id: 19,
    title: "Steel Beam Installation",
    category: "Structural Works",
    description: "Precision steel beam lifting and installation using crane equipment. Team of workers positioning structural steel components for industrial facility construction.",
    image: portfolioBeamLift,
  },
  {
    id: 20,
    title: "LPG Tank Installation",
    category: "Piping & Tanks",
    description: "Large LPG storage tank installation with connected piping infrastructure. Features pressure-rated vessels, safety systems, and ground-level valve assemblies.",
    image: portfolioLpgTank,
  },
  {
    id: 21,
    title: "Processing Plant Installation",
    category: "Industrial Projects",
    description: "Complete industrial processing plant with cyclone separators, ductwork systems, and exhaust stacks. Heavy crane equipment used for positioning large fabricated components.",
    image: portfolioPlantInstall,
  },
  {
    id: 22,
    title: "Pump Station Assembly",
    category: "Piping & Tanks",
    description: "Industrial pump station with multiple pump units and piping manifolds. Features flanged connections, motor drives, and structural steel canopy for equipment protection.",
    image: portfolioPumpStation,
  },
  {
    id: 23,
    title: "Factory Fabrication Yard",
    category: "Industrial Projects",
    description: "Large-scale fabrication operations at an industrial facility. Features crane lifting operations, ductwork assembly, and various steel fabrication work in progress.",
    image: portfolioFactoryWork,
  },
  {
    id: 24,
    title: "Steel Frame Building",
    category: "Structural Works",
    description: "Large industrial steel frame building under construction. Features portal frame design with purlins and roof truss systems for warehouse and manufacturing facilities.",
    image: portfolioFrameBuild,
  },
];

const categories = ["All", ...new Set(projects.map((p) => p.category))];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

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
              <span className="text-primary font-medium tracking-widest text-sm">OUR WORK</span>
              <h1 className="font-display text-5xl md:text-6xl text-foreground mt-4 mb-6">
                PROJECTS THAT SHOWCASE{" "}
                <span className="text-gradient">OUR EXPERTISE</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Browse through our portfolio of completed projects. Each piece represents our 
                commitment to quality, precision, and customer satisfaction.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 100}>
                <div
                  className="group relative overflow-hidden rounded-xl bg-card shadow-elevated hover:shadow-floating cursor-pointer transition-all duration-500 hover:-translate-y-2"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium tracking-widest rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl text-background drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 delay-100">
                    <ArrowRight className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto card-shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover rounded-t-lg"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8">
              <span className="text-primary text-sm font-medium tracking-widest">
                {selectedProject.category}
              </span>
              <h2 className="font-display text-4xl text-foreground mt-2 mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {selectedProject.description}
              </p>
              <Button asChild variant="default" size="lg">
                <Link to="/contact">
                  Start Similar Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                HAVE A PROJECT IN MIND?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss how we can bring your vision to life. Contact us for a free 
                consultation and quote on your next project.
              </p>
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Start Your Project
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

export default PortfolioPage;
