import ProjectContainer from "../component/project-container"
import Text from "../component/Text"

const Projects = () => {
    const projects = [
        {
            project_title: "Project-1",
            project_image: "",
            content: "A full-stack contact management app.",
            date_created: "01/01/2026",
            tech_stack: ["Django", "React", "Tailwind"],
            features: [
                "Authentication",
                "Contact Management",
                "Time Formatting",
                "Filtering",
                "Profile Pictures",
            ],
        },
        {
            project_title: "Project-2",
            project_image: "",
            content: "Sample project 2 description here.",
            date_created: "01/02/2026",
            tech_stack: ["Node.js", "React"],
            features: ["REST API", "Responsive UI", "CRUD Operations"],
        },
        {
            project_title: "Project-3",
            project_image: "",
            content: "Sample project 3 description here.",
            date_created: "01/02/2026",
            tech_stack: ["Python", "React"],
            features: ["Data Processing", "Charts", "Export CSV"],
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-20">
            {projects.map((project, index) => (
                <ProjectContainer
                    key={index}
                    className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transform transition duration-300"
                >
                    {/* Project Image */}
                    <img
                        src={project.project_image || "https://placehold.co/600x400"}
                        alt={project.project_title}
                        className="w-full h-48 object-cover"
                    />

                    {/* Project Content */}
                    <div className="p-4 flex flex-col gap-3">
                        <h2 className="text-xl font-bold">{project.project_title}</h2>
                        <Text variant="base">{project.content}</Text>

                        {/* Tech Stack */}
                        {project.tech_stack && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.tech_stack.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Short Features */}
                        {project.features && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.features.map((feature, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        )}

                        <Text variant="sm" className="text-gray-500 mt-2">
                            Date Created: {project.date_created}
                        </Text>
                    </div>
                </ProjectContainer>
            ))}
        </div>
    );
};

export default Projects;
