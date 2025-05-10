import './projectcard.styles.css';

export function ProjectCard ({ title, description, link, tech }) {
    return (
        <div className="project-card">
            <div className='project-image'>
                <img src="https://via.placeholder.com/300x150" alt={`${title} preview`} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className='tech-stack'>
                {tech.map((icon, idx) => (
                    <span key={idx} className='tech-icon'>
                        {icon}
                    </span>
                ))}
            </div>
            <a href="{link}" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
}