import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import securedominationImg from "@/public/graph-algorithms1.png";
import phishingImg from "@/public/phishing.png";
import classroomImg from "@/public/classmanage.png";
import chessImg from "@/public/chesssup.png";
import blog from "@/public/blog.png";
import prot from "@/public/prot.png";
import chatapp from "@/public/Screenshot 2024-10-31 124442.png"

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Memeber",
    location: "CSEA NIT Andhra Pradesh",
    description:
      "I word as designer and designed near 50+ posters for events and workshops. I also upskilled in Ui/Ux design.",
    icon: React.createElement(CgWorkAlt),
    date: "AUG 2022 - AUG 2023",
  },
  {
    title: "Research Intern",
    location: "NIT Warangal",
    description:
      "During the internship, I proposed a genetic algorithm-based solution for solving a well-known variant of the domination problem called secure domination problem. Presented the GENETIC ALGORITHM FOR SECURE DOMINATION PROBLEM paper in ICAMM_2023 Conference (IIT Indore) and got accepted.",
    icon: React.createElement(CgWorkAlt),
    date: "JUN 2023 - AUG 2023",
  },
  {
    title: "Executive Member",
    location: "Graphic Cafe NIT Andhra Pradesh",
    description:
      "I working as desinger. I familiar with Adobe Photoshop, Adobe Illustrator, Adobe XD, Figma, Canva",
      icon: React.createElement(CgWorkAlt),
    date: "SEP 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Blogging Website",
    description:
      "Built a responsive MERN stack blog with secure authentication, admin controls, and advanced features like dynamic search and dark mode, deployed on Render.",
    tags: ["React", "JavaScript", "MongoDB", "Node.js", "Express"],
    imageUrl: blog,
    url: "https://sgks-blog.onrender.com/",
  },
  {
    title: "Personal Portfolio",
    description:
      "The project involves building a modern, responsive portfolio website using Next.js, TypeScript, Tailwind CSS, and live deployment on Vercel.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    imageUrl: prot,
    url: "https://sgk-portfolio.vercel.app/",
  },
  {
    title: "ChatApp",
    description:
      "A complete android chat app built with flutter and firebase that includes user authentication, real-time meassaging.",
    tags: ["React", "JavaScript", "MongoDB", "Node.js", "Express"],
    imageUrl: chatapp,
    url: "/app-release.apk",
  },
  {
    title: "Genetic and PSO algorithms for secure domination problem",
    description:
      "Developed to identify the optimal solution for secure domination problem using Genetic and PSO algorithms.",
    tags: ["Python", "Algorithms", "Graphs"],
    imageUrl: securedominationImg,
    url: "https://github.com/gopal0204/Genetic-and-PSO-algorithum-for-secure-domination-number",
  },
  {
    title: "Phishing URL Detection",
    description:
      "Developed a model to block fraudulent websites designed to steal sensitive information.",
    tags: ["Python", "HTML", "CSS", "Pandas", "NumPy", "Machine Learning"],
    imageUrl: phishingImg,
    url: "https://github.com/gopal0204/Phishing_Url_Detection",
  },
  {
    title: "Chesssup",
    description:
      "Developed a web app for playing chess online with friends. It has features like real-time chat, game history, and game analysis.",
    tags: ["React", "Redux", "JavaScript", "MongoDB", "Node.js", "Socket.io", "Express"],
    imageUrl: chessImg,
    url: "https://github.com/gopal0204/chesssup",
  },
  {
    title: "Classroom Management System",
    description:
      "Built a web app for managing classrooms, students, and teachers, with attendance, grading, and reminders.",
    tags: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
    imageUrl: classroomImg,
    url: "https://github.com/gopal0204/Classroom_Management_System",
  },
  
  
] as const;

export const skillsData = [
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "GitHub",
  "Express",
  "MongoDB",
  "Redux",
  "PowerBI",
  "MySQL",
  "C",
  "C++",
  "NumPy",
  "Pandas",
  "DSA",
  "Applied Machine Learning",
  "NLP",
  "Algorithms",
  "Artificial Intelligence",
  "Operating Systems",
  "Computer Networks",
  "Software Engineering",
  "Linux",
  "Flutter",
  "Firebase",
] as const;
