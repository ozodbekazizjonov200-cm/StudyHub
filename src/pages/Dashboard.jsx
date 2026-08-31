import React from 'react';
import StatCard from '../components/StatCard';
import SubjectCard from '../components/SubjectCard';
import ContinueCard from '../components/ContinueCard';
import GoalCard from '../components/GoalCard';
import ProgressChart from '../components/ProgressChart';
import RecentResults from '../components/RecentResults';
import { 
  statsCardsData, 
  subjectsData, 
  continueLearningData, 
  progressChartData, 
  recentResultsData,
  currentUser
} from '../data/mockData';
import { Sparkles, ArrowRight } from 'lucide-react';
import './Dashboard.css';

export default function Dashboard({ 
  setActivePage, 
  onSelectSubject, 
  onStartQuiz, 
  onSelectResult 
}) {
  return (
    <div className="dashboard-page animate-fade-in">
      {/* Top Banner / Welcome Header */}
      <div className="dashboard-welcome-banner">
        <div className="welcome-text-box">
          <div className="welcome-tag">
            <Sparkles size={14} /> Kunlik Motivatsiya
          </div>
          <h1 className="welcome-title">Xush kelibsiz, {currentUser.name}! 👋</h1>
          <p className="welcome-subtitle">Bugun yangi bilim olish uchun ajoyib kun!</p>
        </div>
      </div>

      {/* Statistics Row (4 Cards) */}
      <section className="stats-grid">
        {statsCardsData.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </section>

      {/* Main 2-Column Dashboard Layout */}
      <div className="dashboard-main-layout">
        {/* Left Primary Column */}
        <div className="dashboard-left-col">
          {/* Subjects Section */}
          <section className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">Fanlar</h2>
              <button 
                className="section-link-btn"
                onClick={() => setActivePage('subjects')}
              >
                Barcha fanlar <ArrowRight size={14} />
              </button>
            </div>

            <div className="subjects-grid">
              {subjectsData.map((subject) => (
                <SubjectCard 
                  key={subject.id} 
                  subject={subject} 
                  onClick={() => {
                    onSelectSubject(subject);
                    setActivePage('subjects');
                  }} 
                />
              ))}
            </div>
          </section>

          {/* Continue Learning Section */}
          <section className="dashboard-section">
            <div className="section-header">
              <h2 className="section-title">Davom etish</h2>
            </div>

            <div className="continue-list">
              {continueLearningData.map((item) => (
                <ContinueCard 
                  key={item.id} 
                  item={item} 
                  onStartLesson={() => onStartQuiz(item.subject)} 
                />
              ))}
            </div>
          </section>

          {/* Progress Chart Card */}
          <section className="dashboard-section">
            <ProgressChart data={progressChartData} />
          </section>
        </div>

        {/* Right Sidebar Column */}
        <div className="dashboard-right-col">
          {/* Goal Card */}
          <GoalCard onStartGoalTest={() => onStartQuiz('Matematika')} />

          {/* Recent Results */}
          <RecentResults 
            results={recentResultsData}
            onViewAllResults={() => setActivePage('results')}
            onSelectResult={(item) => {
              onSelectResult(item);
              setActivePage('results');
            }}
          />
        </div>
      </div>
    </div>
  );
}
