"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Rocket, Award } from "lucide-react";
import { projects, categories } from "@/data/projects";
import type { Project } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <Header />

      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Rocket className="w-12 h-12 text-primary" />
              <h1 className="text-5xl lg:text-6xl font-bold">
                Projects & <span className="gradient-text">Work</span>
              </h1>
            </div>
            <p className="text-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
              A collection of my software, AI, IoT, and hardware innovations — where
              technology meets real-world impact.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg"
                    : "glass text-text-secondary hover:text-primary hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Count */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-text-secondary">
              Showing <span className="text-primary font-semibold">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-text-secondary text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            className="mt-24 text-center card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Like what you see?
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s collaborate and build something amazing together.
            </p>
            <a
              href="/contact"
              className="btn-primary inline-flex"
            >
              Get In Touch
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card group h-full flex flex-col"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {/* Category Badge */}
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
          {project.category}
        </span>

        {/* Patent Badge */}
        {project.patentNumber && (
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent-light border border-accent-light/20 flex items-center gap-1">
            <Award className="w-3 h-3" /> Patent
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      {/* Period */}
      {project.period && (
        <p className="text-sm text-text-secondary/70 mb-3">{project.period}</p>
      )}

      {/* Description */}
      <p className="text-text-secondary leading-relaxed mb-4 flex-grow">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 text-text-secondary border border-secondary-grey-light/20"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 text-text-secondary border border-secondary-grey-light/20">
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
          className="flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary text-text-primary hover:text-white rounded-full transition-all duration-300 font-medium group/btn"
        >
          <span>View Project</span>
          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </a>
      )}

      {/* Patent Number */}
      {project.patentNumber && (
        <div className="mt-4 pt-4 border-t border-primary/20">
          <p className="text-xs text-text-secondary">
            Patent No:{" "}
            <span className="text-primary font-mono font-semibold">
              {project.patentNumber}
            </span>
          </p>
        </div>
      )}
    </motion.div>
  );
}
