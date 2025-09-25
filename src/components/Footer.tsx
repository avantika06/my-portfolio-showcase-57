import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Heart, 
  ArrowUp,
  Award
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const contactInfo = [
    { 
      icon: Mail, 
      text: "deshmukhavantika06@gmail.com",
      href: "mailto:deshmukhavantika06@gmail.com"
    },
    { 
      icon: Phone, 
      text: "607-296-8298",
      href: "tel:+16072968298"
    },
    { 
      icon: MapPin, 
      text: "New York, NY",
      href: "#"
    }
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: "#",
      label: "LinkedIn"
    },
    { 
      icon: Github, 
      href: "#",
      label: "GitHub"
    },
    { 
      icon: Mail, 
      href: "mailto:deshmukhavantika06@gmail.com",
      label: "Email"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-2xl font-bold gradient-text">Avantika Deshmukh</h3>
                <Badge className="bg-gradient-primary">
                  <Award className="h-3 w-3 mr-1" />
                  AWS Certified
                </Badge>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Data Scientist & ML Engineer passionate about transforming complex datasets 
                into actionable insights. Specializing in predictive analytics, machine learning, 
                and statistical modeling to drive business value.
              </p>
              
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-green-600 border-green-200">
                  🟢 Available for opportunities
                </Badge>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                      asChild
                    >
                      <a href={social.href} aria-label={social.label}>
                        <IconComponent className="h-4 w-4" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <li key={index}>
                      <a 
                        href={contact.href}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                      >
                        <IconComponent className="h-4 w-4 shrink-0" />
                        <span>{contact.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        
        <Separator />
        
        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Avantika Deshmukh. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for data science</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <ArrowUp className="h-4 w-4 mr-1" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;