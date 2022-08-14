import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  const isLogIn = useSelector(state => state.auth.isLogIn);
  return isLogIn ? <Navigate to="/contacts" /> : <Outlet />;
};
