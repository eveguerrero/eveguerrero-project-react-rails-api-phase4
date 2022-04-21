import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Link, useHistory } from "react-router-dom";
import MollyItemForm from './MollyItemForm';

export default function SellerItem({ itemToDisplay, setItemToEdit }) {
  const history = useHistory();

    function handleClick () {
      console.log("i was clicked")
      setItemToEdit(itemToDisplay)
      history.push("/itemform")
      // return <MollyItemForm item={itemToDisplay} causes={causes} as={Link} to="/itemform" exact />;
      // console.log("after return")
    }
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
        // <Link to={`/items/${itemToDisplay.id}/edit`} >
        <IconButton
          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
          aria-label={`info about ${itemToDisplay.name}`}
          onClick={handleClick}
        >
          <InfoIcon />
        </IconButton>
        // </Link>
      }
    />
    {/* <Button as={Link} to="/login" exact>
          Login
        </Button>  */}
  </ImageListItem>
  );
};