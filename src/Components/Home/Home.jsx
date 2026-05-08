
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [showSecondImage, setShowSecondImage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecondImage(prev => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleReadOnline = () => {
    navigate('/contents');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/darood.pdf#page=1'; // ensures PDF opens from the first page
    link.download = 'darood.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home-container">
      <div className="left-side">
        <img
          src="/main-page.png"
          className={`image ${showSecondImage ? 'hidden' : 'visible'}`}
        />
        <img
          src="last-page.jpeg"
          className={`image ${showSecondImage ? 'visible' : 'hidden'}`}
        />
      </div>
      <div className="right-side">
        <h1 className="title">📖 درودِ پاک ﷺ</h1>
        <p className="darood-line">
          درودِ پاک، نبی کریم <strong>ﷺ</strong> پر بھیجی جانے والی وہ بابرکت دعا ہے جو ربِ کریم نے اپنے محبوب کے لیے امت کو عطا فرمائی . یہ عشقِ رسول <strong>ﷺ</strong> کا انمول اظہار ہے۔
        </p>
        {/* <p className="subtitle">Learn for your Akhirat</p> */}
        <div className="download-readonline-button">
          <button className="button-pulse-button" onClick={handleDownload}>
            Download Pdf
          </button>
          <button className="button-pulse-button" onClick={handleReadOnline}>
            Read Online
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

