import { motion } from 'framer-motion'

const SentenceAnimation = ({ text }) => {
  const words = text.split(" ");
  const delay = 0.25; // delay each word appearance

  return (
    <div className='flex flex-row'>
      {words.map((word, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: (index) * delay, duration: 1 }}
          className='mr-[8px]'
        >
          {word}
        </motion.div>
      ))}
    </div>
  );
};

export default SentenceAnimation;
