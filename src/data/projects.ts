export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: "Software" | "Hardware" | "AI/ML" | "Data Analytics";
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  period?: string;
  patentNumber?: string;
}

export const projects: Project[] = [
  // Software Projects
  {
    id: "web-crm-software",
    title: "Web-based CRM Software",
    description: "Built CRM system with automated lead tracking, customer data management, and follow-up scheduling.",
    longDescription: "Developed a comprehensive CRM system with automated lead tracking, customer data management, and follow-up scheduling. Designed analytics dashboards for sales insights, improving decision-making and automating dealership sales workflows.",
    tech: ["Flask", "Python", "HTML/CSS", "JavaScript", "PostgreSQL"],
    category: "Software",
    liveUrl: "https://epicleads.in/",
    featured: true,
    period: "Jun 2025 – Present"
  },
  {
    id: "epic-cars-website",
    title: "Epic Cars Website",
    description: "Built a premium automotive site with scroll animations, responsive layouts, and dark-themed interactive maps.",
    longDescription: "Built a premium automotive site with scroll animations, responsive layouts, and dark-themed interactive maps. Designed user flow for high-conversion landing pages and optimized SEO & engagement metrics.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    category: "Software",
    liveUrl: "https://epiccars.in/",
    featured: true,
    period: "Aug 2025 – Sept 2025"
  },
  {
    id: "raam-ather-website",
    title: "Raam Ather Website",
    description: "Developed RAAM Ather dealership website with EV models and lead capture.",
    longDescription: "Developed RAAM Ather dealership website with EV models and lead capture. Built dynamic admin dashboard reducing content deployment time.",
    tech: ["Next.js", "Node.js", "MongoDB", "React"],
    category: "Software",
    liveUrl: "https://raamather.com/",
    featured: true,
    period: "Aug 2025 – Present"
  },
  {
    id: "raam-mg-website",
    title: "Raam MG Website",
    description: "Developed MG Motors website showcasing car lineup with integrated lead capture.",
    longDescription: "Developed MG Motors website showcasing car lineup with integrated lead capture. Increased user conversion by 25% and built CMS dashboard for marketing team.",
    tech: ["Next.js", "Node.js", "MongoDB", "React"],
    category: "Software",
    liveUrl: "https://raammg.netlify.app/",
    featured: true,
    period: "Jul 2025 – Present"
  },
  {
    id: "raam-honda-website",
    title: "Raam Honda Website",
    description: "Engineered dealership platform for two-wheelers and service bookings, boosting lead generation efficiency by 40%.",
    longDescription: "Engineered dealership platform for two-wheelers and service bookings, boosting lead generation efficiency by 40%. Added Google Maps store locator and WhatsApp automation.",
    tech: ["Next.js", "Node.js", "MongoDB", "Google Maps API", "WhatsApp API"],
    category: "Software",
    liveUrl: "https://raamhonda.com/",
    featured: true,
    period: "Jun 2025 – Present"
  },
  {
    id: "raam-group-website",
    title: "Raam Group Website",
    description: "Unified all RAAM Group brands under one corporate website.",
    longDescription: "Unified all RAAM Group brands under one corporate website. Created interactive brand dashboard and improved UI consistency.",
    tech: ["Next.js", "Node.js", "React", "Tailwind CSS"],
    category: "Software",
    liveUrl: "https://raamgroup.netlify.app/",
    featured: false,
    period: "May 2025 – Present"
  },
  {
    id: "ev-selector-app",
    title: "EV Selector App",
    description: "Built customer-facing app to compare EVs on price, range, and features.",
    longDescription: "Built customer-facing app to compare EVs on price, range, and features. Integrated Razorpay payments for seamless booking.",
    tech: ["Flutter", "Supabase", "Razorpay", "Dart"],
    category: "Software",
    featured: false,
    period: "Jun 2025 – Present"
  },

  // AI/ML Projects
  {
    id: "pdf-ocr-automation",
    title: "PDF OCR Automation",
    description: "Automated PDF invoice processing using OCR and ML for structured data extraction.",
    longDescription: "Automated PDF invoice processing using OCR and ML for structured data extraction. Reduced manual data entry by 95% through real-time processing.",
    tech: ["Python", "Streamlit", "Tesseract", "PyMuPDF", "OpenCV"],
    category: "AI/ML",
    featured: true,
    period: "Oct 2025 – Present"
  },
  {
    id: "parivahan-automation",
    title: "Parivahan Automation",
    description: "Automated vehicle registration data extraction from Parivahan portal.",
    longDescription: "Automated vehicle registration data extraction from Parivahan portal. Built preprocessing pipeline to clean and merge datasets for analytics.",
    tech: ["Python", "Selenium", "Pandas", "BeautifulSoup"],
    category: "AI/ML",
    featured: false,
    period: "Aug 2025 – Sept 2025"
  },
  {
    id: "image-caption-marathi",
    title: "Image Caption Generator in Marathi",
    description: "Created ML-based image captioning system for Marathi language using deep learning architectures.",
    longDescription: "Created ML-based image captioning system for Marathi language using deep learning architectures including CNN-LSTM models for accurate Marathi language generation.",
    tech: ["Python", "TensorFlow", "CNN", "LSTM", "Keras"],
    category: "AI/ML",
    featured: false,
    period: "Sept 2024 – Jan 2025"
  },
  {
    id: "cancer-detection",
    title: "Cancer Detection Using Image Processing",
    description: "Developed ML-powered system for early-stage cancer detection using medical imaging data.",
    longDescription: "Developed ML-powered system for early-stage cancer detection using medical imaging data with advanced image processing techniques.",
    tech: ["C++", "OpenCV", "Machine Learning", "Image Processing"],
    category: "AI/ML",
    featured: true,
    period: "Mar 2023 – Nov 2024"
  },

  // Data Analytics Projects
  {
    id: "hyderabad-dealership-mapping",
    title: "Hyderabad Dealership Mapping",
    description: "Built geolocation tool to visualize and manage dealership networks with real-time data visualization.",
    longDescription: "Built geolocation tool to visualize and manage dealership networks with real-time data visualization using Python and Flask.",
    tech: ["Python", "Flask", "Geolocation API", "Leaflet.js", "Pandas"],
    category: "Data Analytics",
    featured: false,
    period: "Jun 2025 – Jul 2025"
  },
  {
    id: "rta-pincode-mapping",
    title: "Interactive RTA Pincode Mapping System",
    description: "Web-based GIS system integrating 679 Telangana pincodes and 31 RTA offices.",
    longDescription: "Web-based GIS system integrating 679 Telangana pincodes and 31 RTA offices. Features include color-coded layers, live updates via Google Sheets API, and responsive visualization.",
    tech: ["Python", "JavaScript", "GeoPandas", "Leaflet.js", "Google Sheets API"],
    category: "Data Analytics",
    featured: true,
    period: "Sept 2025 – Present"
  },
  {
    id: "rto-analytics-dashboard",
    title: "RTO Analytics Dashboard",
    description: "Processed RTO registration data for insights on automotive trends.",
    longDescription: "Processed RTO registration data for insights on automotive trends. Automated Excel dashboards improving reporting efficiency by 35%.",
    tech: ["Excel", "Python", "Pandas", "Power Query", "VBA"],
    category: "Data Analytics",
    featured: false,
    period: "Aug 2025 – Present"
  },

  // Hardware Projects
  {
    id: "android-smart-irrigation",
    title: "Android App for Smart Irrigation System",
    description: "Developed IoT-based Smart Irrigation system using ESP32 & Android app.",
    longDescription: "Developed IoT-based Smart Irrigation system using ESP32 & Android app. Enabled real-time monitoring and patented under Application No. 202521032177 A.",
    tech: ["Android", "Java", "ESP32", "IoT", "Firebase"],
    category: "Hardware",
    featured: true,
    patentNumber: "202521032177 A"
  },
  {
    id: "digital-voltmeter-ammeter",
    title: "Design of Digital Voltmeter/Ammeter",
    description: "Redesigned voltmeter/ammeter with rechargeable battery and auto power-off feature.",
    longDescription: "Redesigned voltmeter/ammeter with rechargeable battery and auto power-off feature using STM32 microcontroller and IAR Embedded Workbench.",
    tech: ["Embedded C", "IAR", "STM32", "Hardware Design"],
    category: "Hardware",
    featured: false,
    period: "Jul 2024 – Present"
  },
  {
    id: "kinetic-green-ev-monitoring",
    title: "Kinetic Green: Smart EV Monitoring System",
    description: "Developed sensor-based EV monitoring for advanced vehicle diagnostics.",
    longDescription: "Developed sensor-based EV monitoring for advanced vehicle diagnostics using STM32 and multiple sensors for real-time vehicle health monitoring.",
    tech: ["STM32", "Embedded C", "Sensors", "CAN Bus", "IoT"],
    category: "Hardware",
    featured: true,
    period: "Jan 2025 – Present"
  },
  {
    id: "smart-drive",
    title: "Smart Drive",
    description: "Created portable multimedia projection device eliminating need for laptops during presentations.",
    longDescription: "Created portable multimedia projection device eliminating need for laptops during presentations using Raspberry Pi and Python.",
    tech: ["Raspberry Pi", "Python", "Hardware Design", "Linux"],
    category: "Hardware",
    featured: false,
    period: "Jan 2025 – Feb 2025"
  },
  {
    id: "virtual-synchronous-generator",
    title: "Virtual Synchronous Generator",
    description: "Designed renewable energy-based VSG for grid stability and integration.",
    longDescription: "Designed renewable energy-based Virtual Synchronous Generator for grid stability and integration using MATLAB simulations.",
    tech: ["MATLAB", "Simulink", "Power Systems", "Control Theory"],
    category: "Hardware",
    featured: false,
    period: "Feb 2025 – Feb 2025"
  },
  {
    id: "air-compressor-optimization",
    title: "Energy Optimization of Air Compressor Systems",
    description: "Built automation system for air compressors using IFM sensors; achieved significant energy savings.",
    longDescription: "Built automation system for air compressors using IFM sensors and CODESYS; achieved significant energy savings through intelligent control.",
    tech: ["CODESYS", "PLC", "IFM Sensors", "Automation", "Industrial IoT"],
    category: "Hardware",
    featured: true,
    period: "Mar 2023 – Nov 2024"
  }
];

export const categories = ["All", "Software", "Hardware", "AI/ML", "Data Analytics"] as const;
