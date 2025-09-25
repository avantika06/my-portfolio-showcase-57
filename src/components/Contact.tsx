import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  Send, 
  Calendar,
  Download,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "deshmukhavantika06@gmail.com",
      href: "mailto:deshmukhavantika06@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "607-296-8298",
      href: "tel:+16072968298",
      color: "secondary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New York, NY",
      href: "#",
      color: "accent"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      icon: Github,
      label: "GitHub", 
      href: "#",
      color: "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      label: "Schedule Call",
      description: "Book a 30-minute consultation",
      action: "Schedule"
    },
    {
      icon: Download,
      label: "Download Resume",
      description: "Get my latest resume (PDF)",
      action: "Download"
    },
    {
      icon: MessageCircle,
      label: "Quick Message",
      description: "Send me a direct message",
      action: "Message"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Let's Connect</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss data science opportunities and how I can contribute to your team
            </p>
            <Badge className="mt-4 bg-gradient-primary">
              🎯 Available for new opportunities
            </Badge>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/20 transition-colors group"
                      >
                        <div className={`p-2 rounded-lg bg-${contact.color}/10 group-hover:bg-${contact.color}/20 transition-colors`}>
                          <IconComponent className={`h-5 w-5 text-${contact.color}`} />
                        </div>
                        <div>
                          <p className="font-medium">{contact.label}</p>
                          <p className="text-sm text-muted-foreground">{contact.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </CardContent>
              </Card>
              
              {/* Social Links */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Professional Profiles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          size="lg"
                          className="flex-1"
                          asChild
                        >
                          <a href={social.href} className="flex items-center gap-2">
                            <IconComponent className="h-5 w-5" />
                            {social.label}
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Actions */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {quickActions.map((action, index) => {
                    const IconComponent = action.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/20 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-muted/20 group-hover:bg-primary/10 transition-colors">
                            <IconComponent className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-sm">{action.label}</p>
                            <p className="text-xs text-muted-foreground">{action.description}</p>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost">
                          {action.action}
                        </Button>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  Send Message
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Have a question or want to discuss a project? I'd love to hear from you!
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john.doe@company.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company (Optional)</label>
                  <Input placeholder="Your Company" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Data Science Opportunity" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or opportunity..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button size="lg" className="w-full bg-gradient-primary">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  I typically respond within 24 hours. Looking forward to connecting!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;