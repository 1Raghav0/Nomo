"use client";
import React from 'react';
import { motion} from 'framer-motion';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

// Text animation variants with subtle bounce
const textVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

// Card hover variants
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: 15
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1],
    },
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Process step variants
const stepVariants = {
  hidden: {
    opacity: 0,
    x: -30
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1],
    },
  },
};

const ProcessFlow = () => {

  const processSteps = [
    {
      step: "01",
      title: "Data Collection & AI Development",
    },
    {
      step: "02",
      title: "Model Testing & Validation",
    },
    {
      step: "03",
      title: "Market Simulation & Reward System Integration",
    },
    {
      step: "04",
      title: "Limited Beta Release to a wider audience of nomo users, following a successful closed beta",
    },
    {
      step: "05",
      title: "Creation of proprietary data center for increased capacity Removal of investment volume restrictions for selected users",
    },
    {
      step: "06",
      title: "Removal of investment volume restrictions for all users",
    }
  ];


  return (
    <>
      {/* Process Section */}
      <motion.section
        className="py-20 lg:py-32 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16 lg:mb-24"
            variants={textVariants}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
               <span className="text-purple-600">nomo AI Index</span> Roadmap <span role="img" aria-label="roadmap">🗺️</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              See how we started, and what’s coming next — stay tuned for exciting updates!
            </motion.p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical timeline for desktop */}
            <div className="absolute left-6 md:left-1/2 top-1 bottom-16 w-0.5 bg-gray-200 hidden md:block"></div>

            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative pl-20 md:pl-0"
                >
                  {/* Step number */}
                  <div className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg transform md:translate-x-[-50%] md:translate-y-[-50%] z-10">
                    {step.step}
                  </div>

                  {/* Content */}
                  <motion.div
                    className={`mt-3 md:mt-0 md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto md:pl-20 md:text-left' : 'md:mr-auto md:pr-20 md:text-right'}`}
                    variants={stepVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * index }}
                  >
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      </>
  );
};

export default ProcessFlow;