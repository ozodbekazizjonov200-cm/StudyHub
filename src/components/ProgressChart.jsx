import React from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from 'recharts';
import { TrendingUp, Calendar } from 'lucide-react';
import './ProgressChart.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-custom-tooltip">
        <p className="tooltip-day">{label}</p>
        <p className="tooltip-value">
          <span className="tooltip-dot" /> Natija: <strong>{payload[0].value}%</strong>
        </p>
      </div>
    );
  }
  return null;
};

export default function ProgressChart({ data }) {
  return (
    <div className="progress-chart-card card-base">
      <div className="chart-card-header">
        <div className="chart-title-box">
          <div className="chart-icon-wrap">
            <TrendingUp size={18} color="#7C3AED" />
          </div>
          <div>
            <h3 className="chart-title">Progress grafigi</h3>
            <p className="chart-subtitle">Haftalik o'zlashtirish va faollik darajasi</p>
          </div>
        </div>
        <div className="chart-filter-tag">
          <Calendar size={14} /> Haftalik
        </div>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={230}>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#7C3AED" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94A3B8', fontSize: 12, fontWeight: 500 }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94A3B8', fontSize: 12 }}
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="score" 
              stroke="#7C3AED" 
              strokeWidth={3} 
              fillOpacity={1} 
              fill="url(#purpleGradient)" 
              dot={{ r: 4, fill: '#7C3AED', strokeWidth: 2, stroke: '#FFFFFF' }}
              activeDot={{ r: 7, fill: '#6D28D9', stroke: '#F3F0FF', strokeWidth: 3 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
