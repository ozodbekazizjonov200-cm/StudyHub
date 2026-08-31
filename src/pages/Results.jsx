import React, { useState } from 'react';
import CircularProgress from '../components/CircularProgress';
import { 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Home, 
  Eye, 
  RotateCcw, 
  Award,
  Sparkles,
  ArrowRight,
  X
} from 'lucide-react';
import { sampleQuizQuestions } from '../data/mockData';
import './Results.css';

export default function Results({ 
  resultData = {
    subject: "Matematika testi",
    score: 92,
    totalQuestions: 50,
    correctCount: 46,
    incorrectCount: 4,
    unansweredCount: 0,
    timeSpent: "14:20"
  },
  onReturnHome,
  onRetakeTest
}) {
  const [showDetailReview, setShowDetailReview] = useState(false);

  const getScoreMessage = (score) => {
    if (score >= 90) return { title: "Ajoyib!", desc: "Siz ushbu testdan a'lo darajada o'tdingiz 🔥" };
    if (score >= 70) return { title: "Yaxshi natija!", desc: "Yaxshi ko'rsatkich, lekin yanada yaxshilash mumkin 👍" };
    return { title: "Harakat qiling!", desc: "Mavzuni takrorlab, qaytadan test topshirib ko'ring 💪" };
  };

  const message = getScoreMessage(resultData.score);

  return (
    <div className="results-page animate-fade-in">
      <div className="results-main-card card-base">
        {/* Top Trophy Banner */}
        <div className="trophy-badge-wrapper">
          <div className="trophy-icon-circle">
            <Trophy size={48} color="#D97706" />
          </div>
          <div className="sparkle-chip">
            <Sparkles size={14} color="#7C3AED" /> Natija tayyor
          </div>
        </div>

        <h1 className="results-headline">{message.title}</h1>
        <p className="results-subtitle">{message.desc}</p>
        <span className="results-subject-name">{resultData.subject}</span>

        {/* Large Score Circle */}
        <div className="score-circle-box">
          <CircularProgress 
            percentage={resultData.score} 
            size={180} 
            strokeWidth={14} 
            progressColor={resultData.score >= 70 ? "#7C3AED" : "#EA580C"}
            centerText={`${resultData.score}%`}
          />
          <div className="score-points-text">
            {resultData.correctCount} / {resultData.totalQuestions} ball
          </div>
        </div>

        {/* Breakdown Stats Cards */}
        <div className="breakdown-grid">
          <div className="breakdown-item correct">
            <div className="item-icon">
              <CheckCircle2 size={20} color="#059669" />
            </div>
            <div className="item-info">
              <span className="item-value">{resultData.correctCount} ta</span>
              <span className="item-label">To'g'ri javoblar</span>
            </div>
          </div>

          <div className="breakdown-item wrong">
            <div className="item-icon">
              <XCircle size={20} color="#DC2626" />
            </div>
            <div className="item-info">
              <span className="item-value">{resultData.incorrectCount} ta</span>
              <span className="item-label">Noto'g'ri javoblar</span>
            </div>
          </div>

          <div className="breakdown-item unanswered">
            <div className="item-icon">
              <HelpCircle size={20} color="#D97706" />
            </div>
            <div className="item-info">
              <span className="item-value">{resultData.unansweredCount} ta</span>
              <span className="item-label">Javob berilmadi</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="results-actions">
          <button 
            className="action-btn secondary"
            onClick={() => setShowDetailReview(true)}
          >
            <Eye size={18} /> Natijalarni ko'rish
          </button>

          <button 
            className="action-btn retake"
            onClick={onRetakeTest}
          >
            <RotateCcw size={18} /> Qayta topshirish
          </button>

          <button 
            className="action-btn primary"
            onClick={onReturnHome}
          >
            <Home size={18} /> Bosh sahifaga qaytish
          </button>
        </div>
      </div>

      {/* Detail Question Review Modal */}
      {showDetailReview && (
        <div className="modal-backdrop" onClick={() => setShowDetailReview(false)}>
          <div className="modal-content review-modal card-base animate-fade-in" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-box">
                <Award size={20} color="#7C3AED" />
                <h3>Savollar va Javoblar tahlili</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setShowDetailReview(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body review-list">
              {(resultData.questionsList || sampleQuizQuestions).map((q, idx) => (
                <div key={q.id} className="review-question-card">
                  <div className="rq-header">
                    <span className="rq-number">Savol {idx + 1}</span>
                    <span className="rq-badge correct">
                      <CheckCircle2 size={14} /> To'g'ri javob kodi: Option {q.correctAnswer + 1}
                    </span>
                  </div>
                  <h4 className="rq-title">{q.question}</h4>
                  <div className="rq-options">
                    {q.options.map((opt, oIdx) => (
                      <div 
                        key={oIdx} 
                        className={`rq-option ${oIdx === q.correctAnswer ? 'correct-opt' : ''}`}
                      >
                        <span className="opt-marker">{String.fromCharCode(65 + oIdx)}</span>
                        <span>{opt}</span>
                      </div>
                    ))}
                  </div>
                  <div className="rq-explanation">
                    💡 <strong>Izoh:</strong> {q.explanation}
                  </div>
                </div>
              ))}
            </div>

            <div className="modal-footer">
              <button className="btn-primary" onClick={() => setShowDetailReview(false)}>
                Tahlilni yopish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
