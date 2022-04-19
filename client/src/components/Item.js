import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Item({ item }) {
  return (
    <ImageListItem key={item.id}>
    <img
      src={`${item.image}?w=248&fit=crop&auto=format`}
      srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
      alt={item.name}
      loading="lazy"
    />
    <ImageListItemBar
      title={item.name}
      subtitle={`$${item.price}`}
    //   position="below"
      actionIcon={
        <IconButton
          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
          aria-label={`info about ${item.name}`}
        >
          <InfoIcon />
        </IconButton>
      }
    />
  </ImageListItem>
  );
};