import React from 'react';
import { Award, ChevronRight } from 'lucide-react';
import './RecentResults.css';

export default function RecentResults({ results, onViewAllResults, onSelectResult }) {
  return (
    <div className="recent-results-card card-base">
      <div className="results-card-header">
        <div className="results-title-box">
          <Award size={18} color="#7C3AED" />
          <h3>So'nggi natijalar</h3>
        </div>
        <button className="view-all-btn" onClick={onViewAllResults}>
          Barchasi <ChevronRight size={14} />
        </button>
      </div>

      <div className="results-list">
        {results.map((item) => (
          <div 
            key={item.id} 
            className="result-item"
            onClick={() => onSelectResult(item)}
          >
            <div className="result-left">
              <div className="result-color-dot" style={{ backgroundColor: item.color }} />
              <div className="result-info">
                <h4 className="result-subject">{item.subject}</h4>
                <span className="result-date">{item.date}</span>
              </div>
            </div>

            <div className="result-right">
              <div className="result-bar-group">
                <div className="result-mini-bar-bg">
                  <div 
                    className="result-mini-bar-fill" 
                    style={{ width: `${item.score}%`, backgroundColor: item.color }}
                  />
                </div>
                <span className="result-score-text" style={{ color: item.color }}>
                  {item.score}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
