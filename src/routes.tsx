import { Navigate, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/auth/Login';
import UnauthenticatedLayout from './layouts/UnauthenticatedLayout';
import { IUser } from './features/account/accountSlice';
import Dashboard from './pages/Dashboard';

export const routes = (user: IUser | null) => {
  return createBrowserRouter([
    {
      path: '/',
      element: user ? <Dashboard /> : <Navigate to="/auth/login" />
    },
    {
      path: '/auth',
      element: !user ? <UnauthenticatedLayout /> : <Navigate to="/" />,
      children: [{ path: 'login', element: <LoginPage /> }]
    }
  ]);
};
