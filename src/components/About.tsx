import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, GraduationCap, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about extracting meaningful insights from data to drive business value
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Story */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                With a strong foundation in Information Technology and advanced expertise in Data Science, 
                I specialize in transforming complex datasets into strategic business insights. My journey 
                spans from analyzing logistics data in Mumbai to building sophisticated ML pipelines in New York.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing my Master's in Information Systems with a focus on Data Science at 
                Binghamton University, I combine academic rigor with practical industry experience to 
                deliver impactful solutions.
              </p>
              
              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">New York, NY</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-secondary" />
                  <span className="text-sm">3+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-accent" />
                  <span className="text-sm">MS Data Science</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm">AWS Certified</span>
                </div>
              </div>
            </div>
            
            {/* Cards */}
            <div className="space-y-6">
              {/* Current Role */}
              <Card className="glass">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-lg">Data & ML Engineer</h4>
                      <p className="text-primary font-medium">Julius Education</p>
                      <p className="text-sm text-muted-foreground">Jun 2024 – Dec 2024</p>
                    </div>
                    <Badge variant="secondary">Current</Badge>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Improved predictive analytics efficiency by 25%</li>
                    <li>• Enhanced ML model accuracy by 20% using NLP</li>
                    <li>• Built scalable pipelines with PySpark & AWS</li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Education */}
              <Card className="glass">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-lg">Master of Science</h4>
                    <p className="text-secondary font-medium">Information Systems (Data Science)</p>
                    <p className="text-sm text-muted-foreground">Binghamton University - SUNY</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">GPA: 3.6/4.0</Badge>
                    <span className="text-sm text-muted-foreground">2023 - 2025</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* Certification */}
              <Card className="glass">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold">AWS Certified</h4>
                      <p className="text-sm text-muted-foreground">Machine Learning Engineer – Associate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;