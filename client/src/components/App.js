import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import ItemList from "./ItemList";
import ItemForm from "./ItemForm";

function App() {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([])

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
        setItems(items)
        });
      }
    }
    );
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new">
            <ItemForm user={user} />
          </Route>
          <Route path="/">
            <ItemList items={items}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
