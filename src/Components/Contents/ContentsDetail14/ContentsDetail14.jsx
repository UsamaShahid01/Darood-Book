
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import SideNav from '../SideNav/SideNav';

const ContentsDetail14 = ({ language }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = () => {
    navigate('/contents/detail/13');
  };

  const handleNext = () => {
    navigate('/contents/detail/15');
  };

  const isUrdu = language === 'ur';

  return (
    <div className="detail-layout">
      {/* <SideNav /> */}

      <div className="detail-content">
        <h2 className="detail-heading">
          <span>کثرت سے درود شریف پڑھنے کی ترغیب</span>
        </h2>

        <p className="detail-text-refined-text">

          <span className="duaa">
            عن أُبَی بن كعب رضی الله عنه قال: كان <strong>رسول الله ﷺ</strong>
            إذا ذهب ثلثا الليل قام فقال:
            "يَا أَيُّهَا النَّاسُ اذْكُرُوا اللَّهَ، اذْكُرُوا اللَّهَ، جَاءَتِ الرَّاجِفَةُ تَتْبَعُهَا الرَّادِفَةُ،
            جَاءَتِ الْمَوْتُ بِمَا فِيهِ، جَاءَتِ الْمَوْتُ بِمَا فِيهِ".
            قال أُبَی: قلتُ <strong>يا رسول الله</strong> إنی أُكثِر الصلاة عليك، فكم أجعل لك من صلاتی؟
            قال: ما شئت، قلتُ: الربع
            قال: ما شئت فإن زدت فهو خير لك قلتُ: فالنصف قال: ما شئت فإن زدت فهو خير لك
            قلتُ: الثلثين قال: ما شئت فإن
            زدت فهو خير لك قلتُ أجعل لك صلاتی كلها. قال: إذًا تُكفى همَّك ويُغفر لك ذنبك.

            <br />
          </span>
          <span className="duaa">[سنن الترمذی، أبواب صفة القيامة]</span>
          <br />
          حضرت اُبی بن کعب رضی اللہ عنہ سے روایت ہے کہ جب دو تہائی رات گزر جاتی تو
          <strong>رسول اللہ ﷺ</strong> اٹھتے اور فرماتے:
          اے لوگو! اللہ کو یاد کرو،
          اللہ کو یاد کرو، ہلا دینے والا زلزلے  کا جھٹکا آ گیااور اس کے  پیچھےایک اور جھٹکا آئے گا۔
          موت اپنی سختیاں لے کر آ گئی۔
          موت اپنی سختیاں لے کر آ گئی۔

          اُبی بن کعب رضی اللہ عنہ کہتے ہیں کہ میں نے  عرض کیا: <strong>یا رسول اللہ ﷺ</strong>!
          میں آپؐ پر کثرت سے درود پڑھتا ہوں،
          ارشاد فرمائے کہ میں کس قدر پڑھا کروں؟
          فرمایا: جتنا دل چا ہے۔ میں نے عرض کیا,
          کیا وقت کا چوتھائی حصہ؟ فرمایا: جتنا تیرا جی چاہے اور اگر اس سے زیادہ پڑھے تو تیرے لیے بہتر ہے۔ عرض کیا
          نصف وقت؟ فرمایا: جتنا تیرا جی چاہے اور اگر زیادہ کرے تو بہتر ہے۔ میں نے عرض کیا دو تہائی ؟ فرمایا: جتنا
          تیرا جی چاہئے، اگر زیادہ کرے تو افضل ہے۔ میں نے عرض کیا میں اپنا سارا وقت آپؐ پر درود شریف پڑھتا رہوں گا۔
          فرمایا: " تب تیری پریشانیاں دور کر دی جائیں گی اور تیرے گناہ بخش دیئے جائیں گے۔"
          <br />
          <h3 className='unwan-number'>عنوان نمبر 9</h3><br />
          <strong>حدیث پاک کا خلاصہ :</strong>


          آپؐ سے ایک صحابی رضی اللہ عنہ  نے سوال کیا کہ وہ اپنے اعمال  میں سے درود شریف کے لیے کتنا وقت مقرر کرے۔ چوتھائی ؟ آدھا ؟ دو تہائی ؟ یا سارا وقت؟ آخری سوال کے جواب میں آپؐ نے فرمایا کہ اس صورت میں تیرے گناہ معاف ہو جائیں گے اور تجھے
          پریشانیوں سے نجات مل جائے گی۔

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

export default ContentsDetail14;

