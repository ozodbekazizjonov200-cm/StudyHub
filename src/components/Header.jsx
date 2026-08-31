import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  ChevronDown, 
  Menu, 
  User, 
  Settings, 
  LogOut, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { currentUser, notificationsData } from '../data/mockData';
import './Header.css';

export default function Header({ 
  onToggleMobileSidebar, 
  onNavigateProfile, 
  searchQuery, 
  setSearchQuery,
  setActivePage
}) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [notifications, setNotifications] = useState(notificationsData);

  const unreadCount = notifications.filter(n => n.unread).length;

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setActivePage('subjects');
    }
  };

  return (
    <header className="main-header">
      <div className="header-left">
        <button 
          className="header-mobile-toggle"
          onClick={onToggleMobileSidebar}
          aria-label="Menuni ochish"
        >
          <Menu size={22} />
        </button>

        <form className="header-search-form" onSubmit={handleSearchSubmit}>
          <Search className="search-icon" size={18} />
          <input
            type="text"
            className="search-input"
            placeholder="Fanlar, testlar yoki mavzularni izlash..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              type="button" 
              className="search-clear"
              onClick={() => setSearchQuery('')}
            >
              ✕
            </button>
          )}
        </form>
      </div>

      <div className="header-right">
        {/* Notification Bell */}
        <div className="notification-wrapper">
          <button 
            className="header-icon-button"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfileMenu(false);
            }}
            aria-label="Bildirishnomalar"
          >
            <Bell size={20} />
            {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
          </button>

          {showNotifications && (
            <div className="notification-dropdown animate-fade-in">
              <div className="notification-header">
                <div className="notification-title-box">
                  <Sparkles size={16} color="#7C3AED" />
                  <h4>Bildirishnomalar</h4>
                </div>
                {unreadCount > 0 && (
                  <button className="mark-read-btn" onClick={handleMarkAllRead}>
                    Barchasini o'qildi qilish
                  </button>
                )}
              </div>

              <div className="notification-list">
                {notifications.map((n) => (
                  <div key={n.id} className={`notification-item ${n.unread ? 'unread' : ''}`}>
                    <div className="notification-indicator" />
                    <div className="notification-content">
                      <p className="n-title">{n.title}</p>
                      <p className="n-desc">{n.description}</p>
                      <span className="n-time">{n.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Profile Menu */}
        <div className="profile-wrapper">
          <button 
            className="header-profile-btn"
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              setShowNotifications(false);
            }}
          >
            <img 
              src={currentUser.avatar} 
              alt={currentUser.name} 
              className="profile-avatar"
            />
            <div className="profile-info">
              <span className="profile-name">{currentUser.name}</span>
              <span className="profile-role">{currentUser.role}</span>
            </div>
            <ChevronDown size={16} className={`profile-arrow ${showProfileMenu ? 'open' : ''}`} />
          </button>

          {showProfileMenu && (
            <div className="profile-dropdown animate-fade-in">
              <div className="dropdown-user-header">
                <p className="user-email">{currentUser.email}</p>
                <div className="badge-tag badge-purple">
                  <CheckCircle2 size={12} /> Faol Talaba
                </div>
              </div>

              <ul className="profile-dropdown-menu">
                <li>
                  <button 
                    onClick={() => {
                      onNavigateProfile();
                      setShowProfileMenu(false);
                    }}
                  >
                    <User size={16} /> Profil ma'lumotlari
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setActivePage('progress');
                      setShowProfileMenu(false);
                    }}
                  >
                    <Settings size={16} /> Sozlamalar va Progress
                  </button>
                </li>
                <li className="menu-divider" />
                <li>
                  <button 
                    className="logout-btn"
                    onClick={() => {
                      alert("Tizimdan chiqildi");
                      setShowProfileMenu(false);
                    }}
                  >
                    <LogOut size={16} /> Chiqish
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
