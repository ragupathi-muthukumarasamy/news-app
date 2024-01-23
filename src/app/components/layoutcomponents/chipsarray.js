"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(2),
}));

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: `FAQ's` },
    { key: 1, label: 'About Us' },
    { key: 2, label: 'Advertising' },
    { key: 3, label: 'Terms of Use' },
    { key: 4, label: 'Contact Us' },
    { key: 5, label: 'Privacy Policy' },
    { key: 6, label: 'Write to Us' },
    { key: 7, label: `Currency` },
    { key: 8, label: 'Science' },
    { key: 9, label: 'Space' },
    { key: 10, label: 'Cookies' },
    { key: 11, label: 'Reel' },
    { key: 12, label: 'Future' },
    { key: 13, label: 'Weather' },
  ]);

  const handleClick = () => {
    console.log("clicked")
}

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
        backgroundColor: '#00000010'
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
            sx={{backgroundColor: 'white'}}
              icon={icon}
              label={data.label} 
              onClick={handleClick}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}