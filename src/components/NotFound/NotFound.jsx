import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const isLoggedIn = useSelector(state => state.auth.isLogIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts');
    } else {
      navigate('/login');
    }
  }, [navigate]);
}
