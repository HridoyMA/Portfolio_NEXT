import firstImg from "@/public/portfolio.png";
import secondImg from "@/public/CURD.png";
import thirdImg from "@/public/university_portal.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "Portfolio",
    description:
      "A portfolio for quick analytics on myself. It's showcase my skills and projects.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: firstImg,
  },
  {
    title: "CRUD Operations",
    description:
      "React assignment Project at Learnathon 2.0 powered by Vivasoft. It has features like add, read, update, delete, searching, sorting and pagination.",
    tags: ["React", "TypeScript", "Bootstrap"],
    imageUrl: secondImg,
  },
  {
    title: "University Portal",
    description:
      "University management system, it has three section admin, student and teacher. It has features like add, update, delete.",
    tags: ["JAVA"],
    imageUrl: thirdImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "java",
  "c",
  "c++",
  "Git",
  "Tailwind",
  "Python",
  "Django",
  "Framer Motion",
] as const;