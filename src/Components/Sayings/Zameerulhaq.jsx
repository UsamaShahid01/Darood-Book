
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Zameerulhaq = ({ language = 'en' }) => {
  const navigate = useNavigate();
  const isUrdu = language === 'ur';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = () => {
    window.scrollTo(0, 0);
    navigate('/sayings/ishaq-bhatti');
  };

  const handleNext = () => {
    window.scrollTo(0, 0);
    navigate('/sayings/qari-muhammad-tahir');
  };

  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h2 className="detail-heading"><span>صاحبزادہ میاں محمد ضمیر الحق صاحب</span></h2>
        <p className="detail-text">
          <span className="highlight-name">حافظ محمد سلیمان صاحب</span> مرتب رسالہ ھذا سے میرا تعلق چالیس سال سے زیادہ عرصہ پر محیط ہے۔
          سب سے پہلے <span className="duaa">1950ء</span> کی دہائی کے آخر میں ہم دونوں ایک تعلیمی اجتماع میں اکٹھے ہوئے۔
          یہ اجتماع اعلیٰ ترین سطح پر منعقد ہوا اور اس میں منتخب ہیڈ ماسٹر صاحبان شریک تھے۔
          صرف ایک کلاس ٹیچر کو اس کی حسن کارکردگی کی بنا پر خصوصی طور پر شریک اجتماع کیا گیا اور وہ <span className="highlight-name">حافظ صاحب </span> موصوف تھے.
          وقت گزرتا گیا۔ <span className="duaa">1960ء</span> کی دہائی میں موصوف کو پرانی سرگودھا ڈویژن میں تعلیمی منصوبہ بندی کے فرائض سونپے گئے
          جو انھوں نے آٹھ سال تک بخیر و خوبی سرانجام دیے۔
          <span className="duaa">1970ء</span> کی دہائی میں گورنمنٹ کالج فار ایلمنٹری ٹیچرز فیصل آباد میں بطور ماہر مضمون تعینات ہوئے۔
          جہاں سے <span className="duaa">1988ء</span> میں بطور وائس پرنسپل ریٹائر ہوئے ۔
          اس سارے عرصہ میں ہم اکثر آپس میں ملتے رہے اور محکمانہ تعلیمی اور ہم نصابی سرگرمیوں میں مل جل کر مختلف فعالیتوں میں حصہ لیتے رہے۔
          مجھے خوشی ہے کہ ریٹائرمنٹ کے بعد بھی انھوں نے پیشہ ورانہ سرگرمیوں میں حصہ لینا ترک نہیں کیا
          اور مزید برآں لکھنے پڑھنے کا عمل جاری رکھا۔
          زیر نظر رسالہ بھی اس سلسلہ کی ایک کڑی ہے، جو رسول اکرم <strong>صلى الله عليه وسلم</strong> سے ان کی عقیدت و شیفتگی کا ایک مظہر ہے۔
          اس رسالہ کا واحد مقصد درود و سلام کے ساتھ قارئین میں زیادہ سے زیادہ دلچسپی پیدا کرنا ہے۔
          ان کی آتش شوق کو اس ضمن میں تیز کرنا ہے۔
          اس مقصد کے لیے مؤلف نے صحیح احادیث مبارکہ جمع کیں، ان کو دس ابواب میں مرتب کیا۔
          ہر باب میں پہلے مختصر عنوان دیا، پھر اصل احادیث مبارکہ مع ترجمہ و حوالہ جات دیں
          اور ہر باب کے آخر میں ان احادیث شریفہ کا نہایت سلیس انداز میں خلاصہ دیا۔
          اس طرح سے ہر باب کے پیغام کو قاری تک تین مختلف طرح سے پہنچانے کی کوشش کی ۔
          میرے خیال میں یہ ایک نہایت مستحسن کوشش ہے۔
          اللہ تعالیٰ انھیں جزائے خیر دے۔ میری دعاء ہے کہ یہ رسالہ مقبول خلائق ہو
          اور جو بھی اسے پڑھے اس کی نسبت <strong>رحمۃ للعالمین صلى الله عليه وسلم</strong> کے ساتھ اور زیادہ پختہ اور مستحکم ہو
          کہ سعادت دارین کے حصول کا واحد راستہ یہی ہے۔
          آخر میں قلب سلیم سے دست بہ دعاء ہوں کہ یہ کاوش اتحاد بین المسلمین کا ذریعہ بن جائے ۔ آمین۔
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

export default Zameerulhaq;

