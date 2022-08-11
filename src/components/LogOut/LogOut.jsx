import { useSelector } from 'react-redux';

export const LogOut = () => {
  const user = useSelector(state => state.user);
  return (
    <button
      onClick={() => {
        user.isLoggedIn = false;
      }}
    >
      Log Out
    </button>
  );
};
