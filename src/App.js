import React, { useState, useEffect } from "react";
import axios from "axios";
import Interface from "./components/Interface";
import "./App.css";

const App = () => {
  const [shoppingCartItems, setShoppingCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const getApiData = async () => {
    try {
      const products = await axios.get("https://fakestoreapi.com/products");

      setProducts(products.data);
    } catch (error) {
      console.log("API Error!");
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const onDeleteCartItem = (id) => {
    const localShoppingCartItems = [...shoppingCartItems];

    const indexOfCartItem = localShoppingCartItems.findIndex(
      (item) => item.id === id
    );

    localShoppingCartItems.splice(indexOfCartItem, 1);

    console.log("<><><>", localShoppingCartItems);

    // this.setState({ shoppingCartItems });
    setShoppingCartItems(localShoppingCartItems);
  };

  const onBuyNow = (id) => {
    console.log("it worked", id);
    const localShoppingCartItems = [...shoppingCartItems];

    const indexOfCartItem = localShoppingCartItems.findIndex(
      (item) => item.id === id
    );

    if (indexOfCartItem > -1) {
      localShoppingCartItems[indexOfCartItem].quantity += 1;
    } else {
      localShoppingCartItems.push({ quantity: 1, id });
    }

    // this.setState({ shoppingCartItems });
    setShoppingCartItems(localShoppingCartItems);
  };

  if (products) {
    return (
      <>
        <Interface
          onBuyNow={onBuyNow}
          products={products}
          shoppingCartItems={shoppingCartItems}
          onDeleteCartItem={onDeleteCartItem}
        />
      </>
    );
  }

  return <p>Loading...</p>;
};

export default App;
