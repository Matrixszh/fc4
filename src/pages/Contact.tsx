import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  Linkedin, 
  FileCode2, 
  Instagram 
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
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
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to start your project? Have questions about our services? Let's talk!
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-red-yellow-gradient crossfire-header crossfire-border pb-3">Contact Information</h2>
              
              <div className="space-y-8">
                {/* Location */}
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="h-12 w-12 rounded-2xl red-yellow-gradient text-white flex items-center justify-center shrink-0 glow-gradient">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                    <p className="text-gray-600">
                      8-1-400/48<br />
                      Deluxe Colony, Tolichowki, Hyderabad
                    </p>
                  </div>
                </motion.div>
                
                {/* Email */}
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="h-12 w-12 rounded-2xl red-yellow-gradient text-white flex items-center justify-center shrink-0 glow-gradient">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <a href="mailto:hello@crossfire.com" className="text-gray-600 hover:text-primary-600">
                      cfchyd@gamil.com
                    </a>
                  </div>
                </motion.div>
                
                {/* Phone */}
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="h-12 w-12 rounded-2xl red-yellow-gradient text-white flex items-center justify-center shrink-0 glow-gradient">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <a href="tel:+15551234567" className="text-gray-600 hover:text-primary-600">
                      9246199077
                    </a>
                  </div>
                </motion.div>
              </div>
              
              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors glow-card"
                    whileHover={{ scale: 1.2, backgroundColor: "#FF3B3F", color: "#fff" }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noreferrer"
                    className="h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors glow-card"
                    whileHover={{ scale: 1.2, backgroundColor: "#FF3B3F", color: "#fff" }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <FileCode2 className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors glow-card"
                    whileHover={{ scale: 1.2, backgroundColor: "#FF3B3F", color: "#fff" }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Instagram className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 glow-card relative overflow-hidden">
                {/* Background gradient decoration */}
                <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary-600/10 blur-xl"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-secondary-400/10 blur-xl"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-8 text-red-yellow-gradient crossfire-header">Send a Message</h2>
                  
                  <form onSubmit={handleSubmit}>
                    {/* Success Message */}
                    {isSubmitted && (
                      <motion.div 
                        className="mb-6 p-4 rounded-lg bg-green-50 text-green-700 border border-green-200"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        Thank you for your message! We'll get back to you soon.
                      </motion.div>
                    )}
                    
                    <div className="space-y-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="rounded-xl"
                        />
                      </div>
                      
                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                          Your Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="rounded-xl"
                        />
                      </div>
                      
                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Project Inquiry"
                          required
                          className="rounded-xl"
                        />
                      </div>
                      
                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Your message here..."
                          rows={6}
                          required
                          className="rounded-xl"
                        />
                      </div>
                      
                      {/* Submit Button */}
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full rounded-xl gap-2 red-yellow-gradient border-0 glow-gradient"
                        >
                          {isSubmitting ? (
                            <>Sending...</>
                          ) : (
                            <>
                              Send Message <Send className="h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}