"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { personalInfo } from "@/data/personal";
import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <ParticleBackground />
      <Header />

      {/* Full Viewport 50/50 Split */}
      <div className="relative z-10 flex-1 flex items-center pt-20">
        <div className="w-full h-full grid lg:grid-cols-2">
          {/* Left Side - Full Height 50% */}
          <motion.div
            className="flex items-center justify-center p-12 lg:p-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="max-w-xl w-full text-center lg:text-left">
              <h3 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
                Drop me a message anytime 💌
              </h3>
              <p className="text-text-secondary text-lg mb-10">I&apos;d love to hear from you!</p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold text-text-primary">{personalInfo.name}</div>
                    <div className="text-text-secondary">Pune, India 🇮🇳</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <Mail className="w-6 h-6 text-primary" />
                  <a href={personalInfo.social.email} className="text-text-primary hover:text-primary transition-colors">
                    kulkarniarya37@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 justify-center lg:justify-start">
                <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:glow-teal transition-all">
                  <Github className="w-6 h-6" />
                </a>
                <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:glow-teal transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:glow-teal transition-all">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form Full Height 50% */}
          <motion.div
            className="flex items-center justify-center p-12 lg:p-16 bg-secondary/20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <form className="max-w-xl w-full space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Collaborate</h2>
              </div>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 glass rounded-xl focus:glow-teal outline-none text-text-primary placeholder:text-text-secondary/50 transition-all"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 glass rounded-xl focus:glow-teal outline-none text-text-primary placeholder:text-text-secondary/50 transition-all"
              />

              <textarea
                rows={6}
                placeholder="What would you like to collaborate on?"
                className="w-full px-6 py-4 glass rounded-xl focus:glow-teal outline-none text-text-primary placeholder:text-text-secondary/50 transition-all resize-none"
              />

              <button type="submit" className="btn-primary w-full">
                Send Message ✨
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA - Full Width */}
      <motion.div
        className="relative z-10 text-center py-16 border-t border-primary/10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Have an idea worth building? <span className="gradient-text">Let&apos;s make it real.</span>
        </h2>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <a href={personalInfo.social.email} className="btn-secondary">
            Schedule a Call
          </a>
          <a href={personalInfo.resumeUrl} className="btn-primary">
            Hire / Collaborate
          </a>
        </div>
      </motion.div>
    </main>
  );
}
