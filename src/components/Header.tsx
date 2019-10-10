import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Select from 'react-select';
import './Header.css';
import DropdownIcon from './DropdownIcon';
import Title from './Title';
import ThemeSwitch from './ThemeSwitch';
import { ThemeContext } from '../theme-context';

type Props = {
  getVideos: (playlistId: string) => Promise<void>;
};

const Header = ({ getVideos }: Props) => {
  const { theme } = useContext(ThemeContext);

  const customStyles = {
    menu: (provided: any) => ({
      ...provided,
      marginTop: 24,
      backgroundColor: theme.Header_background
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      fontSize: 16,
      padding: 15,
      color: state.isSelected ? '#fff' : theme.Header_foreground,
      backgroundColor: state.isSelected
        ? '#d10122'
        : state.isFocused
        ? 'rgba(209,1,34,0.33)'
        : 'transparent',
      ':active': {
        color: '#fff',
        backgroundColor: 'rgba(209,1,34,0.5)'
      }
    }),
    control: () => ({
      width: 100
    }),
    input: () => ({ display: 'none' }),
    placeholder: () => ({ display: 'none' }),
    valueContainer: () => ({ display: 'none' }),
    indicatorSeparator: () => ({ display: 'none' })
  };

  const options = [
    {
      value: 'uploads',
      label: 'Uploads',
      playlistId: 'UU9LQwHZoucFT94I2h6JOcjw'
    },
    {
      value: 'insideMatchday',
      label: 'Inside Matchday',
      playlistId: 'PLR8DItC4f5xuGoWfAoPopZS8cG8H1jwoY'
    },
    {
      value: 'topTen',
      label: 'Top 10',
      playlistId: 'PLR8DItC4f5xuvz1UFuC3jrwOPhJAj2pzM'
    },
    {
      value: 'bezzies',
      label: 'Bezzies',
      playlistId: 'PLR8DItC4f5xsCy-mCm8kMw5S6tqSa16kb'
    },
    {
      value: 'pranks',
      label: 'Pranks + Surprises',
      playlistId: 'PLR8DItC4f5xvwCFalQ_zepaIPMupJ73A0'
    }
  ];

  const [selected, setSelected] = useState(options[0]);

  const handleChange = (selected: any) => {
    setSelected(selected);
    getVideos(selected.playlistId);
  };

  return (
    <header
      className="Header"
      style={{ backgroundColor: theme.Header_background }}
    >
      <Container>
        <Select
          value={selected}
          onChange={handleChange}
          options={options}
          styles={customStyles}
          components={{ DropdownIndicator: DropdownIcon }}
        />
        <Title />
        <ThemeSwitch />
      </Container>
    </header>
  );
};

export default Header;
