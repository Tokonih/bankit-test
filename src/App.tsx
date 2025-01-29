import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { selectCurrentUser } from './features/account/accountSlice';
import { useSelector } from 'react-redux';
import useSessionTimeout from './app/hooks';

function App() {
  const user = useSelector(selectCurrentUser);
  const handleLogout = () => {
    window.location.href = '/auth/login';
  };

  useSessionTimeout(handleLogout);
  return (
    <>
      <RouterProvider router={routes(user)} />
    </>
  );
}

export default App;
