// import Header from '@/components/custom/Header'
// import React from 'react'

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-white">

//       {/* Hero Section */}
//       <section className="bg-[#dbe5ee] border-b border-gray-400 flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-12 py-20 md:py-24 gap-10 rounded-md shadow-sm mt-2">
//         {/* Left Content */}
//         <div className="w-full md:w-3/5">
//           <h1 className="text-3xl md:text-4xl font-extrabold text-[#1F2937] leading-snug mb-8">
//             Land Your Dream Job with <br />
//             <span className="text-[#111827]">AI-Powered Resumes</span>
//           </h1>
//           <p className="text-gray-600 text-base md:text-lg mb-5 font-normal leading-relaxed">
//             Get a resume tailored to each job posting using the right keywords. Our AI Resume Analyzer reviews job descriptions and your profile to craft a personalized, optimized resume that gives you a competitive edge.
//           </p>

//           <button className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium text-base px-5 py-2.5 rounded-md shadow-md">
//             Demo
//           </button>

//           <div className="mt-5 flex items-center gap-2 text-gray-500 text-sm">
//             <span>Powered by</span>
//             <img src="https://raw.githubusercontent.com/KrishPatel1605/NextDesk/refs/heads/main/frontend/public/gemini.png" alt="Gemini" className="h-5" width={60} height={200} />
//           </div>
//         </div>

//         {/* Right Content - Image Placeholder */}
//         <div className="w-full md:w-[40%] h-[400px] bg-gray-100 rounded-lg shadow-inner flex items-center justify-center">
//           <img src="https://raw.githubusercontent.com/KrishPatel1605/NextDesk/refs/heads/main/frontend/public/meet.png" alt="Resume AI Visual" className="max-h-full object-contain" />
//         </div>
//       </section>

//       {/* Extension Section - AI Hub */}
//       <section className="bg-[#f4f5f7] border-t border-gray-200 px-4 md:px-12 py-16 md:py-20 rounded-md shadow-sm">
//         <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1F2937] mb-10">
//           Unlock Dream Career with <span className="text-[#111827]">AI Hub</span>
//         </h2>

//         <div className="relative flex items-center justify-center mb-12">
//           <div className="absolute w-full h-1 bg-gray-300 top-1/2 transform -translate-y-1/2 z-0" />
//           <div className="flex justify-center space-x-12 z-10">
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium shadow-sm text-sm md:text-base transform transition-transform duration-200 hover:scale-105 hover:bg-blue-700">
//               Resume Upload
//             </button>
//             <button className="bg-white border border-gray-300 px-4 py-2 rounded-md font-medium text-gray-700 text-sm md:text-base transform transition-transform duration-200 hover:scale-105 hover:bg-blue-600 hover:text-white hover:border-blue-600">
//               Analysis
//             </button>
//             <button className="bg-white border border-gray-300 px-4 py-2 rounded-md font-medium text-gray-700 text-sm md:text-base transform transition-transform duration-200 hover:scale-105 hover:bg-blue-600 hover:text-white hover:border-blue-600">
//               Report
//             </button>
//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row items-center justify-between gap-10">
//           {/* Left - Chat UI */}
//           <div className="w-full md:w-1/2 bg-gray-100 rounded-lg shadow-inner h-[300px] md:h-[320px] relative px-4 flex justify-center items-center">
//             <img src="/public/ai-chat.png" alt="AI Chat Visual" className="max-h-full object-contain z-0" />
//             <div className="absolute top-8 left-4 bg-white px-3 py-2 rounded-md shadow text-xs md:text-sm font-medium z-10">
//               Hi, I’m trying to improve. Can you help?
//             </div>
//             <div className="absolute bottom-8 left-12 bg-blue-100 px-3 py-2 rounded-md shadow text-xs md:text-sm font-medium text-[#1F2937] z-10">
//               Absolutely! Let’s identify the roles you’re applying for...
//             </div>
//           </div>

//           {/* Right - Text */}
//           <div className="w-full md:w-1/2">
//             <h3 className="text-xl md:text-2xl font-semibold text-[#1F2937] mb-3">
//               Your Career Compass,<br /> Powered by AI
//             </h3>
//             <p className="text-gray-700 text-sm md:text-base mb-5 leading-relaxed">
//               Using a powerful AI Model, your personal AI consultant analyzes job descriptions and companies to offer career insights. Get expert help with trends, interviews, and growth strategies tailored to your goals.
//             </p>
//             <button className="text-blue-600 font-semibold hover:underline text-base">
//               Get Started →
//             </button>
//           </div>
//         </div>
//       </section>

