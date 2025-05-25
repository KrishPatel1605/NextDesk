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
        </div>
      ) : (
        <p>{analysisResult}</p>
      )}
    </div>
  );
};

export default Analysis;
