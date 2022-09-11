import React from "react";

const Image = (props) => {
  const { image, title } = props;
  return <img src={image} alt={title} />;
};

export default Image;

// class Image extends Component {
//   render() {
//     const { image, title } = this.props;

//     return <img src={image} alt={title} />;
//   }
// }
