/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaSearch, FaClipboardCheck, FaTrophy, FaSchool, FaChartLine } from 'react-icons/fa';

const JourneyTracker = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const steps = [
    {
      id: 1,
      title: "Discover Klimb",
      description: "Explore how our matching system works and get excited about finding the perfect sport",
      icon: <FaSearch className="text-2xl text-blue-600" />,
      color: "bg-blue-100"
    },
    {
      id: 2,
      title: "Take the Quiz",
      description: "Answer fun questions about your child's interests and personality",
      icon: <FaClipboardCheck className="text-2xl text-green-600" />,
      color: "bg-green-100"
    },
    {
      id: 3,
      title: "Reveal Matches",
      description: "Get personalized sport recommendations tailored to your child",
      icon: <FaTrophy className="text-2xl text-yellow-600" />,
      color: "bg-yellow-100"
    },
    {
      id: 4,
      title: "Visit an Academy",
      description: "Try out your matched sports with our partner academies",
      icon: <FaSchool className="text-2xl text-purple-600" />,
      color: "bg-purple-100"
    },
    {
      id: 5,
      title: "Track Progress",
      description: "Monitor your child's development and achievements",
      icon: <FaChartLine className="text-2xl text-indigo-600" />,
      color: "bg-indigo-100"
    }
  ];

  // Animation values
  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-15%']);

  return (
    <section ref={ref} className="pt-20 overflow-hidden">
      <div className="w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Your Journey with KLIMB
        </h2>

        {/* Desktop horizontal scroll */}
        <div className="hidden md:block h-[400px] relative">
          <motion.div 
            style={{ x }}
            className="absolute top-0 left-0 flex space-x-8 w-max">
            {steps.map((step, index) => {
              const y = useTransform(scrollYProgress, 
                [index * 0.15, (index + 1) * 0.15],
                [100, 0]
              );
              const opacity = useTransform(scrollYProgress,
                [index * 0.15, (index + 1) * 0.15],
                [0, 1]
              );

              return (
                <motion.div
                  key={step.id}
                  style={{ y, opacity }}
                  className={`w-72 flex-shrink-0 h-full ${step.color} rounded-2xl p-8 shadow-md flex flex-col`}>
                  <div className="mb-6 flex items-center justify-center w-16 h-16 bg-white rounded-full">
                    {step.icon}
                  </div>
                  <div className="mb-4 flex items-center justify-center w-10 h-10 bg-white rounded-full text-lg font-bold">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile vertical stack */}
        <div className="md:hidden space-y-6">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className={`${step.color} rounded-2xl p-6 shadow-md`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                  {step.icon}
                </div>
                <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full text-sm font-bold">
                  {step.id}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Connecting line - desktop only */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10 w-full"></div>
      </div>
    </section>
  );
};

export default JourneyTracker;