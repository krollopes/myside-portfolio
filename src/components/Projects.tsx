const projects = [
  {
    name: 'Nexo Políticas Públicas',
    description: 'Premiação por matéria do SUS.',
  },
  {
    name: 'Modernização Braskem',
    description: 'React Class → Functional, testes e design system.',
  },
  { name: 'Linker', description: 'Implementação da devolução do PIX.' },
];

export default function Projects() {
  return (
    <section id='projects' className='py-20 bg-gray-900 text-white'>
      <h2 className='text-center text-4xl font-bold'>Projetos</h2>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition'
          >
            <h3 className='text-xl font-semibold'>{project.name}</h3>
            <p className='mt-2'>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
