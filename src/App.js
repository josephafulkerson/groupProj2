import React, { useState } from "react";
import { Switch, Route } from "react-router-dom"; 
import TeaPage from "./Components/TeaPage";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import OurStory from "./Components/OurStory";
import ShoppingCart from "./Components/ShoppingCart";
import './App.css'

function App(){
  const [page, setPage] = useState("/")
  return (
    <div>
      <Header />
      <NavBar onChangePage={setPage} />
      <Switch>
        <Route path="/our-story">
          <OurStory />
        </Route>
        <Route path="/shopping-cart">
          <ShoppingCart />
        </Route>
        <Route exact path="/">
          <TeaPage />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
);
}

export default App;