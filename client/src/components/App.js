import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import ItemList from "./ItemList";
import Home from "./Home";
import ItemForm from "./ItemForm";
import MollyItemForm from "./MollyItemForm";
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
        console.log(items)
        console.log(items[1])
        setItems(items)
        });
      }
    }
    );

    // fetch causes
    fetch("/causes").then((r) => {
      if (r.ok) {
        r.json().then((causes) => {
        console.log(causes)
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
              <MollyItemForm item={items[1]} causes={causes}/> 
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
          </Switch>
        </main>
      </>
  );
}

export default App;

