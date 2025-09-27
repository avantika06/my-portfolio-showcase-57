import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-border/50" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="text-2xl font-bold text-black cursor-pointer"
            >
              Avantika D.
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className={`relative transition-all duration-200 ${
                  activeSection === item.href.substring(1) 
                    ? "text-primary font-medium" 
                    : "text-foreground/70 hover:text-foreground"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </Button>
            ))}
          </div>
          
          {/* CTA Button - Desktop */}
          <div className="hidden md:flex">
            <Button 
              className="bg-gradient-primary hover:shadow-primary transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
            >
              Let's Connect
            </Button>
          </div>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b">
                  <span className="text-lg font-semibold gradient-text">Navigation</span>
                </div>
                
                {/* Navigation Items */}
                <div className="flex-1 py-6">
                  <div className="space-y-2">
                    {navItems.map((item) => (
                      <Button
                        key={item.label}
                        variant="ghost"
                        className={`w-full justify-start text-left transition-all duration-200 ${
                          activeSection === item.href.substring(1) 
                            ? "bg-primary/10 text-primary font-medium" 
                            : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.href);
                        }}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {/* Footer */}
                <div className="border-t pt-6">
                  <Button 
                    className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("#contact");
                    }}
                  >
                    Let's Connect
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;