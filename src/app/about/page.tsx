"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FileText, Mail, FolderGit2 } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/data/personal";
import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";

const skills = [
  { category: "AI/ML", items: ["TensorFlow", "PyTorch", "RAG", "LangChain"], color: "#00C2FF" },
  { category: "Automation", items: ["Selenium", "Python", "CI/CD", "Airflow"], color: "#33FFD1" },
  { category: "IoT", items: ["ESP32", "DHT11", "MQTT", "Firebase", "CODESYS"], color: "#A97CFF" },
  { category: "Data", items: ["Pandas", "NumPy", "Excel Analytics", "PowerBI"], color: "#00BFFF" },
  { category: "Web", items: ["React.js", "Flask", "FastAPI", "Next.js"], color: "#9B5CFF" },
];

const timeline = [
  {
    period: "2023–2024",
    title: "RAAM Group Internship",
    description: "Developed automation pipelines for Parivahan data — optimized manual workflows into a fully automated system.",
    icon: "⚙️",
  },
  {
    period: "2024–2025",
    title: "Smart Irrigation System",
    description: "Created IoT-enabled irrigation control system with real-time monitoring and predictive watering.",
    icon: "🌱",
  },
  {
    period: "2025–Present",
    title: "Research & Projects",
    description: "Working on Wi-Fi encryption security and smart solar-powered irrigation systems.",
    icon: "🔬",
  },
];

const leadership = [
  { icon: "🧩", title: "Co-Founder, Proboxx", desc: "Led a student startup, conducted 500+ surveys, won 1st Prize at INCEPTA." },
  { icon: "🎤", title: "TEDxVIIT", desc: "Part of the organizing team for thought-leadership events." },
  { icon: "🚀", title: "EDC VIIT", desc: "Drove innovation and startup mentorship for peers." },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-bg-dark via-bg-darker to-bg-dark">
      <ParticleBackground />
      <Header />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-7xl w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Engineering the Bridge Between{" "}
                  <span className="gradient-text">Hardware and Intelligence</span>
                </h1>

                <div className="h-8 text-2xl font-semibold text-neon-aqua">
                  <TypeAnimation
                    sequence={[
                      "Automation",
                      2000,
                      "IoT",
                      2000,
                      "Data",
                      2000,
                      "AI",
                      2000,
                      "Embedded Systems",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </div>

                <p className="text-lg text-text-secondary leading-relaxed">
                  I&apos;m Arya Kulkarni — an Electronics & Telecommunication Engineer passionate about automation,
                  IoT, and data-driven intelligence. I design systems that connect sensors, software, and AI into
                  seamless digital ecosystems.
                </p>

                <div className="flex gap-4 pt-4">
                  <a
                    href={personalInfo.resumeUrl}
                    className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-violet rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300"
                  >
                    View Resume
                  </a>
                  <a
                    href="/contact"
                    className="px-6 py-3 glass rounded-lg font-semibold text-text-primary hover:neon-glow transition-all duration-300"
                  >
                    Get in Touch
                  </a>
                </div>
              </motion.div>

              {/* Right Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative h-[500px] hidden lg:flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-neon-violet/20 to-transparent rounded-full blur-3xl" />
                <div className="relative w-96 h-96 rounded-full glass flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-neon-blue/30"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 rounded-full border-2 border-neon-violet/30"
                  />
                  <div className="text-6xl">⚙️🤖</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                My Tech Stack <span className="gradient-text">Galaxy</span> 🌌
              </h2>
              <p className="text-text-secondary text-lg">Core: Automation & Intelligence</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-8 hover:neon-glow transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: skill.color, boxShadow: `0 0 20px ${skill.color}` }}
                    />
                    <h3 className="text-2xl font-bold text-text-primary group-hover:text-neon-aqua transition-colors">
                      {skill.category}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {skill.items.map((item) => (
                      <div
                        key={item}
                        className="px-4 py-2 rounded-lg bg-white/5 text-text-secondary hover:bg-white/10 hover:text-text-primary transition-all"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-32 px-6 bg-gradient-to-b from-transparent via-bg-darker/50 to-transparent">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="gradient-text">Journey Timeline</span>
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-aqua to-neon-violet" />

              <div className="space-y-16">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-24"
                  >
                    {/* Icon */}
                    <div className="absolute left-0 w-16 h-16 rounded-full glass flex items-center justify-center text-3xl border-2 border-neon-blue">
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div className="glass rounded-2xl p-8 hover:neon-glow transition-all duration-300">
                      <div className="text-sm font-semibold text-neon-aqua mb-2">{item.period}</div>
                      <h3 className="text-2xl font-bold text-text-primary mb-3">{item.title}</h3>
                      <p className="text-text-secondary leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Beyond Code: <span className="gradient-text">Leading, Building, and Inspiring</span> 💡
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-8 hover:neon-glow-violet transition-all duration-300 text-center group"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-neon-aqua transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-12 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-violet/10" />

              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Let&apos;s Build Something That <span className="gradient-text">Matters</span>
                </h2>
                <p className="text-text-secondary text-lg mb-8">
                  I&apos;m always open to exploring collaborations, automation challenges, or impactful tech projects.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href={personalInfo.resumeUrl}
                    className="px-6 py-3 glass rounded-lg font-semibold text-text-primary hover:neon-glow transition-all duration-300 flex items-center gap-2"
                  >
                    <FileText className="w-5 h-5" />
                    View Resume
                  </a>
                  <a
                    href="/contact"
                    className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-violet rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Contact Me
                  </a>
                  <Link
                    href="/#projects"
                    className="px-6 py-3 glass rounded-lg font-semibold text-text-primary hover:neon-glow transition-all duration-300 flex items-center gap-2"
                  >
                    <FolderGit2 className="w-5 h-5" />
                    View Projects
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
