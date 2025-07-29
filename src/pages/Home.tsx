import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, Code, Paintbrush, Layout, Globe,  School,
  Hospital,
  Utensils,
  Home as HomeIcon,
  Building2,
  Zap,
  Factory, Flame } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GradientText } from "@/components/ui/gradient-text";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  // Scroll animation hook
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  // Example brands/clients
  const brands = [
    { name: "Google", logo: "G" },
    { name: "Microsoft", logo: "M" },
    { name: "Amazon", logo: "A" },
    { name: "Adobe", logo: "Ad" },
    { name: "Dribbble", logo: "Db" }
  ];

  // Services
  const services = [
  {
    title: "Educational Buildings",
    icon: <School className="h-6 w-6" />,
    description: "Fire alarms, evacuation plans, and drills for schools and colleges."
  },
  {
    title: "Hospitals",
    icon: <Hospital className="h-6 w-6" />,
    description: "Smoke detection and fire systems designed for healthcare safety."
  },
  {
    title: "Hotels/Restaurants",
    icon: <Utensils className="h-6 w-6" />,
    description: "Sprinklers and alarms for guest and kitchen fire safety."
  },
  {
    title: "Residential Buildings",
    icon: <HomeIcon className="h-6 w-6" />,
    description: "Home fire protection with hydrants, alarms, and extinguishers."
  },
  {
    title: "Commercial Buildings",
    icon: <Building2 className="h-6 w-6" />,
    description: "Integrated safety systems for offices and malls."
  },
  {
    title: "Power Plants",
    icon: <Zap className="h-6 w-6" />,
    description: "High-grade systems for fire control in critical areas."
  },
  {
    title: "Factories",
    icon: <Factory className="h-6 w-6" />,
    description: "Industrial fire protection with detectors and extinguishers."
  }
];

  // Stats
  const stats = [
    { number: "100+", label: "Projects" },
    { number: "32", label: "Partners" },
    { number: "3", label: "Offices" }
  ];
  
  // GSAP animations
  useEffect(() => {
    // Hero section animations
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2 }
    );
    
    gsap.fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.4 }
    );
    
    gsap.fromTo(
      ".hero-buttons",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.6 }
    );
    
    // Animate floating objects
    const floatingObjects = document.querySelectorAll('.floating-object');
    floatingObjects.forEach((obj, index) => {
      gsap.to(obj, {
        y: "random(-30, 30)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(5, 10)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.5
      });
    });
    
    // Services animation
    if (servicesRef.current) {
      const serviceItems = servicesRef.current.querySelectorAll('.service-item');
      serviceItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
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
    
    // Stats animation
    if (statsRef.current) {
      const statItems = statsRef.current.querySelectorAll('.stat-item');
      gsap.fromTo(
        statItems,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top bottom-=150",
          }
        }
      );
    }
  }, []);

  return (
    <>
      {/* Hero Section with Parallax */}
      <section 
        ref={heroRef} 
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dots"
      >
        {/* Parallax background elements */}
        <div ref={parallaxRef} className="absolute inset-0 -z-10">
          <motion.div
            className="floating-object w-64 h-64 rounded-full red-yellow-gradient opacity-20 blur-3xl"
            style={{ top: '10%', left: '10%', y }}
          />
          <motion.div
            className="floating-object w-80 h-80 rounded-full red-yellow-gradient opacity-20 blur-3xl"
            style={{ top: '60%', right: '5%', y }}
          />
          <div className="floating-object w-32 h-32 rounded-full bg-primary-600/30 blur-xl"
               style={{ top: '30%', right: '20%' }} />
          <div className="floating-object w-40 h-40 rounded-full bg-secondary-400/30 blur-xl"
               style={{ bottom: '15%', left: '15%' }} />
        </div>
      
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo Element */}
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <div className="h-20 w-20 rounded-full red-yellow-gradient flex items-center justify-center glow-gradient">
                <Flame className="h-10 w-10 text-white" />
              </div>
            </motion.div>
            
            {/* Main Title */}
            <h1 className="hero-title text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-red-yellow-gradient text-glow crossfire-header">
              CROSSFIRE
            </h1>
            <motion.h2 
              className="hero-subtitle text-3xl md:text-4xl text-red-yellow-gradient mb-4 crossfire-header"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Your Trusted
