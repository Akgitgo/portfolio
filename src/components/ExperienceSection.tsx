"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Wrench, Calendar } from "lucide-react";
import { experiences } from "@/data/experience";

const iconMap = {
  briefcase: Briefcase,
  code: Code,
  wrench: Wrench,
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 bg-gradient-to-b from-transparent via-bg-secondary/30 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 glass rounded-full text-primary font-medium text-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Briefcase className="w-4 h-4" />
            <span>Experience</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-text-secondary text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            My journey through technology, innovation, and building impactful solutions
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-10 max-w-5xl mx-auto">
          {experiences.map((exp, index) => {
            const Icon = iconMap[exp.icon];
            return (
              <motion.div
                key={exp.id}
                className="card group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col lg:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 border-2 border-primary/30 flex items-center justify-center group-hover:border-primary/60 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-text-primary group-hover:text-primary transition-colors mb-3 leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-lg lg:text-xl text-text-secondary font-semibold">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-text-secondary bg-primary/5 px-4 py-2 rounded-full border border-primary/20">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary text-base lg:text-lg leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-5 py-2 text-sm font-semibold rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center card max-w-4xl mx-auto relative overflow-hidden group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Want to know more about{" "}
              <span className="gradient-text">my journey?</span>
            </h3>
            <p className="text-text-secondary text-lg lg:text-xl mb-10 leading-relaxed">
              Let's discuss how my experience can help bring your ideas to life.
            </p>
            <a
              href="/contact"
              className="btn-primary inline-flex text-base sm:text-lg px-8 py-4"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
