export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
  icon: "briefcase" | "code" | "wrench";
}

export const experiences: Experience[] = [
  {
    id: "full-stack-developer",
    role: "Full Stack Developer & Software Engineer",
    company: "Raam Autobahn Pvt Ltd",
    location: "Pune, India",
    period: "May 2025 - Present",
    startDate: "2025-05",
    endDate: "present",
    description: "Led development of multiple automotive dealership websites and CRM systems. Built web-based CRM with automated lead tracking, analytics dashboards, and sales workflow automation. Developed 6+ production websites including Raam Honda, Raam MG, Raam Ather, and Epic Cars with Next.js and Node.js, improving conversion rates by up to 40%.",
    skills: ["Next.js", "React", "Node.js", "MongoDB", "Flask", "Python", "UI/UX Design", "CRM Development"],
    icon: "code"
  },
  {
    id: "ai-ml-engineer",
    role: "AI/ML & Data Analytics Developer",
    company: "Freelance & Research Projects",
    location: "Remote",
    period: "Aug 2024 - Present",
    startDate: "2024-08",
    endDate: "present",
    description: "Developed AI/ML solutions including PDF OCR automation reducing manual data entry by 95%, Parivahan automation for vehicle registration data extraction, and image captioning system for Marathi language. Built data analytics tools including Interactive RTA Pincode Mapping System integrating 679 pincodes and RTO Analytics Dashboard improving reporting efficiency by 35%.",
    skills: ["Python", "TensorFlow", "Machine Learning", "OCR", "Selenium", "Pandas", "GeoPandas", "Data Analytics"],
    icon: "briefcase"
  },
  {
    id: "iot-hardware-engineer",
    role: "IoT & Hardware Engineer",
    company: "Embedded Systems Projects",
    location: "Pune, India",
    period: "Mar 2023 - Present",
    startDate: "2023-03",
    endDate: "present",
    description: "Designed and developed multiple IoT and hardware projects including Smart Irrigation System (Patent No. 202521032177 A), Kinetic Green EV Monitoring System, Digital Voltmeter/Ammeter using STM32, and Energy Optimization system for Air Compressor Systems. Specialized in embedded C, STM32, IoT sensors, and industrial automation using CODESYS and PLC.",
    skills: ["STM32", "Embedded C", "IoT", "ESP32", "CODESYS", "PLC", "Hardware Design", "Sensors", "MATLAB"],
    icon: "wrench"
  }
];
