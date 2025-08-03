'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
};

const cardHover = {
  scale: 1.02,
  boxShadow: "0px 8px 25px hsl(var(--foreground) / 0.1)",
  transition: { duration: 0.3 }
};

export default function AboutSection() {
  const profileImageUrl = "https://drive.google.com/uc?export=view&id=1z36qBjTbAVL-YIu4UFDJqrlCb86vjeLh";
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 200, damping: 25, mass: 0.5 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 200, damping: 25, mass: 0.5 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (imageContainerRef.current) {
      const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
      mouseX.set(event.clientX - left - width / 2);
      mouseY.set(event.clientY - top - height / 2);
    }
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-32 bg-black overflow-hidden" // Changed bg-secondary/10 to bg-black
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-12 text-primary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          <motion.div
            className="lg:w-1/3 flex justify-center"
            variants={fadeInLeft}
            style={{ y: imageY }}
          >
            <motion.div
              ref={imageContainerRef}
              className="relative rounded-lg overflow-hidden shadow-xl group cursor-pointer"
              style={{ width: 300, height: 400 }} // Changed height from 300 to 400 to prevent cropping
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Image
                src={profileImageUrl}
                alt="Ayesha Taranum - Pixelated Background"
                width={300}
                height={400} // Changed height from 300 to 400
                className="object-cover aspect-[3/4] absolute inset-0 filter blur-md transition-all duration-500 ease-out" // Changed aspect-square to aspect-[3/4]
                priority
              />

              <motion.div
                className="absolute inset-0"
                style={{
                  maskImage: `radial-gradient(circle at calc(50% + ${smoothMouseX.get()}px) calc(50% + ${smoothMouseY.get()}px), black 0%, black 48%, transparent 52%)`,
                  WebkitMaskImage: `radial-gradient(circle at calc(50% + ${smoothMouseX.get()}px) calc(50% + ${smoothMouseY.get()}px), black 0%, black 48%, transparent 52%)`,
                  maskSize: isHovering ? '400%' : '0%',
                  WebkitMaskSize: isHovering ? '400%' : '0%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: `calc(50% + ${smoothMouseX.get()}px) calc(50% + ${smoothMouseY.get()}px)`,
                  WebkitMaskPosition: `calc(50% + ${smoothMouseX.get()}px) calc(50% + ${smoothMouseY.get()}px)`,
                  transition: 'mask-size 1.2s cubic-bezier(0.25, 1, 0.5, 1), -webkit-mask-size 1.2s cubic-bezier(0.25, 1, 0.5, 1)',
                }}
              >
                <Image
                  src={profileImageUrl}
                  alt="Ayesha Taranum - Clear Reveal"
                  width={300}
                  height={400} // Changed height from 300 to 400
                  className="object-cover aspect-[3/4]" // Changed aspect-square to aspect-[3/4]
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-2/3"
            variants={fadeInRight}
            style={{ scale: textScale }}
          >
            <motion.div whileHover={cardHover}>
              <Card className="bg-card/80 backdrop-blur-sm shadow-lg border-none">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Driven and Passionate Developer</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-4 text-base md:text-lg">
                  <p>
                    I am a highly motivated Master of Computer Applications student at ITER, SOA University,
                    with a strong foundation in web development technologies like Java, JavaScript, TypeScript,
                    AngularJS, and Spring Boot.
                  </p>
                  <p>
                    Passionate about creating efficient and user-friendly web applications, I thrive in
                    collaborative environments and enjoy tackling challenges creatively. My background in Chemistry (B.Sc.)
                    provides me with a unique analytical perspective.
                  </p>
                  <p>
                    I'm eager to apply my skills in web design, development, and data organization to contribute
                    to innovative projects and make data-driven decisions. I'm a continuous learner, always seeking
                    to expand my technical expertise and soft skills.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
