import React from 'react';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = () => {
  const isAuthenticated = !!localStorage.getItem('access_token');

  // Если пользователь не авторизован, перенаправляем на страницу входа
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  // Если авторизован, показываем защищённый контент
  return <Outlet />;
};

export default ProtectedRoute;