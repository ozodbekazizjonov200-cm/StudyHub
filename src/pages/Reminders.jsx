import React, { useState } from 'react';
import { remindersData } from '../data/mockData';
import { Bell, Calendar, Clock, Plus, CheckCircle, AlertTriangle, Trash2, X } from 'lucide-react';
import './Reminders.css';

export default function Reminders() {
  const [reminders, setReminders] = useState(remindersData);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newSubject, setNewSubject] = useState('Matematika');

  const handleToggleDone = (id) => {
    setReminders(reminders.map(r => r.id === id ? { ...r, done: !r.done } : r));
  };

  const handleDelete = (id) => {
    setReminders(reminders.filter(r => r.id !== id));
  };

  const handleAddReminder = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newItem = {
      id: Date.now(),
      title: newTitle,
      date: newDate || "Ertaga, 10:00",
      subject: newSubject,
      type: "Topshiriq",
      urgent: false,
      done: false
    };
    setReminders([newItem, ...reminders]);
    setNewTitle('');
    setShowAddModal(false);
  };

  return (
    <div className="reminders-page animate-fade-in">
      <div className="page-header-banner">
        <div>
          <h1 className="page-title">Eslatmalar va Tayyorgarlik</h1>
          <p className="page-subtitle">Imtihonlar, topshiriqlar va dars jadvali muddatlarini kuzatib boring</p>
        </div>
        <button className="add-reminder-btn" onClick={() => setShowAddModal(true)}>
          <Plus size={16} /> Yangi eslatma
        </button>
      </div>

      <div className="reminders-list">
        {reminders.map((item) => (
          <div key={item.id} className={`reminder-item card-base ${item.done ? 'done' : ''}`}>
            <button className="check-btn" onClick={() => handleToggleDone(item.id)}>
              <CheckCircle size={22} className={item.done ? 'checked' : 'unchecked'} />
            </button>

            <div className="reminder-details">
              <div className="reminder-badge-row">
                <span className="subject-chip">{item.subject}</span>
                {item.urgent && (
                  <span className="urgent-chip">
                    <AlertTriangle size={12} /> Muhim
                  </span>
                )}
              </div>
              <h3 className="reminder-title">{item.title}</h3>
              <div className="reminder-time-row">
                <Calendar size={14} /> <span>{item.date}</span>
              </div>
            </div>

            <button className="delete-reminder-btn" onClick={() => handleDelete(item.id)}>
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      {/* Add Reminder Modal */}
      {showAddModal && (
        <div className="modal-backdrop" onClick={() => setShowAddModal(false)}>
          <div className="modal-content card-base animate-fade-in" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-box">
                <Bell size={20} color="#7C3AED" />
                <h3>Yangi eslatma qo'shish</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setShowAddModal(false)}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleAddReminder} className="modal-body reminder-form">
              <div className="form-group">
                <label>Eslatmasi / Topshiriq nomi</label>
                <input 
                  type="text"
                  className="form-input"
                  placeholder="Masalan: Fizika masalalarini topshirish"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Fan nomi</label>
                <select 
                  className="form-input"
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                >
                  <option value="Matematika">Matematika</option>
                  <option value="Ingliz tili">Ingliz tili</option>
                  <option value="Informatika">Informatika</option>
                  <option value="Fizika">Fizika</option>
                  <option value="Kimyo">Kimyo</option>
                </select>
              </div>

              <div className="form-group">
                <label>Vaqti va Sanasi</label>
                <input 
                  type="text"
                  className="form-input"
                  placeholder="Masalan: Ertaga, 15:00"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                />
              </div>

              <div className="modal-footer">
                <button type="button" className="btn-secondary" onClick={() => setShowAddModal(false)}>
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
