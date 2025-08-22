
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import SideNav from '../SideNav/SideNav';

const ContentsDetail10 = ({ language }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = () => {
    window.scrollTo(0, 0);
    navigate('/contents/detail/9');
  };

  const handleNext = () => {
    window.scrollTo(0, 0);
    navigate('/contents/detail/11');
  };

  const isUrdu = language === 'ur';

  return (
    <div className="detail-layout">
      {/* <SideNav /> */}

      <div className="detail-content">
        <h2 className="detail-heading">
          <span>جمعۃ المبارک کے شب و روز میں صلوٰۃ پڑھنے کی خصوصی فضیلت</span>
        </h2>

        <p className="detail-text-refined-text">

          <span className="duaa">
            عن اوس بن اوس قال قال رسول الله <strong>صلى الله عليه وسلم</strong> ان من افضل ايامكم يوم الجمعة فيه خلق ادم وفيه قبض وفيه النفخة و فيه الصعقة فاكثروا على من الصلاة فيه فان صلاتكم معروضة على قال قالوا يا رسول الله وكيف تعرض صلاتنا عليك و قدارمت يقولون بليت فقال ان الله عز وجل حرم على الارض اجساد الانبياء.
          </span>
          <br />
          <span className="duaa">
            [سنن ابی داؤد، کتاب الصلاة، تفريع ابواب الجمعة]
          </span>
          <br />

          حضرت اوس بن اوس رضی اللہ عنہ سے روایت ہے کہ <strong>رسول اللہ صلى الله عليه وسلم</strong> نے فرمایا: تمھارے تمام دنوں میں جمعہ کا روز سب سے افضل ہے کہ اسی میں حضرت آدم (علیہ السّلام) کو پیدا فرمایا گیا اسی میں ان کی روح قبض کی گئی اور اسی میں صور پھونکا جائے گا اور اسی میں سب بے ہوش ہوں گے۔ پس اس روز مجھ پر کثرت سے درود بھیجا کرو کیونکہ تمھارا درود مجھ پر پیش کیا جاتا ہے۔ لوگ عرض گزار ہوئے کہ اے اللہ کے <strong>رسول صلى الله عليه وسلم</strong> اس وقت بھلا ہمارا

          درود کس طرح پیش  ہوگا جب آپؐ


          ریزہ ریزہ ہو چکے ہوں گے؟! یعنی مٹی ہو چکے ہوں گے۔ اس پر آپؐ نے فرمایا  : کہ اللہ تعالیٰ نے انبیاء کرام عَلَیهِمُ السَّلَام کے جسموں کو زمین پر حرام کر دیا ہے۔
          <br />
          <span className="duaa">
            عن انس رضى الله عنه قال قال رسول الله <strong>صلى الله عليه وسلم</strong> أكثروا الصلاة على يوم الجمعة و ليلة الجمعة فمن صلى على صلاة صلى الله عليه عشرا.
          </span>
          <br />
          <span className="duaa">
            [صحيح الجامع الصغير وزيادته للألبانی المجلد الأول، رقم الحديث: ١٢٠٩ --- بحواله سنن البيهقى]
          </span>
          <br />
          حضرت انس رضی اللہ عنہ روایت کرتے ہیں : <strong>رسول اکرم صلى الله عليه وسلم</strong> نے فرمایا: جمعہ کے دن اور جمعہ کی رات مجھ پر زیادہ درود پڑھا کرو، کیونکہ جو شخص مجھ پر ایک مرتبہ درود پڑھتا ہے، اللہ تعالیٰ اسے دس مرتبہ بے پایاں رحمتوں اور خصوصی عنایات سے نوازتا ہے۔

          <br />
          <h3 className='unwan-number'>عنوان نمبر 5</h3><br />
          <strong>احادیث مبارکہ کا خلاصہ:</strong>
          جمعتہ المبارک تمام دنوں سے افضل دن ہے۔ اس روز کثرت سے درود شریف پڑھنے کی تاکید فرمائی گئی ہے۔ یہ بشارت بھی دی گئی ہے کہ یہ ہدیۂ عقیدت <strong>رسول اکرم صلى الله عليه وسلم</strong> کی خدمت میں پیش کیا جاتا ہے۔ یہ بھی فرمایا گیا ہے کہ جو (سعادت مند) آپؐ پر ایک مرتبہ درود شریف پڑھتا ہے، اللہ تعالیٰ اس کو دس  مرتبہ بے پایاں رحمتوں اور خصوصی عنایات سے نوازتا ہے۔

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

export default ContentsDetail10;

