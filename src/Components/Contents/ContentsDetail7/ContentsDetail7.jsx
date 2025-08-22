
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import SideNav from '../SideNav/SideNav';

const ContentsDetail7 = ({ language }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = () => {
    window.scrollTo(0, 0);
    navigate('/contents/detail/6');
  };

  const handleNext = () => {
    window.scrollTo(0, 0);
    navigate('/contents/detail/8');
  };

  const isUrdu = language === 'ur';

  return (
    <div className="detail-layout">
      {/* <SideNav /> */}

      <div className="detail-content">
        <h2 className="detail-heading">
          <span>ہدیہ صلوٰۃ و سلام کا رسولؐ  کی خدمت اقدس میں پہنچایا جانا</span>
        </h2>

        <p className="detail-text-refined-text">
          <span className="duaa">
            عن عبد الله قال قال رسول الله <strong>ﷺ</strong> إِنَّ الله مَليكة سياحين فی
            الارض يبلغونی من امتى السلام.
          </span><br />
          <span className="duaa">
            [سنن النسائی، کتاب السهو باب السلام على النبی <strong>ﷺ</strong>]
          </span><br />
          حضرت عبداللہ بن مسعود رضی اللہ عنہ&nbsp; بیان کرتے ہیں: <strong>رسول اللہ ﷺ</strong>
          نے فرمایا: بلا شبہ اللہ تعالیٰ نے فرشتے (متعین) فرمائے ہیں جو (روئے)
          زمین میں گشت کرتے رہتے ہیں (اور) میری امت کی جانب سے بھیجا گیا سلام مجھ تک پہنچاتے
          ہیں۔
          <br />

          <span className="duaa">
            عن ابی هريرة رضى الله عنه قال: قال رسول الله <strong>ﷺ</strong>: لا تتخذوا قبرى
            عيدا ولا تجعلوا
            بيوتكم قبورا وحيثما
            كنتم فصلوا علی
            فان صلاتكم تبلغنى.
          </span><br />
          <span className="duaa">
            [الفتح الربانی لترتيب مسند الامام احمد بن حنبل الشيبانی الجزالرابع عشر ص ۳۰۷ باب وجوب الصلاة
            على النبی --- فضل الصلاة على النبی للامام حافظ اسماعيل بن اسحاق القاضی الازدی
            (متوفی ۲۸۲ ھ) بتصحيح الالبانی رقم الحدیث ٢٠]
          </span><br />
          حضرت ابوھریرہ رضی اللہ عنہ کہتے ہیں کہ <strong>رسول اللہ ﷺ</strong> نے فرمایا: میری قبر کو
          میلہ کی
          جگہ نہ
          بنانا
          اور نہ
          اپنے گھروں
          کو قبریں
          بنانا (کہ گھروں میں سنن ونوافل بھی نہ ادا کرو) اور تم جہاں کہیں بھی ہو تو مجھ پر درود پڑھنا
          کہ تمھارا درود مجھے پہنچتا ہے۔
          <br />
          <span className="duaa">
            عن ابی بکر رضی الله عنه قال: قال رسول الله <strong>ﷺ</strong> اكثر وا الصلاة علی فإنَّ الله
            وكَّل بی ملكا عند قبرى
            فإذا صلى علی رجل من
            امتى قال
            لى ذلك الملك: يا
            محمد إن فلان
            ابن فلان صلّى عليك الساعة.
          </span><br />
          <span className="duaa">
            [صحيح الجامع الصغير
            و زيادته للالبانی ، المجلد الأول رقم الحديث : ۱۲۰۷ --- بحواله مسند الفردوس للد يلمی]
          </span><br />
          حضرت ابو بکر صدیق رضی اللہ عنہ سے روایت ہے: <strong>رسول اللہ ﷺ</strong>
          نے فرمایا: مجھ پر کثرت
          سے درود   (شریف) پڑھا   کرو۔ اللہ  تعالیٰ نے   میری قبر  (مبارک)  کے نزدیک ایک فرشتہ
          مقرر  کر رکھا  ہے۔ میری  امت میں  سے کوئی  شخص جب  مجھ پر  درود (شریف) پڑھتا ہے تو
          یہ فرشتہ
          مجھ سے کہتا
          ہے: اے <strong>محمد ﷺ</strong> اس گھڑی فلاں بن فلاں نے آپؐ پر درود (شریف) پڑھا ہے۔

          <h3 className='unwan-number'>عنوان نمبر 2</h3><br />
          <strong>احادیث مبارکہ کا خلاصہ:</strong>
          کوئی خوش بخت جب کبھی اور جہاں سے بھی <strong>رسول اللہ ﷺ</strong> پر درود و سلام بھیجتا
          ہے تو  ایسے  سعادت مند کو  بشارت دی گئی   ہے کہ اللہ تعالیٰ  کے خصوصی
          انتظامات کے ذریعہ سے اس   خوش نصیب اور  اس کے والد کے  ناموں کے ساتھ
          ایسا ہر ہدیہ عقیدت آپؐ کی خدمت  اقدس میں پیش  کر دیا جاتا
          ہے۔ اور سلام کہنے والے کو آپؐ کمال شفقت سے  جواب بھی مرحمت فرماتے ہیں۔
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

export default ContentsDetail7;


