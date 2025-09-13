import React from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];
  return (
    <div>
      {users.map((users) => (
        <div key={users.id} className="flex gap-1.5">
          <h1>{users.id}).</h1>
          <h1>NAME:{users.name}</h1>
          <h1>AGE:{users.age}</h1>
        </div>
      ))}
    </div>
  );
};

export default UserList;
