import React from 'react';
import { BookOpen, CheckSquare, Trophy, Flame, TrendingUp } from 'lucide-react';
import './StatCard.css';

const iconMap = {
  BookOpen,
  CheckSquare,
  Trophy,
  Flame,
  TrendingUp
};

export default function StatCard({ title, value, unit, badge, isPositive, icon, bgColor, iconColor }) {
  const IconComponent = iconMap[icon] || BookOpen;

  return (
    <div className="stat-card card-base">
      <div className="stat-card-header">
        <div className="stat-icon-wrapper" style={{ backgroundColor: bgColor, color: iconColor }}>
          <IconComponent size={22} />
        </div>
        {badge && (
          <span className={`stat-badge ${isPositive ? 'positive' : ''}`}>
            <TrendingUp size={12} /> {badge}
          </span>
        )}
      </div>

      <div className="stat-card-body">
        <span className="stat-title">{title}</span>
        <div className="stat-value-group">
          <span className="stat-value">{value}</span>
          {unit && <span className="stat-unit">{unit}</span>}
        </div>
      </div>
    </div>
  );
}
