import React, { useState, useEffect } from 'react';

const Profile = () => {
  // Данные профиля (загружаем из localStorage или дефолтные)
  const [profile, setProfile] = useState({
    name: 'Алексей Иванов',
    email: 'alex@example.com',
    avatarLetters: 'АИ'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(profile.name);
  const [tempEmail, setTempEmail] = useState(profile.email);

  // Загружаем сохранённые данные при открытии страницы
  useEffect(() => {
    const saved = localStorage.getItem('userProfile');
    if (saved) {
      const parsed = JSON.parse(saved);
      setProfile(parsed);
      setTempName(parsed.name);
      setTempEmail(parsed.email);
    }
  }, []);

  const handleSave = () => {
    const updated = {
      name: tempName,
      email: tempEmail,
      avatarLetters: tempName.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2)
    };
    setProfile(updated);
    localStorage.setItem('userProfile', JSON.stringify(updated));
    setIsEditing(false);
    alert('Профиль успешно обновлён! 🎉');
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-center mb-12">Мой профиль</h1>

      <div className="bg-white rounded-3xl shadow-2xl p-10">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          {/* Аватар */}
          <div className="w-40 h-40 bg-linear-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-xl">
            {profile.avatarLetters}
          </div>

          {/* Информация */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-2">{profile.name}</h2>
            <p className="text-2xl text-gray-600 mb-6">{profile.email}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-black text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-800 transition shadow-lg"
            >
              Изменить профиль
            </button>
          </div>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <p className="text-4xl font-bold text-blue-600">3</p>
            <p className="text-xl text-gray-600 mt-2">Заказов</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl">
            <p className="text-4xl font-bold text-green-600">12</p>
            <p className="text-xl text-gray-600 mt-2">Товаров куплено</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl">
            <p className="text-4xl font-bold text-purple-600">2025</p>
            <p className="text-xl text-gray-600 mt-2">Год регистрации</p>
          </div>
        </div>
      </div>

      {/* Модальное окно редактирования */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-10 max-w-lg w-full shadow-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Редактировать профиль</h2>

            <label className="block text-lg font-medium text-gray-700 mb-2">Имя</label>
            <input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-xl px-6 py-4 mb-6 text-lg focus:outline-none focus:border-black transition"
              placeholder="Ваше имя"
            />

            <label className="block text-lg font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={tempEmail}
              onChange={(e) => setTempEmail(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-xl px-6 py-4 mb-10 text-lg focus:outline-none focus:border-black transition"
              placeholder="your@email.com"
            />

            <div className="flex gap-6">
              <button
                onClick={() => setIsEditing(false)}
                className="flex-1 py-4 border-2 border-gray-400 rounded-full text-xl font-medium hover:bg-gray-100 transition"
              >
                Отмена
              </button>
              <button
                onClick={handleSave}
                className="flex-1 py-4 bg-black text-white rounded-full text-xl font-medium hover:bg-gray-800 transition shadow-lg"
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Profile;