import FinanceFlow from "../assets/projects/FinanceFlow.png";
import IAM from "../assets/projects/IAM.png";
import BeeMo from "../assets/projects/BeeMo.png";
import AutoCaller from "../assets/projects/autoCaller.png";
import CineSearch from "../assets/projects/CineSearch.png";
import ThinkDraft from "../assets/projects/ThinkDraft.png";
import SayHiImage from "../assets/projects/sayHi.png";
import LaravelIcon from "../assets/icons/laravel.svg";
import JavaScriptIcon from "../assets/icons/javascript.svg";
import PHPIcon from "../assets/icons/php.svg";
import NodeJsIcon from "../assets/icons/nodejs.svg";
import TailwindIcon from "../assets/icons/tailwind.svg";
import BootstrapIcon from "../assets/icons/bootstrap.svg";
import MySQLIcon from "../assets/icons/mysql.svg";
import PostgresIcon from "../assets/icons/postgresql.svg";
import FigmaIcon from "../assets/icons/figma.svg";
import GitIcon from "../assets/icons/git.svg";
import ChartJsIcon from "../assets/icons/chartjs.png";
import ReactIcon from "../assets/react.svg";
import ExpressIcon from "../assets/icons/express.svg";
import MongoDBIcon from "../assets/icons/mongodb.svg";
import { Rocket, Trophy, Target, Users } from "lucide-react";
import resume from "../assets/resume.pdf";

export const assets = {
  resume,
};

export const teamProjects = [
  {
    id: "beemo",
    title: "BeeMo: IoT Beehive Monitor",
    description:
      "BeeMo is an IoT-based, web-enabled monitoring system for Tetragonula biroi, a stingless bee species native to the Philippines. This comprehensive system provides real-time environmental monitoring, automated alerts, and detailed analytics to help beekeepers optimize hive conditions and bee health.",
    myRole: "Backend Developer, QA Engineer & Arduino Programmer",
    responsibilities: [
      "Designed and developed backend API architecture using PHP and MySQL with efficient database schema for sensor data",
      "Integrated Arduino microcontrollers with IoT sensors for temperature, humidity, and hive activity monitoring",
      "Implemented automated SMS/email alerts using Infobip API and PHPMailer, ensuring real-time beekeeper notifications",
      "Performed comprehensive testing, quality assurance, and created a responsive data dashboard with Chart.js",
    ],
    technologies: [
      "PHP",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Chart.js",
      "PHPMailer",
      "Infobip API",
      "Arduino",
      "MySQL",
    ],
    image: BeeMo,
    github: "https://github.com/CJcode6754/BeeMo",
    live: "",
    category: "IoT + Backend",
    gradient: "from-yellow-500 to-orange-500",
    teamSize: "3 members",
    duration: "5 months",
    status: "Completed",
  },
];

