import IconButton from '@mui/material/IconButton';

import Logout from '@mui/icons-material/Logout';
import { MaterialUISwitch } from 'components/MaterialUISwitch/MaterialUISwitch';
import { Box } from 'components/Box/Box';
import Nav from 'components/Nav/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { changeThemeMode } from 'redux/actions';
import { logOutUser } from 'redux/operations';

import { LocalePopover } from 'components/LocalePopover/LocalePopover';

export const AppBar = () => {
  const dispatch = useDispatch();
  const {
    auth: {
      isLogIn,
      token,
      user: { email },
    },
    locale,
    themeMode,
  } = useSelector(state => state);
  const checked = themeMode === 'dark' ? true : false;

  const handleChange = () => {
    dispatch(changeThemeMode(themeMode === 'dark' ? 'light' : 'dark'));
  };

  const handleLogout = () => {
    dispatch(logOutUser(token));
  };
  return (
    <>
      <Box
        display="flex"
        width={1}
        justifyContent="space-between"
        flexDirection="row"
      >
        <Box
          display="flex"
          width={1 / 5}
          justifyContent="space-between"
          alignItems="center"
        >
          <LocalePopover />
          <MaterialUISwitch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Box>

        <Nav />
        {isLogIn && (
          <Box
            display="flex"
            minWidth={1 / 5}
            justifyContent="space-between"
            alignItems="center"
          >
            <span>{email}</span>
            <IconButton onClick={handleLogout} color="inherit">
              <Logout fontSize="large" />
            </IconButton>
          </Box>
        )}
      </Box>
    </>
  );
};
