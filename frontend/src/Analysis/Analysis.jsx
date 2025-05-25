import React from 'react';
import { useLocation } from 'react-router-dom';

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
      <h2 className="text-2xl font-bold mb-4">Resume Analysis for {fileName}</h2>
      {typeof analysisResult === 'object' ? (
        <div className="space-y-4">
          <p><strong>Resume Score:</strong> {analysisResult.resume_score}</p>
          <p><strong>Industry Ranking:</strong> {analysisResult.industry_ranking}</p>
          <p><strong>Feedback:</strong> {analysisResult.overall_feedback}</p>

          {analysisResult.key_insights && (
            <div>
              <strong>Key Insights:</strong>
              <ul className="list-disc list-inside mt-2">
                {Object.entries(analysisResult.key_insights).map(([key, value]) => (
                  <li key={key}>{key}: {String(value)}</li>
                ))}
              </ul>
            </div>
          )}

          {analysisResult.resume_gap && (
            <div>
              <strong>Resume Gaps:</strong>
              <ul className="list-disc list-inside mt-2">
                <li><strong>Missing Skills:</strong> {analysisResult.resume_gap.missing_skills.join(', ')}</li>
                <li><strong>Recommended Courses:</strong> {analysisResult.resume_gap.recommended_courses.join(', ')}</li>
                <li><strong>Experience Advice:</strong> {analysisResult.resume_gap.experience_required}</li>
              </ul>
            </div>
          )}

          {analysisResult.recommendations && analysisResult.recommendations.best_job_roles && (
            <div>
              <strong>Best Matched Job Roles:</strong>
              <ul className="list-disc list-inside mt-2">
                {analysisResult.recommendations.best_job_roles.map((roleObj, index) => (
                  <li key={index}>{roleObj.role}: {roleObj.match_percentage}</li>
                ))}
              </ul>
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
