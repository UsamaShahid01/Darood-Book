import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import SideNav from '../SideNav/SideNav';

const ContentsDetail4 = ({ language }) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = () => {
    window.scrollTo(0, 0);
    navigate('/contents/detail/3');
  };

  const handleNext = () => {
    window.scrollTo(0, 0);
    navigate('/contents/detail/5');
  };

  const isUrdu = language === 'ur';

  return (
    <div className="detail-layout">
      {/* <SideNav /> */}

      <div className="detail-content">
        <h2 className="detail-heading"><span>کلام ربانی میں صلوٰۃ و سلام کا حکم</span></h2>
        <p className="detail-text-refined-text">

          <p>
            <span className="duaa">
              إِنَّ الله وَ مَلبِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ، يَأَيُّهَا الَّذِينَ امَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا.
              <br />
              [٣٣: الاحزاب : ٥٦]
            </span>
            <br />
            الله <strong>پیغمبر ﷺ</strong> پر اپنی رحمت اتارتا ہے اور فرشتے <strong>پیغمبر ﷺ</strong> پر درود بھیجتے ہیں ۔ اے لوگو جو ایمان لائے ہو تم بھی <strong>پیغمبر ﷺ</strong> پر درود بھیجو اور خوب خوب سلام بھیجو۔
          </p>

        </p>

        <div className="navigation-buttons-next-prev-contents-sayings">
          <button className="next-prev-buttons-contents-sayings" onClick={handlePrevious}>
            {isUrdu ? <span className="urdu-font">پچھلا صفحہ</span> : 'Previous'}
          </button>
          <button className="next-prev-buttons-contents-sayings" onClick={handleNext}>
            {isUrdu ? <span className="urdu-font">اگلا صفحہ</span> : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentsDetail4;
