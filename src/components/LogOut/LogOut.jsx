import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/operations';

export const LogOut = () => {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(logOutUser(token));
      }}
    >
      Log Out
    </button>
  );
};
