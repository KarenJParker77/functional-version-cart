import React from "react";

const Pricing = (props) => {
  return <p>£{props.price.toFixed(2)}</p>;
};

export default Pricing;

// class Pricing extends Component {
//   render() {
//     return
//   }
// }
