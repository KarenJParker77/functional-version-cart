import React from "react";

const Details = (props) => {
  const { title, description } = props;
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
};

export default Details;

// class Details extends Component {
//   render() {
//     const { title, description } = this.props;

//     return (
//       <>
//         <h1>{title}</h1>
//         <p>{description}</p>
//       </>
//     );
//   }
// }
