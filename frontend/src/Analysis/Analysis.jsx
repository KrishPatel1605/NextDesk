import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  CircularProgressbar,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressCircle = ({ value, label }) => (
  <div className="flex flex-col items-center w-32">
    <CircularProgressbar
      value={value}
      text={`${value}%`}
      styles={buildStyles({
        pathColor: '#8b5cf6',
        textColor: '#8b5cf6',
        trailColor: '#e5e7eb',
        textSize: '16px',
      })}
    />
    <p className="mt-2 font-medium text-center text-base">{label}</p>
  </div>
);

const getYouTubeSearchURL = (query) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

const Analysis = () => {
  const location = useLocation();
  const { analysisResult, fileName } = location.state || {};

  if (!analysisResult) {
    return (
      <div className="p-6">
        <p className="text-base">No analysis data found.</p>
      </div>
    );
  }

  return (
    <div className="relative p-6">
      <h2 className="text-3xl font-bold mb-6">
        Resume Analysis for {fileName}
      </h2>

      {typeof analysisResult === 'object' ? (
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1 space-y-8">
            {/* Feedback */}
            <div className="border border-gray-200 p-4 rounded-lg shadow-sm">
              <strong className="block mb-3 text-xl text-gray-800">Feedback:</strong>
              <p className="text-base text-gray-700">{analysisResult.overall_feedback}</p>
            </div>

            {/* Resume Gaps */}
            {analysisResult.resume_gap && (
              <div className="border border-gray-200 p-4 rounded-lg shadow-sm">
                <strong className="block mb-3 text-xl text-gray-800">Resume Gaps:</strong>

                {/* Missing Skills */}
                <div>
                  <strong className="block mb-2 text-lg">Missing Skills:</strong>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {analysisResult.resume_gap.missing_skills.map((skill, i) => {
                      const ytUrl = getYouTubeSearchURL(skill);
                      return (
                        <div key={i} className="border border-gray-100 p-4 rounded-md shadow-sm bg-white">
                          <p className="font-semibold text-base">{skill}</p>
                          <a
                            href={ytUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 px-4 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700"
                          >
                            Watch on YouTube
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Recommended Courses */}
                <div className="mt-6">
                  <strong className="block mb-2 text-lg">Recommended Courses:</strong>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {analysisResult.resume_gap.recommended_courses.map((course, i) => {
                      const ytUrl = getYouTubeSearchURL(course);
                      return (
                        <div key={i} className="border border-gray-100 p-4 rounded-md shadow-sm bg-white">
                          <p className="font-semibold text-base">{course}</p>
                          <a
                            href={ytUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 px-4 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700"
                          >
                            Watch on YouTube
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Experience Advice */}
                <div className="mt-6">
                  <strong className="block mb-2 text-lg">Expert Advice:</strong>
                  <p className="text-base">{analysisResult.resume_gap.experience_required}</p>
                </div>
              </div>
            )}

            {/* Best Matched Job Roles */}
            {analysisResult.recommendations?.best_job_roles && (
              <div className="border border-gray-200 p-4 rounded-lg shadow-sm">
                <strong className="block mb-4 text-xl text-gray-800">Best Matched Job Roles:</strong>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {analysisResult.recommendations.best_job_roles.map((roleObj, index) => {
                    const encodedRole = encodeURIComponent(roleObj.role);
                    const linkedInURL = `https://www.linkedin.com/jobs/search/?keywords=${encodedRole}`;
                    return (
                      <div key={index} className="border border-gray-100 p-4 rounded-md shadow-sm bg-white">
                        <p className="font-semibold text-base">{roleObj.role}</p>
                        <p className="text-sm text-gray-600">Match Percentage: {roleObj.match_percentage}</p>
                        <a
                          href={linkedInURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 px-4 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700"
                        >
                          Apply here
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Fixed Top-Right Pyramid Layout */}
          <div className="hidden md:flex fixed top-30 right-6 z-50 w-72 flex-col items-center justify-center gap-4 bg-white bg-opacity-90 rounded-xl shadow-lg p-4">
            {/* Top Row */}
            <div className="flex justify-center gap-4">
              <ProgressCircle value={parseInt(analysisResult.resume_score)} label="Resume Score" />
              <ProgressCircle value={parseInt(analysisResult.industry_ranking)} label="Industry Ranking" />
            </div>
            {/* Middle Row */}
            <div className="flex justify-center gap-4">
              <ProgressCircle value={parseInt(analysisResult.key_insights?.Skills_Acquired)} label="Skills Acquired" />
              <ProgressCircle value={parseInt(analysisResult.key_insights?.Experience)} label="Experience" />
            </div>
            {/* Bottom Row */}
            <div className="flex justify-center">
              <ProgressCircle value={parseInt(analysisResult.key_insights?.Education_relevance)} label="Education Relevance" />
            </div>
          </div>
        </div>
      ) : (
        <p className="text-base">{analysisResult}</p>
      )}
    </div>
  );
};

export default Analysis;
