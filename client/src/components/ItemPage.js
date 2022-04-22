import React, {useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";

function ItemPage() {
    const [item, setItem] = useState([])

  function LoadItem(id) {
    fetch(`http://localhost:3000/items/${id}`)
      .then(r => r.json())
      .then(item => {
          console.log(item)
        setItem(item);
      })
  }

  const data = useParams();
  console.log(data)
  useEffect(() => {
    LoadItem(data.id);
  }, [data]);
 
  return (
   
<div className="item_page">

      <h1>{item.name}</h1>
      <h3>${item.price}</h3>
      <img width="350" height="300" className="small" src={item.image} alt={item.name} /> 
      <h3>{item.description}</h3>
      <h4>condition: {item.condition}</h4>
      <button>Add to cart</button>
      
     
   
    
    </div>
    
  )
}


export default ItemPage;