import React from "react";
import { processShoppingCart } from "../utils";
import ShoppingCartItem from "./ShoppingCart/ShoppingCartItem";

const ShoppingCart = (props) => {
  console.log(props);
  const { products, shoppingCartItems } = props;
  const processedCart = processShoppingCart(products, shoppingCartItems);

  return (
    <>
      <button onClick={() => props.onScreenMode(0)}>View products</button>
      <h1>£{processedCart.cartTotal.toFixed(2)}</h1>
      {processedCart.shoppingCartItems.map((item) => (
        <ShoppingCartItem
          key={item.id}
          item={item}
          // keep props below. because onDeleteCartItem is the same for everyhting we map over
          onDeleteCartItem={props.onDeleteCartItem}
        />
      ))}
    </>
  );
};

export default ShoppingCart;

// class ShoppingCart extends Component {
//   render() {
//     const processedCart = processShoppingCart(
//       this.props.products,
//       this.props.shoppingCartItems
//     );
