import React, { useState } from 'react';
import { currentUser, subjectsData } from '../data/mockData';
import { 
  User, 
  Mail, 
  MapPin, 
  Calendar, 
  Edit3, 
  Award, 
  CheckSquare, 
  Flame, 
  BookOpen, 
  CheckCircle2, 
  X 
} from 'lucide-react';
import './Profile.css';

export default function Profile() {
  const [user, setUser] = useState(currentUser);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editName, setEditName] = useState(user.name);
  const [editBio, setEditBio] = useState(user.bio);
  const [editLocation, setEditLocation] = useState(user.location);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      name: editName,
      bio: editBio,
      location: editLocation
    });
    setShowEditModal(false);
  };

  return (
    <div className="profile-page animate-fade-in">
      {/* Profile Cover & Header Card */}
      <div className="profile-header-card card-base">
        <div className="profile-cover-bg" />
        
        <div className="profile-header-content">
          <div className="avatar-wrapper">
            <img src={user.avatar} alt={user.name} className="profile-large-avatar" />
            <div className="online-status-dot" />
          </div>

          <div className="profile-text-group">
            <div className="profile-name-row">
              <h1 className="profile-title">{user.name}</h1>
              <span className="badge-tag badge-purple">{user.role}</span>
              <span className="badge-tag badge-green">Top 5% Student</span>
            </div>

            <p className="profile-bio">{user.bio}</p>

            <div className="profile-meta-row">
              <span><Mail size={14} /> {user.email}</span>
              <span><MapPin size={14} /> {user.location}</span>
              <span><Calendar size={14} /> A'zo bo'lingan: {user.joinedDate}</span>
            </div>
          </div>

          <button className="edit-profile-btn" onClick={() => setShowEditModal(true)}>
            <Edit3 size={16} /> Profilni tahrirlash
          </button>
        </div>
      </div>

      {/* 4 Stats Grid */}
      <div className="profile-stats-grid">
        <div className="p-stat-card card-base">
          <div className="ps-icon orange">
            <CheckSquare size={22} />
          </div>
          <div>
            <h3 className="ps-value">{user.stats.completedTests}</h3>
            <span className="ps-label">Yechilgan testlar</span>
          </div>
        </div>

        <div className="p-stat-card card-base">
          <div className="ps-icon green">
            <Award size={22} />
          </div>
          <div>
            <h3 className="ps-value">{user.stats.averageScore}%</h3>
            <span className="ps-label">O'rtacha ball</span>
          </div>
        </div>

        <div className="p-stat-card card-base">
          <div className="ps-icon red">
            <Flame size={22} />
          </div>
          <div>
            <h3 className="ps-value">{user.stats.streakDays} kun</h3>
            <span className="ps-label">Ketma-ketlik (Streak)</span>
          </div>
        </div>

        <div className="p-stat-card card-base">
          <div className="ps-icon purple">
            <BookOpen size={22} />
          </div>
          <div>
            <h3 className="ps-value">{user.stats.totalCourses}</h3>
            <span className="ps-label">Faol kurslar</span>
          </div>
        </div>
      </div>

      {/* Subject Performance Progress Bars */}
      <div className="profile-performance-card card-base">
        <h3 className="card-heading">Fanlar bo'yicha ko'rsatkichlar</h3>

        <div className="perf-list">
          {subjectsData.map((subject) => (
            <div key={subject.id} className="perf-item">
              <div className="perf-header">
                <span className="perf-subject">{subject.name}</span>
                <span className="perf-percent">{subject.progress}% bajarilgan</span>
              </div>
              <div className="progress-bar-bg">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${subject.progress}%`, backgroundColor: subject.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Profile Modal */}
      {showEditModal && (
        <div className="modal-backdrop" onClick={() => setShowEditModal(false)}>
          <div className="modal-content card-base animate-fade-in" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-box">
                <User size={20} color="#7C3AED" />
                <h3>Profilni tahrirlash</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setShowEditModal(false)}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="modal-body reminder-form">
              <div className="form-group">
                <label>Ism va Familiya</label>
                <input 
                  type="text" 
                  className="form-input"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Bio / Ma'lumot</label>
                <textarea 
                  className="form-input"
                  rows="3"
                  value={editBio}
                  onChange={(e) => setEditBio(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Joylashuv (Shahar)</label>
                <input 
                  type="text" 
                  className="form-input"
                  value={editLocation}
                  onChange={(e) => setEditLocation(e.target.value)}
                />
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-secondary" onClick={() => setShowEditModal(false)}>
                  Bekor qilish
                </button>
                <button type="submit" className="btn-primary" style={{ backgroundColor: '#7C3AED' }}>
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
