import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp, Users, Zap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Julius Education",
      position: "Data and Machine Learning Engineer",
      location: "New York",
      period: "Jun 2024 – Dec 2024",
      type: "Current",
      achievements: [
        {
          text: "Improved predictive analytics efficiency by 25% by analyzing fragmented user interaction data and building scalable ML pipelines using PySpark and AWS Glue",
          impact: "25% efficiency gain",
          icon: TrendingUp
        },
        {
          text: "Enhanced career recommendation relevance and reduced errors by 20% by fine-tuning NLP models (BERT, Gemini Pro) with prompt engineering",
          impact: "20% error reduction",
          icon: Zap
        },
        {
          text: "Enabled real-time monitoring and optimized content strategy adoption by 25% by developing interactive dashboards using Plotly Dash and Streamlit",
          impact: "25% strategy adoption",
          icon: TrendingUp
        },
        {
          text: "Boosted user comprehension and engagement by 15% by designing and executing A/B tests on content prompts",
          impact: "15% engagement boost",
          icon: Users
        },
        {
          text: "Reduced model training time by 30% and sped up experimentation cycles by streamlining workflows",
          impact: "30% time reduction",
          icon: Zap
        }
      ],
      skills: ["Python", "PySpark", "AWS", "NLP", "BERT", "Plotly Dash", "Streamlit", "A/B Testing", "Vertex AI"]
    },
    {
      company: "Global Trade Corporation",
      position: "Data Analyst",
      location: "Mumbai",
      period: "Jan 2021 – May 2023",
      type: "Previous",
      achievements: [
        {
          text: "Reduced operational inefficiencies in procurement by analyzing 50K+ logistics and sales records with SQL and Python",
          impact: "15% process efficiency",
          icon: TrendingUp
        },
        {
          text: "Minimized manual reporting delays by building automated Excel and Tableau dashboards tracking KPIs",
          impact: "20% reporting time cut",
          icon: Zap
        },
        {
          text: "Ensured reliable data for analytics by cleaning, validating, and transforming large datasets with Pandas and NumPy",
          impact: "Enhanced data quality",
          icon: TrendingUp
        },
        {
          text: "Improved supply chain responsiveness during disruptions by identifying bottlenecks from unstructured data",
          impact: "15% responsiveness increase",
          icon: Users
        }
      ],
      skills: ["SQL", "Python", "Tableau", "Excel", "Pandas", "NumPy", "AWS S3", "ETL", "Data Analysis"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">Work Experience</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Driving data-driven decisions and building impactful ML solutions across industries
            </p>
          </div>
          
          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="glass hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl">{exp.position}</CardTitle>
                        <Badge 
                          variant={exp.type === "Current" ? "default" : "secondary"}
                          className={exp.type === "Current" ? "bg-gradient-primary" : ""}
                        >
                          {exp.type}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-2">{exp.company}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Achievements */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Key Achievements</h4>
                    {exp.achievements.map((achievement, achievementIndex) => {
                      const IconComponent = achievement.icon;
                      return (
                        <div key={achievementIndex} className="flex gap-3 p-4 rounded-lg bg-muted/30">
                          <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                            <IconComponent className="h-4 w-4 text-primary" />
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm leading-relaxed">{achievement.text}</p>
                            <Badge variant="outline" className="text-xs font-medium">
                              {achievement.impact}
                            </Badge>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;