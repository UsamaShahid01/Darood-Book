
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import SideNav from '../SideNav/SideNav';

const ContentsDetail13 = ({ language }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = () => {
    navigate('/contents/detail/12');
  };

  const handleNext = () => {
    navigate('/contents/detail/14');
  };

  const isUrdu = language === 'ur';

  return (
    <div className="detail-layout">
      {/* <SideNav /> */}

      <div className="detail-content">
        <h2 className="detail-heading">
          <span>ذکر الٰہی اور درود شریف سے خالی بدقسمت مجلس کا ذکر</span>
        </h2>



        <p className="detail-text-refined-text">

          <span className="duaa">
            عن جابر رضی الله عنه قال: قال رسول الله <strong>ﷺ</strong>: "ما اجتمع قوم ثم تفرقوا عن غير
            ذكر الله وصلاة على النبی إلا قاموا عن أنتن من جيفة".
          </span>
          <br />
          <span className="duaa">
            [صحيح الجامع الصغير وزيادته
            للألبانی، المجلد الثانی، رقم الحديث: ٥٥٠٦ --- بحواله الطيالسی وشعب الإيمان للبيهقی
            ]          </span>
          <br />

          حضرت جابر رضی اللہ عنہ سے روایت ہے کہ <strong>رسول اللہ ﷺ</strong> نے فرمایا: جب کچھ لوگ اکٹھے ہوں (مگر) ان
          کی مجلس میں نہ تو اللہ تعالیٰ کو یاد کیا جائے اور نہ ہی  نبی اکرم <strong>ﷺ</strong>
          پر درود شریف بھیجا جائے (تو)  ایسے لوگ جب اپنی   اس مجلس سے اٹھیں گے تو (گویا) یہ لوگ ایک سخت بدبودار لاش کے پاس سے اٹھیں گے۔
          <br />
          <span className="duaa">
            عن أبی هريرة عن النبی <strong>ﷺ</strong> قال: ما جلس قوم مجلساً لم يذكروا الله فيه
            ولم يصلوا على نبيهم إلا كان عليهم ترة، فإن شاء عذبهم وإن شاء غفر لهم.
          </span>
          <br />
          <span className="duaa">
            [سنن الترمذی، أبواب الدعوات، باب ما جاء فی القوم يجلسون ولا يذكرون الله]
          </span>
          <br />
          حضرت ابو ہریرہ رضی اللہ عنہ  حضور اکرم <strong>ﷺ</strong>  سے روایت کرتے

          ہیں : کوئی ایسی مجلس نہیں کہ لوگ اس میں بیٹھیں مگر نہ تو (اپنے) اللہ کو یاد کریں
          اور نہ ہی اپنے نبی اکرم <strong>ﷺ</strong>
          پر درود بھیجیں (تو) ایسی مجلس اپنے شرکاء کے لیے باعث حسرت و ندامت ہوگی ۔
          (اب یہ اللہ کی مرضی مبارک ہے ) چاہے (تو) ایسے مجلس لوگوں کو عذاب دے اور
          چاہے تو معاف کر دے۔


          <br />
          <span className="duaa">
            عن أبی هريرة رضی الله عنه قال: قال رسول الله <strong>ﷺ</strong>: ما قعد قوم لم يذكروا فيه الله عزّ و جلّ ويصلوا على النبی صلى الله عليه وسلم الا كان
            عليهم حسرة يوم القيامة وإن دخلوا الجنة للثواب.
          </span>
          <br />
          <span className="duaa">
            [سلسلة الأحاديث الصحيحة للألبانی، المجلد الأول، رقم الحديث: ٧٦ --- بحواله مسند أحمد،
            ( ٤٦٣/٢ ) ابن حبان فی  صحيحه
            (۲۳۲۲۔۔موارد) و الحاكم (٤٩٢/١)
            ]
          </span>
          <br />
          حضرت ابو ہریرہ رضی اللہ عنہ روایت کرتے ہیں  رسول اللہ <strong>ﷺ</strong> نے فرمایا: جس مجلس میں
          لوگ اللہ کا ذکر نہ کریں اور نبی اکرم <strong>ﷺ</strong>
          پر درود شریف نہ بھیجیں، وہ    مجلس قیامت کے
          دن ان لوگوں کے لیے  باعث حسرت ہوگی خواہ وہ نیک اعمال کے بدلے میں جنت میں چلے بھی جائیں۔

          <br />
          <h3 className='unwan-number'>عنوان نمبر 8</h3><br />
          <strong>احادیث مبارکہ کا خلاصہ:</strong>


          جس مجلس میں نہ تو اللہ کا ذکر ہو اور نہ ہی رسول اللہ <strong>ﷺ</strong> پر درود شریف پڑھا جائے تو ایسی مجلس کے
          شرکاء گویا اس سارا عرصہ سخت ترین بد بودار لاش کے پاس بیٹھے رہے ۔ اب یہ اللہ تعالیٰ کی مرضی ہے کہ
          ان کو معاف کر دے یا عذاب کرے۔ قیامت کے دن ایسی مجلس کے شرکاء کو حسرت ہوگی کہ وہ اللہ تعالیٰ کا
          ذکر نہ کر کے  اور درود شریف نہ پڑھ کر درجات کی کتنی بلندیوں سے محروم رہ گئے ۔ ایسے لوگ خواہ دوسرے نیک
          اعمال کی وجہ سے جنت میں داخل ہو بھی جائیں تو اس محرومی کی خلش ان کو وہاں بھی رہے گی ۔





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

export default ContentsDetail13;

