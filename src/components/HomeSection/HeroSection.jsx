import { useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaRunning, FaArrowDown } from 'react-icons/fa';

const HeroSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={ref}
      className="relative -mt-[65px] overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-[150px]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={controls}
          variants={{
            visible: { scale: 1, opacity: 0.1 }
          }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-300 mix-blend-multiply"/>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={controls}
          variants={{
            visible: { scale: 1, opacity: 0.1 }
          }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-indigo-300 mix-blend-multiply"
        />
      </div>

      <div className="w-11/12 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Find Your <span className="text-blue-600">Sports Match</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Discover the perfect sport for your child with our fun matching quiz!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={scrollToQuiz}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <FaRunning className="text-xl" />
                Start Your Quiz
              </button>
              <button
                onClick={scrollToQuiz}
                className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                How it works <FaArrowDown />
              </button>
            </div>
          </motion.div>

          {/* Visual element - placeholder for mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-3xl shadow-xl flex items-center justify-center">
              <div className="text-center p-4">
                <div className="text-6xl mb-4">🏆</div>
                <p className="text-gray-500">KLIMB Mascot</p>
              </div>
              {/* Animated dots */}
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full"
              />
              <motion.div 
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.5,
                  delay: 0.3,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-6 h-6 bg-green-400 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <FaArrowDown className="text-gray-400 text-2xl" />
      </motion.div>
    </section>
  );
};

export default HeroSection;