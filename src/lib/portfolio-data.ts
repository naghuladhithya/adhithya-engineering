export const profile = {
  name: "Naghul Adhithya Venkateswaran",
  role: "CS & Data Science @ University of Illinois Urbana–Champaign",
  status: "Seeking Summer/Fall 2027 Internship Roles",
  description:
    "Focused on high-performance systems engineering across GPU-accelerated computing, low-latency execution, distributed systems, and scalable infrastructure.",
  email: "nav5@illinois.edu",
  links: {
    resume: "#",
    github: "https://github.com/naghuladhithya",
    linkedin: "https://linkedin.com/in/naghuladhithya",
    instagram: "https://instagram.com/naghuladhithya__",
    twitter: "https://x.com/naghuladhithya_",
  },
};

export const interests = [
  "Low Latency Computing",
  "GPU Computing & Parallel Systems",
  "Performance Optimization",
  "Distributed Systems & Scalable Infrastructure",
];

export const about = [
  "I build high performance systems with experience spanning machine learning and software engineering. My interests focus on GPU systems, low latency computing, and performance optimization for scalable infrastructure.",
  "I enjoy understanding how systems operate internally and building infrastructure that improves performance, efficiency, and scalability.",
  "Outside of technology, I lead teams, stay driven through running and lifting, document the journey, and capture perspectives through photography.",
];

export const education = {
  school: "University of Illinois Urbana–Champaign",
  degree: "B.S. in Data Science & Information Sciences · Minor in Computer Science",
  date: "Expected May 2029",
  location: "Champaign, Illinois",
};

export const experience = [
  {
    title: "Software Engineering Research Intern",
    company: "The Ohio State University",
    date: "May 2025 – Sept 2025",
    location: "Columbus, OH",
    points: [
      "Engineered benchmarking pipelines evaluating human vs LLM-generated object-oriented systems across programming workflows.",
      "Analyzed abstraction quality, modularity, and reasoning efficiency in collaborative human–AI software engineering paradigms.",
      "Developed reproducible evaluation frameworks for cognitive variation analysis in generative programming environments.",
    ],
  },
  {
    title: "Machine Learning Systems Intern",
    company: "Delhi Technological University",
    date: "May 2025 – July 2025",
    location: "Remote",
    points: [
      "Designed multimodal biometric authentication pipelines integrating keystroke dynamics, achieving 99.47% classification accuracy.",
      "Optimized deep learning feature extraction using metaheuristic algorithms, improving cross-modal verification scalability.",
      "Evaluated distributed identity inference workflows under heterogeneous conditions for reliable real-time authentication.",
    ],
  },
  {
    title: "Generative AI Engineering Intern",
    company: "Indian Institute of Information Technology, Tiruchirappalli",
    date: "May 2024 – July 2024",
    location: "Remote",
    points: [
      "Fine-tuned FLUX.1-dev diffusion architectures with LoRA adapters for controllable sketch-to-image generation rendering.",
      "Optimized latent diffusion and prompt-conditioning workflows, improving texture preservation and generative consistency by 20%.",
      "Engineered style-transfer pipelines enabling scalable prompt-guided colorization and artistic image synthesis.",
    ],
  },
  {
    title: "ML & Data Analytics Research Intern",
    company: "Incognito Blueprints",
    date: "May 2023 – Aug 2023",
    location: "San Francisco, CA",
    points: [
      "Designed ML pipelines with ModelOps principles, boosting throughput 25% for 20+ SMB clients using MySQL.",
      "Optimized decision systems with real-time inference and performance analysis, improving accuracy by 20% and reducing lag by 30%.",
      "Published reproducible research enabling scalable experimentation and integrated NLP workflows into distributed ML systems.",
    ],
  },
];

export const projects = [
  {
    title: "Real-Time Driver Drowsiness Detection",
    tag: "Springer · ICMEET",
    description:
      "Deep learning-based driver monitoring using Eye Aspect Ratio, facial landmarks, and HSV-based sunglass detection for safety-critical transportation environments.",
    tech: ["TensorFlow", "OpenCV", "Deep Learning"],
  },
  {
    title: "Real-Time Vehicle Detection & Counting",
    tag: "Springer Publication · ICDSA",
    description:
      "YOLOv8-based traffic analytics pipeline for real-time congestion monitoring with centroid-based multi-object tracking.",
    tech: ["YOLOv8", "Computer Vision"],
  },
  {
    title: "Ethical AI Vision System",
    tag: "Team Lead · 4 Engineers",
    description:
      "Led a four-member global team developing AI-powered driver monitoring achieving 95% detection accuracy. Integrated OpenCV and TensorFlow pipelines for real-time eye tracking with fairness and bias mitigation review.",
    tech: ["OpenCV", "TensorFlow"],
  },
];

export const skills = [
  { category: "Languages", items: ["Python", "C++", "JavaScript", "SQL", "HTML", "CSS"] },
  { category: "Frameworks", items: ["PyTorch", "TensorFlow", "Scikit-Learn", "React", "Flask", "Node.js"] },
  { category: "Infrastructure", items: ["MySQL", "Vercel", "Distributed Systems", "ModelOps"] },
  { category: "Developer Tools", items: ["Git", "GitHub", "VS Code", "Jupyter"] },
  { category: "AI / ML", items: ["Machine Learning", "Deep Learning", "Computer Vision", "Generative AI", "NLP"] },
  { category: "Systems", items: ["GPU Computing", "Low Latency", "Performance Optimization", "Parallel Systems"] },
];

export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects & Research" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
