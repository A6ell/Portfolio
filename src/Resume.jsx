import React from 'react';
import CVAbel_DemerePDF from './assets/CVAbel_Demere.pdf';
import CVAbel_DemereJPG from './assets/CVAbel_Demere.jpg';

const Resume = () => {
  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = CVAbel_DemerePDF;
    link.click();
  };

  return (
    <div className="container data-container">
      <div>
        <button className='btn btn-success' onClick={handleDownloadClick}>Download PDF</button>
      </div><br />
      <div>
        <img src={CVAbel_DemereJPG} alt="Resume" style={{ width: '100%' }} />
      </div>
    </div>
  );
};

export default Resume;
