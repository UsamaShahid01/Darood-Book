
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NazarMohudin = ({ language = 'en' }) => {
  const navigate = useNavigate();
  const isUrdu = language === 'ur';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = () => {
    window.scrollTo(0, 0);
    navigate('/sayings/ashraf-arif');
  };

  const handleNext = () => {
    window.scrollTo(0, 0);
    navigate('/sayings/muzafar-hussain');
  };

  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h2 className="detail-heading"><span>جناب نذر محی الدین صاحب</span></h2>
        <p className="detail-text">
          اللہ تعالیٰ نے اپنے محبوب نبی <strong>محمد ﷺ</strong> پر درود و سلام بھیجنے کی تاکید کی ہو اور
          <strong>نبی اکرم ﷺ</strong> نے درود پڑھنے والوں کے لیے بشارتوں کی نوید سنائی ہو تو کون بد بخت ہوگا جو اس
          سعادت سے محروم رہے گا۔ ماضی میں بہت سے بزرگان دین نے درود و سلام کے فضائل سے آگاہ کرنے کے لیے متعلقہ احادیث
          پر مشتمل کتابچے شائع کیے۔ حال میں جناب <span className="highlight-name">حافظ محمد سلیمان</span> صاحب کے حصہ میں
          یہ سعادت آئی ہے۔ چنانچہ انھوں نے ایک نئے انداز میں درود وسلام کی فرضیت، فضائل اور تاکید سے متعلق احادیثِ
          صحیحہ کو یکجا کر کے نہ صرف قابل قدر خدمت انجام دی ہے بلکہ <strong>حضور نبی اکرم ﷺ</strong> کی شفاعت کے حصول کے
          لیے ایک درخواست رقم کی ہے۔ اللہ تعالیٰ منظور فرمائے، آمین! <span className="highlight-name">حافظ صاحب</span> موصوف کا سینہ
          قرآن کے نور سے منور ہے۔ محکمہ تعلیم میں درس و تدریس اور انتظامیہ سے وابستہ رہے ہیں۔ انتہائی رقیق القلب اور
          محبِ رسول<strong> ﷺ</strong> ہیں۔ دورانِ ملازمت امر بالمعروف و نہی عن المنکر کا فریضہ انجام دیتے رہے ہیں۔ ریٹائرمنٹ کے بعد وہ ان
          احادیث کی تدوین میں منہمک ہو گئے جو مسلمانوں میں دین وایمان کا صحیح شعور پیدا کرنے اور تطہیرِ اذہان کے لیے
          خاص اہمیت کی حامل ہیں۔ زیر نظر کتابچہ ان کی اسی فکر کا غماز ہے۔ مجھے ذاتی طور پر علم ہے کہ انھوں نے درود و سلام
          کے  اسی مجموعہ کی ترتیب کے لیے شب و روز محنت کی ہے۔ ان کی مساعی کا یہ ثمر درود شریف پڑھنے کی برکات اور مغفرت کے
          حصول کے لیے یاددہانی کا ایک ذریعہ بنے گا۔ چنانچہ اس کے مطالعہ کے بعد قاری محسوس کرے گا کہ درود پاک خزینۂ رحمت
          و مغفرت ہے، ایک عظیم دولت ہے اور اس دولت سے محرومی بدقسمتی

 کی علامت ہے۔ جس مقصد کو پیش نظر رکھ کر &nbsp;&nbsp;&nbsp;<span className="highlight-name">حافظ صاحب</span> نے
          یہ مجموعہ ترتیب دیا ہے دعا ہے اللہ تعالیٰ وہ مقصد پورا کرے۔ <span className="highlight-name">حافظ صاحب</span> موصوف کی
          <strong>رسول اکرم ﷺ</strong> سے محبت و عقیدت کو مزید نمو بخشے اور قارئین کو درود و سلام پڑھنے اور اس کی عظمت و
          فضیلت کے ادراک کی توفیق عطا فرمائے۔ آمین!
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

export default NazarMohudin;
