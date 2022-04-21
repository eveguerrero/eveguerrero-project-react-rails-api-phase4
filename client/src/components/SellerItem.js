import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";

export default function SellerItem({ itemToDisplay }) {
    
  return (
    <ImageListItem key={itemToDisplay.id}>
    <img
      src={`${itemToDisplay.image}?w=248&fit=crop&auto=format`}
      srcSet={`${itemToDisplay.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
      alt={itemToDisplay.name}
      loading="lazy"
    />
    <ImageListItemBar
      title={itemToDisplay.name}
      subtitle={`$${itemToDisplay.price}`}
    //   position="below"
      actionIcon={
        <Link to={`/items/${itemToDisplay.id}/edit`} >
        <IconButton
          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
          aria-label={`info about ${itemToDisplay.name}`}
        >
          <InfoIcon />
        </IconButton>
        </Link>
      }
    />
    {/* <Button as={Link} to="/login" exact>
          Login
        </Button>  */}
  </ImageListItem>
  );
};