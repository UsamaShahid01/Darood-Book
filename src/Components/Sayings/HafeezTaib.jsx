
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HafeezTaib = ({ language = 'en' }) => {
  const navigate = useNavigate();
  const isUrdu = language === 'ur';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = () => {
    window.scrollTo(0, 0);
    navigate('/sayings/abdul-majeed');
  };

  const handleNext = () => {
    window.scrollTo(0, 0);
    navigate('/sayings/riaz-majeed');
  };

  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h2 className="detail-heading"><span>جناب حفیظ تائب صاحب</span></h2>
        <p className="detail-text">
          5ہجری میں اللہ تعالیٰ نے ایمان لانے والوں کو نبی اکرم <strong>ﷺ</strong> پر درود و سلام پڑھنے کا حکم دیا تو صحابہ کرام رضوان اللہ تعالیٰ عنہم رسول کریم <strong>ﷺ</strong> سے درود و سلام کے الفاظ و انداز کے بارے میں پوچھنے لگے۔ اس طرح بے شمار احادیث سامنے آتی گئیں۔ تیسری صدی میں درود و سلام کے بارےاحادیث کو کتابی صورت میں جمع کرنے کا سلسلہ جاری ہو گیا اور اب تک اس موضوع پر بے شمار کتب و رسائل سامنے آچکے ہیں۔ پچھلے کچھ برس سے جیبی سائز کے گلدستوں کی صورت میں مختلف درود شریف جمع کر کے دلکش آرائشوں کے ساتھ نہایت خوبصورت انداز میں چھپوانے کا رواج عام ہوا، جس سے امت مسلمہ کی درود و سلام سے رغبت کا کسی حد تک اندازہ ہوتا ہے۔
          <span className="highlight-name">حافظ محمد سلیمان ایم ایڈ</span> نے ۲۰۰۰ عیسوی /۱۴۲۰ ہجری میں کتاب ”درود و سلام بھیجنے کی فرضیت، تاکید اور فضائل“ میں مختلف عنوانات کے تحت ضروری احادیث صحیحہ جمع کرنے کی سعادت حاصل کی جو مختصر مگر جامع صورت میں سرمایہ قرطاس و قلم میں علمی و روحانی اضافہ کا موجب ہوئی۔ یہ کتاب <span className="highlight-name">حافظ صاحب</span> کی بصیرت اور ترتیب و تدوین کے جدید تقاضوں سے آگاہی کی آئینہ دار ہے اور میں <span className="highlight-name">حافظ محمد سلیمان ایم ایڈ</span> کو اس کی مقبولیت اور دوسری اشاعت پر ہدیہ تبریک پیش کرتا ہوں۔ دعاء ہے کہ ان کی یہ سعی جمیل مفید و مقبول ہو۔
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

export default HafeezTaib;
