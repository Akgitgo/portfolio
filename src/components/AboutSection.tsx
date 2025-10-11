"use client";

import { motion } from "framer-motion";
import { Sparkles, Award, TrendingUp } from "lucide-react";

const achievements = [
  { icon: "🏆", title: "Winner – INCEPTA Startup Competition", desc: "PROBOXX Delivery Model" },
  { icon: "💡", title: "AI-powered Smart Irrigation System", desc: "ESP32 + Sensors Integration" },
  { icon: "⚙️", title: "Digital Multimeter with LPC804 MCU", desc: "Embedded System Design" },
  { icon: "🧠", title: "Research on Wi-Fi Encryption & IoT Security", desc: "Published Paper" },
];

const stats = [
  { value: 10, label: "Projects Completed", suffix: "+" },
  { value: 5, label: "Core Domains Mastered", suffix: "+" },
  { value: 3, label: "Research Papers / Prototypes", suffix: "" },
  { value: 1000, label: "Users Impacted by IoT Solutions", suffix: "+" },
];

const skills = [
  { name: "Automation", items: ["Python", "REST APIs", "Testing", "RPA Tools"], color: "#00ADB5" },
  { name: "AI & Data", items: ["Machine Learning", "Data Analysis", "Neural Networks", "Algorithms"], color: "#00D9E0" },
  { name: "IoT Development", items: ["ESP32", "Sensors", "Cloud", "MQTT", "Mobile Integration"], color: "#008B91" },
  { name: "Web & System Design", items: ["React", "Next.js", "Node.js", "System Architecture"], color: "#00ADB5" },
  { name: "Embedded Engineering", items: ["Microcontrollers", "Circuit Design", "Firmware", "Protocols"], color: "#00D9E0" },
];

export default function AboutSection() {
  return (
    <section id="skills" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 glass rounded-full text-primary font-medium text-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4" />
            <span>About Me</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            Engineering the Future with{" "}
            <span className="gradient-text block mt-2">Code & Innovation</span>
          </h2>
          <p className="text-text-secondary text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            I&apos;m Arya Kulkarni — a passionate developer crafting intelligent systems
            that connect data, design, and innovation. My work spans across full-stack development, cloud solutions, and modern web technologies.
          </p>
        </motion.div>

        {/* Skills Matrix */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl lg:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Skill Matrix</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="card group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-5 h-5 rounded-full transition-all duration-300 group-hover:scale-125"
                      style={{
                        backgroundColor: skill.color,
                        boxShadow: `0 0 20px ${skill.color}70`
                      }}
                    />
                    <h4 className="text-xl lg:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 text-sm font-medium rounded-full glass border border-primary/20 text-text-secondary hover:border-primary/50 hover:text-primary transition-all duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-16">
            <Award className="w-10 h-10 text-primary" />
            <h3 className="text-3xl lg:text-5xl font-bold">
              <span className="gradient-text">Achievements & Highlights</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="card group text-center relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <h4 className="text-lg font-bold text-text-primary mb-4 leading-snug group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{achievement.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-16">
            <TrendingUp className="w-10 h-10 text-primary" />
            <h3 className="text-3xl lg:text-5xl font-bold">
              <span className="gradient-text">Journey in Numbers</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="card text-center group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-5xl lg:text-7xl font-bold gradient-text mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.value}{stat.suffix}
                  </motion.div>
                  <div className="text-text-secondary text-base font-medium leading-relaxed">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center card max-w-4xl mx-auto relative overflow-hidden group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to build something{" "}
              <span className="gradient-text block mt-2">amazing together?</span>
            </h3>
            <p className="text-text-secondary text-lg lg:text-xl mb-10 leading-relaxed">
              Let&apos;s turn your ideas into reality with modern technology and innovation. 🚀
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary text-base sm:text-lg px-8 py-4"
              >
                Work Together
              </a>
              <a
                href="mailto:kulkarniarya37@gmail.com"
                className="btn-secondary text-base sm:text-lg px-8 py-4"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
