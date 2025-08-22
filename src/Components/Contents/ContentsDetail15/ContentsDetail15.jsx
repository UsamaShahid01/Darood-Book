
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import SideNav from '../SideNav/SideNav';

const ContentsDetail15 = ({ language }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = () => {
    navigate('/contents/detail/14');
  };

  const handleNext = () => {
    navigate('/contents/detail/16');
  };

  const isUrdu = language === 'ur';

  return (
    <div className="detail-layout">
      {/* <SideNav /> */}

      <div className="detail-content">
        <h2 className="detail-heading">
          <span>درودِ ابراہیمیؑ</span>
        </h2>


        <p className="detail-text-refined-text">


          <p>
            <span className="duaa">
              عن عبد الرحمن بن أبی ليلى قال: لقينی كعب بن عجرة فقال: ألا أُهدی لك هدية سمعتها من النبی
              <strong> ﷺ</strong> فقلت له: بلى فاهدها لی. فقال: سألنا رسول الله <strong> ﷺ</strong>
              فقلنا: يا رسول الله كيف الصلاة عليكم أهل البيت فإن الله قد علمنا كيف نسلم.
              قال: قولوا:

              اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَ عَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ،
              اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَ عَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.
            </span>
          </p>

          <p>
            <span className="duaa">
              [صحيح البخاری، كتاب أحاديث الأنبياء، حدیث نمبر ۳۳۷۰]
            </span>
          </p>

          عبدالرحمن بن ابی لیلی کہتے ہیں کہ کعب بن عجرہ رضی اللہ عنہ مجھ سے ملے اور کہنے لگے:
          کیا میں تمہیں ایک تحفہ دوں جو میں نے رسول اللہ <strong> ﷺ</strong> سے سنا؟
          میں نے کہا: ضرور دو۔
          انہوں نے کہا: ہم  لوگوں نے رسول اللہ <strong> ﷺ</strong> سے عرض کیا:
          یا رسول اللہ  <strong> ﷺ</strong>! ہم آپؐ پر اور آپؐ کے اہل بیت پر کیوں کر درود پڑھیں؟
          کیونکہ آپؐ کو سلام کرنا تو ہم کواللہ نے سکھلا دیا
          ( یعنی تشہد میں السلام عليك ايها النبى و رحمة الله و بركاته)
          آپؐ نے فرمایا ( درود میں ) یوں کہا کرو
          <p>

            <span className="duaa">
              "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَ عَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ،
              اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَ عَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ
              " .           </span>

          </p>
          <strong>ترجمہ   درود شریف:</strong>


          یا اللہ ! محمد  <strong> ﷺ</strong> اور محمد  <strong> ﷺ</strong> کی آل پر صلاۃ بھیج، جیسے تو نے ابراہیمؑ
          اور ابراہیمؑ کی آل پر صلاۃ بھیجی، بے شک تو خوبیوں والا, بڑائی والا ہے۔ یااللہ ! محمد <strong> ﷺ</strong>
          اور محمد <strong> ﷺ</strong> کی آل پر اپنی برکت اتار جیسے تو نے ابراہیمؑ اور ابراہیمؑ کی آل پر برکت اتاری
          بے شک تو خو بیوں والا, بڑائی والا ہے۔





          <strong className='unwan-number'>عنوان نمبر 10</strong><br />
          <strong>حدیث پاک کا خلاصہ:</strong>
          صحابہ کرام رضی اللہ عنہ کے عرض کرنے پر رسول اکرم <strong> ﷺ</strong> 
          نے انھیں درود شریف کے حسب ذیل الفاظ تلقین فرمائے:
          <p>

            <span className="duaa">
              "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَ عَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ،
              اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَ عَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ".
            </span>
          </p>

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

export default ContentsDetail15;

