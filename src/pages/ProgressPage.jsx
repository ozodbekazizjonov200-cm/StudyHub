import React from 'react';
import ProgressChart from '../components/ProgressChart';
import { progressChartData, subjectsData } from '../data/mockData';
import { TrendingUp, Award, Clock, Target, Calendar, CheckCircle2 } from 'lucide-react';
import './ProgressPage.css';

export default function ProgressPage({ onStartQuiz }) {
  return (
    <div className="progress-page animate-fade-in">
      <div className="page-header-banner">
        <div>
          <h1 className="page-title">O'quv Progressi va Tahlillar</h1>
          <p className="page-subtitle">Haftalik va oylik o'zlashtirish ko'rsatkichlaringiz statistikasi</p>
        </div>
      </div>

      {/* Progress Metric Highlights */}
      <div className="progress-highlights-grid">
        <div className="p-highlight-card card-base">
          <div className="ph-icon purple">
            <Clock size={20} />
          </div>
          <div>
            <span className="ph-label">Jami dars vaqti</span>
            <h3 className="ph-value">48.5 soat</h3>
          </div>
        </div>

        <div className="p-highlight-card card-base">
          <div className="ph-icon green">
            <Award size={20} />
          </div>
          <div>
            <span className="ph-label">Muvaffaqiyat ko'rsatkichi</span>
            <h3 className="ph-value">87.4%</h3>
          </div>
        </div>

        <div className="p-highlight-card card-base">
          <div className="ph-icon orange">
            <Target size={20} />
          </div>
          <div>
            <span className="ph-label">Yechilgan testlar</span>
            <h3 className="ph-value">28 ta</h3>
          </div>
        </div>
      </div>

      {/* Weekly Activity Line Chart */}
      <ProgressChart data={progressChartData} />

      {/* Subject Progress Breakdowns */}
      <div className="subject-progress-breakdown card-base">
        <h3 className="breakdown-title">Fanlar bo'yicha darajalar</h3>

        <div className="sp-list">
          {subjectsData.map((subject) => (
            <div key={subject.id} className="sp-row">
              <div className="sp-info">
                <div className="sp-dot" style={{ backgroundColor: subject.color }} />
                <span className="sp-name">{subject.name}</span>
                <span className="sp-lessons">({subject.lessonsCount})</span>
              </div>

              <div className="sp-bar-group">
                <div className="sp-bar-bg">
                  <div 
                    className="sp-bar-fill" 
                    style={{ width: `${subject.progress}%`, backgroundColor: subject.color }}
                  />
                </div>
                <span className="sp-percent">{subject.progress}%</span>
              </div>

              <button 
                className="sp-action-btn"
                onClick={() => onStartQuiz(subject.name)}
              >
                Test topshirish
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
