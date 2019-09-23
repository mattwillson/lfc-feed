import React, { useContext } from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';
import './ThemeSwitch.css';
import { ThemeContext } from '../theme-context';

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

interface Props extends SwitchProps {
  classes: Styles;
}

const ThemeSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 50,
      height: 24,
      padding: 0,
      overflow: 'visible'
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(26px)',
        '& + $track': {
          backgroundColor: '#121212',
          opacity: 1,
          border: 'none'
        }
      },
      '&$focusVisible $thumb': {
        boxShadow: '0 0 2px 3px #00a599'
      }
    },
    thumb: {
      width: 22,
      height: 22,
      backgroundColor: '#fafafa'
    },
    track: {
      borderRadius: 24 / 2,
      border: `1px solid #121212`,
      backgroundColor: '#121212',
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border'])
    },
    checked: {},
    focusVisible: {}
  })
)(({ classes }: Props) => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Switch
      className="ThemeSwitch"
      onChange={toggleTheme}
      disableRipple
      focusVisibleClassName={classes.focusVisible}
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
    />
  );
});

export default ThemeSwitch;
