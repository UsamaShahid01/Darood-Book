
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './SideNav.css';

const contents = [
  { id: 1, title: "پیش لفظ", page: 5 },
  { id: 2, title: 'تعارف و توثیقی کلمات', page: 9 },
  { id: 3, title: 'مقدمہ', page: 11 },
  { id: 4, title: "کلام ربانی میں صلوٰۃ و سلام کا حکم", page: 19 },
  { id: 5, title: 'لفظ صلوٰۃ کے مختلف مفاہیم', page: 20 },
  { id: 6, title: 'صلوٰۃ و سلام بھیجنے والوں کے لیے بشارتیں', page: 21 },
  { id: 7, title: "ہدیہ صلوٰۃ و سلام کا رسول اکرم ﷺ کی خدمت اقدس میں پہنچایا جانا", page: 27 },
  { id: 8, title: "دعاء کی قبولیت کے لیے ثناء و صلوٰۃ پڑھنے کی شرط", page: 33 },
  { id: 9, title: 'مسجد میں داخل ہوتے اور نکلتے وقت صلوٰۃ و سلام', page: 39 },
  { id: 10, title: "جمعۃ المبارک کے شب و روز میں صلوٰۃ پڑھنے کی خصوصی فضیلت", page: 43 },
  { id: 11, title: 'جن مواقع پر درود شریف سے شفاعت واجب ہو جاتی ہے', page: 49 },
  { id: 12, title: "درود شریف پڑھنے سے غفلت پر تنبیہ", page: 53 },
  { id: 13, title: "ذکر الٰہی اور درود شریف سے خالی بدقسمت مجلس کا ذکر", page: 59 },
  { id: 14, title: 'کثرت سے درود شریف پڑھنے کی ترغیب', page: 65 },
  { id: 15, title: "درودِ ابراہیمیؑ", page: 69 },
  { id: 16, title: 'تاثرات', page: 75 },
];

const SideNav = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedId, setSelectedId] = useState(Number(id));
  const itemRefs = useRef({});
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const newId = Number(id);
    setSelectedId(newId);

    if (newId <= 7) return;

    const container = scrollContainerRef.current;
    const element = itemRefs.current[newId];

    if (container && element) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      const isFullyVisible =
        elementRect.top >= containerRect.top &&
        elementRect.bottom <= containerRect.bottom;

      if (!isFullyVisible) {
        const scrollTop =
          element.offsetTop - container.clientHeight / 2 + element.offsetHeight / 2;

        container.scrollTo({
          top: scrollTop,
          behavior: 'smooth',
        });
      }
    }
  }, [id]);

  const handleClick = (id) => {
    setSelectedId(id);
    navigate(`/contents/detail/${id}`, { state: { fromContents: true } });
  };

  return (
    <div className="sidenav">
      <div className="sidenav-labels">
        <span className="label-number">نمبر شمار</span>
        <span className="label-title">عنوان</span>
        <span className="label-page">صفحہ</span>
      </div>
      <div className="sidenav-scroll" ref={scrollContainerRef}>
        {contents.map((item) => (
          <div
            key={item.id}
            ref={(el) => (itemRefs.current[item.id] = el)}
            className={`sidenav-item ${selectedId === item.id ? 'active' : ''}`}
            onClick={() => handleClick(item.id)}
          >
            <div className="sidenav-number">{item.id}</div>
            <div className="sidenav-title">{item.title}</div>
            <div className="sidenav-page">{item.page}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;

