import React, { useState } from "react";
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";

const Interface = (props) => {
  const [screen, setScreen] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // / state = { screen: 1, searchTerm: "" };

  const onScreenMode = (screen) => {
    setScreen(screen);
  };

  const { products, onBuyNow, shoppingCartItems, onDeleteCartItem } = props;

  const filtered = [...products].filter((product) => {
    //work out if the product matches the search term
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const results = filtered.length > 0 ? filtered : products;

  return screen === 0 ? (
    <>
      <button onClick={() => onScreenMode(1)}>View shopping cart</button>
      <input
        type="text"
        onInput={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      {results.map((product) => (
        <Product
          onScreenMode={onScreenMode}
          key={product.id}
          product={product}
          onBuyNow={onBuyNow}
        />
      ))}
    </>
  ) : (
    <ShoppingCart
      onScreenMode={onScreenMode}
      products={products}
      shoppingCartItems={shoppingCartItems}
      onDeleteCartItem={onDeleteCartItem}
    />
  );
};

export default Interface;

// class Interface extends Component {
//   state = { screen: 1, searchTerm: "" }; //screen 0 will be products and 1 will be shopping cart

//   onScreenMode = (screen) => {
//     this.setState({ screen });
//   };

// render() {
//   const { products, onBuyNow, shoppingCartItems, onDeleteCartItem } =
//     this.props;
//   const { screen, searchTerm } = this.state;

//   //what products do I want to keep?
//   const filtered = [...this.props.products].filter((product) => {
//     //work out if the product matches the search term
//     return product.title.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   const results = filtered.length > 0 ? filtered : products;

// return screen === 0 ? (
//   <>
//     <button onClick={() => this.onScreenMode(1)}>View shopping cart</button>
//     <input
//       type="text"
//       onInput={(e) => {
//         this.setState({ searchTerm: e.target.value });
//       }}
//     />
//     {results.map((product) => (
//       <Product
//         onScreenMode={this.onScreenMode}
//         key={product.id}
//         product={product}
//         onBuyNow={onBuyNow}
//       />
//     ))}
//   </>
// ) : (
//   <ShoppingCart
//     onScreenMode={this.onScreenMode}
//     products={products}
//     shoppingCartItems={shoppingCartItems}
//     onDeleteCartItem={onDeleteCartItem}
//   />
// );
//   }
// }
