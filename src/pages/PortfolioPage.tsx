import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import portfolioGate from "@/assets/portfolio-gate.jpg";
import portfolioTank from "@/assets/portfolio-tank.jpg";
import portfolioRailing from "@/assets/portfolio-railing.jpg";
import portfolioStructure from "@/assets/portfolio-structure.jpg";
import serviceFab from "@/assets/service-fabrication.jpg";
import serviceMig from "@/assets/service-mig-welding.jpg";

const projects = [
  {
    id: 1,
    title: "Custom Decorative Gate",
    category: "Gates & Doors",
    description: "Elegant wrought iron gate with intricate scrollwork design for a residential property in Accra. Features powder-coated finish for durability.",
    image: portfolioGate,
  },
  {
    id: 2,
    title: "Industrial Storage Tank",
    category: "Tanks & Containers",
    description: "10,000-liter steel storage tank fabricated for an industrial facility in Tema. Includes welded seams and corrosion-resistant coating.",
    image: portfolioTank,
  },
  {
    id: 3,
    title: "Modern Staircase Railing",
    category: "Railings & Balustrades",
    description: "Contemporary stainless steel railing system for a commercial building. Combines safety with sleek aesthetic design.",
    image: portfolioRailing,
  },
  {
    id: 4,
    title: "Warehouse Steel Structure",
    category: "Structural Works",
    description: "Heavy-duty steel framework for a large warehouse facility. Designed to support maximum load capacity and weather resistance.",
    image: portfolioStructure,
  },
  {
    id: 5,
    title: "Metal Fabrication Workshop",
    category: "Industrial Projects",
    description: "Complete metal fabrication setup for an industrial client. Includes custom workstations, storage systems, and safety barriers.",
    image: serviceFab,
  },
  {
    id: 6,
    title: "Precision Welding Project",
    category: "Custom Welding",
    description: "Specialized welding work for automotive components requiring high precision and quality finish.",
    image: serviceMig,
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
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
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
                  className="group relative overflow-hidden rounded-lg bg-card card-shadow cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-primary text-xs font-medium tracking-widest">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl text-foreground mt-1">
                      {project.title}
                    </h3>
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
