import React from 'react';
import { Target, Flame, ArrowRight } from 'lucide-react';
import CircularProgress from './CircularProgress';
import './GoalCard.css';

export default function GoalCard({ onStartGoalTest }) {
  return (
    <div className="goal-card card-base">
      <div className="goal-card-header">
        <div className="goal-header-title">
          <Target size={18} color="#7C3AED" />
          <h3>Kun maqsadi</h3>
        </div>
        <span className="goal-date">Bugun</span>
      </div>

      <div className="goal-progress-section">
        <CircularProgress 
          percentage={70} 
          size={140} 
          strokeWidth={12} 
          progressColor="#7C3AED"
          centerText="70%"
        />

        <div className="goal-details">
          <span className="goal-subtitle">Bugungi maqsad</span>
          <h4 className="goal-count">3 / 5 test</h4>
          <p className="goal-motivation">
            <Flame size={16} color="#EA580C" /> Ajral! Davom eting 🔥
          </p>
        </div>
      </div>

      <button className="goal-action-btn" onClick={onStartGoalTest}>
        <span>Maqsadli testni boshlash</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
