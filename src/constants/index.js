import yugen from "../assets/projects/yugen.png";
import textUtilis from "../assets/projects/textUtilis.png";
import portfolio from "../assets/projects/portfolio.png";
import CMS from "../assets/projects/CMS.jpeg";
import laprec from "../assets/projects/laprec.jpeg";
import gabru_manto from "../assets/projects/gabru_manto.jpeg";

export const HERO_CONTENT = `I am a passionate full stack developer adept at crafting robust and scalable web applications. With expertise in front-end technologies such as React and Next.js, and back-end technologies including Node.js, MySQL, PostgreSQL, and MongoDB, I also bring experience in the MERN stack. My goal is to leverage my skills to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a passionate and versatile full stack developer with extensive experience in building efficient and user-friendly web applications. Proficient in technologies such as React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB, I bring a deep curiosity for technology and a commitment to continuous learning. My career has been driven by a desire to understand and innovate, allowing me to excel in collaborative settings and tackle complex challenges. Outside of coding, I stay active, explore emerging technologies, and contribute to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Software Development Intern",
    company: "Senarios",
    description:
      "Contributed to the development of web applications using JavaScript and React.js. Assisted in building user interfaces and improving application performance. Collaborated with the development team to implement features and fix bugs. Gained practical experience in full-stack development and agile methodologies.",
    technologies: ["JavaScript", "React.js"],
  },
  {
    year: "2023",
    role: "Bootcamp Participant",
    company: "Devsinc",
    description:
      "Contributed to the development of web applications using MERN stack. Assisted in building user interfaces and improving application performance. Collaborated with the development team to implement features and fix bugs. Gained practical experience in full-stack development and agile methodologies.",
    technologies: [
      "MERN Stack",
      "React.js",
      "Node.js",
      "Mongodb",
      "Express.js",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Gabru-Manto",
    image: gabru_manto,
    description:
      "This website, built using the MERN stack, allows users to compare various foods by evaluating their taste and price. It provides a scalable platform to assess and rank different food options based on these criteria.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node",
      "MongoDb",
      "Tailwind",
    ],
  },
  {
    title: "Complaint Management System",
    image: CMS,
    description:
      "The Complaint Management System (CMS) for the SDA project is designed to streamline and automate the process of handling and resolving complaints. It enables users to submit, track, and manage complaints efficiently, ensuring timely responses and resolutions. The system features intuitive dashboards for monitoring complaint status and analytics, improving overall customer satisfaction and operational efficiency.",
    technologies: ["C++", "OOP"],
  },
  {
    title: "Laprec",
    image: laprec,
    description:
      "A personalized laptop recommendation system that helps users find the best laptop based on their preferences and needs. Input your budget, primary use, and desired specifications, and receive tailored recommendations from our comprehensive database.",
    technologies: ["Svelt", "Python", "JavaScript", "HTML", "CSS", "Python"],
  },
  {
    title: "Yugen",
    image: yugen,
    description:
      "This clothing-selling website, developed using MySQL, C#, and ASP.NET, offers a seamless and dynamic shopping experience. It integrates MySQL for robust database management, C# for server-side logic, and ASP.NET for building a responsive and interactive web interface. The platform provides users with an intuitive interface for browsing and purchasing clothing items, with features for managing inventory, processing orders, and handling customer accounts.",
    technologies: ["C#", "mysql", "ASP.NET"],
  },
  {
    title: "Text-Utilis",
    image: textUtilis,
    description:
      "Textutils is a versatile utility designed to manipulate text according to your needs. Whether you want to format, transform, or analyze text, this tool provides a range of features to help you customize and optimize your content efficiently.",
    technologies: ["React", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind"],
  },
];

export const CONTACT = {
  address: "Lahore,Pakistan. ",
  phoneNo: "0331-7332377 ",
  email: "abdullahfayyaz.5208@gmail.com",
};
