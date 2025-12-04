import { Target, Eye, MapPin, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import serviceFab from "@/assets/service-fabrication.jpg";

const values = [
  {
    title: "Quality Craftsmanship",
    description: "Every weld and fabrication meets the highest industry standards.",
  },
  {
    title: "Timely Delivery",
    description: "We respect deadlines and deliver projects on schedule.",
  },
  {
    title: "Customer Focus",
    description: "Your satisfaction is our priority from start to finish.",
  },
  {
    title: "Safety First",
    description: "We follow strict safety protocols in all our operations.",
  },
];

const AboutPage = () => {
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
              <span className="text-primary font-medium tracking-widest text-sm">ABOUT US</span>
              <h1 className="font-display text-5xl md:text-6xl text-foreground mt-4 mb-6">
                BUILDING GHANA'S FUTURE WITH{" "}
                <span className="text-gradient">STEEL & PRECISION</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Derricotech Engineering is a trusted name in welding and fabrication services, 
                serving clients across Ghana with excellence, precision, and dedication.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <img
                  src={serviceFab}
                  alt="Fabrication workshop"
                  className="rounded-lg w-full card-shadow"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                  <div className="font-display text-4xl">10+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div>
                <span className="text-primary font-medium tracking-widest text-sm">OUR STORY</span>
                <h2 className="font-display text-4xl text-foreground mt-4 mb-6">
                  COMPANY PROFILE
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Derricotech Engineering was established with a vision to provide world-class 
                    welding and fabrication services in Ghana. Located in Tema, Accra, we have 
                    grown to become one of the most trusted names in the industry.
                  </p>
                  <p>
                    Our team of skilled professionals brings years of experience and expertise 
                    to every project. From small repairs to large-scale industrial fabrication, 
                    we approach each job with the same commitment to quality and precision.
                  </p>
                  <p>
                    We serve a diverse range of clients including homeowners, construction 
                    companies, industrial facilities, and government projects, always delivering 
                    work that exceeds expectations.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-background p-8 rounded-lg card-shadow h-full">
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-3xl text-foreground mb-4">OUR MISSION</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver durable, high-quality welding and fabrication solutions that meet 
                  and exceed our clients' expectations. We are committed to using the best 
                  materials, employing skilled craftsmen, and maintaining the highest safety 
                  standards in all our operations.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="bg-background p-8 rounded-lg card-shadow h-full">
                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-3xl text-foreground mb-4">OUR VISION</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become a leading engineering and fabrication service provider in Ghana 
                  and West Africa. We aspire to be recognized for our innovation, reliability, 
                  and unwavering commitment to excellence in every project we undertake.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary font-medium tracking-widest text-sm">WHY CHOOSE US</span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4">
                OUR CORE VALUES
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <div className="bg-card p-6 rounded-lg card-shadow text-center h-full">
                  <CheckCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h4 className="font-display text-xl text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-4 text-center">
              <MapPin className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-display text-3xl text-foreground">OUR LOCATION</h3>
                <p className="text-muted-foreground mt-2">Tema, Accra, Ghana</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
