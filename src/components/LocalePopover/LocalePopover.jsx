import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Language from '@mui/icons-material/Language';
import { useDispatch, useSelector } from 'react-redux';
import { changeLocale } from 'redux/actions';
import { useState } from 'react';
import i18next from 'i18next';

export const LocalePopover = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChangeLocale = event => {
    dispatch(changeLocale(event.target.textContent === 'en' ? 'en' : 'uk'));
    i18next.changeLanguage(event.target.dataset.lang);
    setAnchorEl(null);
  };

  const handleLocaleClick = event => {
    setAnchorEl(event.currentTarget);
    // setIsPopoverOpen(prevState => !prevState);
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
        {/* <MenuItem value="uk" onClick={handleChangeLocale}>
          en
        </MenuItem> */}
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
