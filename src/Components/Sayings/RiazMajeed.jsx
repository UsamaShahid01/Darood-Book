
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RiazMajeed = ({ language = 'en' }) => {
  const navigate = useNavigate();
  const isUrdu = language === 'ur';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = () => {
    window.scrollTo(0, 0);
    navigate('/sayings/hafeez-taib');
  };

  const handleNext = () => {
    window.scrollTo(0, 0);
    navigate('/sayings/arif-raza');
  };

  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h2 className="detail-heading"><span>پروفیسر ڈاکٹر ریاض مجید صاحب </span></h2>
        <p className="detail-text">
          حضور اکرم <strong>ﷺ</strong> پر درود و سلام کے باب میں جو کتابیں' کتابچے' گلدستے اور انتخابات اردو زبان میں شائع ہوئے ہیں ان کی تعداد ہزاروں میں ہے۔ اہل ذوق وعلم اپنے مزاج' طبیعت اور معاصر ضرورتوں کے مطابق ان میں سال بسال جو اضافہ فرما رہے ہیں ان کی تعداد بھی سینکڑوں سے کم نہیں۔ درود شریف کے حوالے سے یہ مبارک ذخیرہ ایک جدا گانہ  توضیحی مطالعہ چاہتا ہے جس میں اہل ذوق و عالم حضرات کی درود کے موضوع سے دلچسپی اس ضمن میں ان کی سعی اور نوعیت کے اعتبار سے جائزہ' ترتیب و تدوین اور تحقیق و تشریح کے کئی باب واہ کر سکتا ہے۔ جناب
          <span className="highlight-name"> حافظ محمد سلیمان صاحب </span>
          کا زیر نظر گلدستہ آنحضرت <strong>ﷺ</strong> کی ذات والا صفات سے ارادت مندی اور شیفتگی کا مظہر ہے۔ انھوں نے درود شریف کے فضائل فرضیت اور تاکید کے ضمن میں کلام ربانی اور
          احادیث صحیحہ
          کی روشنی میں جو جائزہ پیش کیا ہے اس کی پیشکش میں شائستگی' خوش سلیقگی کے ساتھ تحقیق و توثیق کا بھی اہتمام کیا ہے۔ خیر وخوبی کے حوالے سے کبھی کوئی محنت رائیگاں نہیں جاتی۔ یہ سعی جمیلہ خدا کے ہاں مقبول اور بندگان خدا میں بہت مقبول ہے۔ اللہ تعالیٰ کی بارگاہ میں دعا ہے کہ وہ جناب
          <span className="highlight-name"> حافظ محمد سلیمان صاحب </span>
          کو اس انداز کے کاموں کی مزید توفیق عطا فرمائے۔
        </p>
        <div className="navigation-buttons-next-prev-contents-sayings">
          <button className="next-prev-buttons-contents-sayings" onClick={handlePrevious}>
            {isUrdu ? (
              <span className="urdu-font">پچھلا صفحہ</span>
            ) : (
              'Previous'
            )}
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

export default RiazMajeed;

