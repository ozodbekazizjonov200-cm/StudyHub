import React, { useState, useEffect } from 'react';
import { sampleQuizQuestions } from '../data/mockData';
import { 
  Clock, 
  Flag, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  Play
} from 'lucide-react';
import './Tests.css';

export default function Tests({ 
  subjectName = "Matematika", 
  onFinishQuiz, 
  setActivePage 
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState({});
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [showConfirmFinishModal, setShowConfirmFinishModal] = useState(false);

  // Timer countdown effect
  useEffect(() => {
    if (timeLeft <= 0) {
      handleCompleteQuiz();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: optionIndex
    });
  };

  const handleToggleFlag = (index) => {
    setFlaggedQuestions({
      ...flaggedQuestions,
      [index]: !flaggedQuestions[index]
    });
  };

  const handleCompleteQuiz = () => {
    let scoreCount = 0;
    const questions = sampleQuizQuestions;
    
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        scoreCount += 1;
      }
    });

    const percentage = Math.round((scoreCount / questions.length) * 100);
    const resultObj = {
      subject: `${subjectName} testi`,
      score: percentage,
      totalQuestions: questions.length,
      correctCount: scoreCount,
      incorrectCount: questions.length - scoreCount,
      unansweredCount: questions.length - Object.keys(selectedAnswers).length,
      timeSpent: formatTime(900 - timeLeft),
      date: "Hozirgi sinov"
    };

    onFinishQuiz(resultObj);
  };

  const currentQ = sampleQuizQuestions[currentQuestionIndex];
  const answeredCount = Object.keys(selectedAnswers).length;

  return (
    <div className="tests-page animate-fade-in">
      {/* Test Top Navigation Bar */}
      <div className="test-header-bar card-base">
        <div className="test-info-box">
          <span className="badge-tag badge-purple">Onlayn Sinov</span>
          <h2 className="test-subject-name">{subjectName} testi</h2>
        </div>

        {/* Realtime Timer */}
        <div className="test-timer-box">
          <Clock size={18} className="timer-icon" />
          <span className="timer-text">{formatTime(timeLeft)}</span>
        </div>

        <button 
          className="finish-test-btn"
          onClick={() => setShowConfirmFinishModal(true)}
        >
          Testni yakunlash
        </button>
      </div>

      {/* Main Quiz Layout */}
      <div className="test-main-container">
        {/* Left Quiz Question Area */}
        <div className="quiz-question-area card-base">
          <div className="question-header">
            <div className="question-number-badge">
              Savol {currentQuestionIndex + 1} / {sampleQuizQuestions.length}
            </div>
            <button 
              className={`flag-btn ${flaggedQuestions[currentQuestionIndex] ? 'flagged' : ''}`}
              onClick={() => handleToggleFlag(currentQuestionIndex)}
            >
              <Flag size={16} />
              <span>{flaggedQuestions[currentQuestionIndex] ? 'Belgilangan' : 'Belgilash'}</span>
            </button>
          </div>

          {/* Question Text */}
          <h3 className="question-title">{currentQ.question}</h3>

          {/* Options Grid */}
          <div className="options-grid">
            {currentQ.options.map((option, optIdx) => {
              const isSelected = selectedAnswers[currentQuestionIndex] === optIdx;
              const optionLetters = ['A', 'B', 'C', 'D'];

              return (
                <div
                  key={optIdx}
                  className={`option-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelectOption(optIdx)}
                >
                  <div className="option-letter">{optionLetters[optIdx]}</div>
                  <span className="option-text">{option}</span>
                  <div className="option-radio-check">
                    {isSelected && <CheckCircle2 size={18} color="#7C3AED" />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Question Footer Navigation */}
          <div className="question-footer">
            <button
              className="nav-step-btn"
              disabled={currentQuestionIndex === 0}
              onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
            >
              <ChevronLeft size={18} /> Oldingisi
            </button>

            {currentQuestionIndex < sampleQuizQuestions.length - 1 ? (
              <button
                className="nav-step-btn primary"
                onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
              >
                Keyingisi <ChevronRight size={18} />
              </button>
            ) : (
              <button
                className="nav-step-btn finish"
                onClick={() => setShowConfirmFinishModal(true)}
              >
                Yakunlash va Natija <CheckCircle2 size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Right Question Navigator Panel */}
        <div className="quiz-sidebar-panel card-base">
          <h4 className="panel-title">Savollar xaritasi</h4>
          <p className="panel-subtitle">Javob berilgan: {answeredCount} / {sampleQuizQuestions.length}</p>

          <div className="question-numbers-grid">
            {sampleQuizQuestions.map((_, idx) => {
              const isAnswered = selectedAnswers[idx] !== undefined;
              const isCurrent = currentQuestionIndex === idx;
              const isFlagged = flaggedQuestions[idx];

              let statusClass = '';
              if (isCurrent) statusClass += ' current';
              if (isAnswered) statusClass += ' answered';
              if (isFlagged) statusClass += ' flagged';

              return (
                <button
                  key={idx}
                  className={`q-num-btn ${statusClass}`}
                  onClick={() => setCurrentQuestionIndex(idx)}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <div className="legend-box">
            <div className="legend-item"><span className="legend-color answered" /> Bajarildi</div>
            <div className="legend-item"><span className="legend-color current" /> Hozirgi savol</div>
            <div className="legend-item"><span className="legend-color flagged" /> Belgilangan</div>
            <div className="legend-item"><span className="legend-color" /> Bajarilmadi</div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmFinishModal && (
        <div className="modal-backdrop" onClick={() => setShowConfirmFinishModal(false)}>
          <div className="modal-content card-base animate-fade-in" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-box">
                <AlertCircle size={22} color="#EA580C" />
                <h3>Testni yakunlaysizmi?</h3>
              </div>
            </div>

            <div className="modal-body">
              <p>Siz {sampleQuizQuestions.length} ta savoldan {answeredCount} tasiga javob berdingiz.</p>
              {answeredCount < sampleQuizQuestions.length && (
                <p className="warning-text">⚠️ Hali {sampleQuizQuestions.length - answeredCount} ta savol javobsiz qoldi!</p>
              )}
            </div>

            <div className="modal-footer">
              <button 
                className="btn-secondary" 
                onClick={() => setShowConfirmFinishModal(false)}
              >
                Davom ettirish
              </button>
              <button 
                className="btn-primary" 
                style={{ backgroundColor: '#7C3AED' }}
                onClick={handleCompleteQuiz}
              >
                Ha, testni yakunlash
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
