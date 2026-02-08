import cloudUpload from "../../assets/icons/cloudUpload.png";
import "./UploadHero.css";


function UploadHero({ title, description, downloadText }) {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p className="subtitle">{description}</p>

      <div className="upload-box">
        <img src={cloudUpload} alt="Upload Icon" className="upload-icon" />

        <p className="upload-text">Drag & Drop your files here or</p>

        <button className="choose-btn">Choose File</button>
      </div>

      {downloadText && (
        <button className="download-btn">
          {downloadText}
        </button>
      )}
    </section>
  );
}

export default UploadHero;
