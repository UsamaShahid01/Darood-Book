
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import SideNav from '../SideNav/SideNav';

const ContentsDetail5 = ({ language }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = () => {
    window.scrollTo(0, 0);
    navigate('/contents/detail/4');
  };

  const handleNext = () => {
    window.scrollTo(0, 0);
    navigate('/contents/detail/6');
  };

  const isUrdu = language === 'ur';

  return (
    <div className="detail-layout">
      {/* <SideNav /> */}

      <div className="detail-content">
        <h2 className="detail-heading"><span>لفظ صلوٰۃ کے مختلف مفاہیم</span></h2>

        <p className="detail-text-refined-text">
          <span className="duaa">
            سورۃ الاحزاب کی آیہ مبارکہ نمبر 56
          </span>
          میں مومنین کو نبی اکرم <strong>محمد صلی اللہ علیہ وسلم</strong> پر جس صلاۃ کے بھیجنے کا حکم دیا گیا ہے اس کا مفہوم مولانا مودودی  رحمۃ اللہ علیہ




          نے یوں بیان کیا ہے:

          "صلاۃ کا لفظ جب علی کے صلہ کے ساتھ آتا ہے تو اس کے تین معنی ہوتے ہیں۔ ایک کسی پر مائل ہونا، اس کی طرف محبت کے ساتھ متوجہ ہونا
          اور اس پر جھکنا۔ دوسرے، کسی کی تعریف کرنا۔ تیسرے، کسی کے حق میں دعاء کرنا۔ یہ لفظ جب اللہ تعالیٰ کے لیے بولا جائے تو ظاہر ہے کہ تیسرے معنی میں نہیں ہوسکتا، کیونکہ
          اللہ کا کسی اور سے دعا کرنا قطعاً ناقابل تصور ہے۔ اس لیے لا محالہ وہ صرف پہلے دو معنوں میں ہوگا، لیکن جب یہ لفظ بندوں کے لیے بولا جائے گا، خواہ وہ فرشتے
          ہوں یا انسان، تو وہ تینوں معنوں میں ہوگا۔ اس میں محبت کا مفہوم بھی ہوگا، مدح و ثنا کا مفہوم بھی اور دعائے رحمت کا مفہوم بھی۔ لہذا اہل ایمان کو نبی
          <strong>محمد صلی اللہ علیہ وسلم</strong> کے حق میں صَلُّوا عَلَیہ کا حکم دینے کا مطلب یہ ہے کہ تم ان کے لیے دعاء کرو۔"
          <br />
          <p className="duaa">(تفہیم القرآن ۔۔۔ جلد چہارم)</p>

        </p>
        <div className="navigation-buttons-next-prev-contents-sayings">
          <button className="next-prev-buttons-contents-sayings" onClick={handlePrevious}>
            {isUrdu ? <span className="urdu-font">پچھلا صفحہ</span> : 'Previous'}
          </button>
          <button className="next-prev-buttons-contents-sayings" onClick={handleNext}>
            {isUrdu ? <span className="urdu-font">اگلا صفحہ</span> : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentsDetail5;

