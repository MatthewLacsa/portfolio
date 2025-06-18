"use client"
import * as motion from "motion/react-client"
import IconButton from "./components/IconButton";
export default function Home() {
  return (
    
    <div className="relative h-screen flex flex-col items-center justify-center bg-neutral-900">




      <motion.h1
      className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A8D6E0] to-[#8C8CFF] text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
     <div className="flex gap-6 text-2xl">

                <a 
                className="bg-clip-text  bg-gradient-to-r hover:from-[#ACD5E3] hover:to-[#9AE3B9] underline decoration-white underline-offset-4 hover:scale-110"
                href="/aboutme">About Me</a>
                <a 
                className="bg-clip-text  bg-gradient-to-r hover:from-[#ACD5E3] hover:to-[#9AE3B9] underline decoration-white underline-offset-4 hover:scale-110"
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
      className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A8D6E0] to-[#8C8CFF] text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="text-xl sm:text-xl md:text-xl lg:text-2xl flex gap-3 mt-3">
        <IconButton imgSrc="/linkedin.png" altImg="linkedin" linkToContact="https://www.linkedin.com/in/matthewlacsa/"/>
        <IconButton imgSrc="/github.png" altImg="github" linkToContact="https://github.com/MatthewLacsa"/>
        <IconButton imgSrc="/gmail.png" altImg="gmail" linkToContact="matthewlacsa@gmail.com"/>
      </div>
    </motion.h1>


        <div className="absolute bottom-0 left-0 w-full overflow-hidden text-[0] -z-10">
          {/* Back Wave */}
          <svg
            className="relative block w-[200%] h-[20rem] animate-wave-slow opacity-30"
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C150,200 350,0 600,180 C850,300 1050,40 1200,240 L1200,300 L0,300 Z"
              fill="white"
            />
          </svg>

          {/* Middle Wave */}
          <svg
            className="relative -mt-[16rem] block w-[200%] h-[20rem] animate-wave-medium opacity-60"
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C200,160 400,0 700,180 C900,270 1100,30 1200,220 L1200,300 L0,300 Z"
              fill="white"
            />
          </svg>

          {/* Front Wave */}
          <svg
            className="relative -mt-[16rem] block w-[200%] h-[20rem] animate-wave-fast opacity-80"
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C120,190 320,0 620,180 C900,260 1120,40 1200,210 L1200,300 L0,300 Z"
              fill="white"
            />
          </svg>
        </div>
    </div>
  );
}
