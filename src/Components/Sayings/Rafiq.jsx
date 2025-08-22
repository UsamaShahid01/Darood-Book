
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Rafiq = ({ language = 'en' }) => {
  const navigate = useNavigate();
  const isUrdu = language === 'ur';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = () => {
    navigate('/sayings/tariq-ismael');
  };
  const handleNext = () => {
    window.scrollTo(0, 0);
    navigate('/sayings/saeed-anwar');
  };

  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h2 className="detail-heading"><span>جناب محمد رفیق صاحب</span></h2>
        <p className="detail-text">
          <div className="poetry-block">
            بلغ العلى بكماله<br />
            كشف الدجى بجماله<br />
            حسنت جميع خصاله<br />
            صلوا عليه وآله
          </div>

          <br />
          اللہ تعالیٰ نے اسلام کو ہمارا دین قرار دیا۔ اس دین پر
          <strong> خیر البشر ﷺ </strong>
          پر نہ صرف اپنا عمل بے مثال تھا بلکہ دوسروں کو اس کے ذریعے ظلمات سے نور کی طرف نکال لے جانے کی تڑپ بھی بے حد و بے حساب تھی۔
          وہ مصائب جو تبلیغ دین کے سلسلہ میں آپؐ پر ڈھائے گئے ان کے جواب میں جس حلم' برداشت اور خیر خواہی کا آنجنابؐ نے برسوں متواتر مظاہرہ کیا اس کا خیال آتا ہے تو ایک مومن کی زبان بے خودی میں گنگنانے لگتی ہے۔
          <br />
          <span className="duaa">اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ</span>
          <br />
          زیر مطالعہ رسالہ کا موضوع بھی
          <strong> رسول اکرم ﷺ </strong>
          پر درود و سلام بھیجنے کی فرضیت فضائل اور تاکید ہے۔ یوں تو اس موضوع پر ان گنت کتب دستیاب ہیں، مگر ان میں سے اکثر میں موجود روایات کی اسناد کمزور ہوتی ہیں یا پھر سرے سے حوالہ جات ہی غائب ہوتے ہیں۔ اس کے برعکس اس رسالہ میں صرف ایسی احادیث درج کی گئی ہیں جو مستند ثابت شدہ اور صحیح ہیں۔ ہر حدیث کے ساتھ مکمل حوالہ دیا گیا ہے۔ اسلوب ایسا آسان کہ معمولی پڑھا لکھا شخص بھی مذکورہ احادیث کو اصل حوالوں میں دیکھ سکتا ہے۔
          اللہ تعالیٰ
          <span className="highlight-name"> حافظ محمد سلیمان </span>
          حفظہ اللہ اور دیگر معاونین کے لیے اس کتاب کو صدقہ جاریہ بنائے،
          آمین یا رب العالمین!
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

export default Rafiq;

