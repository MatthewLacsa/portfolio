"use client"
import * as motion from "motion/react-client"
import IconButton from "./components/IconButton";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const Spline = dynamic(() => import('@splinetool/react-spline/next'), { ssr: false });

export default function Home() {
  return (
    
    <div className="relative h-screen flex flex-col items-center justify-center bg-neutral-900 overflow-x-hidden">
      <div className="flex flex-row sm mb-10">
        <motion.div className="relative w-100 h-[400px] sm:block hidden"
          initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 0.70, scale: 1 }}
                  transition={{
                    duration: 2,
                    delay: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}>
          <Suspense fallback={<div>Loading 3D..</div>}>
            <Spline scene="/spline/scene.splinecode" className="w-full h-full" />
          </Suspense>
          
        </motion.div>
              {/* Pressable links projects and about me*/}
              <div className=" flex flex-col items-center justify-center">
                <motion.h1
                  className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ecfcff] to-[#69698f] text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 0.70, scale: 1 }}
                  transition={{
                    duration: 2,
                    delay: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                <div className="flex flex-wrap justify-center gap-6 text-2xl">

                            <Link
                            className="bg-clip-text  bg-gradient-to-r hover:from-[#ecfcff] hover:to-[#d9d9f3] underline decoration-white underline-offset-4 hover:scale-110 hover:cursor-pointer"
                            href="/aboutme">About Me</Link>
                            <Link
                            className="bg-clip-text  bg-gradient-to-r hover:from-[#ecfcff] hover:to-[#d9d9f3] underline decoration-white underline-offset-4 hover:scale-110 hover:cursor-pointer"
                            href="/projects">Projects</Link>

                  </div>
                </motion.h1>
                {/* My animated name, planning to make this interactive hmm */}
                <motion.h1
                  className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ecfcff] to-[#6d6d9c] text-center px-4"
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
                  className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A8D6E0] to-[#8C8CFF] text-center z-50"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: .70, scale: 1 }}
                  transition={{
                    duration: 2,
                    delay: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                > {/* Links to reach out/check me out ;) */}
                  <div className="text-xl sm:text-xl md:text-xl lg:text-2xl flex gap-3 mt-3">
                    <IconButton imgSrc="/linkedin.png" altImg="linkedin" linkToContact="https://www.linkedin.com/in/matthewlacsa/"/>
                    <IconButton imgSrc="/github.png" altImg="github" linkToContact="https://github.com/MatthewLacsa"/>
                    <IconButton imgSrc="/gmail.png" altImg="gmail" linkToContact="mailto:matthewlacsa@gmail.com"/>
                  </div>
                </motion.h1>
              </div>
             

      </div>
      


        <div className="absolute bottom-0 left-0 right-0 overflow-hidden -z-0 text-[0]">
          {/* This is the wave at the very back*/}
          <svg
            className="relative block w-[200%] h-[13rem] animate-wave-slow opacity-30"
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
          >
            <path
              d="M0,150 C200,50 400,250 600,150 C800,50 1000,250 1200,150 L1200,300 L0,300 Z"
              fill="white"
            />
          </svg>

          {/* Wave in the middle */}
          <svg
            className="relative block -mt-[15rem] w-[200%] h-[20rem] animate-wave-medium opacity-60"
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
          >
            <path
              d="M0,120 C200,30 400,270 600,180 C800,90 1000,260 1200,120 L1200,300 L0,300 Z"
              fill="white"
            />
          </svg>

          {/* Wave with most opacity/front */}
          <svg
            className="relative -mt-[15rem] block w-[200%] h-[20rem] animate-wave-fast opacity-80"
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C200,0 400,300 600,200 C800,100 1000,280 1200,80 L1200,300 L0,300 Z"
              fill="white"
            />
          </svg>
        </div>
    </div>
  );
}
