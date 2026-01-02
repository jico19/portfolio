// SkillsSection.jsx
import React from "react";
import { SiPython, SiDjango, SiReact, SiChakraui, SiTailwindcss } from "react-icons/si";

const skills = [
    { name: "Python", icon: <SiPython color="#306998" /> },
    { name: "Django", icon: <SiDjango color="#092E20" /> },
    { name: "React", icon: <SiReact color="#61DAFB" /> },
    { name: "Chakra UI", icon: <SiChakraui color="#319795" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },
];

const SkillsSection = () => {
    return (
        <section className="py-10">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center">
                            <div className="text-5xl mb-2">{skill.icon}</div>
                            <p className="text-lg font-medium">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
