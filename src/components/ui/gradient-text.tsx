import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export function GradientText({ children, className, animate = false }: GradientTextProps) {
  return (
    <motion.span
      className={cn(
        "text-red-yellow-gradient font-bold",
        animate && "bg-gradient-animation",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.span>
  );
}

interface FloatingBubblesProps {
  count?: number;
  className?: string;
}

export function FloatingBubbles({ count = 8, className }: FloatingBubblesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    const bubbles = container.querySelectorAll('.bubble');
    bubbles.forEach((bubble, index) => {
      const size = Math.random() * 80 + 40; // 40px to 120px
      const left = Math.random() * containerWidth;
      const delay = Math.random() * 5;
      
      (bubble as HTMLElement).style.width = `${size}px`;
      (bubble as HTMLElement).style.height = `${size}px`;
      (bubble as HTMLElement).style.left = `${left}px`;
      (bubble as HTMLElement).style.animationDelay = `${delay}s`;
    });
  }, [count]);
  
  return (
    <div ref={containerRef} className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <div 
          key={i} 
          className={`bubble absolute bottom-0 rounded-full opacity-10 
            ${i % 2 === 0 ? 'bg-primary-600' : 'bg-secondary-400'} 
            animate-float-${i % 3}`}
        />
      ))}
    </div>
  );
}