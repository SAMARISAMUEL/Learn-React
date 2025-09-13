import React from "react";

const Person = ({ name, age }) => {
  return (
    <div>
      <h2>NAME:{name}</h2>
      <p>AGE:{age}</p>
    </div>
  );
};

export default Person;
