import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

import { useEffect } from 'react';

const useSessionTimeout = (logout: () => void) => {
  useEffect(() => {
    const checkSession = () => {
      const expiresAt = sessionStorage.getItem('expiresAt');

      if (expiresAt && new Date().getTime() > Number(expiresAt)) {
        sessionStorage.clear();
        logout();
      }
    };

    const resetSession = () => {
      const newExpiration = new Date().getTime() + 30 * 60 * 1000;
      sessionStorage.setItem('expiresAt', newExpiration.toString());
    };

    document.addEventListener('mousemove', resetSession);
    document.addEventListener('keydown', resetSession);

    const interval = setInterval(checkSession, 10000);

    return () => {
      document.removeEventListener('mousemove', resetSession);
      document.removeEventListener('keydown', resetSession);
      clearInterval(interval);
    };
  }, [logout]);
};

export default useSessionTimeout;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
