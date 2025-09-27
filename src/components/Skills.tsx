import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Database, 
  BarChart3, 
  Cloud, 
  Brain, 
  Wrench 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Frameworks",
      icon: Code2,
      color: "primary",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "TensorFlow", level: 80 },
        { name: "Scikit-Learn", level: 90 },
        { name: "Pandas & NumPy", level: 95 }
      ]
    },
    {
      title: "Data Science & Analytics",
      icon: Brain,
      color: "secondary",
      skills: [
        { name: "Machine Learning", level: 90 },
        { name: "Statistical Analysis", level: 85 },
        { name: "Predictive Modeling", level: 88 },
        { name: "Time Series Forecasting", level: 82 },
        { name: "A/B Testing", level: 85 },
        { name: "Feature Engineering", level: 87 }
      ]
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      color: "accent",
      skills: [
        { name: "Tableau", level: 85 },
        { name: "Plotly Dash", level: 90 },
        { name: "Power BI", level: 80 },
        { name: "Streamlit", level: 88 },
        { name: "Matplotlib & Seaborn", level: 90 }
      ]
    },
    {
      title: "Cloud & Big Data",
      icon: Cloud,
      color: "primary",
      skills: [
        { name: "AWS (Glue, S3, SageMaker)", level: 85 },
        { name: "GCP (BigQuery, Vertex AI)", level: 80 },
        { name: "PySpark", level: 82 },
        { name: "Snowflake", level: 75 },
        { name: "Docker", level: 78 }
      ]
    },
    {
      title: "Data Engineering",
      icon: Database,
      color: "secondary",
      skills: [
        { name: "ETL Pipelines", level: 88 },
        { name: "Data Wrangling", level: 92 },
        { name: "Big Data Analysis", level: 85 },
        { name: "MLflow", level: 80 },
        { name: "CI/CD", level: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "accent",
      skills: [
        { name: "Git", level: 85 },
        { name: "Jupyter", level: 90 },
        { name: "Excel (Advanced)", level: 88 },
        { name: "Linux/Unix", level: 80 },
        { name: "APIs & REST", level: 82 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          progress: "bg-gradient-primary"
        };
      case "secondary":
        return {
          bg: "bg-secondary/10",
          text: "text-secondary",
          progress: "bg-gradient-secondary"
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          text: "text-accent",
          progress: "bg-gradient-accent"
        };
      default:
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          progress: "bg-gradient-primary"
        };
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">Technical Skills</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise across the data science and machine learning stack
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const colors = getColorClasses(category.color);
              const IconComponent = category.icon;
              
              return (
                <Card key={index} className="glass hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${colors.bg}`}>
                        <IconComponent className={`h-6 w-6 ${colors.text}`} />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="relative">
                          <Progress 
                            value={skill.level} 
                            className="h-2"
                          />
                          <div 
                            className={`absolute top-0 left-0 h-2 rounded-full ${colors.progress} transition-all duration-500`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Certifications */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8">Certifications</h3>
            <div className="flex justify-center">
              <Card className="glass max-w-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Cloud className="h-8 w-8 text-accent" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg">AWS Certified</h4>
                      <p className="text-muted-foreground">Machine Learning Engineer – Associate</p>
                      <Badge className="mt-2">Verified</Badge>
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

export default Skills;