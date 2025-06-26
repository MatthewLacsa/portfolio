"use client"
import * as motion from "motion/react-client"
import Image from "next/image";
import Link from 'next/link';
import IconButton from '../components/IconButton';
const AboutMe: React.FC = () => {

    return (
        <div className="relative min-h-screen overflow-x-hidden flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 2,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="flex flex-col gap-4 mt-10 lg:w-1/2 w-full">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#92b2b9] to-[#4d4d5e]">Hey, My name is  
                    <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#beced1] to-[#9b9bb8]"> Matthew Lacsa! </span> 
                    <div className="hidden sm:inline-block rounded-full p-[10px] bg-gradient-to-r from-[#f7f7f7] to-[#9b9bb8] float-right hover:scale-110">
                        <Link href="/">
                            <Image
                                src="/me.jpeg"
                                alt="Profile"
                                width={100}
                                height={100}
                                className="rounded-full object-cover block "
                            />
                        </Link>
                    </div>
                       I study <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#beced1] to-[#9b9bb8]">Computer Science at Dalhousie University</span>.
                       I am a <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#beced1] to-[#9b9bb8]">3rd year</span> and I am interested in working as a
                       <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#beced1] to-[#9b9bb8]"> Software Developer</span> in the near future. 
                    </div>
                    <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#92b2b9] to-[#4d4d5e]">
                       My decision to choose CS comes from my early exposure to tech as a kid (not the best idea I know),
                       at first I barely had an idea what I was putting myself into, only then did I realize 
                       that applying commands in my games, the occasional use of Powershell
                       and making simple HTML websites would transfer over in such a field. 
                    </div>
                    
                    <div className="text-xl sm:text-xl md:text-xl lg:text-2xl flex flex-wrap gap-3 mb-4">
                        <IconButton imgSrc="/linkedin.png" altImg="linkedin" linkToContact="https://www.linkedin.com/in/matthewlacsa/"/>
                        <IconButton imgSrc="/github.png" altImg="github" linkToContact="https://github.com/MatthewLacsa"/>
                        <IconButton imgSrc="/gmail.png" altImg="gmail" linkToContact="mailto:matthewlacsa@gmail.com"/>
                        <Link href="/" className="btn rounded-full px-6 py-3 bg-gradient-to-r from-[#c9eef7] to-[#c9c9f5] hover:scale-110"><span className='text-gray-600'>Back to Home</span></Link>
                    </div>
                </motion.div>

            <div className="flex flex-col sm:flex-row sm:gap-10 max-w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 2,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className={`relative mt-10 z-5`}
                >
                    <div className="text-center">Experience</div>
                    <div className={`transition-all duration-500 space-y-2 sm:w-100`}>
                        <div className="border-base-content card bg-base-100 border text-center h-48 items-center"> 
                            <div className="card-title">Code Reviewer @ Outlier</div>
                            <div className="hover:scale-110"><Image src="/outlier.png" alt="outlier" width={60} height={100}/></div>
                            <div className="">I work in Outlier as a Code Evaluator although it varies from time to time. I check if the model shows vulnerabilities or errors and I generate prompts that guarantee model failure.</div>

                        </div>
                        <div className="border-base-content card bg-base-100 border text-center h-48 flex-col items-center">
                            <div className="card-title">Data Entry Clerk @ Halina Cafe n Bar</div>
                            <div className="hover:scale-110"><Image src="/halina.png" alt="halina" width={80} height={100}/></div>
                            <div>I manage all the financial data entry, including expenses, and I do the inputs, updates, and maintenance ensuring that the financial records are accurate.</div>
                            
                        </div>
                        <div className="border-base-content card bg-base-100 border text-center h-48 flex-col items-center">
                            <div className="card-title">Construction @ JFJ Construction Ltd.</div>
                            <div className="hover:scale-110"><Image src="/jfj.png" alt="halina" width={140} height={100}/></div>
                            <div>Bob the Builder type job for two years. For two summers, I helped with the heavy lifting, assistance with building decks, as well as apartment maintenance.</div>
                            
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
                    className={`relative mt-10 z-5` }
                >
                    <div className="text-center">Hobbies</div>
                    <div className={`transition-all duration-500 space-y-2 sm:w-100`}>
                        <div className="border-base-content card bg-base-100 border text-center h-48 flex-col items-center">
                            <div className="card-title">Art</div>
                            <div className="hover:scale-110"><Image src="/jfj.png" alt="halina" width={140} height={100}/></div>
                            <div>I am an artist when I have spare time, from drawing famous characters when I was a kid to doodles and paintings</div>
                            
                        </div>
                         <div className="border-base-content card bg-base-100 border text-center h-48 flex-col items-center">
                            <div className="card-title">Photography</div>
                            <div>I do photography when I go on trips, capturing the moment has always been such a great feeling</div>
                            
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