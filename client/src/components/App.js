import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import ItemList from "./ItemList";
import ItemForm from "./ItemForm";
import MollyItemForm from "./MollyItemForm";

function App() {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([])
  const [causes, setCauses] = useState([])

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

  if (!user) return <Login onLogin={setUser} />;

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
            {/* <Route path="/new">
              <NewRecipe user={user} />
            </Route> */}
            <Route path="/itemform">
              <MollyItemForm item={items[1]} causes={causes}/> 
              {/* <RecipeList /> */}
            </Route>
            <Route path="/">
              <ItemList items={items}/> 
              {/* <RecipeList /> */}
            </Route>
          </Switch>
        </main>
      </>
  );
}

export default App;

