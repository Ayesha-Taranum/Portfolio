'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Animation Variants
const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay },
  }),
};

const bounce = {
    y: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeOut"
    }
};


export default function HeroSection() {
   const targetRef = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
     target: targetRef,
     offset: ["start start", "end start"],
   });

   // Parallax transformations for background shapes
   const yShape1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
   const yShape2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
   const yShape3 = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
   const scaleShape = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

   // Google Drive direct download link
   const resumeDownloadUrl = "https://drive.google.com/uc?export=download&id=1C0X3JsG7M256ypRlNKUBbBWL03D6A_U1";

  return (
    <section ref={targetRef} id="home" className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
       {/* Subtle Background Gradient */}
       <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-secondary/10 to-background"></div>

        {/* Animated Abstract Shapes with Parallax */}
       <motion.div
            style={{ y: yShape1, scale: scaleShape }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full filter blur-xl opacity-40 animate-blob animation-delay-2000 -z-10"
        />
       <motion.div
            style={{ y: yShape2 }}
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full filter blur-xl opacity-50 animate-blob animation-delay-4000 -z-10"
       />
       {/* Updated accent blob color (Indigo/Blue) */}
       <motion.div
            style={{ y: yShape3 }}
            className="absolute top-1/3 right-1/3 w-24 h-24 bg-accent/20 rounded-full filter blur-lg opacity-30 animate-blob -z-10"
       />


      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.h1
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          variants={fadeInDown}
        >
          <span className="block text-foreground">Hello, I'm</span>
          <span className="block text-primary">Ayesha Taranum</span>
        </motion.h1>
        <motion.p
          className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
          variants={fadeInUp}
          custom={0.2}
        >
          Master of Computer Applications Graduate | Java Developer | Web Developer | Creative Problem Solver
        </motion.p>
        <motion.div
          className="mt-5 sm:mt-8 sm:flex sm:flex-wrap sm:justify-center lg:justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4" // Added flex-wrap and items-center
          variants={fadeInUp}
          custom={0.4}
        >
          {/* Get in Touch Button uses the new gradient */}
          <Button size="lg" asChild className="bg-gradient-accent bg-[#24998d] text-accent-foreground hover:opacity-90 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <Link href="#contact">
              Get in Touch
            </Link>
          </Button>
          {/* Resume Download Button */}
          <Button variant="outline" size="lg" asChild className="shadow-sm hover:shadow-md transform hover:-translate-y-1 transition hover:bg-[#24998d]">
            <a href={resumeDownloadUrl} download="Ayesha_Taranum_Resume.pdf"> {/* Use the direct download link and suggest filename */}
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
           <div className="flex justify-center space-x-4 pt-2 sm:pt-0 w-full sm:w-auto"> {/* Adjust width for wrapping */}
             <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary transition transform hover:scale-110 hover:bg-[#24998d] hover:text-white">
               <a href="https://github.com/Ayesha-Taranum" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                 <Github />
               </a>
             </Button>
             <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary transition transform hover:scale-110 hover:bg-[#24998d] hover:text-white">
               <a href="https://linkedin.com/in/ayesha-taranum-0742091a7" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                 <Linkedin />
               </a>
             </Button>
             <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary transition transform hover:scale-110 hover:bg-[#24998d] hover:text-white">
               <a href="mailto:ayeshataranum24343@gmail.com" aria-label="Email">
                 <Mail />
               </a>
             </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Add Scroll Down Indicator */}
       <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: ["0%", "20%", "0%"] }}
            transition={bounce}
        >
            <ArrowDown className="w-6 h-6 text-primary" />
       </motion.div>

       {/* Keep blob animation CSS */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite ease-in-out alternate;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
}
