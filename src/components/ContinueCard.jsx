import React from 'react';
import { Play } from 'lucide-react';
import './ContinueCard.css';

export default function ContinueCard({ item, onStartLesson }) {
  return (
    <div className="continue-card card-base">
      <div className="continue-left">
        <span className="continue-subject-badge" style={{ backgroundColor: `${item.buttonColor}15`, color: item.buttonColor }}>
          {item.subject}
        </span>
        <h4 className="continue-topic">{item.topic}</h4>
        <div className="continue-meta">
          <span className="continue-percent">{item.progress}% davom etgan</span>
          <span className="continue-dot">•</span>
          <span className="continue-time">{item.totalDuration}</span>
        </div>
      </div>

      <button 
        className="continue-play-btn"
        style={{ backgroundColor: item.buttonColor }}
        onClick={() => onStartLesson(item)}
        aria-label="Darsni davom ettirish"
      >
        <Play size={18} fill="#ffffff" color="#ffffff" />
      </button>
    </div>
  );
}
