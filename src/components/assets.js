import TrendoraPic from "../assets/projects/Trendora.png";
import FinanceFlow from "../assets/projects/FinanceFlow.png";
import BeeMo from "../assets/projects/Parameter Monitoring.png";
import ProjectManagement from "../assets/projects/ProjectManagement.png";
import AutoCaller from "../assets/projects/autoCaller.png";
import CineSearch from "../assets/projects/CineSearch.png";
import OdinDashboard from "../assets/projects/OdinProject.png";
import JobPortal from "../assets/projects/JobPortal.png";
import Car from "../assets/projects/Car_Configurator.png";
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
import ThinkDraft from "../assets/projects/ThinkDraft.png";
import { Rocket, Trophy, Target, Users } from "lucide-react";
import resume from "../assets/resume.pdf";

export const assets = {
  resume,
};

export const techStackCategory = [
  "All",
  "Laravel",
  "React",
  "PHP",
  "JavaScript",
  "NodeJS"
];

export const projects = [
  {
    id: 1,
    title: "FinanceFlow",
    description:
      "FinanceFlow is a modern and user-friendly personal finance tracker built with Laravel, Tailwind CSS, JavaScript, Chart.js, and MySQL. It features comprehensive expense tracking, budget management, and detailed financial analytics.",
    technologies: ["Laravel", "Blade", "Tailwind CSS", "MySQL", "Chart.js"],
    image: FinanceFlow,
    github: "https://github.com/CJcode6754/FinanceFlow",
    live: "",
    category: "Full Stack",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 2,
    title: "AutoCaller",
    description:
      "A modern Laravel-based platform where users can post cars for sale and receive direct calls from potential buyers. Features advanced search filters, real-time messaging, and integrated payment processing.",
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
  },
  {
    id: 3,
    title: "BeeMo: IoT Beehive Monitor",
    description:
      "BeeMo is an IoT-based, web-enabled monitoring system for Tetragonula biroi, a stingless bee species native to the Philippines. Features environmental monitoring, automated alerts, and comprehensive analytics dashboard.",
    technologies: [
      "PHP",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Chart.js",
      "PHPMailer",
      "Infobip API",
    ],
    image: BeeMo,
    github: "https://github.com/CJcode6754/BeeMo",
    live: "",
    category: "IoT + Backend",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: 4,
    title: "ThinkDraft",
    description:
      "AI-powered blog generation platform utilizing Gemini API to help users create and manage engaging content seamlessly.",
    technologies: ["React", "Express", "NodeJS", "Mongodb", "Tailwind"],
    image: ThinkDraft,
    github: "https://github.com/CJcode6754/ThinkDraft",
    live: "https://think-draft-e8iv.vercel.app",
    category: "Full Stack",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    id: 5,
    title: "Trendora",
    description:
      "E-Commerce platform for buying and selling trending products.",
    technologies: [
      "Laravel",
      "React",
      "TypeScript",
      "Shadcn",
      "Tailwind",
      "Postgres",
    ],
    image: TrendoraPic,
    github: "https://github.com/CJcode6754/Trendora",
    live: "",
    category: "Full Stack",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    id: 6,
    title: "Job Portal",
    description:
      "A modern job portal application that connects job seekers with employers, featuring job listings, CRUD for jobs and user profiles. Built with React for a seamless user experience.",
    technologies: ["React", "React Router", "Tailwind", "JSON Server", "NodeJS"],
    image: JobPortal,
    github: "https://github.com/CJcode6754/JobPortal",
    live: "",
    category: "Full Stack",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    id: 7,
    title: "Project Management System",
    description:
      "A comprehensive project management CRUD application with role-based access control, advanced search capabilities, task assignment, and progress tracking. Built with modern React and Laravel stack.",
    technologies: ["React", "Inertia.js", "Laravel", "Tailwind CSS", "MySQL"],
    image: ProjectManagement,
    github: "https://github.com/CJcode6754/Project_Management",
    live: "",
    category: "Full Stack",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 8,
    title: "CineSearch",
    description:
      "A modern and responsive movie browsing application that allows users to search for movies, view trending content, and access detailed movie information with beautiful UI animations.",
    technologies: ["React", "Tailwind CSS", "NodeJS", "Appwrite", "TMDB API"],
    image: CineSearch,
    github: "https://github.com/CJcode6754/CineSearch",
    live: "https://cine-search-delta.vercel.app",
    category: "Frontend",
    gradient: "from-red-500 to-pink-500",
  },
  {
    id: 9,
    title: "Car Color Configurator",
    description:
      "Website where you can modify car colors (exterior & interior) and calculate the prize of Tesla Model Y based on the configuration.",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    image: Car,
    github: "https://github.com/CJcode6754/car_color_configuration",
    live: "https://car-color-configuration.vercel.app",
    category: "Frontend",
    gradient: "from-red-500 to-pink-500",
  },
  {
    id: 10,
    title: "Odin Dashboard",
    description:
      "A sleek and modern responsive dashboard built with pure HTML and CSS, featuring clean design principles and smooth animations for data visualization.",
    technologies: ["HTML", "CSS"],
    image: OdinDashboard,
    github: "https://github.com/CJcode6754/OdinDashboard",
    live: "https://odin-dashboard-alpha.vercel.app",
    category: "Frontend",
    gradient: "from-indigo-500 to-purple-500",
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
  { name: "Tailwind", icon: TailwindIcon, color: "from-cyan-400 to-blue-500" },
  {
    name: "Bootstrap",
    icon: BootstrapIcon,
    color: "from-purple-600 to-blue-600",
  },
  { name: "MySQL", icon: MySQLIcon, color: "from-blue-600 to-indigo-600" },
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
