
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import SideNav from '../SideNav/SideNav';

const ContentsDetail16 = ({ language }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = () => {
    navigate('/contents/detail/15');
  };

  const isUrdu = language === 'ur';

  return (
    <div className="detail-layout">
      {/* <SideNav /> */}

      <div className="detail-content">
        <h2 className="detail-heading">
          <span>تاثرات</span>
        </h2>

        <div className="detail-text">
          <h2 className="section-heading">علماء کرام و مبلغین اسلام:</h2>
          <ul className="content-list">
            <li><Link to="/sayings/mujahid-hussaini">مولانا مجاہد الحسینی صاحب : مدیر رسالہ "صوت الاسلام" سیرت پاک کے موضوع پر مصنف کے طور سے قومی سطح پر اول ایوارڈ یافتہ۔</Link></li>
            <li><Link to="/sayings/ishaq-bhatti">مولانا محمد اسحاق بھٹی صاحب: ممتاز عالم دین، نامور صحافی اور عظیم سوانح نگار، سابق رفیق ادارہ ثقافت اسلامیہ پاکستان۔</Link></li>
            <li><Link to="/sayings/zameerul-haq">صاحبزادہ میاں محمد ضمیر الحق صاحب: ایم ایڈ، فلبرائیٹ سکالر (ہاورڈ یونیورسٹی، یو. ایس. اے) امیر جماعت سراجیہ فیصل آباد۔</Link></li>
            <li><Link to="/sayings/qari-muhammad-tahir">پروفیسر ڈاکٹر قاری محمد طاہر صاحب: مدیر رسالہ التجوید فیصل آباد۔</Link></li>
            <li><Link to="/sayings/abdul-majeed">پروفیسر ڈاکٹر عبدالمجید چشتی  صاحب : متعدد مجموعہ ہائے احادیث بصورت اربعین کے مؤلف۔</Link></li>
          </ul>

          <h2 className="section-heading">نعت گو حضرات:</h2>
          <ul className="content-list">
            <li><Link to="/sayings/hafeez-taib">جناب حفیظ تائب صاحب: دور حاضر کے عظیم نعت گو شاعر اور پاکستان میں قومی سطح پر ایوارڈ یافتہ۔</Link></li>
            <li><Link to="/sayings/riaz-majeed">پروفیسر ڈاکٹر ریاض مجید صاحب: اردو میں نعت گوئی  (تحقیقی مقالہ) کے مصنف اور نعت گو کے طور پر قومی سطح پر اول ایوارڈ یافتہ۔</Link></li>
            <li><Link to="/sayings/arif-raza">پروفیسر عارف رضا صاحب: صدر شعبہ نفسیات (ر)، گورنمنٹ کالج فیصل آباد، نعت گو کے طور پر قومی سطح پر ایوارڈ یافتہ۔</Link></li>
            <li><Link to="/sayings/ashraf-arif">چودھری محمد اشرف عارف صاحب: (ر) اسسٹنٹ ڈائریکٹر آف ایجوکیشن، سکولز فیصل آباد ڈویژن۔</Link></li>
            <li><Link to="/sayings/nazar-mohudin">جناب نذر محی الدین صاحب: (ر) اسسٹنٹ ڈائریکٹر آف ایجوکیشن، سکولز فیصل آباد ڈویژن۔</Link></li>
          </ul>

          <h2 className="section-heading">دانشور حضرات:</h2>
          <ul className="content-list">
            <li><Link to="/sayings/muzafar-hussain">چودھری مظفر حسین صاحب: صوبائی سطح پر زرعی اطلاعات کے ڈائریکٹر (ر)  آل پاکستان ایجوکیشن کانگریس کے سربراہ۔</Link></li>
            <li><Link to="/sayings/tariq-ismael">جناب طارق اسماعیل ساگر صاحب: پاکستان کے نہایت ہی مقبول اور ہر دلعزیز ادیب۔</Link></li>
            <li><Link to="/sayings/rafiq">جناب محمد رفیق صاحب: پاکستانی نژاد کے ایک نو نہار نمائندہ اور ان شاء اللہ اکیسویں صدی میں اسلام کی نشاۃ ثانیہ میں ایک  بھرپور کردار ادا کرنے کے اہل۔</Link></li>
            <li><Link to="/sayings/saeed-anwar"> پروفیسر ڈاکٹر محمد سعید انور صاحب:پاکستان کے نہایت ہی مقبول اور ہر دلعزیز ادیب۔ </Link></li>

          </ul>
        </div>

        <div className="navigation-buttons-single-prev-contents-sayings">
          <button className="single-prev-button-contents-sayings" onClick={handlePrevious}>
            {isUrdu ? <span className="urdu-font">پچھلا صفحہ</span> : 'Previous'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentsDetail16;
