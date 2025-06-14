"use client"
import { TypeAnimation } from 'react-type-animation';
import * as motion from "motion/react-client"
export default function Home() {
  return (
    
    <div className="h-screen flex flex-col items-center justify-center">
      <motion.h1
      className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8AB0B5] to-[#57C785] text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
     <div className="flex gap-2 text-2xl">
                <a 
                className="bg-clip-text  bg-gradient-to-r hover:from-[#ACD5E3] hover:to-[#9AE3B9]"
                href="/aboutme">About Me</a>
                <a 
                className="bg-clip-text  bg-gradient-to-r hover:from-[#ACD5E3] hover:to-[#9AE3B9]"
                href="/projects">Projects</a>

      </div>
    </motion.h1>
      
    <motion.h1
      className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600 text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
     Matthew Lacsa
    </motion.h1>

     <motion.h1
      className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8AB0B5] to-[#57C785] text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="text-xs sm:text-sm md:text-base lg:text-lg">
         <TypeAnimation
            sequence={[
            'CS @ Dalhousie University',
            1000, 
            'Aspiring Software Developer',
            1000,
            'Data Entry Clerk @ Halina',
            1000,
            'Code Reviewer @ Outlier',
            1000,
            ]}
            wrapper="span"
            speed={10}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
      </div>
    </motion.h1>
     
    </div>
  );
}
