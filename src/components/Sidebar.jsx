import React from 'react';
import { 
  GraduationCap, 
  Home, 
  BookOpen, 
  CheckSquare, 
  Award, 
  TrendingUp, 
  Bookmark, 
  Bell, 
  Crown,
  X
} from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { id: 'dashboard', label: 'Bosh sahifa', icon: Home },
  { id: 'subjects', label: 'Fanlar', icon: BookOpen },
  { id: 'tests', label: 'Testlar', icon: CheckSquare },
  { id: 'results', label: 'Natijalar', icon: Award },
  { id: 'progress', label: 'Progress', icon: TrendingUp },
  { id: 'favorites', label: 'Sevimlilar', icon: Bookmark },
  { id: 'reminders', label: 'Eslatmalar', icon: Bell },
];

export default function Sidebar({ activePage, setActivePage, isMobileOpen, setIsMobileOpen, onOpenUpgradeModal }) {
  const handleNavClick = (id) => {
    setActivePage(id);
    if (isMobileOpen) {
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          className="sidebar-backdrop" 
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside className={`sidebar-container ${isMobileOpen ? 'mobile-open' : ''}`}>
        {/* Mobile Close Button */}
        <button 
          className="sidebar-mobile-close" 
          onClick={() => setIsMobileOpen(false)}
          aria-label="Menuni yopish"
        >
          <X size={20} />
        </button>

        {/* Logo Area */}
        <div className="sidebar-logo" onClick={() => handleNavClick('dashboard')}>
          <div className="logo-icon-wrapper">
            <GraduationCap className="logo-icon" size={24} />
          </div>
          <span className="logo-text">StudyHub</span>
        </div>

        {/* Main Navigation */}
        <nav className="sidebar-nav">
          <ul className="nav-list">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <li key={item.id} className="nav-item">
                  <button
                    className={`nav-button ${isActive ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    <Icon size={18} className="nav-icon" />
                    <span className="nav-label">{item.label}</span>
                    {isActive && <div className="active-indicator" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Premium Card */}
        <div className="sidebar-premium-card">
          <div className="premium-icon-box">
            <Crown size={22} className="premium-crown" />
          </div>
          <h4 className="premium-title">Premiumga o'tish</h4>
          <p className="premium-desc">
            Cheksiz testlar va Barcha mavzulardan to'liq foydalaning!
          </p>
          <button 
            className="premium-button"
            onClick={onOpenUpgradeModal}
          >
            Premium olish
          </button>
        </div>
      </aside>
    </>
  );
}
