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
        pathColor: '#8b5cf6', // Tailwind's purple-500
        textColor: '#8b5cf6',
        trailColor: '#e5e7eb', // gray-200
        textSize: '16px',
      })}
    />
    <p className="mt-2 font-medium text-center">{label}</p>
  </div>
);

const Analysis = () => {
  const location = useLocation();
  const { analysisResult, fileName } = location.state || {};

  if (!analysisResult) {
    return (
      <div className="p-6">
        <p>No analysis data found.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Resume Analysis for {fileName}
      </h2>
      {typeof analysisResult === 'object' ? (
        <div className="space-y-6">
          <div className="flex gap-8 flex-wrap">
            <ProgressCircle value={parseInt(analysisResult.resume_score)} label="Resume Score" />
            <ProgressCircle value={parseInt(analysisResult.industry_ranking)} label="Industry Ranking" />
            <ProgressCircle value={parseInt(analysisResult.key_insights?.Skills_Acquired)} label="Skills Acquired" />
            <ProgressCircle value={parseInt(analysisResult.key_insights?.Experience)} label="Experience" />
            <ProgressCircle value={parseInt(analysisResult.key_insights?.Education_relevance)} label="Education Relevance" />
          </div>

          <p><strong>Feedback:</strong> {analysisResult.overall_feedback}</p>

          {analysisResult.resume_gap && (
            <div>
              <strong>Resume Gaps:</strong>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li><strong>Missing Skills:</strong> {analysisResult.resume_gap.missing_skills.join(', ')}</li>
                <li><strong>Recommended Courses:</strong> {analysisResult.resume_gap.recommended_courses.join(', ')}</li>
                <li><strong>Experience Advice:</strong> {analysisResult.resume_gap.experience_required}</li>
              </ul>
            </div>
          )}

          {analysisResult.recommendations?.best_job_roles && (
            <div>
              <strong>Best Matched Job Roles:</strong>
              <div className="space-y-4 mt-2">
                {analysisResult.recommendations.best_job_roles.map((roleObj, index) => {
                  const encodedRole = encodeURIComponent(roleObj.role);
                  const linkedInURL = `https://www.linkedin.com/jobs/search/?keywords=${encodedRole}`;
                  return (
                    <div key={index} className="border border-gray-200 p-4 rounded-lg shadow-sm">
                      <p className="font-semibold text-lg">{roleObj.role}</p>
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
      ) : (
        <p>{analysisResult}</p>
      )}
    </div>
  );
};

export default Analysis;
