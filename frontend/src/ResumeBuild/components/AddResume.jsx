import React, { useState } from 'react';
import { PlusSquare } from 'lucide-react';

const AddResume = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showActionPopup, setShowActionPopup] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFiles((prev) => [...prev, file]);
      setShowPopup(false);
    }
  };

  const handleFileClick = (file) => {
    setSelectedFile(file);
    setShowActionPopup(true);
    setShowFullPreview(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">My Resumes</h2>

      <div className="flex flex-wrap-reverse gap-6">
        {/* Add Resume Box */}
        <div
          className="order-first w-[280px] h-[380px] flex flex-col items-center justify-center border-2 border-dashed border-gray-400 text-gray-600 rounded-xl cursor-pointer hover:border-purple-500 hover:text-purple-600 transition"
          onClick={() => setShowPopup(true)}
        >
          <PlusSquare size={40} className="mb-2" />
          <p className="text-lg font-semibold">New resume</p>
        </div>

        {/* Uploaded Resumes */}
        {uploadedFiles.map((file, index) => (
          <div
            key={index}
            className="w-[280px] h-[380px] border border-gray-300 rounded-xl overflow-hidden shadow bg-white flex flex-col cursor-pointer"
            onClick={() => handleFileClick(file)}
          >
            {file.type === 'application/pdf' ? (
              <iframe
                src={URL.createObjectURL(file)}
                title={`Resume ${index + 1}`}
                className="w-full h-[320px]"
              />
            ) : (
              <div className="w-full h-[320px] flex items-center justify-center text-gray-500 text-sm">
                No preview available
              </div>
            )}
            <div className="p-3">
              <h4 className="text-sm font-medium truncate">{file.name}</h4>
              <p className="text-xs text-gray-500 mt-1">
                {(file.size / 1024).toFixed(2)} KB &bull; {file.type}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-opacity-20 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-xl shadow-xl w-[400px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Upload Resume</h2>
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-400 hover:text-black text-xl"
              >
                &times;
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-3">Choose a resume file to upload</p>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="w-full mb-4 text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-purple-100 file:text-purple-700 hover:file:bg-purple-200"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Action Popup (Preview / Analyze) */}
      {showActionPopup && selectedFile && (
        
        <div className="fixed inset-0  bg-opacity-20 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-xl shadow-xl w-[400px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Resume:</h2>
              <button
                onClick={() => setShowActionPopup(false)}
                className="text-gray-400 hover:text-black text-xl"
              >
                &times;
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-3 truncate">{selectedFile.name}</p>

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowFullPreview(true)}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Preview
              </button>
              <button
                onClick={() => {
                  
                }}
                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
              >
                Analyze
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Full File Preview Popup */}
      {showFullPreview && selectedFile && (
        <div className="fixed inset-0 bg-opacity-20 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-[80%] h-[90%] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Preview: {selectedFile.name}</h2>
              <button
                onClick={() => setShowFullPreview(false)}
                className="text-gray-400 hover:text-black text-xl"
              >
                &times;
              </button>
            </div>
            <iframe
              src={URL.createObjectURL(selectedFile)}
              title="Full Resume Preview"
              className="flex-1 w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddResume;
