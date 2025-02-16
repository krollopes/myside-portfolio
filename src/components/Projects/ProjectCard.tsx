interface ProjectCardProps {
  name: string;
  description: string;
  link?: string;
}

export default function ProjectCard({
  name,
  description,
  link,
}: ProjectCardProps) {
  return (
    <div className='bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition'>
      <h3 className='text-xl font-semibold'>{name}</h3>
      <p className='mt-2'>
        {description.split('premiada').map((part, index) => (
          <span key={index}>
            {part}
            {index === 0 && link && (
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-400 hover:text-blue-600 transition'
              >
                <strong> premiada</strong>
              </a>
            )}
          </span>
        ))}
      </p>
    </div>
  );
}
