import { memo, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from '../../common/navbar';

interface WrapperProps {
  children: ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return (
    <div className="h-[100vh] relative flex items-center justify-center">
      <Toaster position="bottom-left" />
      <div className="flex justify-between p-6 absolute top-0 left-0 right-0">
        <Navbar />
      </div>
      {children}
    </div>
  );
}

export default memo(Wrapper);
