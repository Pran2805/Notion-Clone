import { Outlet } from 'react-router-dom';
import Navbar from '../ui/Navbar';

const NotSigning = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default NotSigning;
