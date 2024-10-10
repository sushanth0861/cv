import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, ResumeIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sushanth Ananthabhotla",
  initials: "SA",
  location: "Dallas, Texas",
  locationLink: "https://www.google.com/maps/place/dallas",
  about:
    "Software Engineer",
  summary:
    "Software Engineer specializing in delivering robust applications, leveraging diverse technologies to enhance user experiences and drive impactful solutions.",
  avatarUrl: "https://avatars.githubusercontent.com/u/36995003?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "sxa4991@mavs.uta.edu",
    tel: "+16824174683",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sushanth0861",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sushantha",
        icon: LinkedInIcon,
      },
      {
        name: "Resume",
        url: process.env.NEXT_PUBLIC_RESUME_URL,
        icon: ResumeIcon,
      },
    ],
  },
  education: [
    {
      school: "The University of Texas at Arlington",
      degree: "Master of Science (MS) in Computer Science",
      start: "2023",
      end: "2024",
    },
    {
      school: "Sree Vidyanikethan Engineering College",
      degree: "Bachelor of Technology in Computer Science",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Innovaccer",
      link: "https://innovaccer.com/",
      badges: [],
      title: "Software engineer",
      logo: "",
      start: "2021",
      end: "2023",
      description:
        [
          "• Software Engineer at Innovaccer, worked on customer-facing healthcare applications with Referral Managment Team (InRef) to enhance healthcare referral workflows. ",
          "• Collaborated with product teams to translate requirements into optimized backend solutions",
          "• Enhanced performance and user experience by achieving a reduction in API response times, developing a scalable task processing system,"+
          " and implementing multi-tenant APIs, contributing to better user experiences and efficient client solutions.",
          "Technologies: Python, Django REST framework, MongoDB, PostgresSQL, Elasticsearch, Redis, Celery"
        ],
    }
  ],
  skills: [
    "Python",
    "Javascript",
    "Typescript",
    "Go",
    "Java",
    "Django",
    "Django REST framework",
    "Flask",
    "Spring Boot",
    "FastAPI",
    "pytest",
    "PyMongo",
    "mongoengine",
    "Django ORM",
    "SQLAlchemy",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "gRPC",
    "Redis",
    "Elasticsearch",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Git",
    "AWS",
    "Postman",
    "Kibana"
  ],
  projects: [
    {
      title: "MarketPulse",
      techStack: [
        "LLM",
        "PyTorch",
        "facebook/bart-large-cnn",
        "python",
        "FastAPI",
        "TypeScript",
        "Next.js/React",
        "MongoDb",
      ],
      description:
        "Know what’s the sentiment on Wall Street today",
      logo: "",
      link: {
        label: "https://github.com/sushanth0861/marketpulse_fe",
        href: "https://marketpulse-fe.vercel.app/",
        githubUrl: "https://github.com/sushanth0861/marketpulse_fe"
      },
    },
    {
      title: "Email Organier",
      techStack: [
        "Typescript", "Next.js", "React", "Shadcn", "Node.js", "SQL", "Express", "Drizzle ORM"
      ],
      description:
        "Effortless Email Management: Your Organized Inbox, Simplified.",
      logo: "",
      link: {
        label: "https://github.com/sushanth0861/email-organizer-be",
        href: "https://email-organizer-fe.vercel.app/auth",
        githubUrl: "https://github.com/sushanth0861/email-organizer-be",
      },
    },
    {
      title: "gRPC - File Sync & Computation Service",
      techStack: [
        "gRPC",
        "protobuf",
        "watchdog"
      ],
      description: "Dropbox-style RPC system for real-time file synchronization and computation services.",
      logo: "",
      link: {
        label: "https://github.com/sushanth0861/gRPC_FS_CS",
        href: "",
        githubUrl: "https://github.com/sushanth0861/gRPC_FS_CS",
      }
    },
    {
      title: "Docsy",
      techStack: [
        "Django",
        "PostgreSQL",
        "Ajax",
        "Docker",
        "Selenium"
      ],
      description: "EHR portal for managing prescriptions, reports, and appointments.(Hackathon project)",
      logo: "",
      link: {
        label: "https://github.com/sushanth0861/Docsy_Hackfest",
        href: "",
        githubUrl: "https://github.com/sushanth0861/Docsy_Hackfest"
      }
    },
    {
      title: "Species Detection",
      techStack: [
        "TensorFlow",
        "Keras",
        "scikit-learn",
        "NumPy",
        "Pandas",
        "Matplotlib"
      ],
      description: "Species classification of camera trap images using ResNet and DenseNet with image preprocessing and Exploratory data analysis.",
      logo: "",
      link: {
        label: "https://github.com/sushanth0861/species_detection_python",
        href: "",
        githubUrl: "https://github.com/sushanth0861/species_detection_python"
      }
    },
    {
      title: "Amazon Fine Food Reviews",
      techStack: [
        "Scikit-learn",
        "XGBoost",
        "Seaborn",
        "Matplotlib",
        "NumPy",
        "Pandas"
      ],
      description: "(Sentiment Analysis)Analyzed Amazon reviews, EDA to extract features and preprocess text. Applied advanced featurization techniques and trained multiple ML models.",
      logo: "",
      link: {
        label: "View Project",
        href: "",
        githubUrl: "https://github.com/sushanth0861/Amazon-fine-food-review-analysis"
      }
    }

  ],
} as const;
