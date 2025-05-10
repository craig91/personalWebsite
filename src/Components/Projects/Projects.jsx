import { ProjectCard } from "../ProjectCardComponent/ProjectCard";
import { FaReact, FaCss3Alt, FaGithub, FaNodeJs, FaCss3 } from "react-icons/fa";

export function Projects() {
    const projectData = [
        {
            title: 'Portfolio Website',
            description: 'A personal portfolio showcasing my projects and skills',
            link: 'https://github.com/craig91/personalWebsite',
            tech: [<FaReact />, <FaCss3 />, <FaGithub />, <FaNodeJs />]
        },
        {
            title: 'Weather App',
            description: 'A personal portfolio showcasing my projects and skills',
            link: 'https://github.com/craig91/personalWebsite',
            tech: [<FaReact />, <FaCss3 />, <FaGithub />, <FaNodeJs />]
        },
        {
            title: 'Task Manager',
            description: 'A personal portfolio showcasing my projects and skills',
            link: 'https://github.com/craig91/personalWebsite',
            tech: [<FaReact />, <FaCss3 />, <FaGithub />, <FaNodeJs />]
        }
    ]
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-list">
                {projectData.map((proj, idx) => (
                    <ProjectCard
                        key={idx}
                        title={proj.title}
                        description={proj.description}
                        link={proj.link}
                        tech={proj.tech}            
                        />
                ))}
            </div>
        </section>
    );
}