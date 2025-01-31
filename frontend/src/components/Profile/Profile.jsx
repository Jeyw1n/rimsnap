import React, { useState } from 'react';
// import './Profile.css';

const Profile = () => {
  const [nickname, setNickname] = useState('UserNickname');
  const [email, setEmail] = useState('user@example.com');
  const [registrationDate, setRegistrationDate] = useState('01.01.2025');
  const [avatar, setAvatar] = useState('default-avatar.png');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newNickname, setNewNickname] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  const handleDeleteAccount = () => {
    // Логика удаления аккаунта
    console.log('Account deleted');
  };

  const handleSupportRequest = () => {
    // Логика обращения в поддержку
    console.log('Support requested');
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // Логика обновления профиля
    console.log('Profile updated', { newEmail, newPassword, newNickname, currentPassword });
    if (newNickname) setNickname(newNickname);
    if (newEmail) setEmail(newEmail);
    setNewEmail('');
    setNewPassword('');
    setNewNickname('');
    setCurrentPassword('');
  };

  // Блок с информацией о пользователе
  const renderProfileInfo = () => (
    <div className="profile-info">
      <img src={avatar} alt="Avatar" className="avatar" />
      <h2>{nickname}</h2>
      <p>Дата регистрации: {registrationDate}</p>
    </div>
  );

  // Блок управления аккаунтом
  const renderProfileManagement = () => (
    <div className="profile-management">
      <button onClick={handleDeleteAccount}>Удалить аккаунт</button>
      <button onClick={handleSupportRequest}>Обратиться в поддержку</button>
    </div>
  );

  // Блок редактирования данных
  const renderProfileEdit = () => (
    <form onSubmit={handleUpdateProfile} className="profile-edit-form">
      <h3>Редактировать данные</h3>
      <div>
        <label>
          Новый ник:
          <input
            type="text"
            value={newNickname}
            onChange={(e) => setNewNickname(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Новый email:
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Новый пароль:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Текущий пароль:
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Сохранить изменения</button>
    </form>
  );

  return (
    <div className="profile-container">
      <h1>Профиль пользователя</h1>
      {renderProfileInfo()}
      {renderProfileManagement()}
      {renderProfileEdit()}
    </div>
  );
};

export default Profile;
