import Link from 'next/link';

export default function Header() {
  return (
    <header className='w-full py-4 pl-4 pr-4 bg-black text-white'>
      <nav className='container mx-auto flex justify-between items-center'>
        <h1 className='text-xl font-bold'>Caroline Dev</h1>
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
