import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, BarChart, TestTube, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Multimodal Sentiment Analysis",
      description: "Advanced sentiment analysis system processing both text and image data to extract comprehensive user sentiment insights and engagement patterns.",
      longDescription: "Processed 200K+ text entries and 50K images to extract features and quantify user sentiment trends. Built comprehensive dashboards for stakeholders to monitor insights, identify engagement patterns, and guide content optimization strategies.",
      technologies: ["Python", "PyTorch", "Hugging Face", "Streamlit", "Computer Vision", "NLP"],
      metrics: [
        { label: "Text Entries", value: "200K+" },
        { label: "Images Processed", value: "50K+" },
        { label: "Accuracy", value: "92%" }
      ],
      icon: BarChart,
      category: "Machine Learning",
      status: "Completed"
    },
    {
      title: "A/B Testing Framework for Marketing",
      description: "Comprehensive A/B testing framework for digital marketing campaigns with automated analysis and reporting capabilities.",
      longDescription: "Designed and executed controlled A/B tests on digital ad campaigns, increasing conversion rates from 1.79% to 2.55% by identifying high-performing strategies. Automated reporting pipelines and visual dashboards to streamline analysis, enabling rapid iteration and informed marketing decisions.",
      technologies: ["Python", "Pandas", "Statsmodels", "SQL", "Statistical Analysis", "Data Visualization"],
      metrics: [
        { label: "Conversion Rate", value: "2.55%" },
        { label: "Improvement", value: "+42%" },
        { label: "Statistical Significance", value: "99.5%" }
      ],
      icon: TestTube,
      category: "Data Science",
      status: "Completed"
    },
    {
      title: "Predictive Analytics Pipeline",
      description: "End-to-end ML pipeline for predictive analytics with real-time monitoring and automated model retraining capabilities.",
      longDescription: "Built a scalable machine learning pipeline using PySpark and AWS services for predictive analytics. Implemented automated data preprocessing, feature engineering, model training, and deployment with continuous monitoring and performance tracking.",
      technologies: ["PySpark", "AWS", "MLflow", "Docker", "Kubernetes", "Python"],
      metrics: [
        { label: "Data Processing", value: "1M+ records/day" },
        { label: "Model Accuracy", value: "94%" },
        { label: "Latency", value: "<100ms" }
      ],
      icon: TrendingUp,
      category: "MLOps",
      status: "In Progress"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "In Progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Machine Learning":
        return "bg-gradient-primary";
      case "Data Science":
        return "bg-gradient-secondary";
      case "MLOps":
        return "bg-gradient-accent";
      default:
        return "bg-gradient-primary";
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing impactful data science and machine learning solutions
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              
              return (
                <Card key={index} className="glass hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-3 rounded-lg ${getCategoryColor(project.category)} bg-opacity-10`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex gap-2">
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    
                    <Badge variant="outline" className="w-fit mb-3">
                      {project.category}
                    </Badge>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Detailed Description */}
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Project Details</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>
                    
                    {/* Metrics */}
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Key Metrics</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex justify-between items-center p-2 bg-muted/20 rounded">
                            <span className="text-xs text-muted-foreground">{metric.label}</span>
                            <span className="text-sm font-semibold text-primary">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Technologies</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="glass max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Want to see more projects?</h3>
                <p className="text-muted-foreground mb-6">
                  I have additional projects and case studies available. Let's discuss how my 
                  experience can contribute to your team's success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-primary">
                    <Github className="mr-2 h-4 w-4" />
                    View GitHub Profile
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Request Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;