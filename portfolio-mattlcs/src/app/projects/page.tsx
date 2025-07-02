"use client"
import * as motion from "motion/react-client"
import Image from "next/image"
const Projects = () => {
    return (
        <div className="relative min-h-screen overflow-x-hidden flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 px-4">
            <div
                className="fixed inset-0 z-50 flex  justify-center p-4">
                <motion.div className="relative bg-gradient-to-r from-[#657072] to-[#6a6a7a] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6" 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    duration: 1,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01],
                    }}>
                                        
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        My Projects
                    </h2>
                                        
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative aspect-square">
                            <Image src="/plannedit/plannedit-pres.png" alt="plannedit app" fill
                                    className="rounded-lg object-contain"/>
                           
                        </div>
                         <div className="relative aspect-square">
                            <Image src="/escom/escom-pres.png" alt="wiki app" fill
                                className="rounded-lg object-contain"/>
                          
                        </div>
                         <div className="relative aspect-square">
                            <Image src="/notesapp/notes-appfinal.png" alt="notes app" fill
                              className="rounded-lg object-contain"/>
                            
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="hidden sm:block absolute bottom-0 left-0 right-0 overflow-hidden -z-0 text-[0]">
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
}

export default Projects;