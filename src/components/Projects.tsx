const projects = [
  {
    name: 'Profit-e',
    description:
      'Desenvolvimento de e-commerces utilizando HTML, CSS, acessibilidade e Angular.',
  },
  {
    name: 'Nexo Jornal',
    description:
      'Criação de experiências interativas para uma plataforma de notícias inovadora. Participei ativamente da criação e coordenação da matéria premiada do Nexo Jornal sobre o SUS, contribuindo no desenvolvimento técnico e na gestão do projeto, que abordou o passado, o presente e o futuro do Sistema Único de Saúde.',
    // https://ijf.org.br/o-que-e-de-onde-veio-e-para-onde-vai-o-sus/?utm_source=chatgpt.com
  },
  {
    name: 'Radix - Braskem',
    description:
      'Modernização de sistema petroquímico, migração de componentes de classe para funcionais, implementação de design system, testes com Jest e React Testing Library.',
  },
  {
    name: 'Linker Banco',
    description:
      'Desenvolvimento de interfaces e criação da funcionalidade de devolução do Pix, agregando valor ao banco, além de outras features.',
  },
];

export default function Projects() {
  return (
    <section id='projects' className='py-20 bg-gray-900 text-white'>
      <h2 className='text-center text-4xl font-bold'>
        Alguns projetos dos quais participei.
      </h2>
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
