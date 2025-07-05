"use client"
import * as motion from "motion/react-client"
import Image from "next/image";
import Link from 'next/link';
import IconButton from '../components/IconButton';
import { useState } from "react";
const AboutMe: React.FC = () => {
    const [showGallery, setShowGallery] = useState(false);
    const [galleryType, setGalleryType] = useState<'art' | 'photography'>('art');

    const artImages = [
        "/art/eye.jpeg",
        "/art/opm.jpeg",
        "/art/waterfront.jpeg",
        "/art/doodle.jpeg",
    ];

    const photographyImages = [
        "/photography/cafe.jpeg",
        "/photography/building.jpeg",
        "/photography/building2.jpeg",
        "/photography/montreal.jpeg",
        "/photography/niagara.jpeg",
        "/photography/toronto.jpeg",

    ];

    const openGallery = (type: 'art' | 'photography') => {
        setGalleryType(type);
        setShowGallery(true);
    };

    const closeGallery = () => {
        setShowGallery(false);
    };

    return (
        <div className="relative min-h-screen overflow-x-hidden flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 px-4">
                    {/* Collection of Photos/Artworks */}
                    {showGallery && (
                    <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-80 p-4">
                        <motion.div className="relative bg-gradient-to-r from-[#657072] to-[#6a6a7a] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6" 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01],
                    }}>
                            <button 
                                onClick={closeGallery}
                                className="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-black"
                            >
                                ×
                            </button>
                            
                            <h2 className="text-3xl font-bold mb-6 text-center">
                                {galleryType === 'art' ? 'My Artworks' : 'My Photography'}
                            </h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {(galleryType === 'art' ? artImages : photographyImages).map((img, index) => (
                                    <div key={index} className="relative aspect-square">
                                        <Image
                                            src={img}
                                            alt={galleryType === 'art' ? 'Artwork' : 'Photography'}
                                            fill
                                            className="object-cover rounded-lg"
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                )}
                {/* Introduction and Name */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 2,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="flex flex-col gap-2 lg:w-1/2 w-full mt-5">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#92b2b9] to-[#4d4d5e]">Hey, My name is 
                    <div className="hidden sm:inline-block rounded-full p-[10px] bg-gradient-to-r from-[#f7f7f7] to-[#7b7b88] float-right hover:scale-110">
                        <Link href="/">
                            <Image
                                src="/jallibee.jpeg"
                                alt="Profile"
                                width={130}
                                height={100}
                                className="rounded-full object-cover block "
                            />
                        </Link>
                    </div>
                    <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#beced1] to-[#9b9bb8]"> Matthew Lacsa! </span> 
                    
                       I study <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#beced1] to-[#9b9bb8]">Computer Science at Dalhousie University</span>.
                       I am a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#beced1] to-[#9b9bb8]">3rd year</span> and I am interested in working as a
                       <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#beced1] to-[#9b9bb8]"> Software Developer</span> in the near future. 
                    </div>
                    <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#92b2b9] to-[#858594]">
                       My decision to choose CS comes from my early exposure to tech as a kid (not the best idea I know),
                       at first I barely had an idea what I was putting myself into, only then did I realize 
                       that applying commands in my games, the occasional use of Powershell
                       and making simple HTML websites would transfer over in such a field. 
                    </div>
                    
                    <div className="text-xl sm:text-xl md:text-xl lg:text-2xl flex flex-wrap gap-3 mb-4 z-50">
                        <IconButton imgSrc="/linkedin.png" altImg="linkedin" linkToContact="https://www.linkedin.com/in/matthewlacsa/"/>
                        <IconButton imgSrc="/github.png" altImg="github" linkToContact="https://github.com/MatthewLacsa"/>
                        <IconButton imgSrc="/gmail.png" altImg="gmail" linkToContact="mailto:matthewlacsa@gmail.com"/>
                        <Link href="/" className="btn rounded-full px-6 py-3 bg-gradient-to-r from-[#c9eef7] to-[#c9c9f5] hover:scale-110"><span className='text-gray-600'>Back to Home</span></Link>
                    </div>
                </motion.div>
            {/* Hobbies/Experiences */}
            <div className="flex flex-col sm:flex-row sm:gap-6 max-w-full h-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 2,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className={`relative z-5 mt-5`}
                >
                    <div className="text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#beced1] to-[#9b9bb8] font-bold">Experience</div>
                    <div className={`transition-all duration-500 space-y-2 sm:w-150  sm:overflow-y-auto`}>
                        
                        <div className="border-base-content card bg-base-100/50 text-center h-auto items-center gap-5"> 
                            <div className="card-title text-2xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#7e898b] to-[#f6f6fd]">Code Reviewer @ Outlier</div>
                            <div className="hover:scale-110">
                                <Link href="https://outlier.ai/" target="_blank" rel="noopener noreferrer">
                                        <div className="p-4 border-4 border-black rounded-full bg-white/30">
                                            <Image
                                                src="/experiences/outlier.png"
                                                alt="outlier"
                                                width={60}
                                                height={100}
                                                className="object-contain"
                                            />
                                        </div>
                                    </Link>
                                </div>
                            <div className="bg-white/10 rounded-lg p-4 text-left shadow-md"> 
                                <div className="text-xl font-semibold font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#92b2b9] to-[#858594]">I work in Outlier as a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#beced1] to-[#9b9bb8]">Code Evaluator</span> although it varies from time to time. I check if the AI model shows vulnerabilities or errors and then figure out what went wrong.
                                </div>
                            </div>
                           
                        </div>
                        
                        <div className="border-base-content card bg-base-100/50 text-center flex-col items-center gap-3">
                            <div className="card-title text-2xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#7e898b] to-[#f6f6fd]">Data Entry Clerk @ Halina Cafe n Bar</div>
                            <div className="hover:scale-110">
                                
                                    <Link href="https://halinacafeandbar.com/" target="_blank" rel="noopener noreferrer">
                                        <div className="p-4 border-4 border-black rounded-full bg-white/40">
                                            <Image src="/experiences/halina.png" alt="halina" width={70} height={100}/>
                                        </div>
                                    </Link>
                                </div>
                            <div className="bg-white/10 rounded-lg p-4 text-left shadow-md">
                                <div className="text-xl font-semibold font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#92b2b9] to-[#858594]">I manage all the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#beced1] to-[#9b9bb8]">financial data entry</span>, 
                                    including expenses, and I do the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#beced1] to-[#9b9bb8]">inputs, updates, and maintenance</span> ensuring that the financial records are accurate.
                                </div>
                            </div>
                            
                            
                        </div>
                        <div className="border-base-content card bg-base-300/90 text-center flex-col items-center gap-3">
                            <div className="card-title text-2xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#7e898b] to-[#f6f6fd]">Construction @ JFJ Construction Ltd.</div>
                           
                            <div className="hover:scale-110">
                                    <Link href="https://jfjconstruction.ca/" target="_blank" rel="noopener noreferrer"> 
                                        <div className="p-4 border-4 border-black rounded-full bg-white/30">
                                                    <Image src="/experiences/jfj.png" alt="jfj" width={100} height={100}/>            
                                        </div>
                                    </Link>
                                </div>
                            <div className="bg-white/10 rounded-lg p-4 text-left shadow-md">
                                <div className="text-xl font-semibold font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#92b2b9] to-[#858594]">Bob the Builder type job for two years. For two summers, I helped with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#beced1] to-[#9b9bb8]">heavy lifting</span>, 
                                    assistance with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#beced1] to-[#9b9bb8]">building decks</span>, as well as <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#beced1] to-[#9b9bb8]">apartment maintenance.</span>
                                </div>
                            </div>
                            
                            
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
                    className={`relative mt-5 z-5` }
                >
                    <div className="text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#beced1] to-[#9b9bb8] font-bold">Hobbies</div>
                    <div className={`transition-all duration-500 space-y-2 sm:w-150 sm:overflow-y-auto`}>
                        <div className="border-base-content card bg-base-100/50 text-center h-auto flex-col items-center ">
                            <div className="card-title text-2xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#7e898b] to-[#f6f6fd]">Music</div>
                            <div className="bg-white/10 rounded-lg p-4 text-left shadow-md">
                                <div className="text-xl font-semibold font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#92b2b9] to-[#858594]">I was learning how to play a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#beced1] to-[#9b9bb8]">Guitar</span> years ago, 
                                        but I set it aside for other priorities. Recently, I have decided to pick it up again and I'm in the process of relearning it.
                                </div>
                            </div>
                            
                            
                        </div>
                        <div className="border-base-content card bg-base-100/50 text-center h-auto flex-col items-center gap-3">
                            <div className="card-title text-2xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#7e898b] to-[#f6f6fd]">Art</div>
                            <div className="sm:gap-12 gap-3 flex flex-col sm:flex-row"><Image src="/art/eye.jpeg" alt="eye painting" width={220} height={100} className="border-4 border-black"/> 
                                    <button onClick={() => openGallery("art")} className="btn rounded-full px-6 py-3 bg-white/10 hover:scale-110 self-center shadow-lg"><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#92b2b9] to-[#858594]'>More of my works</span>
                                        </button>
                                    </div>
                             <div className="bg-white/10 rounded-lg p-4 text-left shadow-md"> 
                                <div className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#92b2b9] to-[#858594]">I enjoy making art when I have spare time, from drawing famous characters when I was a kid to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#beced1] to-[#9b9bb8]">doodles and paintings</span>. I usually take inspiration from what I see daily.
                                </div>
                             </div>
                        </div>
                         <div className="border-base-content card bg-base-300/90 text-center h-auto flex-col items-center gap-3 ">
                            <div className="card-title text-2xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#7e898b] to-[#f6f6fd]">Photography</div>
                             <div className="sm:gap-12 gap-3 flex flex-col sm:flex-row  "><Image src="/photography/cafe.jpeg"  alt="cafe" width={220} height={100} className="border-4 border-black"/> 
                                    <button onClick={() => openGallery("photography")} className=" self-center btn rounded-full px-6 py-3 bg-white/10 hover:scale-110 shadow-lg"><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#92b2b9] to-[#858594]'>More photos</span></button></div>
                            <div className="bg-white/10 rounded-lg p-4 text-left shadow-md">
                                <div className="text-xl font-semibold font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#92b2b9] to-[#858594]">I do photography when I go on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#beced1] to-[#9b9bb8]">trips</span>, capturing the moment has always been a great feeling, and it's perfect for keeping memories.</div>
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
};

export default AboutMe;