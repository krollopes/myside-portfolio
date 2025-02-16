import Contact from './Contact';

const projects = [
  {
    name: 'Profit-e',
    description:
      'Desenvolvimento de e-commerces personalizados, garantindo acessibilidade e usabilidade aprimorada para lojas online. Implementação de componentes reutilizáveis e otimização da experiência do usuário.',
  },
  {
    name: 'Nexo Jornal',
    description: (
      <>
        Criação de experiências interativas para uma plataforma de notícias
        inovadora. Participei ativamente da criação e coordenação da matéria{' '}
        <a
          href='https://ijf.org.br/o-que-e-de-onde-veio-e-para-onde-vai-o-sus/?utm_source=chatgpt.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <strong>premiada</strong>
        </a>{' '}
        do Nexo Jornal sobre o SUS, contribuindo no desenvolvimento técnico e na
        gestão do projeto. Além disso, desenvolvi infográficos interativos e
        otimizações de desempenho para garantir um carregamento eficiente.
      </>
    ),
  },
  {
    name: 'Radix - Braskem',
    description:
      'Modernização de sistemas petroquímicos para garantir escalabilidade e eficiência. Refatoração de código migrando de componentes de classe para funcionais, implementação de design system e cobertura de testes com Jest e React Testing Library.',
  },
  {
    name: 'Linker Banco',
    description:
      'Desenvolvimento de interfaces e criação da funcionalidade de devolução de Pix, agregando valor ao banco digital. Implementação de novas features e otimização de componentes para melhorar a performance e escalabilidade da aplicação.',
  },
];

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
            className={`bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition ${
              index === projects.length - 1 && projects.length % 3 !== 0
                ? 'md:col-span-1 md:col-start-2'
                : ''
            }`}
          >
            <h3 className='text-xl font-semibold'>{project.name}</h3>
            <p className='mt-2'>{project.description}</p>
          </div>
        ))}
      </div>
      <Contact />
    </section>
  );
}
