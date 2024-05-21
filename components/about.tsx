"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  I am {" "}
  <span className="font-medium">Computer Science and Engineering student</span>{" "}
  at <span className="font-medium">NIT Andhra Pradesh</span>. I have a strong foundation in various programming languages and
  web technologies, including <span className="font-medium">Java, Python, C,
  C++, HTML, CSS,</span> and <span className="font-medium">JavaScript</span>,
  as well as advanced topics like <span className="font-medium">machine
  learning, data structures, algorithms,</span> and{" "}
  <span className="font-medium">database management</span>. I have
  demonstrated a keen interest in research through my work on graph theory
  algorithms during an internship at NIT Warangal, and enjoy applying
  theoretical concepts to practical problems. My projects, such as developing
  a <span className="font-medium">Classroom Management System, multiplayer chess game, Genetic and PSO algorithms for secure domination problem</span> and a{" "}
  <span className="font-medium">Phishing URL Detection system</span>, showcase my
  ability to learn and adapt quickly, solve complex problems, and create
  innovative solutions using frameworks like{" "}
  <span className="font-medium">React, Node.js,</span> and{" "}
  <span className="font-medium">Express.js</span>. Apart from all these, I enjoy to code and explore new technologies.</p>


      <p>
        <span className="italic">In my free time</span>, I enjoy making posters, playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history</span>.
      </p>
    </motion.section>
  );
}
