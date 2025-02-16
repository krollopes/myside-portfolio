import { projects } from '../../data/projectsData';
import Contact from '../Contact/Contact';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id='projects' className='py-20 pr-4 pl-4 bg-gray-900 text-white'>
      <h2 className='text-center text-4xl font-bold'>
        Alguns projetos dos quais participei.
      </h2>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${
              index === projects.length - 1 && projects.length % 3 !== 0
                ? 'md:col-span-1 md:col-start-2'
                : ''
            }`}
          >
            <ProjectCard
              name={project.name}
              description={project.description}
              link={project.link}
            />
          </div>
        ))}
      </div>
      <Contact />
    </section>
  );
}
