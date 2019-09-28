import React from 'react';

export const themes = {
  light: {
    App_background: '#fafafa',
    Header_foreground: '#121212',
    Header_background: '#fff',
    VideoInfo_foreground: '#262626',
    VideoInfo_background: '#fff',
    time: '#666'
  },
  dark: {
    App_background: '#121212',
    Header_foreground: '#fafafa',
    Header_background: '#262626',
    VideoInfo_foreground: '#fff',
    VideoInfo_background: '#262626',
    time: '#999'
  }
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {}
});
