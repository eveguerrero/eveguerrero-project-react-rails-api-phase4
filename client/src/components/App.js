import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import ItemList from "./ItemList";
import Home from "./Home";
import ItemForm from "./ItemForm";
import MollyItemForm from "./MollyItemForm";
import SellerPage from "./SellerPage";
import { isEqual, isEmpty} from "lodash";

function App() {

  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedGender, setSelectedGender] = useState("")
  const [selectedCauses, setSelectedCauses] = useState([])
  const [causes, setCauses] = useState([])

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

  function onCategoryChange(category) {
    setSelectedCategory(category)
  }

  function onGenderChange(gender) {
    setSelectedGender(gender)
  }

  // const testFirstItem = items[1]
  // console.log("items[1]",items[1])
  const item = {id: 2, name: 'Mid-top boot - black', price: 75, category: 'Shoes', image: "https://cdn.shopify.com/s/files/1/0752/4221/products/KPGM027BLK_p_1200x.jpg?v=1512594013", description: "these mid-tops feature a non-slip rubber sole and a synthetic nubuck upper that is both water and oil resistant. The custom insole provides extra heel and arch support,", gender: "Men", condition: "new", causes: [{id: 1, name: 'Vegan', description: 'Fashion item that does not contain any animal mate…ts were used during the entire production process'}, {id: 3, name: 'Made with recycled materials', description: 'Company that produces fashion items made from previously used materials'}, {id: 4, name: 'Made in the USA', description: 'Fashion item manufactured in the USA'}, {id: 5, name: 'Fair labor practices', description: 'Company that pays their employees 20% over the min… and offers a minimum of 14 days of PTOs per year'}, {id: 6, name: 'Charitable donations', description: 'Company that donates part of its profits and/or pr…o charitable causes as part of its business model'}, {id: 7, name: 'Women-owned', description: 'Company that is at least 70% owned by women'}, {id: 8, name: 'Minority-owned', description: 'Company that is at least 70% owned by African-Amer…, Hispanic-Latin American, Native American people'}]}
  
  const sellerItems = items
  .filter(item => item.user_id === user.id)
  .filter(item => selectedCategory === "All" || item.category === selectedCategory)
  .filter(item => selectedGender === "" || item.gender === selectedGender)
  .filter(item => isEmpty(selectedCauses) || isEqual(item.causes.map(cause => cause.name), selectedCauses))
  
  const itemsToDisplay = items
  .filter(item => selectedCategory === "All" || item.category === selectedCategory)
  .filter(item => selectedGender === "" || item.gender === selectedGender)
  .filter(item => isEmpty(selectedCauses) || isEqual(item.causes.map(cause => cause.name), selectedCauses))
  
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
              <MollyItemForm item={item} causes={causes}/> 
            </Route>
            <Route exact path="/">
              <Home 
                itemsToDisplay={itemsToDisplay} 
                onCategoryChange={onCategoryChange} 
                selectedCategory={selectedCategory} 
                selectedGender={selectedGender} 
                onGenderChange={onGenderChange}
                setSelectedCauses={setSelectedCauses}
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
                />
            </Route>
          </Switch>
        </main>
      </>
  );
}

export default App;

