import React, { useContext } from 'react';
import './OpenIcon.css';
import { ThemeContext } from '../theme-context';

type Props = {
  handleClick: () => void;
};

const OpenIcon = ({ handleClick }: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button className="OpenIcon" onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          style={{ fill: theme.VideoInfo_foreground }}
          d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"
        />
      </svg>
    </button>
  );
};

export default OpenIcon;
