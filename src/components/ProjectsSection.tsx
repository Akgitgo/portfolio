"use client";

import { motion } from "framer-motion";
import { ExternalLink, Rocket, Award } from "lucide-react";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import Link from "next/link";

export default function ProjectsSection() {
  // Show only featured projects on home page
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <section id="projects" className="relative py-32" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
      <div className="w-full max-w-none mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-primary font-medium text-sm mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              background: 'rgba(34, 40, 49, 0.8)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(0, 173, 181, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 173, 181, 0.1)'
            }}
          >
            <Rocket className="w-5 h-5" />
            <span>My Work</span>
          </motion.div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
                    A showcase of innovative solutions I&apos;ve built using modern technologies
          </p>
        </motion.div>

        {/* Projects Grid - Properly Centered */}
        <div className="mb-20 flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/projects">
            <motion.button 
              className="relative text-lg px-10 py-5 font-semibold transition-all duration-300 group"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#00ADB5',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
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
              
              {/* Intersection line - left */}
              <div 
                className="absolute top-0 left-0 w-0.5 h-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{
                  background: 'linear-gradient(180deg, transparent, #00ADB5, transparent)',
                  boxShadow: '0 0 8px rgba(0, 173, 181, 0.6)'
                }}
              />
              
              {/* Intersection line - right */}
              <div 
                className="absolute top-0 right-0 w-0.5 h-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{
                  background: 'linear-gradient(180deg, transparent, #00ADB5, transparent)',
                  boxShadow: '0 0 8px rgba(0, 173, 181, 0.6)'
                }}
              />
              
              <span className="relative z-10 flex items-center gap-3">
                View All Projects
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      className="group h-full flex flex-col relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      style={{
        background: 'rgba(34, 40, 49, 0.7)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        padding: '2rem'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex flex-wrap gap-3 mb-6">
          <span 
            className="px-5 py-2.5 text-sm font-semibold rounded-full text-primary border transition-colors"
            style={{
              background: 'rgba(0, 173, 181, 0.15)',
              borderColor: 'rgba(0, 173, 181, 0.4)',
              color: '#00ADB5'
            }}
          >
            {project.category}
          </span>
          {project.patentNumber && (
            <span 
              className="px-5 py-2.5 text-sm font-semibold rounded-full flex items-center gap-2"
              style={{
                background: 'rgba(255, 215, 0, 0.15)',
                borderColor: 'rgba(255, 215, 0, 0.4)',
                color: '#FFD700'
              }}
            >
              <Award className="w-4 h-4" /> Patent
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors leading-tight">
          {project.title}
        </h3>

        {/* Period */}
        {project.period && (
          <p className="text-sm text-text-secondary/70 mb-4 font-medium">{project.period}</p>
        )}

        {/* Description */}
        <p className="text-text-secondary text-base leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-4 py-2.5 text-sm font-medium rounded-full transition-colors"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#93A1B0'
              }}
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span 
              className="px-4 py-2.5 text-sm font-medium rounded-full"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#93A1B0'
              }}
            >
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Action Button */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 transition-all duration-300 font-semibold group/btn relative"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#00ADB5'
            }}
          >
            {/* Intersection line - top */}
            <div 
              className="absolute top-0 left-0 w-full h-0.5 opacity-0 group-hover/btn:opacity-100 transition-all duration-300"
              style={{
                background: 'linear-gradient(90deg, transparent, #00ADB5, transparent)',
                boxShadow: '0 0 8px rgba(0, 173, 181, 0.6)'
              }}
            />
            
            {/* Intersection line - bottom */}
            <div 
              className="absolute bottom-0 left-0 w-full h-0.5 opacity-0 group-hover/btn:opacity-100 transition-all duration-300"
              style={{
                background: 'linear-gradient(90deg, transparent, #00ADB5, transparent)',
                boxShadow: '0 0 8px rgba(0, 173, 181, 0.6)'
              }}
            />
            
            {/* Intersection line - left */}
            <div 
              className="absolute top-0 left-0 w-0.5 h-full opacity-0 group-hover/btn:opacity-100 transition-all duration-300"
              style={{
                background: 'linear-gradient(180deg, transparent, #00ADB5, transparent)',
                boxShadow: '0 0 8px rgba(0, 173, 181, 0.6)'
              }}
            />
            
            {/* Intersection line - right */}
            <div 
              className="absolute top-0 right-0 w-0.5 h-full opacity-0 group-hover/btn:opacity-100 transition-all duration-300"
              style={{
                background: 'linear-gradient(180deg, transparent, #00ADB5, transparent)',
                boxShadow: '0 0 8px rgba(0, 173, 181, 0.6)'
              }}
            />
            
            <span className="relative z-10">View Project</span>
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform relative z-10" />
          </a>
        )}

        {/* Patent Number */}
        {project.patentNumber && (
          <div className="mt-6 pt-6 border-t border-primary/20">
            <p className="text-xs text-text-secondary">
              Patent No:{" "}
              <span className="text-primary font-mono font-semibold">
                {project.patentNumber}
              </span>
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
