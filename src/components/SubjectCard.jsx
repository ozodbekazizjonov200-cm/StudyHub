import React from 'react';
import { 
  Calculator, 
  Languages, 
  Code, 
  Atom, 
  FlaskConical, 
  ChevronRight,
  BookOpen
} from 'lucide-react';
import './SubjectCard.css';

const iconMap = {
  Calculator,
  Languages,
  Code,
  Atom,
  FlaskConical
};

export default function SubjectCard({ subject, onClick }) {
  const IconComponent = iconMap[subject.iconName] || BookOpen;

  return (
    <div className="subject-card card-base" onClick={onClick}>
      <div className="subject-icon-box" style={{ background: subject.imageBg }}>
        <IconComponent size={24} color="#ffffff" />
      </div>

      <div className="subject-content">
        <div className="subject-header">
          <h4 className="subject-name">{subject.name}</h4>
          <span className="subject-lessons">{subject.lessonsCount}</span>
        </div>

        <div className="subject-progress-container">
          <div className="progress-bar-bg">
            <div 
              className="progress-bar-fill" 
              style={{ 
                width: `${subject.progress}%`,
                backgroundColor: subject.color
              }} 
            />
          </div>
          <div className="progress-text-row">
            <span className="progress-percent">{subject.progress}% bajarildi</span>
          </div>
        </div>
      </div>

      <div className="subject-arrow-btn">
        <ChevronRight size={18} />
      </div>
    </div>
  );
}
