'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className='h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className='text-5xl font-bold'>Olá, sou Caroline! 🚀</h1>
      </motion.div>
      <motion.div
        className='mt-2 flex justify-center'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className='text-xl flex items-center gap-2 pr-2 md:pr-4'>
          Front-end Engineer | Next.js | TypeScript | UX/UI
        </p>
      </motion.div>
    </section>
  );
}
