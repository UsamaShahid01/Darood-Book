
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import SideNav from '../SideNav/SideNav';

const ContentsDetail9 = ({ language }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = () => {
    window.scrollTo(0, 0);
    navigate('/contents/detail/8');
  };

  const handleNext = () => {
    window.scrollTo(0, 0);
    navigate('/contents/detail/10');
  };

  const isUrdu = language === 'ur';

  return (
    <div className="detail-layout">
      {/* <SideNav /> */}

      <div className="detail-content">
        <h2 className="detail-heading">
          <span>مسجد میں داخل ہوتے اور نکلتے وقت صلوٰۃ و سلام</span>
        </h2>

        <p className="detail-text-refined-text">


          <span className="duaa">
            عن فاطمة رضى الله عنها بنت <strong>رسول الله صلى الله عليه وآله وسلم</strong> قالت:
            كان <strong>رسول الله</strong> إذا دخل المسجد يقول:

          </span>

          <span className="duaa">
            :
            "بِسْمِ اللهِ وَالسَّلَامُ عَلَى رَسُولِ اللهِ، اللّهُمَّ اغْفِرْ لِى ذُنُوبِى وَافْتَحْ لِى أَبْوَابَ رَحْمَتِكَ"
          </span>
          <span className="duaa">
            و إذا خرج قال :
            "بِسْمِ اللهِ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ اغْفِرْ لِى ذُنُوبِي وَافْتَحْ لِى ابْوَابَ فَضْلِكَ".
          </span>
          <br />
          <span className="duaa">[سنن ابن ماجة، كتاب المساجد والجماعة، باب الدعاء عند دخول المسجد]</span>
          <br />
          جگر گوشہ <strong>رسول صلى الله عليه وآله وسلم</strong> حضرت فاطمہ رضی اللہ عنہ
          فرماتی ہیں کہ
          <strong>رسول اللہ ﷺ</strong> جب مسجد میں داخل ہوتے تو فرماتے:
          <br />
          <span className="duaa">

            " بِسْمِ اللهِ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ اللَّهُمَّ اغْفِرْ لِى ذُنُوبِي وَافْتَحْ لِى أَبْوَابَ رَحْمَتِكَ".
          </span>
          <br />
          (اللہ کے نام سے مسجد میں داخل ہوتا ہوں.اللہ کے <strong> رسولؐ</strong> پر سلام ہو,
          اے اللہ! میرے گناہ  معاف فرما اور اپنی رحمت  کے دروازے میرے لیے  کھول دے)۔
          <br />
          جب مسجد سے باہر نکلتے تو یہ کلمات ادا فرماتے:
          <br />
          <span className="duaa">
            "بِسْمِ اللَّهِ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ اللَّهُمَّ اغْفِرْ لِى ذُنُوبِى وَافْتَحْ لِى أَبْوَابَ فَضْلِكَ".
          </span>
          <br />
          (اللہ کے نام سے مسجد سے نکلتا ہوں, اللہ کے <strong> رسولؐ</strong> پر سلام ہو,
          اے اللہ! میرے گناہ معاف فرما اور اپنے فضل کے دروازے میرے لیے کھول دے)۔

          <h3 className='unwan-number'>عنوان نمبر 4</h3><br />
          <strong>حدیث پاک کا خلاصہ:</strong>
          سید المرسلین
          <strong> ﷺ</strong> کی سنت مبارکہ تھی کہ آپؐ مسجد میں داخل ہوتے وقت فرماتے:
          <br />
          <span className="duaa">
            "بِسْمِ اللهِ وَالسَّلَامُ عَلَى رَسُولِ اللهِ اللَّهُمَّ اغْفِرْ لِى ذُنُوبِى وَافْتَحْ لِى أَبْوَابَ رَحْمَتِكَ".
          </span>
          <br />
          جب آپؐ مسجد سے باہر تشریف لاتے تو فرماتے:
          <br />
          <span className="duaa">
            "بِسْمِ اللهِ وَالسَّلَامُ عَلَى رَسُولِ اللهِ اللَّهُمَّ اغْفِرْ لِى ذُنُوبِى وَافْتَحْ لِى أَبْوَابَ فَضْلِكَ".
          </span>
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

export default ContentsDetail9;
