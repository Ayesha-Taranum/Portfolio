'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: delay,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const cardHover = {
  boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
  transition: { duration: 0.3 }
};

const buttonHover = {
  y: -3,
  scale: 1.05,
  transition: { duration: 0.2 }
};


export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-20 sm:py-32 bg-background overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-primary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          Feel free to reach out!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info Card */}
          <motion.div
            custom={0} // delay 0
            variants={cardVariants}
            whileHover={cardHover}
          >
            <Card className="shadow-lg transition-shadow duration-300 text-left h-full border border-transparent">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:ayeshataranum24343@gmail.com" className="text-foreground hover:text-primary transition-colors break-all">
                    ayeshataranum24343@gmail.com
                  </a>

                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links Card */}
          <motion.div
            custom={0.2} // delay 0.2s
            variants={cardVariants}
            whileHover={cardHover}
          >
            <Card className="shadow-lg transition-shadow duration-300 text-left h-full border border-transparent">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Find Me Online</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                <motion.div whileHover={buttonHover}>
                  <Button variant="outline" asChild className="w-full sm:w-auto justify-start sm:justify-center hover:bg-[#24998d]">
                    <a href="https://github.com/Ayesha-Taranum" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={buttonHover}>
                  <Button variant="outline" asChild className="w-full sm:w-auto justify-start sm:justify-center hover:bg-[#24998d]">
                    <a href="https://linkedin.com/in/ayesha-taranum-0742091a7" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                    </a>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
