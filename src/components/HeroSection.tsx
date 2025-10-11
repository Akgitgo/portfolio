"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, ArrowRight, Download, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/personal";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('interactive-area')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left - rect.width / 2,
          y: e.clientY - rect.top - rect.height / 2,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-start" style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '2rem', paddingBottom: '1rem' }}>
      <div className="w-full max-w-none mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start h-full" style={{ gap: '2rem', height: 'calc(100vh - 2rem)' }}>
          {/* Left Side - Personal Info (Better Centered) */}
          <motion.div
            className="hero-section space-y-12 z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
                    style={{ 
                      maxWidth: '600px',
                      marginLeft: 'auto',
                      marginRight: '2rem',
                      paddingLeft: '2rem',
                      height: 'calc(100vh - 2rem)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
          >
                    {/* Greeting Badge */}
                    <motion.div
                      className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full text-primary font-medium text-xs"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      style={{ 
                        textAlign: 'left',
                        marginBottom: '0.5rem',
                        display: 'inline-flex'
                      }}
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>Welcome to my portfolio</span>
                    </motion.div>

            {/* Name */}
            <motion.h1
              className="text-lg lg:text-xl xl:text-2xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ 
                lineHeight: '1.1',
                textAlign: 'left',
                marginBottom: '0.5rem'
              }}
            >
              <span className="text-text-primary block" style={{ marginBottom: '0.125rem' }}>Hi, I'm</span>
              <span className="gradient-text block">{personalInfo.name}</span>
            </motion.h1>

            {/* Title */}
            <motion.div
              className="text-sm sm:text-base lg:text-lg font-semibold text-text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ 
                textAlign: 'left',
                marginBottom: '0.5rem',
                lineHeight: '1.2'
              }}
            >
              {personalInfo.title}
            </motion.div>

            {/* Typing Animation */}
            <motion.div
              className="flex flex-col sm:flex-row items-start gap-1 text-xs sm:text-xs lg:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ 
                textAlign: 'left',
                marginBottom: '0.5rem',
                lineHeight: '1.4'
              }}
            >
              <span className="text-text-secondary">I specialize in</span>
              <TypeAnimation
                sequence={[
                  "React.js Development",
                  2000,
                  "Full-Stack Solutions",
                  2000,
                  "Modern Web Apps",
                  2000,
                  "Cloud Integration",
                  2000,
                  "API Design",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primary font-semibold"
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-text-secondary text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              style={{ 
                maxWidth: '500px',
                lineHeight: '1.4',
                textAlign: 'left',
                marginBottom: '0.75rem'
              }}
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              style={{ 
                justifyContent: 'flex-start',
                width: '100%',
                marginBottom: '0.5rem'
              }}
            >
              <motion.button
                onClick={scrollToProjects}
                className="relative text-xs px-3 py-1.5 font-semibold transition-all duration-300 group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#00ADB5',
                  fontWeight: '600'
                }}
              >
                {/* Intersection lines */}
                <div 
                  className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #00ADB5, transparent)',
                    boxShadow: '0 0 8px rgba(0, 173, 181, 0.6)'
                  }}
                />
                <div 
                  className="absolute bottom-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #00ADB5, transparent)',
                    boxShadow: '0 0 8px rgba(0, 173, 181, 0.6)'
                  }}
                />
                <div 
                  className="absolute top-0 left-0 w-0.5 h-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(180deg, transparent, #00ADB5, transparent)',
                    boxShadow: '0 0 8px rgba(0, 173, 181, 0.6)'
                  }}
                />
                <div 
                  className="absolute top-0 right-0 w-0.5 h-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(180deg, transparent, #00ADB5, transparent)',
                    boxShadow: '0 0 8px rgba(0, 173, 181, 0.6)'
                  }}
                />
                
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </motion.button>

              <motion.a
                href={personalInfo.resumeUrl}
                download
                className="relative text-xs px-3 py-1.5 font-semibold transition-all duration-300 group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#EEEEEE',
                  fontWeight: '600'
                }}
              >
                {/* Intersection lines */}
                <div 
                  className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #EEEEEE, transparent)',
                    boxShadow: '0 0 8px rgba(238, 238, 238, 0.6)'
                  }}
                />
                <div 
                  className="absolute bottom-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #EEEEEE, transparent)',
                    boxShadow: '0 0 8px rgba(238, 238, 238, 0.6)'
                  }}
                />
                <div 
                  className="absolute top-0 left-0 w-0.5 h-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(180deg, transparent, #EEEEEE, transparent)',
                    boxShadow: '0 0 8px rgba(238, 238, 238, 0.6)'
                  }}
                />
                <div 
                  className="absolute top-0 right-0 w-0.5 h-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(180deg, transparent, #EEEEEE, transparent)',
                    boxShadow: '0 0 8px rgba(238, 238, 238, 0.6)'
                  }}
                />
                
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Download Resume
                </span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              style={{ 
                justifyContent: 'flex-start',
                width: '100%',
                marginBottom: '0.5rem'
              }}
            >
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 glass rounded-lg hover:glow-teal transition-all duration-300 hover:-translate-y-2 group"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5 text-text-primary group-hover:text-primary transition-colors" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 glass rounded-lg hover:glow-teal transition-all duration-300 hover:-translate-y-2 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 text-text-primary group-hover:text-primary transition-colors" />
              </a>
              <a
                href={personalInfo.social.email}
                className="p-1.5 glass rounded-lg hover:glow-teal transition-all duration-300 hover:-translate-y-2 group"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5 text-text-primary group-hover:text-primary transition-colors" />
              </a>
            </motion.div>

            {/* Tech Stack Pills - Moved to bottom */}
            <motion.div
              className="flex flex-wrap gap-1.5 pt-1.5 border-t border-primary/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              style={{ 
                width: '100%',
                maxWidth: '500px',
                textAlign: 'left',
                paddingTop: '0.375rem'
              }}
            >
              <div className="w-full mb-1">
                <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">
                  Tech Stack
                </h3>
              </div>
              {["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "AWS", "Docker"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-1.5 py-0.5 text-xs font-medium glass text-text-secondary hover:text-primary transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

                  {/* Right Side - Interactive Cursor-Controlled Animation */}
                  <motion.div
                    id="interactive-area"
                    className="relative h-[250px] lg:h-[300px] hidden lg:flex items-start justify-start"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    suppressHydrationWarning
                    style={{ 
                      marginLeft: '2rem',
                      marginRight: 'auto',
                      width: '100%',
                      maxWidth: '400px',
                      paddingTop: '0.5rem'
                    }}
                  >
            {/* Animated Background */}
                    <div 
                      className="absolute inset-0 overflow-hidden rounded-3xl" 
                      suppressHydrationWarning
                      style={{ 
                        width: '100%',
                        height: '100%',
                        maxWidth: '400px',
                        margin: '0 auto'
                      }}
                    >
                          {/* Central Glow that follows cursor */}
                          {isMounted && (
                            <motion.div
                              className="absolute w-64 h-64 bg-primary rounded-full blur-3xl opacity-20"
                              animate={{
                                x: mousePosition.x * 0.02,
                                y: mousePosition.y * 0.02,
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                x: { type: "spring", stiffness: 50, damping: 20 },
                                y: { type: "spring", stiffness: 50, damping: 20 },
                                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                              }}
                              style={{
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                              }}
                            />
                          )}

                          {/* Orbiting Rings */}
                          {isMounted && (
                            <>
                              <motion.div
                                className="absolute w-[300px] h-[300px] border-2 border-primary/30 rounded-full"
                                animate={{ 
                                  rotate: 360,
                                  x: mousePosition.x * -0.01,
                                  y: mousePosition.y * -0.01,
                                }}
                                transition={{
                                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                  x: { type: "spring", stiffness: 50, damping: 20 },
                                  y: { type: "spring", stiffness: 50, damping: 20 },
                                }}
                                style={{
                                  left: '50%',
                                  top: '50%',
                                  transform: 'translate(-50%, -50%)',
                                }}
                              />

                              <motion.div
                                className="absolute w-[350px] h-[350px] border border-primary/20 rounded-full"
                                animate={{ 
                                  rotate: -360,
                                  x: mousePosition.x * 0.015,
                                  y: mousePosition.y * 0.015,
                                }}
                                transition={{
                                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                                  x: { type: "spring", stiffness: 50, damping: 20 },
                                  y: { type: "spring", stiffness: 50, damping: 20 },
                                }}
                                style={{
                                  left: '50%',
                                  top: '50%',
                                  transform: 'translate(-50%, -50%)',
                                }}
                              />
                            </>
                          )}

              {/* Floating Tech Icons - React to Cursor */}
              {isMounted && (
                <>
                  <motion.div
                    className="absolute glass p-4 rounded-2xl shadow-2xl hover:scale-110 transition-transform cursor-pointer group"
                    animate={{
                      x: mousePosition.x * 0.05,
                      y: mousePosition.y * 0.05 - 10,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    style={{
                      left: '70%',
                      top: '20%',
                    }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="text-4xl group-hover:scale-110 transition-transform">💻</div>
                      <div className="text-xs font-semibold text-primary whitespace-nowrap">Web Development</div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute glass p-4 rounded-2xl shadow-2xl hover:scale-110 transition-transform cursor-pointer group"
                    animate={{
                      x: mousePosition.x * -0.04,
                      y: mousePosition.y * 0.06 + 10,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    style={{
                      left: '15%',
                      top: '60%',
                    }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="text-4xl group-hover:scale-110 transition-transform">🚀</div>
                      <div className="text-xs font-semibold text-primary whitespace-nowrap">Automation</div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute glass p-4 rounded-2xl shadow-2xl hover:scale-110 transition-transform cursor-pointer group"
                    animate={{
                      x: mousePosition.x * 0.06,
                      y: mousePosition.y * -0.05 - 15,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    style={{
                      left: '25%',
                      top: '25%',
                    }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="text-4xl group-hover:scale-110 transition-transform">⚡</div>
                      <div className="text-xs font-semibold text-primary whitespace-nowrap">Data Analytics</div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute glass p-4 rounded-2xl shadow-2xl hover:scale-110 transition-transform cursor-pointer group"
                    animate={{
                      x: mousePosition.x * -0.05,
                      y: mousePosition.y * -0.04 + 15,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    style={{
                      left: '75%',
                      top: '70%',
                    }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="text-4xl group-hover:scale-110 transition-transform">🎨</div>
                      <div className="text-xs font-semibold text-primary whitespace-nowrap">Figma</div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute glass p-4 rounded-2xl shadow-2xl hover:scale-110 transition-transform cursor-pointer group"
                    animate={{
                      x: mousePosition.x * 0.07,
                      y: mousePosition.y * 0.05,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    style={{
                      left: '85%',
                      top: '45%',
                    }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="text-4xl group-hover:scale-110 transition-transform">🔧</div>
                      <div className="text-xs font-semibold text-primary whitespace-nowrap">Hardware</div>
                    </div>
                  </motion.div>

                          {/* Center Element - Most Responsive */}
                          <motion.div
                            className="absolute glass-strong p-6 rounded-2xl shadow-2xl"
                            animate={{
                              x: mousePosition.x * 0.08,
                              y: mousePosition.y * 0.08,
                              scale: [1, 1.05, 1],
                              rotate: mousePosition.x * 0.01,
                            }}
                            transition={{
                              x: { type: "spring", stiffness: 150, damping: 20 },
                              y: { type: "spring", stiffness: 150, damping: 20 },
                              rotate: { type: "spring", stiffness: 150, damping: 20 },
                              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                            }}
                            style={{
                              left: '50%',
                              top: '50%',
                              transform: 'translate(-50%, -50%)',
                            }}
                          >
                            <div className="text-5xl">🌟</div>
                          </motion.div>

                          {/* Particle Effects */}
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1.5 h-1.5 bg-primary rounded-full"
                              animate={{
                                x: [
                                  Math.cos((i * Math.PI * 2) / 6) * 120 + mousePosition.x * 0.03,
                                  Math.cos((i * Math.PI * 2) / 6 + Math.PI) * 120 + mousePosition.x * 0.03,
                                ],
                                y: [
                                  Math.sin((i * Math.PI * 2) / 6) * 120 + mousePosition.y * 0.03,
                                  Math.sin((i * Math.PI * 2) / 6 + Math.PI) * 120 + mousePosition.y * 0.03,
                                ],
                                opacity: [0.3, 0.8, 0.3],
                              }}
                              transition={{
                                duration: 3 + i * 0.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              style={{
                                left: '50%',
                                top: '50%',
                              }}
                            />
                          ))}
                </>
              )}
            </div>
          </motion.div>
        </div>

                        {/* Scroll Indicator - Inside Hero */}
                        <motion.div
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 hidden lg:block"
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 1.5,
                          }}
                        >
                          <div className="flex flex-col items-center gap-1 text-text-secondary">
                            <span className="text-xs font-medium">Scroll to explore</span>
                            <div className="w-4 h-6 border-2 border-primary rounded-full flex items-start justify-center p-1">
                              <motion.div
                                className="w-0.5 h-0.5 bg-primary rounded-full"
                                animate={{ y: [0, 8, 0] }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              />
                            </div>
                          </div>
                </motion.div>
      </div>
    </section>
  );
}
