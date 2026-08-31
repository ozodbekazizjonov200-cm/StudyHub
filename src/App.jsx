import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Subjects from './pages/Subjects';
import Tests from './pages/Tests';
import Results from './pages/Results';
import ProgressPage from './pages/ProgressPage';
import Favorites from './pages/Favorites';
import Reminders from './pages/Reminders';
import Profile from './pages/Profile';
import { Crown, Sparkles, CheckCircle2, X } from 'lucide-react';
import './App.css';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('Matematika');
  const [lastResult, setLastResult] = useState(null);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  // Start a quiz handler
  const handleStartQuiz = (subjectName = "Matematika") => {
    setSelectedSubject(subjectName);
    setActivePage('tests');
  };

  // Finish quiz handler
  const handleFinishQuiz = (resultObj) => {
    setLastResult(resultObj);
    setActivePage('results');
  };

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <Sidebar 
        activePage={activePage}
        setActivePage={setActivePage}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        onOpenUpgradeModal={() => setShowUpgradeModal(true)}
      />

      {/* Main Content Area */}
      <div className="app-main-wrapper">
        <Header 
          onToggleMobileSidebar={() => setIsMobileOpen(!isMobileOpen)}
          onNavigateProfile={() => setActivePage('profile')}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActivePage={setActivePage}
        />

        <main className="app-content-body">
          {activePage === 'dashboard' && (
            <Dashboard 
              setActivePage={setActivePage}
              onSelectSubject={(subject) => setSelectedSubject(subject.name)}
              onStartQuiz={handleStartQuiz}
              onSelectResult={(result) => setLastResult(result)}
            />
          )}

          {activePage === 'subjects' && (
            <Subjects 
              onStartQuiz={handleStartQuiz}
            />
          )}

          {activePage === 'tests' && (
            <Tests 
              subjectName={selectedSubject}
              onFinishQuiz={handleFinishQuiz}
              setActivePage={setActivePage}
            />
          )}

          {activePage === 'results' && (
            <Results 
              resultData={lastResult || undefined}
              onReturnHome={() => setActivePage('dashboard')}
              onRetakeTest={() => setActivePage('tests')}
            />
          )}

          {activePage === 'progress' && (
            <ProgressPage 
              onStartQuiz={handleStartQuiz}
            />
          )}

          {activePage === 'favorites' && (
            <Favorites 
              onStartQuiz={handleStartQuiz}
            />
          )}

          {activePage === 'reminders' && (
            <Reminders />
          )}

          {activePage === 'profile' && (
            <Profile />
          )}
        </main>
      </div>

      {/* Upgrade Premium Modal */}
      {showUpgradeModal && (
        <div className="modal-backdrop" onClick={() => setShowUpgradeModal(false)}>
          <div className="modal-content premium-upgrade-modal card-base animate-fade-in" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-box">
                <Crown size={22} color="#D97706" />
                <h3>StudyHub Premium statusiga o'tish</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setShowUpgradeModal(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body premium-modal-body">
              <div className="premium-banner-badge">
                <Sparkles size={16} color="#7C3AED" /> Cheksiz Imkoniyatlar
              </div>
              <p className="premium-modal-desc">
                StudyHub Premium bilan 50,000+ dan ortiq testlar, barcha video darslar va AI-Tutor yordamchisidan foydalaning!
              </p>

              <div className="premium-benefits-list">
                {[
                  "Barcha 5+ fan bo'yicha to'liq test bazasi",
                  "Video va Audio darslar yuklab olish imkoniyati",
                  "AI sun'iy intellect maslahatchisi va masalalar tahlili",
                  "Shaxsiy retsenzent va sertifikat berish",
                  "Reklamalarsiz tezkor interfeys"
                ].map((b, i) => (
                  <div key={i} className="p-benefit-item">
                    <CheckCircle2 size={18} color="#059669" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="premium-pricing-card">
                <span className="price-tag">49,000 so'm / oyiga</span>
                <span className="price-sub">Xohlagan vaqtingizda obunani bekor qilishingiz mumkin</span>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setShowUpgradeModal(false)}>
                Keyinroq
              </button>
              <button 
                className="btn-primary" 
                style={{ backgroundColor: '#7C3AED' }}
                onClick={() => {
                  alert("Premium obuna muvaffaqiyatli rasmiylashtirildi! 🎉");
                  setShowUpgradeModal(false);
                }}
              >
                Hozir obuna bo'lish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
