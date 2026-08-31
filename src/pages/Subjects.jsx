import React, { useState } from 'react';
import { subjectsData } from '../data/mockData';
import { 
  BookOpen, 
  User, 
  ArrowRight, 
  Calculator, 
  Languages, 
  Code, 
  Atom, 
  FlaskConical,
  Sparkles,
  CheckCircle2,
  X
} from 'lucide-react';
import './Subjects.css';

const iconMap = {
  Calculator,
  Languages,
  Code,
  Atom,
  FlaskConical
};

export default function Subjects({ onStartQuiz }) {
  const [activeCategory, setActiveCategory] = useState('Barchasi');
  const [selectedSubjectModal, setSelectedSubjectModal] = useState(null);

  const categories = ['Barchasi', 'Aniq fanlar', 'Gumanitar', 'Tabiiy fanlar'];

  const filteredSubjects = activeCategory === 'Barchasi'
    ? subjectsData
    : subjectsData.filter(s => s.category === activeCategory);

  return (
    <div className="subjects-page animate-fade-in">
      <div className="page-header-banner">
        <div>
          <h1 className="page-title">Fanlar katalogi</h1>
          <p className="page-subtitle">O'zingizga kerakli fanni tanlang va bilimlaringizni sinovdan o'tkazing</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="category-filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Subjects Grid */}
      <div className="subjects-detailed-grid">
        {filteredSubjects.map((subject) => {
          const IconComponent = iconMap[subject.iconName] || BookOpen;

          return (
            <div key={subject.id} className="subject-detail-card card-base">
              <div className="card-top-cover" style={{ background: subject.imageBg }}>
                <div className="cover-icon-wrapper">
                  <IconComponent size={28} color="#FFFFFF" />
                </div>
                <span className="category-badge">{subject.category}</span>
              </div>

              <div className="card-body">
                <h3 className="subject-title">{subject.name}</h3>
                <p className="subject-description">{subject.description}</p>

                <div className="teacher-info">
                  <User size={14} className="teacher-icon" />
                  <span>{subject.teacher}</span>
                </div>

                <div className="subject-progress-box">
                  <div className="progress-label-row">
                    <span>O'zlashtirish</span>
                    <strong>{subject.progress}%</strong>
                  </div>
                  <div className="progress-bar-bg">
                    <div 
                      className="progress-bar-fill"
                      style={{ width: `${subject.progress}%`, backgroundColor: subject.color }}
                    />
                  </div>
                </div>

                <div className="card-actions">
                  <button 
                    className="btn-secondary"
                    onClick={() => setSelectedSubjectModal(subject)}
                  >
                    Mavzular
                  </button>
                  <button 
                    className="btn-primary"
                    style={{ backgroundColor: subject.color }}
                    onClick={() => onStartQuiz(subject.name)}
                  >
                    Test yechish <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Subject Topic List Modal */}
      {selectedSubjectModal && (
        <div className="modal-backdrop" onClick={() => setSelectedSubjectModal(null)}>
          <div className="modal-content card-base animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-box">
                <BookOpen size={20} color={selectedSubjectModal.color} />
                <h3>{selectedSubjectModal.name} — Mavzular ro'yxati</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setSelectedSubjectModal(null)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{selectedSubjectModal.description}</p>
              
              <div className="topics-list">
                {[
                  "1. Kirish va asosiy tushunchalar",
                  "2. Nazariy qoidalar va formulalar",
                  "3. Amaliy mashqlar va masalalar yechish",
                  "4. O'rta darajadagi murakkab holatlar",
                  "5. Test topshiriqlari va takrorlash",
                  "6. Yakuniy nazorat sinovi"
                ].map((topic, i) => (
                  <div key={i} className="topic-item">
                    <CheckCircle2 size={16} color="#059669" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setSelectedSubjectModal(null)}>
                Yopish
              </button>
              <button 
                className="btn-primary"
                style={{ backgroundColor: selectedSubjectModal.color }}
                onClick={() => {
                  const subjectName = selectedSubjectModal.name;
                  setSelectedSubjectModal(null);
                  onStartQuiz(subjectName);
                }}
              >
                Ushbu fandan testni boshlash
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
