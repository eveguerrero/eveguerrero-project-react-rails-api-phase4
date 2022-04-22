import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import ItemList from "./ItemList";
import Home from "./Home";
import ItemForm from "./ItemForm";
import MollyItemForm from "./MollyItemForm";
import ItemPage from "./ItemPage";
import './App.css';


import { isEmpty, difference} from "lodash";
import SellerPage from "./SellerPage";


function App() {

  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedGender, setSelectedGender] = useState("")
  const [selectedCauses, setSelectedCauses] = useState([])
  const [causes, setCauses] = useState([])
  const [itemToEdit, setItemToEdit] = useState({})
  const [errors, setErrors] = useState([])

  const history = useHistory()

  // console.log(selectedCauses)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    }
    );
    // fetch items
    fetch("/items").then((r) => {
      if (r.ok) {
        r.json().then((items) => {
        setItems(items)
        });
      }
    }
    );

    // fetch causes
    fetch("/causes").then((r) => {
      if (r.ok) {
        r.json().then((causes) => {
        // console.log(causes)
        setCauses(causes)
        });
      }
    }
    );
  }, []);

  // if (!user) return <Login onLogin={setUser} />;
  function onSubmitItem( itemToSubmit, newCauses=[], delCauses=[] ) {
    if (itemToSubmit.id) {
      fetch(`/items/${itemToSubmit.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemToSubmit)
      }).then((r) => {
        if (r.ok) {
          const updatedItems = items.map((item)=> {
            if (item.id===itemToSubmit.id) return itemToSubmit;
            return item;
          });
          
          setItemToEdit({});
          setItems(updatedItems);
          history.push("/sellerpage")
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      })
    } else {
      itemToSubmit.user_id = user.id;
      fetch(`/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemToSubmit)
      }).then((r) => {
        if (r.ok) {
          console.log("r:", r)
          r.json().then((newItem) => {
          const updatedItems = [...items, newItem]
          console.log(updatedItems)
          setItemToEdit({});
          setItems(updatedItems);
          history.push("/sellerpage")
          })
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      })

    }
  }

  function onCategoryChange(category) {
    setSelectedCategory(category)
  }

  function onGenderChange(gender) {
    setSelectedGender(gender)
  }

  const itemsToDisplay = items
  .filter(item => selectedCategory === "All" || item.category === selectedCategory)
  .filter(item => selectedGender === "" || item.gender === selectedGender)
  .filter(item => isEmpty(selectedCauses) || isEmpty(difference(selectedCauses, item.causes.map(cause => cause.name))))

  const item = {id: 2, name: 'Mid-top boot - black', price: 75, category: 'Shoes', image: "https://cdn.shopify.com/s/files/1/0752/4221/products/KPGM027BLK_p_1200x.jpg?v=1512594013", description: "these mid-tops feature a non-slip rubber sole and a synthetic nubuck upper that is both water and oil resistant. The custom insole provides extra heel and arch support,", gender: "Men", condition: "new", causes: [{id: 1, name: 'Vegan', description: 'Fashion item that does not contain any animal mate…ts were used during the entire production process'}, {id: 3, name: 'Made with recycled materials', description: 'Company that produces fashion items made from previously used materials'}, {id: 4, name: 'Made in the USA', description: 'Fashion item manufactured in the USA'}, {id: 5, name: 'Fair labor practices', description: 'Company that pays their employees 20% over the min… and offers a minimum of 14 days of PTOs per year'}, {id: 6, name: 'Charitable donations', description: 'Company that donates part of its profits and/or pr…o charitable causes as part of its business model'}, {id: 7, name: 'Women-owned', description: 'Company that is at least 70% owned by women'}, {id: 8, name: 'Minority-owned', description: 'Company that is at least 70% owned by African-Amer…, Hispanic-Latin American, Native American people'}]}
  
  const sellerItems = items
  .filter(item => user && item.user_id === user.id)
  .filter(item => selectedCategory === "All" || item.category === selectedCategory)
  .filter(item => selectedGender === "" || item.gender === selectedGender)
  .filter(item => isEmpty(selectedCauses) || isEmpty(difference(selectedCauses, item.causes.map(cause => cause.name))))

  return (
    // <>
    //   {/* <NavBar user={user} setUser={setUser} />
    //   <main>
    //     <Switch>
    //       <Route path="/login">
    //         <Login onLogin={setUser} />
    //       </Route>
    //       <Route path="/new">
    //         <ItemForm user={user} />
    //       </Route>
    //       <Route path="/">
    //         <ItemList items={items}/>
    //       </Route>

    //     </Switch>
    //   </main>
    // </> */}
        <>
        <NavBar user={user} setUser={setUser} />
        <main>
          <Switch>
            <Route path="/itemform">
              <MollyItemForm item={itemToEdit} setItemToEdit={setItemToEdit} errors={errors} causes={causes} onSubmitItem={onSubmitItem}/> 
            </Route>
            <Route path="/items/:id" >
              <ItemPage />
            </Route>
            {/* <Route path="/sellerpage/edititem" >
              <MollyItemForm item={itemToDisplay} causes={causes}/>
            </Route> */}
            <Route exact path="/">
              <Home 
                itemsToDisplay={itemsToDisplay} 
                onCategoryChange={onCategoryChange} 
                selectedCategory={selectedCategory} 
                selectedGender={selectedGender} 
                onGenderChange={onGenderChange}
                setSelectedCauses={setSelectedCauses}
                causes={causes}
              /> 
            </Route>
            <Route exact path="/login">
              <Login onLogin={setUser} />
            </Route>
            <Route exact path="/sellerpage">
              <SellerPage 
                sellerItems={sellerItems} 
                onCategoryChange={onCategoryChange} 
                selectedCategory={selectedCategory} 
                selectedGender={selectedGender} 
                onGenderChange={onGenderChange}
                setSelectedCauses={setSelectedCauses} 
                setItemToEdit={setItemToEdit}
                causes={causes}
                />
            </Route>
          </Switch>
          
        </main>
      </>
  );
}

export default App;

