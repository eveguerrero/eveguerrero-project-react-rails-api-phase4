import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Item from './Item';

export default function ItemList({sellerItems}) {
  return (
    <ImageList sx={{ width: 1000, height: 800 }} cols={4}>
      <ImageListItem key="Subheader" cols={4}>
        <ListSubheader component="div">Ethical Clothing Items</ListSubheader>
      </ImageListItem>
      {sellerItems.map((itemToDisplay) => (
        <Item key={itemToDisplay.id} itemToDisplay={itemToDisplay}></Item>
      ))}
    </ImageList>
  );
}