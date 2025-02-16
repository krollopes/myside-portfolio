'use client';
import HeroDescription from './HeroDescription';
import HeroTitle from './HeroTitle';

export default function Hero() {
  return (
    <section
      className='h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white'
      aria-labelledby='hero-title'
    >
      <HeroTitle />
      <HeroDescription />
    </section>
  );
}
