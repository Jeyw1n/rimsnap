import React from 'react';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem('access_token'); // Проверяем наличие токена

  // Если пользователь не авторизован, перенаправляем на страницу входа
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  // Если авторизован, рендерим дочерние компоненты
  return <Outlet />;
};

export default ProtectedRoute;