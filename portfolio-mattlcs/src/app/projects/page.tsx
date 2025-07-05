"use client"
import * as motion from "motion/react-client"
import Image from "next/image"
import Link from "next/link"
import toast from "react-hot-toast"
import { Toaster } from "react-hot-toast"
import { useState } from "react"
const Projects: React.FC = () => {

 
    const [showInfo, setShowInfo] = useState(false);
    const [projectType, setProjectType] = useState<'escom' | 'plannedit' | 'notes'>('escom');
    
    const projects = {
        escom: {
            desc: `ESCOM Wiki is a project I worked for as a Junior Developer in an Agile environment. It is an app made for the Faculty of Engineering in Dalhousie University. 
            Senior Researchers and Scientists are able to post similarly to a Wiki, and is given access to an editor which has been implemented using a Lexical Text Editor.`,
            image: "/escom/escom-pres.png",
        },
        plannedit: {
            desc: `PlannedIt is a real-time chat in an attempt to make a similar app to Facebook Messenger. The app is built on the MERN stack, and the real-time functionality is done using Socket.IO. 
                    I have plans to expand this project to have a group chat functionality where you are able to make a group chat that expires since stacking up group chats just for plans can be a pain hence the name, PlannedIt.`,
            image: "/plannedit/plannedit-pres.png",
        },
        notes: {
            desc: `This is a simple notes app I created to learn more about React Native. It has functionalities such as being able to create a note, write a title and body, as well as delete the note.
                    Completing this project helped me obtain a React Native Certification from Shiftkey.`,
            image: "/notesapp/notes-appfinal.png",
        },
    };

   const currProject = projects[projectType];

    const openInfo = (type: 'escom' | 'plannedit' | 'notes') => {
        setProjectType(type);
        setShowInfo(true);
    };

    const closeInfo = () => {
        setShowInfo(false);
    };
    return (
        
        <div className="relative min-h-screen overflow-x-hidden flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 px-4">
             {showInfo && (
                                <div
                                className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 bg-opacity-80 p-4">
                                    <motion.div className="relative bg-gradient-to-r from-[#657072] to-[#6a6a7a] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6" 
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.2,
                                        ease: [0, 0.71, 0.2, 1.01],
                                }}>
                                        <button 
                                            onClick={closeInfo}
                                            className="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-black"
                                        >
                                            ×
                                        </button>
                                        
                                        <h2 className="text-3xl font-bold mb-6 text-center">
                                            {projectType === 'escom'
                                                ? 'ESCOM - Wiki'
                                                : projectType === 'plannedit'
                                                ? 'PlannedIt - Real Time Chat'
                                                : projectType === 'notes'
                                                ? 'Notes App'
                                                : 'Unknown Project'}
                                        </h2>
                                        
                                        <div className="flex flex-col items-center gap-4">
                                            <div>
                                                <Image
                                                src={currProject.image}
                                                alt={`${projectType} preview`}
                                                width={600}
                                                height={400}
                                                className="rounded-lg"
                                                />
                                            </div>
                                            <div className="text-white text-lg text-center">
                                                {currProject.desc}
                                            </div>
                                        </div>

                                    </motion.div>
                                </div>
                )}
            <Toaster/>
             
            <div
                className="fixed inset-0 z-30 flex  justify-center p-4">
            
                <motion.div className="relative bg-gradient-to-r from-[#657072] to-[#6a6a7a] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6" 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    duration: 1,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01],
                    }}>
                        <Link 
                                href="/"
                                className="absolute top-7 left-7 text-2xl font-bold text-gray-500 hover:text-black z-50 btn bg-gradient-to-r from-[#c9eef7] to-[#c9c9f5] border-none"
                            >
                                <div>{"<"}</div>
                        </Link>                           
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        Projects
                    </h2>




                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative aspect-square">
                            <Image src="/plannedit/plannedit-pres.png" alt="plannedit app" fill
                                    className="rounded-lg object-contain"/>
                           <div className="flex flex-row justify-around gap-4">
                                <div className="text-md font-sans text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#beced1] to-[#9b9bb8]">PlannedIt - Real Time Chat</div>
                                <Link href="https://github.com/MatthewLacsa/realtime-chat" target="_blank" rel="noopener noreferrer" className="z-50 btn bg-gradient-to-r from-[#c9eef7] to-[#c9c9f5] border-none">
                                   <div className="text-gray-500 hover:text-black">Source Code</div>
                                </Link>

                                    <button onClick={() => openInfo('plannedit')} className="hover:cursor-pointer z-50 btn bg-gradient-to-r from-[#c9eef7] to-[#c9c9f5] text-gray-500 hover:text-black border-none">More info</button>
                            </div>
                        </div>
                         <div className="relative aspect-square">
                            <Image src="/escom/escom-pres.png" alt="wiki app" fill
                                className="rounded-lg object-contain"/>

                            <div className="flex flex-row justify-around gap-4">
                                <div className="text-md font-sans text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#beced1] to-[#9b9bb8] ">ESCOM - Wiki and Research Forum</div>
                                <button onClick={ ()=> toast.error("This is a private repository, sorry!")} className="hover:cursor-pointer z-50 btn bg-gradient-to-r from-[#c9eef7] to-[#c9c9f5] border-none">
                                    <div className="text-gray-500 hover:text-black">Source Code</div>
                                </button>
                                <button onClick={() => openInfo('escom')} className="hover:cursor-pointer z-50 btn bg-gradient-to-r from-[#c9eef7] to-[#c9c9f5]  text-gray-500 hover:text-black border-none">More info</button>
                            </div>
                          
                        </div>
                         <div className="relative aspect-square ">
                            <Image src="/notesapp/notes-appfinal.png" alt="notes app" fill
                              className="rounded-lg object-contain"/>
                            <div className="flex flex-row justify-around gap-4">
                                <div className="text-md font-sans text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#beced1] to-[#9b9bb8]">Notes App - React Native Certification</div>
                                    <Link href="https://github.com/MatthewLacsa/MatthewsNotes" target="_blank" rel="noopener noreferrer" className=" z-50 btn bg-gradient-to-r from-[#c9eef7] to-[#c9c9f5] hover:cursor-pointer border-none">
                                      <div className="text-gray-500 hover:text-black">Source Code</div>
                                    </Link>
                                    <button onClick={() => openInfo('notes')} className="hover:cursor-pointer z-50 btn bg-gradient-to-r from-[#c9eef7] to-[#c9c9f5]  text-gray-500 hover:text-black border-none">More info</button>
                            </div>
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