//     </div>
//   )
// }

// export default Home

'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLocation, useNavigate } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const heroRef = useRef(null)
  const heroLeftRef = useRef(null)
  const heroRightRef = useRef(null)

  const hubRef = useRef(null)
  const hubLeftRef = useRef(null)
  const hubRightRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section Animation (on load)
      gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } })
        .from(heroRef.current, { opacity: 0, y: 30 })
        .from(heroLeftRef.current, { x: -100, opacity: 0 }, '-=0.6')
        .from(heroRightRef.current, { x: 100, opacity: 0 }, '-=0.6')

      // AI Hub Section Animation (on scroll)
      gsap.timeline({
        scrollTrigger: {
          trigger: hubRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        defaults: { duration: 1, ease: 'power3.out' }
      })
        .from(hubRef.current, { opacity: 0, y: 30 })
        .from(hubLeftRef.current, { x: -100, opacity: 0 }, '-=0.6')
        .from(hubRightRef.current, { x: 100, opacity: 0 }, '-=0.6')
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="bg-[#dbe5ee] border-b border-gray-400 flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-12 py-20 md:py-24 gap-10 rounded-md shadow-sm mt-2"
      >
        <div ref={heroLeftRef} className="w-full md:w-3/5">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1F2937] leading-snug mb-8">
            Land Your Dream Job with <br />
            <span className="text-[#111827]">AI-Powered Resumes</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-5 font-normal leading-relaxed">
            Get a resume tailored to each job posting using the right keywords. Our AI Resume Analyzer reviews job descriptions and your profile to craft a personalized, optimized resume that gives you a competitive edge.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium text-base px-5 py-2.5 rounded-md shadow-md">
            Get Started
          </button>

          <div className="mt-5 flex items-center gap-2 text-gray-500 text-sm">
            <span>Powered by</span>
            <img src="/gemini.png" alt="Gemini" className="h-5" width={60} height={200} />
          </div>
        </div>

        <div ref={heroRightRef} className="w-full md:w-[40%] h-[400px] bg-gray-100 rounded-lg shadow-inner flex items-center justify-center">
          <img src="/meet.png" alt="Resume AI Visual" className="max-h-full object-contain" />
        </div>
      </section>

      {/* AI Hub Section */}
      <section
        ref={hubRef}
        className="bg-[#f4f5f7] border-t border-gray-200 px-4 md:px-12 py-16 md:py-20 rounded-md shadow-sm"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1F2937] mb-10">
          Unlock Dream Career with <span className="text-[#111827]">AI Hub</span>
        </h2>

        <div className="relative flex items-center justify-center mb-12">
          <div className="absolute w-full h-1 bg-gray-300 top-1/2 transform -translate-y-1/2 z-0" />
          <div className="flex justify-center space-x-12 z-10">

            <button className="bg-white border border-gray-300 px-4 py-2 rounded-md font-medium text-gray-700 text-sm md:text-base transform transition-transform duration-200 hover:scale-105 hover:bg-blue-600 hover:text-white hover:border-blue-600">
              Resume Upload
            </button>
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-md font-medium text-gray-700 text-sm md:text-base transform transition-transform duration-200 hover:scale-105 hover:bg-blue-600 hover:text-white hover:border-blue-600">
              Analysis
            </button>
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-md font-medium text-gray-700 text-sm md:text-base transform transition-transform duration-200 hover:scale-105 hover:bg-blue-600 hover:text-white hover:border-blue-600">
              Report
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div
            ref={hubLeftRef}
            className="w-full md:w-1/2 bg-gray-100 rounded-lg shadow-inner h-[300px] md:h-[320px] relative px-4 flex justify-center items-center"
          >
            <img src="/gemini.png" alt="AI Chat Visual" className="h-20 " />
          </div>

          <div ref={hubRightRef} className="w-full md:w-1/2">
            <h3 className="text-xl md:text-2xl font-semibold text-[#1F2937] mb-3">
              Your Career Compass,<br /> Powered by AI
            </h3>
            <p className="text-gray-700 text-sm md:text-base mb-5 leading-relaxed">
              Using a powerful AI Model, your personal AI consultant analyzes job descriptions and companies to offer career insights. Get expert help with trends, interviews, and growth strategies tailored to your goals.
            </p>
            <nav>
                           <button className="text-blue-600 font-semibold hover:underline text-base">
              Get Started →
            </button>
          </nav>
        </div>
    </div>
      </section >
    </div >
  )
}

export default Home
