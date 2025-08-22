
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ArifRaza = ({ language = 'en' }) => {
  const navigate = useNavigate();
  const isUrdu = language === 'ur';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = () => {
    window.scrollTo(0, 0);
    navigate('/sayings/riaz-majeed');
  };

  const handleNext = () => {
    window.scrollTo(0, 0);
    navigate('/sayings/ashraf-arif');
  };

  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h2 className="detail-heading"><span>پروفیسر عارف رضا صاحب</span></h2>
        <p className="detail-text">
          جناب <span className="highlight-name">حافظ محمد سلیمان صاحب</span> نے کم و بیش دو سالہ تحقیق اور دیدہ ریزی کے ساتھ ہر اعتبار سے صحیح احادیث کی روشنی میں دس خوب صورت عنوانات کے تحت درود و سلام
          کی فرضیت، فضائل، تاکید، برکات اور ثمرات کا نپے تلے انداز میں پورے افہام کے ساتھ ذکر
          کیا ہے۔
          موصوف کی تالیف میں جو بات مجھے نمایاں نظر آئی اور بہت بھلی لگی وہ یہ ہے کہ موصوف نے ہر باب کے شروع میں نہایت ہی مختصر عنوان دیا.اس کے بعد اس باب کے عنوان کے تحت احادیث مبارکہ عربی متن، حوالہ اور ترجمے کے ساتھ درج کیں اور ہر باب کے آخر میں مذکورہ احادیث کا خلاصہ سادہ اور سلیس الفاظ میں بیان کر دیا۔ یہ انداز آپ نے دس کے دس ابواب میں اپنائے رکھا۔ میں سمجھتا ہوں کہ ابلاغ کے لیے یہ اسلوب ان شاء اللہ نہایت مؤثر ثابت ہوگا۔ علاوہ ازیں اگر بفرض محال کوئی عدیم الفرصت قاری سارا مقالہ نہ پڑھ سکے تو وہ بھی صرف عنوانات اور خلاصہ جات ہی پڑھ کر موضوع سے کما حقہ واقفیت حاصل کر لے گا۔ آخر میں مجھے یہ عرض کرنا ہے کہ یہ رسالہ اپنے سلیس، جامع اور با محاورہ اسلوب تحریر کی وجہ سے ایک منفرد اور مفید مطلب تالیف ہے۔ اللہ تعالیٰ سے دعا ہے کہ مؤلف کی اس عاشقانہ کاوش کو قبول فرمائے ۔
          <br /><span className="duaa">ایـں &nbsp;&nbsp;&nbsp; دعا&nbsp;&nbsp;&nbsp;  از&nbsp;&nbsp;&nbsp; من&nbsp;&nbsp;&nbsp; و&nbsp;&nbsp;&nbsp; از&nbsp;&nbsp;&nbsp; جملہ&nbsp;&nbsp;&nbsp; جہاں&nbsp;&nbsp;&nbsp; آمین&nbsp;&nbsp;&nbsp; باد &nbsp;&nbsp;&nbsp;!</span>
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

export default ArifRaza;

