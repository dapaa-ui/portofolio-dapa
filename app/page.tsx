'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="flex flex-col justify-center items-center min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto w-full pt-20 px-4 sm:px-6 lg:px-8">
        <div className={`mb-4 sm:mb-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <h2 className="text-base sm:text-lg md:text-xl text-gray-400 font-light tracking-wide">
            Hello, I'm
          </h2>
        </div>

        <div className={`mb-4 sm:mb-6 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Dava Satria
          </h1>
        </div>

        <div className={`mb-6 sm:mb-8 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light">
            Full Stack Developer
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          {['Next.js', 'Laravel', 'Flutter', 'TypeScript', 'Tailwind CSS'].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full text-xs sm:text-sm text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <a
            href="/projects"
            className="px-6 py-2.5 sm:px-8 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-2.5 sm:px-8 sm:py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-2.5 sm:h-3 bg-gray-400 rounded-full mt-1.5 sm:mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}