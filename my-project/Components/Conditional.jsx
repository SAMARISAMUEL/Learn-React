import React from "react";

const Conditional = (props) => {
  if (props.loggIn && props.isAdmin) {
    return <div>Conditional </div>;
  } else {
    return <h1>i love myself</h1>;
  }
};

export default Conditional;
