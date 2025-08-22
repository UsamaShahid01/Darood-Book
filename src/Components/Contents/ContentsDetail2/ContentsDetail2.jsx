
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import SideNav from '../SideNav/SideNav';

const ContentsDetail2 = ({ language }) => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = () => {
    window.scrollTo(0, 0);
    navigate('/contents/detail/1');
  };

  const handleNext = () => {
    window.scrollTo(0, 0);
    navigate('/contents/detail/3');
  };


  const isUrdu = language === 'ur';

  return (
    <div className="detail-layout">
      {/* <SideNav /> */}

      <div className="detail-content">
        <h2 className="detail-heading"><span>تعارف و توثیقی کلمات</span></h2>
        <p className="detail-text-refined-text">
          <span className="highlight-title-ishaq">نامور عالم اور محقق: مولانا محمد اسحاق صاحب</span>
          <span className="sub-title-ishaq">(شہرۂ آفاق رسالہ <strong>"وحدتِ امت" </strong> کے مصنف)</span><br />

          <span className="highlight-name">         حافظ محمدسلیمان حفظہ اللہ</span>، راقم سطور    ھٰذا  کے خطبہ جمعہ میں باقاعدگی سے شامل ہوتے رہتے ہیں۔ نمازِ جمعہ کے بعدسوال و جواب کی جو مجلس ہوتی ہے, اس میں بھی بھرپور شرکت کرتے ہیں۔

          اس دوران میرے ایک  خطبہ جمعہ پر مبنی نہایت  ہی مقبول کتاب <strong>”وحدتِ امت“</strong> کی اشاعت کی ابتدائی کوششوں میں ان کا حصہ قابلِ ذکر ہے۔ <span className="duaa">فجزاه الله عنا وعن سائر المؤمنين!</span><br />

          ان کی ایک بات  مجھے بہت پسند ہے  کہ انہوں نے اپنے طالبِ علمانہ ذوق و شوق کو  اس عمر میں بھی برقرار رکھا ہے۔ مطالعہ کتب میں وہ اپنی ترجیحات کے مطابق اہداف برقرار رکھتے ہیں۔

          <strong>محسن انسانیت ﷺ</strong> کی سیرتِ پاک اور احادیثِ مبارکہ اس زمن  میں  سر  فہرست ہیں۔

          کم و بیش دو سال سے  <strong>رسولِ اکرمﷺ</strong>
          پر  درود و سلام بھیجنے کی فرضیت، فضائل اور تاکید    کے موضوع پر ان کی تحقیق جاری رہی ہے۔ اس سارے عرصے میں اس موضوع پر ایک ایک حدیث کی تحقیق انہوں نے میری رہنمائی میں کی ہے۔ زیرِ نظر رسالہ اسی مسلسل کاوش کا نتیجہ ہے۔

          مجھے یہ توثیق و تصدیق کرتے ہوئے خوشی ہوتی ہے کہ  رسالۂ &nbsp;
          ہذا میں درج تمام احادیثِ مبارکہ ان کے متون اور تراجم میرے علم و تحقیق کے مطابق مستند,   صحیح اور قابلِ اعتماد ہیں۔

          ان احادیثِ شریفہ کو انہوں نے ایک سلیقے کے ساتھ دس ابواب میں مرتب کیا ہے۔پہلے ہر باب کا عنوان دیا گیا ہے  ، پھر احادیث  مبارکہ مع ترجمہ درج کی گئی ہیں اور باب کے آخر میں ان احادیث کا سلیس زبان میں مختصر مگر جامع خلاصہ دیا گیا ہے.

          اس طرح سے اس رسالے کی افادیت دوچند ہو گئی ہے۔ مجھے امید ہے کہ جو مسلمان بھی اس رسالے کو پڑھے گا، اس کی نسبت <strong>رحمت للعالمین ﷺ</strong> کے ساتھ اور زیادہ پختہ ہو گی اور اس طر ح وہ دونوں جہانوں کی سعادتوں کے امیدواروں میں شامل ہو جائے گا۔ ان شاء اللہ!
          <br />
          دعاء ہے کہ اللہ تعالیٰ موصوف کی اس کوشش کو شرفِ قبولیت بخشے،اسے قبولیتِ عامہ عطا فرمائے اور مفید خلائق بنائے۔ آمین!
        </p>


        <div className="navigation-buttons-next-prev-contents-sayings">
          <button className="next-prev-buttons-contents-sayings" onClick={handlePrevious}>
            {isUrdu ? (
              <span className="urdu-font">پچھلا صفحہ</span>
            ) : (
              'Previous'
            )}
          </button>
          <button className="next-prev-buttons-contents-sayings" onClick={handleNext}>
            {isUrdu ? (
              <span className="urdu-font">اگلا صفحہ</span>
            ) : (
              'Next'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentsDetail2;
