import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id='contact'
      className='mt-16 py-16 bg-gray-800 text-white text-center'
    >
      <h2 className='text-3xl font-bold'>Entre em contato</h2>
      <p className='mt-4 text-lg'>
        Vamos conversar! Você pode me encontrar nas seguintes plataformas:
      </p>
      <div className='flex justify-center gap-6 mt-6'>
        <a
          href='https://www.linkedin.com/in/caroline-lopes'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 text-blue-400 hover:text-blue-600 transition text-lg'
        >
          <FaLinkedin size={24} /> LinkedIn
        </a>
        <a
          href='https://github.com/seu-usuario'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 text-gray-400 hover:text-gray-600 transition text-lg'
        >
          <FaGithub size={24} /> GitHub
        </a>
      </div>
    </section>
  );
}