Fire Safety Partner
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Fire Protection Engineers & Consultants - Providing comprehensive fire safety solutions since 2000
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link to="/services">
                <Button variant="default" size="lg" className="rounded-full px-8 red-yellow-gradient border-0 glow-gradient gap-2">
                  Choose Services <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            
            {/* Scroll indicator */}
            <motion.div 
              className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center pt-2">
                <motion.div 
                  className="w-1 h-2 bg-gray-400 rounded-full"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Brief Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            {/* Content */}
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-yellow-gradient text-glow crossfire-header crossfire-border pb-3">ABOUT</h2>
              <p className="text-gray-600 mb-6">
               We are a multidisciplinary fire safety consultancy and service provider offering comprehensive solutions that help businesses and institutions maintain the highest levels of fire safety. Our team combines technical expertise with practical knowledge to deliver reliable fire protection systems.
              </p>
              <p className="text-gray-600 mb-8">
                With a perfect track record of completed projects and no confrontations or litigation to date, we have built a reputation for reliability, quality, and exceptional service in the fire safety industry.
              </p>
              <Link to="/about">
                <Button variant="outline" className="rounded-full border-2 border-primary-600 gap-2">
                  More <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            
            {/* Stats */}
            <div ref={statsRef} className="w-full md:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="stat-item text-center p-6"
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="absolute inset-0 red-yellow-gradient rounded-full opacity-10 blur-xl transform scale-150"></div>
                      <h3 className="text-5xl font-bold text-red-yellow-gradient mb-2 relative z-10 text-glow">{stat.number}</h3>
                      <p className="text-gray-600">{stat.label}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-light-gray bg-pattern relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-400 rounded-full opacity-10 blur-3xl"></div>
        
        <div ref={servicesRef} className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-6 text-red-yellow-gradient text-glow crossfire-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            TO WHOM DO WE CATER
          </motion.h2>
          <motion.p 
            className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore our range of fire safety solutions, from residential protection to industrial-grade systems, designed to safeguard lives and property while ensuring full compliance and peace of mind.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="service-item bg-white p-8 rounded-3xl hover-scale shadow-sm border border-gray-100 glow-card relative overflow-hidden"
                whileHover={{ 
                  boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
                  y: -5
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Background gradient decoration */}
                <div className={`absolute -top-24 ${index % 2 === 0 ? '-right-24' : '-left-24'} w-48 h-48 rounded-full ${index % 2 === 0 ? 'bg-primary-600/10' : 'bg-secondary-400/10'} blur-xl`}></div>
                
                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-2xl red-yellow-gradient text-white flex items-center justify-center mb-6 glow-gradient">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 crossfire-border pb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link to="/services" className="text-primary-600 font-medium flex items-center gap-2 group">
                    Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h3 
            className="text-center text-lg text-gray-500 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Trusted by leading brands
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-16 w-16 rounded-full bg-white shadow-sm flex items-center justify-center glow-card">
                  <span className="text-xl font-semibold text-gray-800">{brand.logo}</span>
                </div>
                <span className="ml-4 font-medium hidden md:block">{brand.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-24 bg-light-gray bg-dots relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/3 right-0 w-64 h-64 red-yellow-gradient rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 red-yellow-gradient rounded-full opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 crossfire-header">
              <span className="text-red-yellow-gradient text-glow">WANT TO</span>
              <br />KNOW<br />
              <span className="text-red-yellow-gradient text-glow">MORE ABOUT US</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-10">
             With over two decades of expertise, CROSSFIRE has earned a trusted name in fire safety. From technical consultancy to end-to-end protection systems, we ensure compliance with national and international standards—delivering safety without compromise.
            </p>
            <Link to="/about">
              <Button className="rounded-full px-8 gap-2 red-yellow-gradient border-0 glow-gradient">
                Learn More <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-yellow-gradient text-glow crossfire-header">Tell me about your next project</h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-10">
              Let's work together to create something amazing. Reach out to discuss your ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="rounded-full px-8 gap-2 red-yellow-gradient border-0 glow-gradient">
                <Mail className="h-4 w-4" /> Email Me
              </Button>
              <Button variant="outline" className="rounded-full px-8 gap-2 border-2 border-primary-600">
                <Phone className="h-4 w-4" /> WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}