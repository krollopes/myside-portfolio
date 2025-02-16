'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className='h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white'>
      <motion.h1
        className='text-5xl font-bold'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Olá, sou Caroline! 🚀
      </motion.h1>
      <motion.p
        className='mt-4 text-xl'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Front-end Engineer | Next.js | TypeScript | UX/UI
      </motion.p>
    </section>
  );
}
