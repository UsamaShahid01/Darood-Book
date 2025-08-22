
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contents.css';

const contents = [
  { id: 1, title: "پیش لفظ" },
  { id: 2, title: 'تعارف و توثیقی کلمات' },
  { id: 3, title: 'مقدمہ' },
  { id: 4, title: "کلام ربانی میں صلوٰۃ و سلام کا حکم" },
  { id: 5, title: 'لفظ صلوٰۃ کے مختلف مفاہیم' },
  { id: 6, title: 'صلوٰۃ و سلام بھیجنے والوں کے لیے بشارتیں' },
  { id: 7, title: "ہدیہ صلوٰۃ و سلام کا رسول اکرم ﷺ کی خدمت اقدس میں پہنچایا جانا" },
  { id: 8, title: "دعاء کی قبولیت کے لیے ثناء و صلوٰۃ پڑھنے کی شرط" },
  { id: 9, title: 'مسجد میں داخل ہوتے اور نکلتے وقت صلوٰۃ و سلام' },
  { id: 10, title: "جمعۃ المبارک کے شب و روز میں صلوٰۃ پڑھنے کی خصوصی فضیلت" },
  { id: 11, title: 'جن موا قع پر درود شریف سے شفاعت واجب ہو جاتی ہے' },
  { id: 12, title: "درود شریف پڑھنے سے غفلت پر تنبیہ" },
  { id: 13, title: "ذکر الٰہی اور درود شریف سے خالی بدقسمت مجلس کا ذکر" },
  { id: 14, title: 'کثرت سے درود شریف پڑھنے کی ترغیب' },
  { id: 15, title: "درودِ ابراہیمیؑ" },
  { id: 16, title: 'تاثرات' },
];

const Contents = () => {
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  // ✅ Ensure page always starts at top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelect = (id) => {
    setSelectedId(id);
    navigate(`/contents/detail/${id}`, { state: { fromContents: true } });
  };

  return (
    <div className="contents-container">
      <h2 className="contents-heading">ترتیب</h2>
      <div className="table-labels">
        <span>نمبر شمار</span>
        <span>عنوان</span>
      </div>
      {contents.map((item) => (
        <div
          key={item.id}
          className={`content-item ${selectedId === item.id ? 'active' : ''}`}
          onClick={() => handleSelect(item.id)}
        >
          <div>{item.id}</div>
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Contents;
