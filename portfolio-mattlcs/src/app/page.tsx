"use client"
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex gap-2">
                <a href="/aboutme">About Me</a>
                <a href="/projects">Projects</a>

      </div>
      
      <div className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl ">
        <p>Matthew Lacsa</p>
      </div>

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
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
      </div>
    </div>
  );
}
