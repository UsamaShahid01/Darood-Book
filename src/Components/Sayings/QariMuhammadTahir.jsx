
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const QariMuhammadTahir = ({ language = 'en' }) => {
  const navigate = useNavigate();
  const isUrdu = language === 'ur';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = () => {
    window.scrollTo(0, 0);
    navigate('/sayings/zameerul-haq');
  };

  const handleNext = () => {
    window.scrollTo(0, 0);
    navigate('/sayings/abdul-majeed');
  };

  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h2 className="detail-heading"><span>پروفیسر ڈاکٹر قاری محمد طاہر صاحب</span></h2>
        <p className="detail-text">
           الله رب العزت کے احسانات لا تعداد اور ان گنت ہیں، فرمایا:
          <span className="duaa">( وَإِنْ تَعُدُّوا نِعْمَةَ اللهِ لا تُحْصُوهَا)</span>
          اگر تم اللہ کے احسانات کو صرف گننے بیٹھ جاؤ تو شمار بھی نہ کر سکو ۔
          کوئی شک نہیں کہ انسانیت پر اللہ کے جملہ احسانات بے مثل اور بے بدل ہیں تاہم ایک احسان ایسا ہے جس کے سامنے تمام احسانات ماند ہیں، فرمایا:
          <span className="duaa">(لَقَدْ مَنَّ اللَّهُ عَلَى الْمُؤْمِنِينَ إِذْ بَعَثَ فِيهِمْ رَسُولاً مِنْهُمْ)</span>
          مومنو پر یہ اللہ کا بڑا احسان و انعام ہے کہ اس نے ان میں ایسا رسولؐ بھیجا جو انہی میں سے ہے۔
          اس رسول <strong>صلى الله عليه و سلم</strong> کی عظمت و جلالت بھی تمام انبیاء و رسل علیہ السلام میں ایسی منفرد ہے کہ اللہ خود اس کا ذکر فرمائے اور خود ہی حکم بھی دے۔
          <span className="duaa">(إِنَّ اللَّهَ وَمَلَئِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَايُّهَا الَّذِينَ امَنُوا صَلُّوا عَلَيْهِ وَ سَلِّمُوا تَسْلِيمًا)</span>
          جس عمل میں فرشتوں کے ساتھ اللہ بھی شریک ہو وہ عمل اہل ایمان کے لیے عبادت بھی ہے ثواب بھی سعادت بھی اور ذریعہ نجات بھی۔
          صلاۃ وسلام پڑھنا عشق کا تقاضا ہے، لیکن عشق کبھی اسیر عقل نہیں ہوتا، وہ عقل کی بجائے نقل کا غلام ہے اور نقل بھی ایسی جومستند اور صحیح ہو۔
          <span className="highlight-name">حافظ محمد سلیمان صاحب</span> نے بڑی کاوش سے معتبر اور مستند حوالوں کو تلاش کیا اور صلاۃ و سلام کے حوالہ سے احادیث صحیحہ کا مجموعہ تیار کیا ہے
          جسے انھوں نے دس عنوانات پر تقسیم کر کے درود و سلام کی فرضیت، فضیلت اور تاکید کو اجاگر کرنے کی کامیاب کوشش کی ہے۔
          اللہ تعالیٰ ان کی سعی کو شرف قبولیت عطا فرمائے۔
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

export default QariMuhammadTahir;

