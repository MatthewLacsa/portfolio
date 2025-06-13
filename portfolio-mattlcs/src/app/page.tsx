"use client"
import { TypeAnimation } from 'react-type-animation';
import * as motion from "motion/react-client"
export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex gap-2 text-2xl">
                <a href="/aboutme">About Me</a>
                <a href="/projects">Projects</a>

      </div>
      
       <motion.h1
      className="text-[4rem] font-bold text-blue-300 text-center"
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
    </div>
  );
}
