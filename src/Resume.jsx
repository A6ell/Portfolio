import React, { useEffect } from 'react';
import CVAbel_DemerePDF from '../assets/CVAbel_Demere.pdf';
import CVAbel_DemereJPG from '../assets/CVAbel_Demere.jpg';
import './Resume.css'; // Import your CSS file

const Resume = () => {
  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = CVAbel_DemerePDF;
    link.click();
  };
// Scroll to the top of the page when the component mounts
useEffect(() => {
  window.scrollTo(0, 0);
}, []); // Empty dependency array ensures this effect runs only once after initial render
  return (
    <div className="container data-container">
      <div className="button-container">
        <button className='btn btn-success' onClick={handleDownloadClick}>Download PDF</button>
      </div>
      <div>
        <img src={CVAbel_DemereJPG} alt="Resume" className="resume-image" />
      </div>
    </div>
  );
};

export default Resume;