export const personalProjects = [
  {
    id: "financeflow",
    title: "FinanceFlow",
    description:
      "A comprehensive personal finance management application that empowers users to take control of their financial health through intuitive expense tracking, budget management, and detailed analytics.",
    responsibilities: [
      "Developed full expense tracking and budget management system with categorization, tagging, and spending alerts",
      "Built responsive Tailwind CSS UI and interactive dashboards using Chart.js for financial analytics",
      "Implemented secure authentication/authorization with comprehensive reporting and export features",
      "Designed automated backup and data recovery systems for secure financial data management",
    ],
    technologies: [
      "Laravel",
      "Blade",
      "Tailwind CSS",
      "MySQL",
      "Chart.js",
      "JavaScript",
    ],
    image: FinanceFlow,
    github: "https://github.com/CJcode6754/FinanceFlow",
    live: "",
    category: "Full Stack",
    gradient: "from-green-500 to-emerald-500",
    duration: "2 months",
    status: "Completed",
  },
  {
    id: "thinkdraft",
    title: "ThinkDraft",
    description:
      "An AI-powered blog generation platform that leverages the Gemini API to help content creators generate high-quality, engaging blog posts with intelligent content suggestions and seamless management features.",
    responsibilities: [
      "Integrated Google's Gemini API for AI-driven content generation and tagging",
      "Developed full-stack application with React frontend, Express.js backend, and MongoDB schema",
      "Implemented JWT-based authentication, real-time blog editing, and auto-save functionality",
      "Deployed application with CI/CD pipeline for seamless updates and scalability",
    ],
    technologies: [
      "React",
      "Express",
      "NodeJS",
      "MongoDB",
      "Tailwind",
      "Gemini API",
      "JWT",
    ],
    image: ThinkDraft,
    github: "https://github.com/CJcode6754/ThinkDraft",
    live: "https://think-draft-e8iv.vercel.app",
    category: "Full Stack",
    gradient: "from-pink-500 to-purple-500",
    duration: "1 month",
    status: "Completed",
  },
  {
    id: "autocaller",
    title: "AutoCaller",
    description:
      "A modern Laravel-based platform where users can post cars for sale and receive direct calls from potential buyers. Features advanced search filters, real-time messaging, and integrated payment processing for a seamless selling experience.",
    responsibilities: [
      "Developed car listing system with image uploads, search filters, and detailed specifications",
      "Created responsive Tailwind CSS UI and admin dashboard for managing listings and transactions",
      "Implemented role-based access control, secure authentication, and payment processing",
      "Built backend with Laravel and MySQL for reliable and scalable operations",
    ],
    technologies: [
      "Laravel",
      "Blade",
      "Alpine.js",
      "Tailwind CSS",
      "JavaScript",
      "MySQL",
    ],
    image: AutoCaller,
    github: "https://github.com/CJcode6754/AutoCaller",
    live: "",
    category: "Full Stack",
    gradient: "from-blue-500 to-cyan-500",
    duration: "1 month",
    status: "Completed",
  },
  {
    id: "sayhi",
    title: "SayHi",
    description:
      "A real-time chat application with active user tracking, built using the MERN stack and Socket.io. Features include live messaging, online status indicators, and media sharing capabilities.",
    responsibilities: [
      "Implemented real-time messaging, typing indicators, and read receipts using Socket.io",
      "Built responsive Tailwind CSS UI with media upload and group/private chat functionality",
      "Developed backend with JWT authentication and Cloudinary integration for media storage",
      "Optimized state management with Zustand for performance and minimal re-renders",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Socket.io",
      "Tailwind CSS",
      "Zustand",
      "Cloudinary",
    ],
    image: SayHiImage,
    github: "https://github.com/CJcode6754/sayHi.git",
    live: "",
    category: "Full Stack",
    gradient: "from-pink-500 to-purple-500",
    duration: "1.2 months",
    status: "Completed",
  },
  {
    id: "cinesearch",
    title: "CineSearch",
    description:
      "A modern and responsive movie browsing application that allows users to search for movies, view trending content, and access detailed movie information with beautiful UI animations.",
    responsibilities: [
      "Integrated TMDB API for movie search, trending content, and detailed info pages",
      "Designed responsive Tailwind CSS UI with animations, skeleton screens, and filtering features",
      "Implemented Appwrite backend services for authentication and watchlist functionality",
      "Deployed application on Vercel for optimized performance and accessibility",
    ],
    technologies: ["React", "Tailwind CSS", "NodeJS", "Appwrite", "TMDB API"],
    image: CineSearch,
    github: "https://github.com/CJcode6754/CineSearch",
    live: "https://cine-search-delta.vercel.app",
    category: "Frontend",
    gradient: "from-red-500 to-pink-500",
    duration: "1 week",
    status: "Completed",
  },
  {
    id: "iamaccesscontrol",
    title: "IAM-Style Access Control System",
    description:
      "A full-stack web application implementing a simplified yet powerful Identity and Access Management (IAM) system. Inspired by cloud providers, it enables fine-grained control over application resources via users, groups, and roles.",
    responsibilities: [
      "Developed CRUD operations for users, groups, roles, and permissions with inheritance rules",
      "Built module-level permission system with real-time checks using middleware",
      "Implemented JWT authentication and dynamic admin dashboard with Tailwind CSS",
      "Designed secure, scalable backend API with Express.js and SQLite",
    ],
    technologies: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "SQLite",
      "Axios",
      "JWT",
    ],
    image: IAM,
    github: "https://github.com/YourUsername/IAM-Access-Control",
    live: "",
    category: "Full Stack",
    gradient: "from-indigo-500 to-purple-500",
    duration: "1 months",
    status: "Completed",
  },
];

export const technologies = [
  { name: "Laravel", icon: LaravelIcon, color: "from-red-500 to-orange-500" },
  { name: "React", icon: ReactIcon, color: "from-blue-400 to-cyan-400" },
  {
    name: "JavaScript",
    icon: JavaScriptIcon,
    color: "from-yellow-400 to-orange-400",
  },
  { name: "PHP", icon: PHPIcon, color: "from-purple-500 to-indigo-500" },
  { name: "Node.js", icon: NodeJsIcon, color: "from-green-500 to-emerald-500" },
  { name: "Express", icon: ExpressIcon, color: "from-green-400 to-cyan-400" },
  { name: "Tailwind", icon: TailwindIcon, color: "from-cyan-400 to-blue-500" },
  {
    name: "Bootstrap",
    icon: BootstrapIcon,
    color: "from-purple-600 to-blue-600",
  },
  { name: "MySQL", icon: MySQLIcon, color: "from-blue-600 to-indigo-600" },
  { name: "MongoDB", icon: MongoDBIcon, color: "from-green-400 to-cyan-400" },
  {
    name: "PostgreSQL",
    icon: PostgresIcon,
    color: "from-blue-500 to-slate-600",
  },
  { name: "Figma", icon: FigmaIcon, color: "from-pink-500 to-purple-500" },
  { name: "Git", icon: GitIcon, color: "from-orange-500 to-red-500" },
  { name: "Chart.js", icon: ChartJsIcon, color: "from-green-400 to-cyan-400" },
];

export const stats = [
  {
    number: "8+",
    label: "Projects Completed",
    icon: Rocket,
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "2+",
    label: "Happy Clients",
    icon: Users,
    color: "from-green-500 to-emerald-500",
  },
  {
    number: "6+",
    label: "Months Experience",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
  },
  {
    number: "100%",
    label: "Success Rate",
    icon: Target,
    color: "from-cyan-500 to-blue-500",
  },
];
