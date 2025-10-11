"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data/personal";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Journey", href: "/#skills" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href) || pathname === href;
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      if (pathname !== path && path) {
        window.location.href = href;
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
              {/* Header Background with Glassmorphism */}
              <motion.header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-primary/20"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  background: 'rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0, 173, 181, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
              />

              <motion.header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ 
                  paddingLeft: '2rem', 
                  paddingRight: '2rem',
                  background: 'transparent'
                }}
              >
        <div className="w-full max-w-none mx-auto">
          <div className="flex items-center justify-between h-12 relative">
            {/* Logo */}
            <Link href="/">
              <motion.div
                className="text-2xl font-bold cursor-pointer relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  color: '#FFFFFF',
                  textShadow: '0 0 20px rgba(0, 173, 181, 0.5)'
                }}
              >
                <span className="relative z-10">{personalInfo.name}</span>
                {/* Animated glow effect */}
                <motion.div
                  className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  style={{
                    color: '#00ADB5',
                    textShadow: '0 0 30px #00ADB5'
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item, index) => (
                item.href.includes("#") ? (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-6 py-3 font-semibold text-sm transition-all duration-300 group ${
                      isActive(item.href.split("#")[0])
                        ? "text-primary"
                        : "text-text-primary hover:text-primary"
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {/* Intersection line - top */}
                    <div 
                      className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{
                        background: 'linear-gradient(90deg, transparent, #00ADB5, transparent)',
                        boxShadow: '0 0 8px rgba(0, 173, 181, 0.6)'
                      }}
                    />
                    
                    {/* Intersection line - bottom */}
                    <div 
                      className="absolute bottom-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{
                        background: 'linear-gradient(90deg, transparent, #00ADB5, transparent)',
                        boxShadow: '0 0 8px rgba(0, 173, 181, 0.6)'
                      }}
                    />
                    
                    {/* Active state underline */}
                    {isActive(item.href.split("#")[0]) && (
                      <div 
                        className="absolute bottom-0 left-0 w-full h-0.5"
                        style={{
                          background: 'linear-gradient(90deg, transparent, #00ADB5, transparent)',
                          boxShadow: '0 0 8px rgba(0, 173, 181, 0.8)'
                        }}
                      />
                    )}
                    
                    <span className="relative z-10">{item.label}</span>
                  </motion.button>
                ) : (
                  <Link key={item.href} href={item.href}>
                    <motion.button
                      className={`relative px-6 py-3 font-semibold text-sm transition-all duration-300 group ${
                        isActive(item.href)
                          ? "text-primary"
                          : "text-text-primary hover:text-primary"
                      }`}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      {/* Intersection line - top */}
                      <div 
                        className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{
                          background: 'linear-gradient(90deg, transparent, #00ADB5, transparent)',
                          boxShadow: '0 0 8px rgba(0, 173, 181, 0.6)'
                        }}
                      />
                      
                      {/* Intersection line - bottom */}
                      <div 
                        className="absolute bottom-0 left-0 w-full h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{
                          background: 'linear-gradient(90deg, transparent, #00ADB5, transparent)',
                          boxShadow: '0 0 8px rgba(0, 173, 181, 0.6)'
                        }}
                      />
                      
                      {/* Active state underline */}
                      {isActive(item.href) && (
                        <div 
                          className="absolute bottom-0 left-0 w-full h-0.5"
                          style={{
                            background: 'linear-gradient(90deg, transparent, #00ADB5, transparent)',
                            boxShadow: '0 0 8px rgba(0, 173, 181, 0.8)'
                          }}
                        />
                      )}
                      
                      <span className="relative z-10">{item.label}</span>
                    </motion.button>
                  </Link>
                )
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-3 text-text-primary hover:text-primary transition-all duration-300 rounded-full glass hover:glow-teal"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="relative glass-strong m-4 mt-24 rounded-2xl p-8"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  item.href.includes("#") ? (
                    <motion.button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`px-6 py-3 rounded-full text-lg font-medium transition-all text-left ${
                        isActive(item.href.split("#")[0])
                          ? "bg-primary text-white"
                          : "text-text-primary hover:bg-primary/10 hover:text-primary"
                      }`}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.label}
                    </motion.button>
                  ) : (
                    <Link key={item.href} href={item.href}>
                      <motion.div
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${
                          isActive(item.href)
                            ? "bg-primary text-white"
                            : "text-text-primary hover:bg-primary/10 hover:text-primary"
                        }`}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item.label}
                      </motion.div>
                    </Link>
                  )
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
