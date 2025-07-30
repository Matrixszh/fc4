import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code, Paintbrush, Layout, Globe, Layers, Camera, Smartphone, ArrowRight, AreaChart, Sparkles, FlameKindling, Shield, AlarmSmoke, ShieldCheck, FireExtinguisher } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  // Refs for animations
  const servicesRef = useRef<HTMLDivElement>(null);
  
  // GSAP animations
  useEffect(() => {
    // Services animation
    if (servicesRef.current) {
      const serviceItems = servicesRef.current.querySelectorAll('.service-item');
      serviceItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100",
              toggleActions: "play none none none"
            },
            delay: index * 0.1
          }
        );
      });
    }
  }, []);
  
  // Main services
  const mainServices = [
  {
    title: "Consulting Services",
    icon: <Shield className="h-8 w-8 text-white" />,
    description: "Expert fire safety consulting for all types of buildings and facilities",
    features: [
      "Fire Prevention Designs",
      "Fire Hazard Assessment Reports",
      "Planning, Estimating, Commissioning",
      "Fire Escape Plans",
      "Evacuation Drills"
    ]
  },
  {
    title: "Fire Hydrant Systems",
    icon: <FlameKindling className="h-8 w-8 text-white" />,
    description: "Complete installation and maintenance of fire hydrant systems",
    features: [
      "Hydrant Valves",
      "Hose Boxes",
      "Hose Pipes",
      "Branch Pipes",
      "Regular Maintenance"
    ]
  },
  {
    title: "Automatic Sprinkler Systems",
    icon: <Sparkles className="h-8 w-8 text-white" />,
    description: "Effective sprinkler systems for automatic fire suppression",
    features: [
      "Design & Installation",
      "Various Types of Sprinklers",
      "Control Valve Assemblies",
      "Maintenance & Testing",
      "Code Compliance"
    ]
  },
  {
    title: "Fire Detection Systems",
    icon: <AreaChart className="h-8 w-8 text-white" />,
    description: "Advanced fire detection systems for early warning",
    features: [
      "Smoke & Heat Detectors",
      "Manual Call Points",
      "Hooters & Alarm Panels",
      "Addressable Fire Alarm Panels",
      "System Integration"
    ]
  }
];

  // Additional services
const additionalServices = [
  {
    title: "Fire Fighting Equipment",
    icon: <FireExtinguisher className="h-6 w-6 text-white" />,
    description: "Hydrant valves, hose reels, and fire pumps for active fire suppression."
  },
  {
    title: "Detection Systems",
    icon: <AlarmSmoke className="h-6 w-6 text-white" />,
    description: "Advanced smoke detectors, hooters, and alarm panels for early warning."
  },
  {
    title: "Safety Equipment",
    icon: <ShieldCheck className="h-6 w-6 text-white" />,
    description: "Extinguishers, signage, doors, and escape plans for emergency readiness."
  }
];
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-light-gray bg-dots relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-400 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-red-yellow-gradient text-glow crossfire-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Services
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our comprehensive range of fire safety services, including system design, installation, inspection, and compliance—ensuring complete protection for every type of property.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contact">
              <Button className="rounded-full px-8 red-yellow-gradient border-0 glow-gradient">Get Started</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 md:py-24" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {mainServices.map((service, index) => (
              <div 
                key={index} 
                className={`service-item flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}
              >
                {/* Service Image */}
                <div className="w-full md:w-1/2">
                  <div className={`aspect-square rounded-3xl overflow-hidden bg-light-gray flex items-center justify-center relative ${index % 2 === 0 ? 'bg-primary-600/10' : 'bg-secondary-400/10'}`}>
                    {/* Background decorations */}
                    <div className="absolute w-40 h-40 red-yellow-gradient rounded-full opacity-20 blur-xl transform translate-x-1/4 -translate-y-1/4"></div>
                    <div className="absolute w-32 h-32 red-yellow-gradient rounded-full opacity-20 blur-xl bottom-0 right-0 transform -translate-x-1/4 translate-y-1/4"></div>
                    
                    <motion.div 
                      className={`h-24 w-24 rounded-2xl red-yellow-gradient text-white flex items-center justify-center z-10 glow-gradient`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 text-red-yellow-gradient crossfire-border pb-3">{service.title}</h2>
                  <p className="text-gray-600 mb-8">{service.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full red-yellow-gradient glow-red" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/contact">
                    <Button variant="outline" className="rounded-full px-8 gap-2 border-2 border-primary-600">
                      Inquire Now <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 md:py-24 bg-light-gray bg-pattern relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 red-yellow-gradient rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 red-yellow-gradient rounded-full opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-red-yellow-gradient text-glow crossfire-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Products
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover our high-quality fire safety products, from alarms and extinguishers to advanced detection systems—engineered to meet the highest standards of safety and performance.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover-scale glow-card relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Background gradient decoration */}
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary-600/10 blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-2xl red-yellow-gradient text-white flex items-center justify-center mb-6 glow-gradient">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link to="/contact" className="text-primary-600 font-medium flex items-center gap-2 group">
                    Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-light-gray p-12 md:p-16 rounded-3xl relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 red-yellow-gradient rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 red-yellow-gradient rounded-full opacity-10 blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-yellow-gradient text-glow crossfire-header">Ready to start your project?</h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-10">
                  Let's work together to create something amazing. Reach out today to discuss your ideas and how we can bring them to life.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="rounded-full px-10 red-yellow-gradient border-0 glow-gradient">Contact Now</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}