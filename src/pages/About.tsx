import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/gradient-text";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  // Refs for animations
  const experienceRef = useRef<HTMLDivElement>(null);
  
  // Team/individual values
const values = [
  {
    title: "Fire Prevention",
    description: "Designing comprehensive fire prevention systems and conducting hazard assessments"
  },
  {
    title: "Quality",
    description: "Delivering excellence in every project with strict adherence to safety standards"
  },
  {
    title: "Customer Safety",
    description: "Ensuring our clients achieve the highest levels of fire safety and protection"
  },
  {
    title: "Reliability",
    description: "Building solutions that protect lives and property in emergency situations"
  }
];


  // Experience timeline
  const experiences = [
    {
      year: "2020-Present",
      position: "Freelance Designer & Developer",
      company: "Self-employed",
      description: "Working with various clients across industries to create digital products."
    },
    {
      year: "2017-2020",
      position: "Senior UI/UX Designer",
      company: "Design Agency",
      description: "Led design teams on projects for major brands and startups."
    },
    {
      year: "2015-2017",
      position: "Web Developer",
      company: "Tech Solutions Inc.",
      description: "Developed responsive websites and web applications for clients."
    }
  ];
  
  // GSAP animations
  useEffect(() => {
    // Experience timeline animation
    if (experienceRef.current) {
      const experienceItems = experienceRef.current.querySelectorAll('.experience-item');
      
      experienceItems.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100",
              toggleActions: "play none none none"
            }
          }
        );
      });
    }
  }, []);

  return (
    <>
      {/* Hero Section with Background Pattern */}
      <section className="py-16 md:py-24 bg-light-gray bg-dots relative overflow-hidden">
        {/* Background animated elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-400 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            {/* Image */}
            <motion.div 
              className="w-full md:w-1/2 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg glow-gradient">
                <img 
                  src="/images/testingapp.png" 
                  alt="About Us" 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-lg max-w-xs glow-red"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-5xl font-bold text-red-yellow-gradient">20+</p>
                <p className="text-gray-600">Years of Experience</p>
              </motion.div>
            </motion.div>
            
            {/* Content */}
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-yellow-gradient text-glow crossfire-header">About CrossFire</h1>
              <p className="text-gray-600 mb-6">
               Established in 2000, CROSSFIRE is a multidisciplinary fire safety consultancy and service provider based in Hyderabad. Our team of experienced professionals combines technical expertise with practical knowledge to deliver reliable fire protection systems that adhere to the highest safety standards.
              </p>
              <p className="text-gray-600 mb-8">
                We follow Indian and international fire safety codes such as BIS Standards, NBC of India, and Local Fire Department Regulations to ensure comprehensive protection for all types of buildings and facilities.
              </p>
              
              <Link to="/contact">
                <Button className="rounded-full px-8 red-yellow-gradient border-0 glow-gradient">Get in Touch</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Mission */}
            <motion.div 
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 glow-card relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Background gradient decoration */}
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary-600/10 blur-xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 crossfire-border pb-3">Mission</h2>
                <p className="text-gray-600 mb-6">
                  Our mission is to provide multidisciplinary fire safety solutions through technical expertise, practical implementation, and adherence to national and international standards. We are committed to excellence, integrity, and building long-term trust by delivering every project with quality, compliance, and zero conflict.
                </p>
              </div>
            </motion.div>
            
            {/* Vision */}
            <motion.div 
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 glow-card relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Background gradient decoration */}
              <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-secondary-400/10 blur-xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 crossfire-border pb-3">Vision</h2>
                <p className="text-gray-600 mb-6">
                  To be the most trusted and respected fire safety partner in India, delivering innovative, compliant, and reliable protection systems that safeguard lives and property across all sectors.
                </p>

              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 md:py-24 bg-light-gray bg-pattern relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 red-yellow-gradient rounded-full opacity-10 blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 red-yellow-gradient rounded-full opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-red-yellow-gradient text-glow crossfire-header">Core Values</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
              Our fundamental beliefs that guide our actions, unite our teams, and define our brand.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover-scale glow-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full red-yellow-gradient flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-red-yellow-gradient text-glow crossfire-header">Experience</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
              A journey of growth, innovation, and impactful digital solutions.
            </p>
          </motion.div>
          
          <div ref={experienceRef} className="space-y-12 relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-secondary-400 transform -translate-x-1/2"></div>
            
            {experiences.map((experience, index) => (
              <div key={index} className="experience-item flex flex-col md:flex-row gap-8 relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/4 top-0 w-4 h-4 rounded-full red-yellow-gradient transform -translate-x-1/2"></div>
                
                <div className="md:w-1/4">
                  <div className="text-xl font-semibold text-red-yellow-gradient">{experience.year}</div>
                </div>
                <div className="md:w-3/4 pl-0 md:pl-8 border-l-0 md:border-l-2 md:border-gray-200">
                  <h3 className="text-2xl font-semibold mb-2 highlight-text">{experience.position}</h3>
                  <h4 className="text-xl text-gray-600 mb-4">{experience.company}</h4>
                  <p className="text-gray-600">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <Button className="rounded-full px-8 gap-2 red-yellow-gradient border-0 glow-gradient">
                Work with me <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}