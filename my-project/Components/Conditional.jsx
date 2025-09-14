import React from "react";

const Conditional = (props) => {
  return props.isAdmin ? (
    <h1 className=" m-auto font-extrabold transform-3d hover:transition-transform hover:transform-3d hover:text-fuchsia-700">
      Good morning
    </h1>
  ) : (
    <h1 className="m-auto font-extrabold transform-3d hover:transition-transform hover:transform-3d hover:text-red-700">
      Good afternoon
    </h1>
  );
};

export default Conditional;
