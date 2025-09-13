import React from "react";
import UserList from "../Components/UserList";
import Person from "../Components/Person";
import Weather from "../Components/Weather";
import Conditional from "../Components/Conditional";

const App = () => {
  return <Conditional loggIn={true} isAdmin={true} />;
};

export default App;
