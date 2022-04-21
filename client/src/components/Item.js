import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Link, useParams } from "react-router-dom";
import {useState, useEffect} from 'react'


export default function Item({ itemToDisplay }) {

  // const [item, setItem] = useState([])

  // function LoadItem(id) {
  //   fetch(`http://localhost:3000/items/${id}`)
  //     .then(r => r.json())
  //     .then(item => {
  //         console.log(item)
  //       setItem(item);
  //     })
  // }

  // const data = useParams();
  
  // useEffect(() => {
  //   LoadItem(data.id);
  // }, [data]);
 
    const id = itemToDisplay.id
    
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
        // component={Link} to={`/items/${id}`}
         <Link to={`/items/${id}`}>
        <IconButton 
        
          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
          aria-label={`info about ${itemToDisplay.name}`}
          

        >
          <InfoIcon />
        </IconButton>
         </Link>
      }
    />
  </ImageListItem>
  );
};