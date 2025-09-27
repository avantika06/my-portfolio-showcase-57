import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, BarChart, TestTube, TrendingUp, ArrowLeft, Brain, Database, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Projects = () => {
  const projects = [
    {
      title: "Multimodal Sentiment Analysis",
      description: "Advanced sentiment analysis system processing both text and image data to extract comprehensive user sentiment insights and engagement patterns.",
      longDescription: "Processed 200K+ text entries and 50K images to extract features and quantify user sentiment trends. Built comprehensive dashboards for stakeholders to monitor insights, identify engagement patterns, and guide content optimization strategies. Implemented state-of-the-art transformer models and computer vision techniques for robust multimodal analysis.",
      technologies: ["Python", "PyTorch", "Hugging Face", "Streamlit", "Computer Vision", "NLP", "Transformers", "OpenCV"],
      metrics: [
        { label: "Text Entries", value: "200K+" },
        { label: "Images Processed", value: "50K+" },
        { label: "Model Accuracy", value: "92%" },
        { label: "Processing Speed", value: "1000 items/min" }
      ],
      icon: BarChart,
      category: "Machine Learning",
      status: "Completed",
      githubUrl: "#",
      demoUrl: "#",
      featured: true
    },
    {
      title: "A/B Testing Framework for Marketing",
      description: "Comprehensive A/B testing framework for digital marketing campaigns with automated analysis and reporting capabilities.",
      longDescription: "Designed and executed controlled A/B tests on digital ad campaigns, increasing conversion rates from 1.79% to 2.55% by identifying high-performing strategies. Automated reporting pipelines and visual dashboards to streamline analysis, enabling rapid iteration and informed marketing decisions. Built statistical significance testing and power analysis tools.",
      technologies: ["Python", "Pandas", "Statsmodels", "SQL", "Statistical Analysis", "Data Visualization", "Plotly", "Jupyter"],
      metrics: [
        { label: "Conversion Rate", value: "2.55%" },
        { label: "Improvement", value: "+42%" },
        { label: "Statistical Significance", value: "99.5%" },
        { label: "Tests Conducted", value: "50+" }
      ],
      icon: TestTube,
      category: "Data Science",
      status: "Completed",
      githubUrl: "#",
      demoUrl: "#",
      featured: true
    },
    {
      title: "Predictive Analytics Pipeline",
      description: "End-to-end ML pipeline for predictive analytics with real-time monitoring and automated model retraining capabilities.",
      longDescription: "Built a scalable machine learning pipeline using PySpark and AWS services for predictive analytics. Implemented automated data preprocessing, feature engineering, model training, and deployment with continuous monitoring and performance tracking. Achieved 94% accuracy with sub-100ms latency for real-time predictions.",
      technologies: ["PySpark", "AWS", "MLflow", "Docker", "Kubernetes", "Python", "Apache Airflow", "Redis"],
      metrics: [
        { label: "Data Processing", value: "1M+ records/day" },
        { label: "Model Accuracy", value: "94%" },
        { label: "Latency", value: "<100ms" },
        { label: "Uptime", value: "99.9%" }
      ],
      icon: TrendingUp,
      category: "MLOps",
      status: "In Progress",
      githubUrl: "#",
      demoUrl: "#",
      featured: true
    },
    {
      title: "Customer Churn Prediction Model",
      description: "Machine learning model to predict customer churn using advanced feature engineering and ensemble methods.",
      longDescription: "Developed a comprehensive customer churn prediction system using gradient boosting and neural networks. Implemented advanced feature engineering techniques including time-series features, customer behavior patterns, and interaction effects. Achieved 89% precision in identifying at-risk customers, enabling proactive retention strategies.",
      technologies: ["Python", "XGBoost", "TensorFlow", "Scikit-learn", "Pandas", "Feature Engineering"],
      metrics: [
        { label: "Precision", value: "89%" },
        { label: "Recall", value: "85%" },
        { label: "F1-Score", value: "87%" },
        { label: "Customers Analyzed", value: "100K+" }
      ],
      icon: Brain,
      category: "Machine Learning",
      status: "Completed",
      githubUrl: "#",
      demoUrl: "#",
      featured: false
    },
    {
      title: "Real-Time Data Processing System",
      description: "High-throughput data streaming system for real-time analytics and monitoring using Apache Kafka and Spark Streaming.",
      longDescription: "Architected and implemented a real-time data processing system capable of handling millions of events per day. Built using Apache Kafka for data streaming, Spark Streaming for real-time processing, and Elasticsearch for search and analytics. Enabled real-time dashboards and alerting systems for business-critical metrics.",
      technologies: ["Apache Kafka", "Spark Streaming", "Elasticsearch", "Python", "Scala", "Redis", "Docker"],
      metrics: [
        { label: "Events/Day", value: "5M+" },
        { label: "Processing Latency", value: "<50ms" },
        { label: "Throughput", value: "10K msgs/sec" },
        { label: "Availability", value: "99.95%" }
      ],
      icon: Zap,
      category: "Data Engineering",
      status: "Completed",
      githubUrl: "#",
      demoUrl: "#",
      featured: false
    },
    {
      title: "Database Optimization Project",
      description: "Performance optimization of large-scale database systems improving query response times by 60%.",
      longDescription: "Led comprehensive database optimization initiative involving query optimization, index tuning, and schema redesign. Implemented partitioning strategies, optimized ETL processes, and established monitoring systems. Reduced average query response time from 2.5s to 1.0s, significantly improving user experience and system efficiency.",
      technologies: ["PostgreSQL", "SQL", "Python", "Apache Airflow", "Monitoring", "Performance Tuning"],
      metrics: [
        { label: "Query Speed Improvement", value: "60%" },
        { label: "Database Size", value: "500GB+" },
        { label: "Daily Queries", value: "1M+" },
        { label: "Storage Optimization", value: "30%" }
      ],
      icon: Database,
      category: "Data Engineering",
      status: "Completed",
      githubUrl: "#",
      demoUrl: "#",
      featured: false
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
      case "Data Engineering":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
      default:
        return "bg-gradient-primary";
    }
  };

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-12">
              <Button variant="outline" size="sm" asChild>
                <Link to="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>

            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6 text-black">All Projects</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                A comprehensive showcase of my data science, machine learning, and engineering projects that demonstrate my expertise in solving complex business problems through data-driven solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="text-sm">6 Projects Completed</Badge>
                <Badge variant="outline" className="text-sm">Multiple Technologies</Badge>
                <Badge variant="outline" className="text-sm">Business Impact Focused</Badge>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-black">Featured Projects</h2>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => {
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
                          <div className="grid grid-cols-2 gap-2">
                            {project.metrics.map((metric, metricIndex) => (
                              <div key={metricIndex} className="flex flex-col items-center p-2 bg-muted/20 rounded">
                                <span className="text-sm font-semibold text-primary">{metric.value}</span>
                                <span className="text-xs text-muted-foreground text-center">{metric.label}</span>
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
                          <Button size="sm" variant="outline" className="flex-1 text-xs" asChild>
                            <a href={project.githubUrl}>
                              <Github className="mr-1 h-3 w-3" />
                              Code
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1 text-xs" asChild>
                            <a href={project.demoUrl}>
                              <ExternalLink className="mr-1 h-3 w-3" />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Other Projects */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-black">Other Projects</h2>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {otherProjects.map((project, index) => {
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
                          <div className="grid grid-cols-2 gap-2">
                            {project.metrics.map((metric, metricIndex) => (
                              <div key={metricIndex} className="flex flex-col items-center p-2 bg-muted/20 rounded">
                                <span className="text-sm font-semibold text-primary">{metric.value}</span>
                                <span className="text-xs text-muted-foreground text-center">{metric.label}</span>
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
                          <Button size="sm" variant="outline" className="flex-1 text-xs" asChild>
                            <a href={project.githubUrl}>
                              <Github className="mr-1 h-3 w-3" />
                              Code
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1 text-xs" asChild>
                            <a href={project.demoUrl}>
                              <ExternalLink className="mr-1 h-3 w-3" />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;
