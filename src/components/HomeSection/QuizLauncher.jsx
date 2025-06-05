// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaArrowRight, FaRunning, FaChartLine } from 'react-icons/fa';

const QuizLauncher = () => {
  return (
    <section id="quiz" className="mb-20 py-10 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="w-11/12 mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Mascot and Visual Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="text-center">
                <div className="text-8xl mb-4">🧗</div>
                <p className="text-gray-500 text-sm">Meet Klyde the Climber!</p>
              </div>
              
              {/* Speech bubble */}
              <div className="absolute -top-4 -right-4 md:-right-8 bg-white px-4 py-2 rounded-2xl shadow-sm">
                <div className="relative">
                  <p className="text-sm font-medium">Let's find your sport!</p>
                  <div className="absolute -bottom-3 right-4 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-100"></div>
                </div>
              </div>
              
              {/* Animated progress elements */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaRunning className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-blue-500 rounded-full"/>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <FaChartLine className="text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '65%' }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="h-full bg-indigo-500 rounded-full"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ready to Discover <span className="text-blue-600">Your Perfect Sport?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our fun 5-minute quiz matches your child's personality, skills, and interests with the ideal sports activities.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Kid-friendly questions</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Science-based matching</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">Personalized recommendations</p>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto md:mx-0">
              Start Your Adventure <FaArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuizLauncher;