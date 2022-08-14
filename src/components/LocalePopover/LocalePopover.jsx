import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import Language from '@mui/icons-material/Language';
import { useDispatch } from 'react-redux';
import { changeLocale } from 'redux/actions';
import { useState } from 'react';

export const LocalePopover = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChangeLocale = event => {
    dispatch(changeLocale(event.target.dataset.lang === 'en' ? 'en' : 'uk'));
    setAnchorEl(null);
  };

  const handleLocaleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <IconButton onClick={handleLocaleClick} color="inherit">
        <Language fontSize="large" />
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem data-lang="en" onClick={handleChangeLocale}>
          en
        </MenuItem>
        <MenuItem data-lang="uk" onClick={handleChangeLocale}>
          uk
        </MenuItem>
      </Popover>
    </>
  );
};
