import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { ThemeContext } from '../theme-context';

const ThemeSwitch = () => {
  const { toggleTheme } = useContext(ThemeContext);

  const useStyles = makeStyles({
    switchBase: {
      '&$checked + $track': {
        opacity: 1
      }
    },
    checked: {},
    track: {
      opacity: 1
    }
  });

  const classes = useStyles();

  return (
    <Switch
      onChange={toggleTheme}
      classes={{
        switchBase: classes.switchBase,
        checked: classes.checked,
        track: classes.track
      }}
      color="default"
    />
  );
};

export default ThemeSwitch;
