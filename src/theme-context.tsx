import React from 'react';

export const themes = {
  light: {
    foreground: '#222222',
    background: '#fafafa',
    background_2: '#ffffff',
    primary: '#d10122',
    border: 'rgba(0, 0, 0, 0.125)'
  },
  dark: {
    foreground: '#ffffff',
    background: '#121212',
    background_2: '#262626',
    primary: '#fafafa',
    border: '#000000'
  }
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {}
});
