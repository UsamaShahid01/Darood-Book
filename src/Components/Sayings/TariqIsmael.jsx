
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TariqIsmael = ({ language = 'en' }) => {
  const navigate = useNavigate();
  const isUrdu = language === 'ur';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = () => {
    navigate('/sayings/muzafar-hussain');
  };

  const handleNext = () => {
    navigate('/sayings/rafiq');
  };

  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h2 className="detail-heading"><span>جناب طارق اسماعیل ساگر صاحب</span></h2>
        <p className="detail-text">
          <div className="poetry-block">
            بمصطفیٰؐ برساں خویش را کہ دیں ہمہ اوست<br />
            اگر با او نه رسیدی تمام بولہبیت
          </div>
          <br />
          عتیق صاحب کی وساطت سے آپ کا کتا بچہ مجھ تک پہنچا۔ بلا شبہ آپ نے
          <strong> امام الانبیاء ﷺ </strong>
          پر درود مسعود کی بے پناہ برکات و فضائل سے عام مسلمان کو باخبر کر کے جہاں عشق رسولؐ
          کی اہمیت کو اجاگر کیا وہاں آقائے نامدار سے ہر مسلمان کے تعلق کو مضبوط کرنے کی بھی کامیاب کوشش کی۔
          اللہ تعالٰی آپ کی اس سعی جمیل کو قبول فرما ئیں اور ہم سب کو
          <strong> سید المرسلین ﷺ </strong>
          کے حضور سلام و درود گزارنے کی توفیق ارزانی کریں۔
          اللهم زد فرد<br />
          <div className="poetry-block">
            ادب گاہیست زیر آسمان از عرش نازک تر <br />
            نفس گم کرده مے آیند جنید و بایزید ایں جا
          </div>

        </p>

        <div className="navigation-buttons-next-prev-contents-sayings">
          <button className="next-prev-buttons-contents-sayings" onClick={handlePrevious}>
            {isUrdu ? <span className="urdu-font">پچھلا صفحہ</span> : 'Previous'}
          </button>
          <button
            type="button"
            className={`next-prev-buttons-contents-sayings ${isUrdu ? 'urdu-next' : ''}`}
            onClick={handleNext}
          >
            {isUrdu ? 'اگلا صفحہ' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TariqIsmael;
