'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, User, FolderOpen, Mail } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Portfolio Explorer', href: '#interactive-portfolio', icon: FolderOpen },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.getElementById(href.substring(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gradient-to-b from-[#0c0c0c]/90 to-transparent backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#26A69A] tracking-wide hover:opacity-80 transition">
          Ayesha Taranum
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          {navItems.slice(1).map((item) => ( // Skip Home for desktop nav
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="relative px-4 py-2 text-sm font-medium text-white transition group"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#26A69A] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Modern Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <motion.button
                className="relative p-2 rounded-lg bg-gradient-to-br from-background/10 to-muted/5 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {!isMobileMenuOpen ? (
                      <motion.div
                        key="menu"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-5 w-5 text-white" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="close"
                        initial={{ opacity: 0, rotate: 90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: -90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-5 w-5 text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-80 bg-gradient-to-br from-background via-background/95 to-muted/10 backdrop-blur-xl border-l border-border/30 p-0"
            >
              {/* Accessible Title for Screen Readers */}
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              
              {/* Header Section */}
              <div className="p-6 border-b border-border/20 bg-gradient-to-r from-muted/10 to-background/30">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">AT</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Ayesha Taranum</h3>
                  </div>
                </div>
              </div>

              {/* Navigation Items */}
              <nav className="p-6">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <SheetClose key={item.name} asChild>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 border border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                        >
                          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 group-hover:border-primary/40 group-hover:shadow-md transition-all duration-300">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                              {item.name}
                            </span>
                            <p className="text-sm text-muted-foreground mt-0.5">
                              {item.name === 'Home' && 'Welcome & Introduction'}
                              {item.name === 'About' && 'Background & Experience'}
                              {item.name === 'Portfolio Explorer' && 'Projects & Skills'}
                              {item.name === 'Contact' && 'Get in Touch'}
                            </p>
                          </div>
                          <motion.div
                            className="w-2 h-2 rounded-full bg-primary/0 group-hover:bg-primary/60 transition-all duration-300"
                            whileHover={{ scale: 1.5 }}
                          />
                        </Link>
                      </motion.div>
                    </SheetClose>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
