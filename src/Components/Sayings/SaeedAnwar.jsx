import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SaeedAnwar = ({ language = 'en' }) => {
  const navigate = useNavigate();
  const isUrdu = language === 'ur';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = () => {
    navigate('/sayings/rafiq');
  };

  return (
    <div className="detail-layout">
      <div className="detail-content">
        <h2 className="detail-heading"><span>پروفیسر ڈاکٹر محمد سعید انور صاحب</span></h2>
        <p className="detail-text">
          زیرِ نظر کتاب "رسول اکرم<strong>ﷺ</strong>  پر درود و سلام بھیجنے کی فرضیت، تاکید اور فضائل : آیات قرآنیہ اور احادیث صحیحہ کی روشنی میں" جس کے مؤلف و مرتب
          &nbsp;&nbsp;&nbsp;
          <span className="highlight-name">حافظ محمدسلیمان</span> صاحب ہیں، مجھ تک بذریعہ ڈاکٹر طاہر رندھاوا صاحب پہنچی۔ یقیناً محبان صادق ایسے کتب و رسائل تحریر کر کے
          <strong>حضور اکرم ﷺ</strong>  کی شان مبارک کی عظمت کے بیان میں اپنا اپنا حصہ ڈال کر اللہ تعالیٰ سے یہ امید رکھتے ہیں کہ وہ اپنے فضل وکرم سے ان کی یہ حقیر مساعی اپنی بارگاہ اقدس میں قبول فرماتے ہوئے ، اپنے پیارے حبیبؐ کی شفاعت سے بہرہ مند فرمائیں گے اور ہم سب کی بخشش کا ذریعہ بھی۔ ان شاء اللہ! <br />
          سورہ احزاب : میں اللہ تعالیٰ فرماتے ہیں کہ "ایمان والوں کو نبی اکرم<strong>ﷺ</strong> سے اپنی جان سے زیادہ لگاؤ ہے۔ “<br /> بخاری و مسلم شریف میں حضرت ابو ہریرہؓ سے ایک صحیح حدیث مبارکہ مذکور ہے کہ آپؐ

          نے فرمایا:
          ”یقیناً تم پر ایسا زمانہ ضرور آئے گا کہ اُس وقت تمھارا مجھے دیکھ لینا تمھیں اپنے گھر والوں ، مال و دولت کے پانے سے کہیں زیادہ محبوب ہوگا ۔“
          <br />اس محبت اور لگاؤ کے اظہار کے لیے اور اسے مزید مضبوط اور گہرائی عطا کرنے کے لیے اللہ تبارک و تعالیٰ نے خود مومنین کے لیے قرآن پاک میں یہ حکم نازل فرمایا:
          ”تم بھی آپؐ
          پر خوب درود بھیجو اور انتہائی ادب واحترام کے ساتھ سلام پیش کرو" ۔ اللہ ہم سب کو اس پاکیزہ فرض کو ادا کرنے کی توفیق ہمیشہ عطا فرما تار ہے تاکہ ہمارا شمار بھی ان میں ہو جائے جن کو اللہ تعالیٰ اپنے حبیبؐ
          کا ذکر بلند کرنے کے لیے استعمال کرتا ہے ۔ آمین!
        </p>

        <div className="navigation-buttons-single-prev-contents-sayings">
          <button className="single-prev-button-contents-sayings" onClick={handlePrevious}>
            {isUrdu ? <span className="urdu-font">پچھلا صفحہ</span> : 'Previous'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaeedAnwar;
