
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AshrafArif = ({ language = 'en' }) => {
  const navigate = useNavigate();
  const isUrdu = language === 'ur';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = () => {
    window.scrollTo(0, 0);
    navigate('/sayings/arif-raza');
  };

  const handleNext = () => {
    window.scrollTo(0, 0);
    navigate('/sayings/nazar-mohudin');
  };

  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h2 className="detail-heading"><span>چودھری محمد اشرف عارف صاحب</span></h2>
        <p className="detail-text">
          ایک مسلمان کو اپنی زندگی دین اسلام کے مطابق گزارنے کے لیے قرآن وحدیث کے فرمودات سے آگاہی حاصل کرنا ضروری ہے۔
          ارباب علم نے ہر زمانے میں قرآن پاک کی تفہیم کے لیے احادیث <strong>رسول اللہ ﷺ</strong> سے استنباط کیا ہے اور امت مسلمہ کے لیے دینی علم کا ایک قابل قدر ذخیرہ فراہم کیا ہے۔
          جناب <span className="highlight-name">حافظ محمد سلیمان</span> بھی کچھ عرصے سے زندگی کے اہم مسائل پر قرآن پاک کی آیات اور ان کے ضمن میں احادیث کا ایک مجموعہ مرتب کرنے میں مصروف کار ہیں۔
          زیر نظر رساله جو درود شریف کی فرضیت و فضائل اور تاکید پر مشتمل ہے اسی سلسلے کی ایک کڑی ہے۔
          <span className="highlight-name">حافظ محمد سلیمان</span> صاحب درس و تدریس کے پیشے سے منسلک رہے ہیں۔ تحقیق اور غور وفکر ان کا شعار ہے۔
          کامیاب تدریس کے لیے ضروری ہے کہ استاد اپنے متعلمین کو سبق میں برابر کا شریک رکھے۔ اس سنہری اصول پر <span className="highlight-name">حافظ صاحب</span> ہمیشہ کار بند رہے۔
          چنانچہ موجودہ تالیف میں بھی انھوں نے بہت سے صاحب علم حضرات اور احباب کو شریک کار رکھا۔ مجھے بھی اردو ترجمے کی زبان و بیان پر نظر ثانی کا موقع ملا۔
          اس نیک کام میں حصہ لینے پر مجھے نہ صرف بے اندازہ مسرت ہے بلکہ میری معلومات میں بھی بہت سا اضافہ ہوا ہے۔
          خدا کرے یہ مفید مجموعہ قارئین کے لیے اعمال صالحہ کا محرک ثابت ہو اور <strong>رسول اکرم ﷺ</strong> سے دلی لگاؤ کا باعث بن جائے۔
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

export default AshrafArif;
