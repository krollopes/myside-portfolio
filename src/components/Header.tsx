import Link from 'next/link';

export default function Header() {
  return (
    <header className='w-full py-4 bg-black text-white fixed top-0 left-0 z-50'>
      <nav className='container mx-auto flex justify-between items-center'>
        <h1 className='text-xl font-bold'>
          Caroline - Desenvolvedora Fron End
        </h1>
        <div>
          <Link href='#projects' className='px-4'>
            Projetos
          </Link>
          <Link href='#contact' className='px-4'>
            Contato
          </Link>
        </div>
      </nav>
    </header>
  );
}
