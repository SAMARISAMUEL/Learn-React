import React from "react";
import Conditional from "../Components/Conditional";

const App = () => {
  return (
    <div>
      <Conditional isAdmin={false} />
    </div>
  );
};

export default App;
