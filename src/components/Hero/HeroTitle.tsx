import { motion } from 'framer-motion';

export default function HeroTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className='text-5xl font-bold'>Olá, sou Caroline! 🚀</h1>
    </motion.div>
  );
}
