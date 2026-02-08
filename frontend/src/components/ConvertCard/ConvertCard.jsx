import wordToPDF from "../../assets/icons/wordToPDF.png";
import excelToPDF from "../../assets/icons/ExcelToPDF.png";
import imgToPDF from "../../assets/icons/ImgToPDF.png";
import pptToPDF from "../../assets/icons/PPTtoPDF.png";
import compressPDF from "../../assets/icons/CompressPDF.png";
import mergePDF from "../../assets/icons/MergePDf.png";
import splitPDF from "../../assets/icons/SplitPDF.png";

import "./ConvertCard.css";


function Card({ name = "w2p", onClick, isSelected }) {
  const className = `card ${isSelected ? "selected" : ""}`;

  if (name === "w2p") {
    return (
      <div className={className} onClick={onClick}>
        <img src={wordToPDF} />
        <p>Word to PDF</p>
      </div>
    );
  }

  if (name === "e2p") {
    return (
      <div className={className} onClick={onClick}>
        <img src={excelToPDF} />
        <p>Excel to PDF</p>
      </div>
    );
  }

  if (name === "i2p") {
    return (
      <div className={className} onClick={onClick}>
        <img src={imgToPDF} />
        <p>Image to PDF</p>
      </div>
    );
  }

  if (name === "p2p") {
    return (
      <div className={className} onClick={onClick}>
        <img src={pptToPDF} />
        <p>PPT to PDF</p>
      </div>
    );
  }

  if (name === "compress") {
    return (
      <div className={className} onClick={onClick}>
        <img src={compressPDF} />
        <p>Compress PDF</p>
      </div>
    );
  }

  if (name === "merge") {
    return (
      <div className={className} onClick={onClick}>
        <img src={mergePDF} />
        <p>Merge PDF</p>
      </div>
    );
  }

  if (name === "split") {
    return (
      <div className={className} onClick={onClick}>
        <img src={splitPDF} />
        <p>Split PDF</p>
      </div>
    );
  }

  return null;
}

export default Card;