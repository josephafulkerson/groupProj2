import React, { useState } from "react";
import { Switch, Route } from "react-router-dom"; 
import TeaPage from "./Components/TeaPage";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import OurStory from "./Components/OurStory";
import ShoppingCart from "./Components/ShoppingCart";
import './App.css';


function App(){
  const [page, setPage] = useState("/")
  const [cartItems, setCartItems] = useState([])

  function handleAddCart(tea){
    const itemExist= cartItems.find(x => x.id === tea.id)

    if (itemExist) {
        setCartItems(cartItems.map(x=> x.id === tea.id ? {...itemExist, qty: itemExist.qty + 1 } : x))
    }
    else {
        setCartItems([...cartItems, {...tea, qty:1}])
    }
    console.log("Item Added to Cart")
}

function handleRemoveCart(tea){
  const itemExist = cartItems.find(x => x.id === tea.id)

  if (itemExist.qty === 1){
    setCartItems(cartItems.filter((x) => x.id !== tea.id))
  }
  else {
    setCartItems(cartItems.map(x=> x.id === tea.id ? {...itemExist, qty: itemExist.qty - 1 } : x))
  }
}

  return (
    <div>

      <NavBar onChangePage={setPage} countCartItems={cartItems.length} />
      <Header />

      <Switch>
        <Route path="/our-story">
          <OurStory />
        </Route>
        <Route path="/shopping-cart">
          <ShoppingCart handleAddCart={handleAddCart} handleRemoveCart={handleRemoveCart} cartItems={cartItems} />
        </Route>
        <Route exact path="/">
          <TeaPage handleAddCart={handleAddCart} cartItems={cartItems} />
        </Route>
        <Route path="*">
          <h1 className="navError">404-- Page Not Found</h1>
        </Route>
      </Switch>
    </div>
);
}

export default App;