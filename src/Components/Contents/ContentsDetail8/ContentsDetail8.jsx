
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import SideNav from '../SideNav/SideNav';

const ContentsDetail8 = ({ language }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = () => {
    window.scrollTo(0, 0);
    navigate('/contents/detail/7');
  };

  const handleNext = () => {
    window.scrollTo(0, 0);
    navigate('/contents/detail/9');
  };

  const isUrdu = language === 'ur';

  return (
    <div className="detail-layout">
      {/* <SideNav /> */}

      <div className="detail-content">
        <h2 className="detail-heading">
          <span>دعاء کی قبولیت کے لیے ثناء و صلوٰۃ پڑھنے کی شرط</span>
        </h2>

        <p className="detail-text-refined-text">
          <span className="duaa">
            عن عبد الله قال كنت اصلى والنبى <strong>صلى الله عليه و سلم</strong>
            و ابوبکر و عمر معه فلما جلست بدأت بالثناء على الله ثم الصلاة على
            النبی <strong>صلى الله عليه وسلم</strong> ثم دعوت لنفسى فقال النبی
            <strong>صلى الله عليه و سلم</strong> سل تعطه سل تعطه.
            <br />
            [سنن الترمذی ، ابواب السفر ، باب الثناء على الله و الصلاة على النبی
            <strong>صلى الله عليه وسلم</strong> قبل الدعاء]
          </span><br />

          حضرت عبداللہ بن مسعود رضی اللہ عنہ کہتے ہیں کہ میں نماز پڑھ رہا تھا۔ نبی اکرم
          <strong>صلى الله عليه وسلم</strong> تشریف فرما تھے۔ حضرت ابو بکر اور
          حضرت عمر رضی اللہ عنہما بھی آپؐ کے ہمراہ
          تھے۔ جب میں نماز سے فارغ ہو کر بیٹھا تو
          پہلے میں نے اللہ کی ثناء کی، پھر میں نے
          درود پاک پڑھا، پھر اپنے لیے دعاء مانگنے لگا (تو) آپؐ
          نے فرمایا: (اب) مانگ! تجھے دیا
          جائے گا، (اب) مانگ! تجھے دیا جائے گا۔
          <br />
          <span className="duaa">
            عن فضالة بن عبيد يقول سمع رسول الله <strong>صلى الله عليه وسلم</strong>
            رجلا يدعو فى الصلاة لم يمجد الله و لم يصل على النبی <strong>صلى الله عليه وسلم</strong>
            فقال رسول الله <strong>صلى الله عليه وسلم</strong>عجلت ايها المصلى
            ثم علمهم رسول الله و سمع رسول الله
            <strong>صلى الله عليه وسلم</strong> رجلاً يصلى فمجد الله وحمده و صلى على النبی
            <strong>صلى الله عليه و سلم</strong> فقال رسول الله <strong>صلى الله عليه و سلم</strong>
            ادع تجب و سل تعط.
            <br />
            [سنن النسائى ، كتاب السهو ، باب التمجيد والصلاة على النبی فی الصلاة]
          </span><br />

          حضرت فضالہ بن عبید رضی اللہ عنہ سے روایت ہے  رسول اللہ
          <strong>صلى الله عليه وسلم</strong> نے ایک شخص کو نماز میں دعاء کرتے سنا۔ اس نے
          نہ تو اللہ کی بزرگی بیان کی، نہ ہی رسول اللہ <strong>صلى الله عليه وسلم</strong>
          پر درود بھیجا۔ تب آپؐ نے فرمایا: اے نمازی! تو نے جلدی کی۔
          اس کے بعد آپؐ نے لوگوں کو سکھلایا (&nbsp;&nbsp;کہ پہلے اللہ جل جلالہ کی بزرگی بیان کرو، پھر مجھ
          <strong>صلى الله عليه وسلم</strong> پر درود بھیجا کرو، اس کے بعد دعاء
          کیا کرو تاکہ قبول ہو)۔ پھر آپؐ نے ایک شخص کو نماز
          پڑھتے سنا، اس نے اللہ کی بزرگی بیان کی، پھر آپ <strong>صلى الله عليه وسلم</strong>
          پر درود بھیجا،  آپؐ
          نے فرمایا: اب تو دعاء کر، قبول ہوگی اور مانگ ملے گا۔

          <h3 className='unwan-number'>عنوان نمبر 3</h3><br />
          <strong>احادیث مبارکہ کا خلاصہ :</strong>

          رسول اکرم <strong>صلى الله عليه وسلم</strong> نے بہ تاکید یہ بشارت دی ہے
          کہ جب کوئی شخص دعا مانگنے سے قبل
          اللہ تعالیٰ کی ثناء کرتا ہے اور آپ <strong>صلى الله عليه وسلم</strong>
          پر درود شریف پڑھتا ہے تو اس کی دعا کو شرفِ قبولیت بخشا جاتا ہے۔ ایک شخص نے
          اللہ تعالیٰ   کی بزرگی        بیان کیے
          بغیر اور آپ <strong>صلى الله عليه وسلم</strong> پر درود شریف پڑھے بغیر دعا مانگی تو

          آپؐ  نے اسے تنبیہ فرمائی:"تو نے جلدی کی"۔
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

export default ContentsDetail8;

