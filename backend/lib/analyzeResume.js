const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const analyzeResume = async (resumeText) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = ` 
      You are an AI specialized in Resume Analysis just like an HR in a Company. 
      Analyze the given resume text and return a structured JSON response:
      {
        "resume_score": "<Overall Percentage score out of 100%, based on industry benchmark>",
        "industry_ranking": "<A percentile ranking of the candidate in industry>",
        "overall_feedback": "<One-line feedback on resume quality>",
        "key_insights": {
          "Skills_Acquired": "<Percentage out of 100>",
          "Experience": "<Percentage out of 100>",
          "Education_relevance": "<Percentage out of 100>"
        },
        "resume_gap": {
          "missing_skills": ["Skill1", "Skill2"],
          "recommended_courses": ["Course1", "Course2"],
          "experience_required": "<Specific experience or project suggestions>"
        },
        "recommendations": {
          "best_job_roles": [
            { "role": "Job Role 1", "match_percentage": "<%>" },
            { "role": "Job Role 2", "match_percentage": "<%>" }
          ]
        }
      }

      Resume: """${resumeText}"""
    `;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0, top_p: 0.9, max_output_tokens: 1000 },
    });

    const response = result.response?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!response) throw new Error("AI response is missing");

    const cleanedAnalysis = response.replace(/```json|```/gi, "").trim();
    return JSON.parse(cleanedAnalysis);
  } catch (error) {
    console.error("AI Analysis Error:", error);
    return null;
  }
};

module.exports = analyzeResume;
