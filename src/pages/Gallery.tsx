import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  // Project categories
  const categories = ["All", "Web Design", "Mobile Apps", "Branding"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Sample projects
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: "A modern e-commerce platform with seamless shopping experience."
    },
    {
      id: 2,
      title: "Travel App",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1512075135822-67cdd9dd7314?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: "A mobile app for travelers to discover and book unique experiences."
    },
    {
      id: 3,
      title: "Coffee Brand Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
      description: "Brand identity design for a premium coffee company."
    },
    {
      id: 4,
      title: "Fitness Dashboard",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1593538312308-d4c29d8dc7f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: "A fitness tracking dashboard with data visualization."
    },
    {
      id: 5,
      title: "Restaurant App",
      category: "Mobile Apps",
      image: "/images/FoodDelivery.jpg",
      description: "A food delivery app with real-time order tracking."
    },
    {
      id: 6,
      title: "Photography Studio",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1554104707-a76b270e4bbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: "Brand identity for a professional photography studio."
    },
    {
      id: 7,
      title: "News Portal",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: "A modern news portal with personalized content."
    },
    {
      id: 8,
      title: "Smart Home App",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: "IoT app for controlling smart home devices."
    },
    {
      id: 9,
      title: "Bakery Rebrand",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      description: "Complete rebranding for an artisan bakery."
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);
  
  // Animation refs
  const galleryRef = useRef<HTMLDivElement>(null);
  
  // GSAP animations
  useEffect(() => {
    if (galleryRef.current) {
      const projectItems = galleryRef.current.querySelectorAll('.project-item');
      gsap.fromTo(
        projectItems,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top bottom-=100",
          }
        }
      );
    }
  }, [activeCategory]);
    
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
            Gallery
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Showcasing a collection of our latest works and projects.
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="All" className="w-full">
            <motion.div 
              className="flex justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <TabsList className="bg-light-gray">
                {categories.map((category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <TabsTrigger 
                      value={category}
                      onClick={() => setActiveCategory(category)}
                      className="px-6 py-2 data-[state=active]:bg-white data-[state=active]:text-primary-600"
                    >
                      {category}
                    </TabsTrigger>
                  </motion.div>
                ))}
              </TabsList>
            </motion.div>
            
            <TabsContent value={activeCategory} className="mt-0">
              <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <motion.div 
                    key={project.id} 
                    className="project-item group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100 hover-scale glow-card"
                    whileHover={{ y: -10 }}
                    layout
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      layout: { duration: 0.5 }
                    }}
                  >
                    {/* Project Image */}
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <a href="#" className="text-white font-medium flex items-center gap-2 group/link">
                          View Project <ExternalLink className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="text-xs font-medium bg-gradient-to-r from-primary-600/20 to-secondary-400/20 text-primary-600 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 highlight-text">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <a href="#" className="text-primary-600 font-medium flex items-center gap-2 group/link">
                        View Project <ExternalLink className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-light-gray bg-pattern relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 red-yellow-gradient rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 red-yellow-gradient rounded-full opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-yellow-gradient text-glow crossfire-header">Interested in working together?</h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-10">
              Let's discuss how we can help bring your vision to life with creative design and development solutions.
            </p>
            <Link to="/contact">
              <Button className="rounded-full px-8 gap-2 red-yellow-gradient border-0 glow-gradient">
                Contact Me <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}