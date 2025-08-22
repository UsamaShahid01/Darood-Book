
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sayings.css';

const IshaqBhatti = ({ language = 'en' }) => {
  const navigate = useNavigate();
  const isUrdu = language === 'ur';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  const handlePrevious = () => {
    window.scrollTo(0, 0);
    navigate('/sayings/mujahid-hussaini');
  };

  const handleNext = () => {
    window.scrollTo(0, 0);
    navigate('/sayings/zameerul-haq');
  };

  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h2 className="detail-heading"><span>مولانا محمد اسحاق بھٹی صاحب</span></h2>
        <p className="detail-text">
          تقسیم ملک سے قبل ضلع امرتسر کے ایک ممتاز عالم دین <span className='highlight-ataullah'>حضرت مولانا عطاء اللہ شہید</span> کی خدمات علمی کا بڑا شہرہ تھا۔ انھوں نے اگست <span className="duaa">1947ء</span> میں مرتبہ شہادت پایا۔
          <span className="highlight-name">حافظ محمد سلیمان</span> اسی فاضل شخصیت کے لائق فرزند ہیں، جن کو اللہ تعالیٰ نے قدیم وجدید علوم سے بہرہ مند فرمایا ہے۔
          <strong>"درود وسلام"</strong> ان کی نہایت قابل قدر تصنیف ہے۔ اس میں انھوں نے قرآن و حدیث کی روشنی میں وضاحت کی ہے کہ
          <strong>نبی صلی اللہ علیہ وسلم</strong> کی ذات اقدس پر درود و سلام بھیجنے کا کیا طریقہ ہے اور مسلمانوں کو یہ فریضہ کس طرح انجام دینا چاہیے۔
          یہ حقیقت ہر وقت ہر مسلمان کے ذہن میں رہنی چاہیے کہ جس طرح
          <strong>حضور علیہ الصلاة والسلام</strong> پر ایمان لانا، آپؐ کی نبوت و رسالت کو ماننا، آپؐ کو خاتم النبین تسلیم کرنا اور آپؐ کے تابع فرمان رہنا ضروری ہے
          اسی طرح آپؐ پر درود و سلام بھیجنا بھی ضروری ہے۔
          یہ ایک بنیادی فریضہ ہے، جس کو بجا لانے کا مسلمان کو حکم دیا گیا ہے لیکن بعض لوگ اس میں لغزش کا شکار ہو جاتے ہیں
          اور ایسی راہ اختیار کر لیتے ہیں، جس کا <strong>قرآن و حدیث</strong> سے کوئی تعلق نہیں ہے۔ یہ کتاب اس قسم کے لوگوں کو سیدھی راہ دکھاتی ہے۔ 
          بظاہر  یہ چھوٹی سی کتاب ہے لیکن در حقیقت اس موضوع کی یہ نہایت اہم دستاویز ہے، جس سے صاف اور واضح صورت میں بات نکھر کر سامنے آ جاتی ہے۔
          فاضل مصنف نے آسان <span>پیرایہ&nbsp;&nbsp;بیان</span> میں مسئلے کی تفصیل سے لوگوں کو آگاہ کر دیاہے.ہر شخص کو اس سے استفادہ کرنا چاہیے۔
          مصنف کا یہ بہت بڑا عمل خیر ہے۔ دعا ہے کہ اللہ تعالیٰ ان کی دنیوی زندگی میں برکت فرمائے اور آخرت میں یہ عمل ان کے لیے نجات
           کا ذریعہ بنے۔
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

export default IshaqBhatti;

