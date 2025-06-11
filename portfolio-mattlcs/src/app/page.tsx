"use client"
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex">
        <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300
                           dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                <a href="/aboutme">About Me</a>
        </button>
        <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
                            font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                <a href="/projects">Projects</a>
        </button>

      </div>
      
      <div className="text-7xl">
        <p>Matthew Lacsa</p>
      </div>

      <div className="">
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
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
      </div>
    </div>
  );
}
