import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-background/40" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-2xl animate-float" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Status Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            🎯 Open to Data Science Opportunities
          </Badge>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
            Avantika Deshmukh
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-6">
            Data Scientist & ML Engineer
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Transforming complex datasets into actionable insights through advanced analytics, 
            machine learning, and statistical modeling. AWS Certified with expertise in 
            building scalable ML pipelines and predictive models.
          </p>
          
          {/* Key Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">25%</div>
              <div className="text-sm text-muted-foreground">Analytics Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">200K+</div>
              <div className="text-sm text-muted-foreground">Data Points Processed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">30%</div>
              <div className="text-sm text-muted-foreground">Model Training Speed</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-primary hover:shadow-primary transition-all duration-300">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary transition-all duration-300">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;