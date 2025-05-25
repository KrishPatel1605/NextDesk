const pdfParse = require("pdf-parse");
const fs = require("fs").promises;
const path = require("path");
const analyzeResume = require("../lib/analyzeResume");

const handleUpload = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    if (req.file.mimetype === "application/pdf") {
      if (!(await fs.stat(req.file.path).catch(() => false))) {
        return res.status(500).json({ error: "File not found after upload" });
      }

      const dataBuffer = await fs.readFile(req.file.path);
      const resumeText = await pdfParse(dataBuffer);

      const textFilePath = path.join("./uploads/", `${req.file.filename}.txt`);
      await fs.writeFile(textFilePath, resumeText.text, "utf8");

      const analysis = await analyzeResume(resumeText.text);
      if (!analysis) return res.status(500).json({ error: "AI analysis failed" });

      await fs.unlink(req.file.path);

      return res.json({
        message: "PDF uploaded, text extracted, and analyzed",
        textFilePath,
        analysis,
      });
    }

    res.json({ message: "File uploaded", filePath: req.file.path });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ error: "Error processing file" });
  }
};

module.exports = { handleUpload };
