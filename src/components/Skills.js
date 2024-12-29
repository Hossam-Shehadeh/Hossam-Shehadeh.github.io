"use client";

import { useState } from "react";
import { Code, Monitor, Cloud, GitBranch, Settings } from "lucide-react";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons

const skills = [
  {
    name: "Coding Wizards",
    icon: Code,
    items: [
      { skill: "JavaScript", level: "Expert" },
      { skill: "Python", level: "Intermediate" },
      { skill: "C++", level: "Intermediate" },
      { skill: "Go", level: "Beginner" },
    ],
  },
  {
    name: "Design & Tools",
    icon: Settings,
    items: [
      { skill: "Figma", level: "Beginner" },
      { skill: "Postman", level: "Intermediate" },
      { skill: "Trello", level: "Advanced" },
      { skill: "Jira", level: "Intermediate" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    icon: Monitor,
    items: [
      { skill: "React JS", level: "Intermediate" },
      { skill: "Express.js", level: "Expert" },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    items: [
      { skill: "Azure", level: "Beginner" },
      { skill: "Docker", level: "Intermediate" },
      { skill: "Kubernetes", level: "Beginner" },
    ],
  },
  {
    name: "Project Management",
    icon: GitBranch,
    items: [
      { skill: "Agile/Scrum", level: "Expert" },
      { skill: "Team Collaboration", level: "Intermediate" },
      { skill: "Project Planning", level: "Advanced" },
    ],
  },
  {
    name: "Other Skills",
    icon: FaGithub,
    items: [
      { skill: "GitHub", level: "Expert" },
      { skill: "RestAPI", level: "Advanced" },
    ],
  },
];

const Skills = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % skills.length);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + skills.length) % skills.length);
  };

  const currentSkill = skills[currentPage];

  return (
    <section id="skills" className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 text-gray-900">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-5xl font-semibold mb-12 text-gray-800">My Professional Skills</h2>
        <div className="mb-8">
          <currentSkill.icon className="w-20 h-20 text-gray-700 mx-auto transform transition-all duration-300 hover:scale-110" />
        </div>
        <h3 className="text-3xl font-semibold mb-6 text-gray-700">{currentSkill.name}</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center text-xl">
          {currentSkill.items.map(({ skill, level }) => (
            <li
              key={skill}
              className="bg-white text-gray-800 px-6 py-6 rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/50"
            >
              <strong className="text-xl">{skill}</strong> - <span className="italic text-gray-600">{level}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex justify-center space-x-10">
          <button
            onClick={handlePrev}
            className="p-4 bg-gray-600 text-white rounded-full shadow-lg transform transition-all duration-300 hover:bg-gray-700 hover:scale-110"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="p-4 bg-gray-600 text-white rounded-full shadow-lg transform transition-all duration-300 hover:bg-gray-700 hover:scale-110"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
