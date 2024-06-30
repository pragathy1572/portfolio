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
      className="mb-28 max-w-[65rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      {/* <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> th
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p> */}
      <p className="mb-3">
      Hello, I'm Pragathy, a passionate full-stack developer based in Bangalore, India. I have a strong foundation in both front-end and back-end technologies and am dedicated to creating user-friendly and engaging web applications. I've had the privilege of working on a variety of exciting projects, from building responsive websites to developing interactive web applications. These experiences have allowed me to hone my skills and stay up-to-date with the latest technologies and tools. I am always eager to take on new challenges and bring innovative ideas to life.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        outdoor games, gardening, and watching TV shows. I also enjoy{" "}
        <span className="font-medium">learning new languages</span>. I am currently
        learning Korean{" "}
        <span className="font-medium">and a little bit of Spanish.</span>
      </p>
    </motion.section>
  );
}
