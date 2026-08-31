import React, { useState } from 'react';
import { Bookmark, Star, Trash2, ArrowRight, PlayCircle } from 'lucide-react';
import './Favorites.css';

export default function Favorites({ onStartQuiz }) {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: "Algebraik ifodalar va qisqa ko'paytirish formulalari",
      subject: "Matematika",
      color: "#7C3AED",
      type: "Mavzu darsi"
    },
    {
      id: 2,
      title: "Present Perfect vs Past Simple farqlari",
      subject: "Ingliz tili",
      color: "#F59E0B",
      type: "Grammatika"
    },
    {
      id: 3,
      title: "Python'da List Comprehensions va Lambda funktsiyalari",
      subject: "Informatika",
      color: "#10B981",
      type: "Kod amaliyoti"
    },
    {
      id: 4,
      title: "Nyuton qonunlari va Mexanik energiya saqlanishi",
      subject: "Fizika",
      color: "#3B82F6",
      type: "Nazariya"
    }
  ]);

  const handleRemove = (id) => {
    setFavorites(favorites.filter(f => f.id !== id));
  };

  return (
    <div className="favorites-page animate-fade-in">
      <div className="page-header-banner">
        <div>
          <h1 className="page-title">Sevimlilar</h1>
          <p className="page-subtitle">Saqlab qo'yilgan darslar, qoidalar va saralangan savollar</p>
        </div>
      </div>

      {favorites.length === 0 ? (
        <div className="empty-favorites card-base">
          <Bookmark size={40} color="#94A3B8" />
          <h3>Sevimlilar ro'yxati bo'sh</h3>
          <p>Darslar davomida o'zingizga yoqqan materiallarni saqlab boring.</p>
        </div>
      ) : (
        <div className="favorites-grid">
          {favorites.map((item) => (
            <div key={item.id} className="fav-card card-base">
              <div className="fav-top">
                <span className="fav-subject-badge" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                  {item.subject}
                </span>
                <button className="fav-remove-btn" onClick={() => handleRemove(item.id)} title="O'chirish">
                  <Trash2 size={16} />
                </button>
              </div>

              <h3 className="fav-title">{item.title}</h3>
              <span className="fav-type">{item.type}</span>

              <button className="fav-start-btn" style={{ backgroundColor: item.color }} onClick={() => onStartQuiz(item.subject)}>
                <PlayCircle size={16} /> Darsni boshlash
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
