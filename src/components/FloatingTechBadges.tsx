"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/personal";
import {
  Container,
  Cloud,
  Database,
  FileCode,
  Zap,
  Code2,
  Box,
  Network
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Docker: Container,
  AWS: Cloud,
  MongoDB: Database,
  TypeScript: FileCode,
  "Next.js": Zap,
  React: Code2,
  "Node.js": Box,
  GraphQL: Network,
};

export default function FloatingTechBadges() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central code editor mockup */}
      <div className="relative z-10">
        <div className="glass rounded-lg p-4 w-80 neon-glow">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-text-secondary ml-auto">react.jsx</span>
          </div>
          <div className="font-mono text-xs space-y-1">
            <div className="text-text-secondary">
              <span className="text-violet-400">const</span>{" "}
              <span className="text-neon-aqua">Portfolio</span> ={" "}
              <span className="text-yellow-400">{"() =>"}</span> {"{"}
            </div>
            <div className="text-text-secondary pl-4">
              <span className="text-violet-400">const</span> [
              <span className="text-neon-aqua">isAwesome</span>,{" "}
              <span className="text-blue-400">...</span>
            </div>
            <div className="text-text-secondary pl-4">
              <span className="text-violet-400">return</span> {"("}
            </div>
            <div className="text-text-secondary pl-8">
              {"<"}<span className="text-red-400">div</span>{" "}
              <span className="text-neon-aqua">className</span>=
              <span className="text-green-400">&quot;amazing work&quot;</span>
              {">"}
            </div>
            <div className="text-text-secondary pl-12">
              {"<"}<span className="text-red-400">h1</span>
              {">"}Hi, I&apos;m Umang{"</"}<span className="text-red-400">h1</span>
              {">"}
            </div>
            <div className="text-text-secondary pl-8">
              {"</"}<span className="text-red-400">div</span>
              {">"}
            </div>
            <div className="text-text-secondary pl-4">{"});"}</div>
            <div className="text-text-secondary">{"};"}</div>
          </div>
        </div>

        {/* "Coding with passion" badge */}
        <motion.div
          className="absolute -top-12 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full flex items-center gap-2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code2 className="w-4 h-4 text-neon-aqua" />
          <span className="text-sm text-text-primary">Coding with passion</span>
        </motion.div>

        {/* Years of Experience badge */}
        <motion.div
          className="absolute -bottom-12 right-4 glass px-6 py-3 rounded-full"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text">2+</div>
            <div className="text-xs text-text-secondary">Years of</div>
            <div className="text-xs text-text-secondary">Experience</div>
          </div>
        </motion.div>
      </div>

      {/* Orbiting tech badges */}
      {techStack.map((tech, index) => {
        const angle = (index / techStack.length) * 360;
        const Icon = iconMap[tech.name] || Code2;

        return (
          <motion.div
            key={tech.name}
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20 + index * 2,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.5,
            }}
          >
            <motion.div
              className="glass px-3 py-2 rounded-full flex items-center gap-2 neon-glow-violet"
              style={{
                transform: `rotate(${angle}deg) translateX(${150 + (index % 3) * 30}px) rotate(-${angle}deg)`,
              }}
              whileHover={{ scale: 1.1 }}
            >
              <Icon className="w-4 h-4" style={{ color: tech.color }} />
              <span className="text-xs font-medium text-text-primary whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
