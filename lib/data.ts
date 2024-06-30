import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import foodordering from "@/public/food-ordering.png";
import bookMyStay from "@/public/bookmystay.png";
import messenger from "@/public/messenger.png";
import ecommerceAdmin from "@/public/ecommerce-admin.png";
import ecommerceFront from "@/public/ecommerce-front.png";
import weather from "@/public/weather.png";


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
    title: "PES University",
    location: "Bangalore, India",
    description:
      "BTech - Computer Science Engineering. CourseWork: DSA, ML, NLP, Data Analytics, Deep Learning, Web Development.",
    icon: React.createElement(LuGraduationCap),
    date: "Dec, 2020 - May, 2024",
  },
  {
    title: "Subex - Java Developer Intern",
    location: "Bangalore, India",
    description:
      "Resolving critical bugs and issues related to Subex's product ROCPS. Includes working with tools such as Jenkins, DBeaver, Putty, Eclipse, GitLab, Git and SVN",
    icon: React.createElement(CgWorkAlt),
    date: "Jan, 2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "TastyTwist.com",
    description:
      "A dynamic food ordering app with authentication, sorting, filtering, pagination, restaurant and cart management, and live order status tracking",
    tags: ["MERN", "TypeScript", "Tailwind", "cors", "Cloudinary", "Stripe"],
    imageUrl: foodordering,
    link: "https://tastytwist-app-frontend.onrender.com",
  },
  {
    title: "BookMyStay.com",
    description:
      "A hotel booking app with key features such as user authentication, hotel management, image uploads, searching, sorting, filter, payment checkout, and booking management",
    tags: ["MERN", "TypeScript", "Tailwind", "bcrypt", "Cloudinary", "Stripe"],
    imageUrl: bookMyStay,
    link:"https://bookmystay-nvmm.onrender.com",
  },
  {
    title: "Messenger Clone",
    description:
      "A real-time messaging app with notifications, user authentication, online/offline user status, group chats, and message attachments.",
    tags: ["Next.js", "Typescript", "Tailwind", "axios", "Pusher", "Prisma"],
    imageUrl: messenger,
    link:"https://messenger-clone-ro6n7g7db-pragathys-projects.vercel.app/",
  },
  {
    title: "Ecommerce App",
    description:
      "A simple ecommerce app with product catalog, cart management, payment gateway integrated with stripe and responsive design.",
    tags: ["Next.js", "axios", "mongodb", "stripe"],
    imageUrl: ecommerceFront,
    link:"https://next-ecommerce-front.onrender.com/",
  },
  {
    title: "Ecommerce Admin",
    description:
      "An ecommerce admin page to add and edit products and categories, maintain and displays orders along with login functionality.",
    tags: ["Next.js", "next-auth", "aws-s3", "mongodb", "axios"],
    imageUrl: ecommerceAdmin,
    link:"https://next-ecommerce-admin-b6d7oy7ho-pragathys-projects.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "javascript", "CSS", "Weather-api"],
    imageUrl: weather,
    link:"https://pragathy1572.github.io/weather-app/",
  },
] as const;

export const skillsData = [
  "Python",
  "C++",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "SQL",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express.js",
  "PostgreSQL",
] as const;
