import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRout = () => {
  const isLogIn = useSelector(state => state.auth.isLogIn);
  return isLogIn ? <Outlet /> : <Navigate to="/login" />;
};
