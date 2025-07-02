"use client"
import * as motion from "motion/react-client"

const Projects = () => {
    return (
        <div>
            <div
                className="fixed inset-0 z-50 flex  justify-center bg-black/50 bg-opacity-80 p-4">
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
                            Test
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
        
    )
}

export default Projects;