import Header from '@/components/custom/Header'
import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-white">

      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-32 gap-12">
        {/* Left Content */}
        <div className="w-2/3 ">
          <h1 className="text-4xl md:text-5xl font-black  text-[#1F2937] leading-tight mb-12">
            Land Your Dream Job with <br />
            <span className="text-[#111827]">AI-Powered Resumes</span>
          </h1>
          <p className="text-gray-500 text-xl mb-6 font-normal">
            Get a resume tailored to each job posting, using the right keywords to stand out. Our AI Resume Analyzer analyzes job descriptions and your resume profile to create a personalized, optimized resume that gives you the competitive edge. Start building a resume that matches your next opportunity effortlessly.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium text-lg px-6 py-3 rounded-lg shadow-md">
            Get Started
          </button>

          <div className="mt-6 flex items-center gap-2 text-gray-500 text-sm">
            <span>Powered by</span>
            <img src="/public/gemini.png" alt="Gemini" className="h-5" width={60} height={200} />
          </div>
        </div>

        {/* Right Content - Image Placeholder */}
        <div className="w-full md:w-[40%] h-[400px] bg-gray-100 rounded-lg shadow-inner flex items-center justify-center">
          {/* Replace below with actual Image when ready */}
          <img src="/public/meet.png" alt="Resume AI Visual" className="max-h-full object-contain" />
        </div>
      </section>













      {/* Extension Section - AI Hub */}
      <section className="bg-white px-6 md:px-16 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F2937] mb-12">
          Unlock Dream Career with <span className="text-[#111827]">AI Hub</span>
        </h2>

        {/* Tab Section */}
        <div className="flex justify-center space-x-4 mb-10">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium shadow-md">
            AI Consultant
          </button>
          <button className="bg-white border border-gray-300 px-5 py-2 rounded-md font-medium text-gray-700">
            Resume Expert
          </button>
          <button className="bg-white border border-gray-300 px-5 py-2 rounded-md font-medium text-gray-700">
            Smart Cover Letter
          </button>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side - Image Placeholder with Chat Bubbles */}
          <div className="w-full md:w-1/2 bg-gray-100 rounded-lg shadow-inner h-[350px] flex flex-col justify-center items-center relative px-4">
            {/* Placeholder for image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img src="/public/ai-chat.png" alt="AI Chat Visual" className="max-h-full object-contain" />
            </div>

            {/* Chat bubbles (optional if image already has them) */}
            <div className="absolute top-12 left-6 bg-white px-4 py-2 rounded-lg shadow-md text-sm font-medium">
              Hi, I’m trying to improve. Can you help?
            </div>
            <div className="absolute bottom-12 left-16 bg-blue-100 px-4 py-2 rounded-lg shadow-md text-sm font-medium text-[#1F2937]">
              Absolutely! First, let’s identify the type of roles you’re applying for...
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#1F2937] mb-4">
              Your Career Compass,<br /> Powered by AI
            </h3>
            <p className="text-gray-700 text-base mb-6">
              Powered by latest cutting-edge AI Model, your personal AI consultant analyzes job descriptions and company profiles to deliver strategic career insights. Get expert guidance on industry trends, interview preparation, and professional development – all tailored to your career goals.
            </p>
            <button className="text-blue-600 font-semibold hover:underline text-lg">
              Get Started →
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
