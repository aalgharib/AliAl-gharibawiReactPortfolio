import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import heroImage from "../assets/hero-image.png";

export const HERO_CONTENT = `I build AI-powered automation systems and full-stack web applications. Founder of Synosys — delivering intelligent voice agents and intake workflows for healthcare, law, real estate, and consulting.`;

export const ABOUT_TEXT = `I'm an AI Software Engineer and founder of Synosys, an AI automation agency building intelligent intake and client engagement systems for professional service firms. My work sits at the intersection of full-stack development and applied AI — spanning voice agents, LLM-powered workflows, multilingual interfaces, and production-grade web platforms.

With hands-on experience across healthcare, law, real estate, and consulting, I focus on real-world outcomes: reducing friction for end-users, automating repetitive processes, and delivering systems that hold up under actual usage. I lead end-to-end — from architecture and backend APIs to front-end polish and deployment.

I stay close to what's emerging in AI tooling and apply it practically, not theoretically.`;

export const EXPERIENCES = [
  {
    year: "2025 – Present",
    role: "AI Software Engineer",
    company: "Synosys",
    description: `Building AI intake and automation systems for professional service firms across healthcare, law, real estate, and consulting. Developing voice agents, LLM-powered workflows, and client-facing platforms that automate lead capture, intake, and follow-up processes at scale.`,
    technologies: ["Python", "LangChain", "OpenAI", "React", "Node.js", "Vite"],
  },
  {
    year: "2024 – Present",
    role: "Website Administrator",
    company: "Al-Mahdi Centre",
    description: `Managed domain hosting and website migration. Oversaw content assistants and provided technical support. Developed software and designed website elements. Created documentation on website processes and collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["JavaScript", "React.js", "Node.js", "WordPress"],
  },
  {
    year: "2023 – 2024",
    role: "Full Stack Developer",
    company: "Windsor Renovation to Perfection",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["WordPress", "PHP", "Next.js", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Voice Agent – Real Estate",
    image: heroImage,
    description:
      "AI-powered voice agent that handles property inquiries, qualifies leads, and books appointments autonomously — built for real estate firms to eliminate manual intake.",
    technologies: ["Python", "LangChain", "OpenAI", "Voice AI", "Twilio"],
    link: "https://www.youtube.com/watch?v=WcK0cxCGoDU",
    type: "video",
  },
  {
    title: "Voice Agent – Healthcare",
    image: "https://img.youtube.com/vi/XxkupLJ3u24/hqdefault.jpg",
    description:
      "AI voice agent for patient intake and appointment scheduling. Automates the front-desk experience for healthcare providers, reducing no-shows and admin overhead.",
    technologies: ["Python", "LangChain", "OpenAI", "Voice AI"],
    link: "https://www.youtube.com/watch?v=XxkupLJ3u24",
    type: "video",
  },
  {
    title: "Synosys Content & Campaign Platform",
    image: null,
    description:
      "Full-stack platform for AI-driven content creation and campaign management. Enables professional service firms to generate, schedule, and publish targeted content at scale.",
    technologies: ["React", "Node.js", "OpenAI", "Tailwind CSS", "PostgreSQL"],
    link: "https://platform.synosys.io/",
    type: "platform",
  },
  {
    title: "Synosys – AI Automation Agency",
    image: null,
    description:
      "Designed, built, and launched the Synosys agency website. Showcases AI automation services for professional service firms with conversion-focused design and clear service positioning.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    link: "https://synosys.io/",
    type: "website",
  },
  {
    title: "AI Doctor Diagnosis Assistant",
    image: project1,
    description:
      "Academic AI system designed to assist with medical diagnosis. Uses machine learning and NLP to analyze symptoms and suggest differential diagnoses. Built as part of COMP 385/402.",
    technologies: ["Python", "Machine Learning", "NLP", "Flask", "scikit-learn"],
    link: "https://github.com/aalgharib/AI-DOCTOR-DIAGNOSIS-ASSIST-COMP385-402",
    type: "github",
  },
  {
    title: "Multilingual Chatbot",
    image: project2,
    description:
      "Cloud ML-powered chatbot supporting multiple languages, built with LangChain and Hugging Face. Features per-session conversation memory, fine-tunable on domain-specific data, with a React frontend and REST API.",
    technologies: ["Python", "Flask", "LangChain", "Hugging Face", "React", "AWS"],
    link: "https://github.com/aalgharib/Multilingual-Chatbot-",
    type: "github",
  },
];

export const CONTACT = {
  address: "London, ON, Canada",
  phoneNo: "+1 519 991 4046",
  email: "aalgharibawi@gmail.com",
};
