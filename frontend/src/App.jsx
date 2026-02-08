import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import ConvertCard from "./components/ConvertCard/ConvertCard";
import UploadHero from "./components/UploadHero/UploadHero";
import "./App.css";

const tools = {
  w2p: {
    title: "Word to PDF",
    description: "Make DOC and DOCX files easy to read by converting them to PDF.",
    downloadText: "Download PDF",
  },
  e2p: {
    title: "Excel to PDF",
    description: "Make EXCEL spreadsheets easy to read by converting them to PDF.",
    downloadText: "Download PDF",
  },
  i2p: {
    title: "Image to PDF",
    description: "Convert JPG and PNG images to PDF.",
    downloadText: "Download PDF",
  },
  p2p: {
    title: "PPT to PDF",
    description: "Make PPT and PPTX slideshows easy to view by converting them to PDF.",
    downloadText: "Download PDF",
  },
  compress: {
    title: "Compress PDF",
    description: "Reduce the file size of your PDF while maintaining the best possible quality.",
    downloadText: "Download Compressed PDF",
  },
  merge: {
    title: "Merge PDF",
    description: "Combine multiple PDFs into one unified document.",
    downloadText: "Download Merged PDF",
  },
  split: {
    title: "Split PDF",
    description: "Separate one page or a whole set for easy conversion into independent PDF files.",
    downloadText: "Download Split PDFs",
  },
};

function App() {
  const [activeTool, setActiveTool] = useState("w2p");

  const handleToolClick = (toolName) => {
    setActiveTool(toolName);
  };

  const currentToolData = tools[activeTool];

  return (
    <>
      <Navbar />
      <UploadHero
        title={currentToolData.title}
        description={currentToolData.description}
        downloadText={currentToolData.downloadText}
      />
      <div className="optionsContainer">
        {Object.keys(tools).map((toolName) => (
          <ConvertCard
            key={toolName}
            name={toolName}
            isSelected={activeTool === toolName}
            onClick={() => handleToolClick(toolName)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
