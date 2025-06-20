"use client"
import { useState } from 'react';
import * as motion from "motion/react-client"
import Image from "next/image";
const AboutMe: React.FC = () => {
    const [expandedStack, setExpandedStack] = useState<number | null>(null);

    return (
        <div className="relative h-screen w-screen flex justify-center gap-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 2,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="flex flex-row gap-4 mt-10 w-150">
                    <p className="text-3xl font-bold">Hey, My name is <span>Matthew Lacsa</span>! <Image src="/me.jpeg" alt="Profile" width="120" height="120" 
                    className="rounded-full object-cover float-right"/>
                       I am a Computer Science student @ <span>Dalhousie University</span>. 
                       I am currently on my 3rd year and I am an aspiring <span>Software Developer</span>. 
                       My decision to choose CS comes from my early exposure to tech as a kid (not the best idea I know),
                       at first I barely had an idea what I was putting myself into, only then did I realize 
                       that applying commands in my games, the occasional use of Powershell
                       and making simple HTML websites would transfer over in such a field. 
                    </p>

                </motion.div>


                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 2,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className={`relative h-28 mt-10 z-5`}
                    onClick={() => setExpandedStack(expandedStack === 0 ? null : 0)}
                >
                    <div className={`transition-all duration-500 ${expandedStack === 0 ? 'relative space-y-2 size-50' : 'stack size-50'} hover:scale-110 w-100`}>
                        <div className="border-base-content card bg-base-100 border text-center h-50">
                            <div className="card-body">A</div>
                        </div>
                        <div className="border-base-content card bg-base-100 border text-center h-50">
                            <div className="card-body">B</div>
                        </div>
                        <div className="border-base-content card bg-base-100 border text-center h-50">
                            <div className="card-body">C</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 2,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className={`relative h-28 mt-10 z-5` }
                    onClick={() => setExpandedStack(expandedStack === 1 ? null : 1)}
                >
                    <div className={`transition-all duration-500 ${expandedStack === 1 ? 'relative space-y-2 size-50' : 'stack size-50'} hover:scale-110 w-100`}>
                        <div className="border-base-content card bg-base-100 border text-center h-50">
                            <div className="card-body">A</div>
                        </div>
                        <div className="border-base-content card bg-base-100 border text-center h-50">
                            <div className="card-body">B</div>
                        </div>
                        <div className="border-base-content card bg-base-100 border text-center h-50">
                            <div className="card-body">C</div>
                        </div>
                    </div>
                </motion.div>


             <div className="absolute bottom-0 left-0 w-full overflow-hidden -z-0 text-[0]">
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
    )
};

export default AboutMe;