
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sayings.css';

const MujahidHussaini = ({ language = 'en' }) => {
  const navigate = useNavigate();
  const isUrdu = language === 'ur';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNext = () => {
    navigate('/sayings/ishaq-bhatti');
  };

  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h2 className="detail-heading"><span>مولانا مجاہد الحسینی صاحب</span></h2>
        <p className="detail-text">
          <span className="duaa">الحمد لله وحده والصلاة والسلام على من لا  نبی بعده</span>
          &nbsp;&nbsp;&nbsp;

          اللّٰہ
          تعالیٰ کے ارشاد
          <span className="duaa">( يَاأَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا )</span>
          (کے اے ایماندارو! تم اس نبی کریمﷺ پر درود و سلام بھیجتے رہو)
          گویا صلاۃ وسلام علی النبی ﷺ فرائض میں سے ہے۔
          اس ارشاد اقدس کی توضیح و تشریح کے سلسلے میں بہت کچھ لکھا جاچکا ہے، لکھا جا رہا ہے اور یہ سلسلہ جاری رہے گا،
          کیونکہ یہ وہ عمل ہے جس کے ایک مرتبہ اظہار پر دس نیکیاں ملتی ہیں
          اور اللہ ارحم الراحمین کی طرف سے دس رحمتوں کا نزول ہوتا ہے۔
          عقیدت و محبت، شیفتگی و وارفتگی کی انتہاء کا مظاہرہ کائنات میں
          حضور محسن اعظم، خاتم المرسلین، رحمۃ للعالمین، شفیع المذ نبین
          <strong>حضرت محمد مصطفی ﷺ</strong>
          کی ذات اقدس کے سوا اور کس کے ساتھ ہو سکتا ہے؟
          ملک کی نامور علمی شخصیت اور معروف ماہر تعلیم
          <strong className="highlight-name">محترم حافظ محمد سلیمان صاحب  (ایم ایڈ)</strong>
          نے اپنے اعلیٰ ذوق و شوق کے ساتھ احادیث صحیحہ پر مشتمل نہایت دیدہ زیب اور جدید تقاضوں کے مطابق رسالہ:
          <br />
          <strong>"درود و سلام بھیجنے کی فرضیت، تاکید اور فضائل کلام ربانی اور احادیث صحیحہ کی روشنی میں"</strong>
          <br />

          کے زیر عنوان شائع کرنے کا شرف حاصل کیا ہے۔
          یہ لائق تحسین و تبریک اور مزید مستحسن یہ کہ انھوں نے اس سلسلے میں اہل علم و تحقیق سے مشاورت کو بڑی اہمیت دی ہے
          اور <span className="duaa">(فوق كل ذی علم عليم)</span> کے تحت
          تحقیق و تجسس اور وسعت مطالعہ کا باب کشادہ رکھا ہے۔
          اللہ تعالیٰ <span className="highlight-name">حافظ محمد سلیمان صاحب</span> کو جزائے خیر دے
          اور اس با سعادت کاوش اور سعی حسنہ کو شرف قبولیت سے نواز کر مقبول خلائق بنائے۔ آمین!
        </p>

        <div className="navigation-buttons-single-next-contents-sayings">
          <button
            type="button"
            className={`single-next-button-contents-sayings ${isUrdu ? 'urdu-next' : ''}`}
            onClick={handleNext}
          >
            {isUrdu ? 'اگلا صفحہ' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MujahidHussaini;
