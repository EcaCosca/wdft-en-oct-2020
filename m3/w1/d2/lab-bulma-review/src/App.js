import React from "react";
import "./App.css";

import Navbar from "./Navbar/Navbar";
import FormField from "./FormField/FormField";
import CoolButton from "./CoolButton/CoolButton";

function App() {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />

      <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>

      {/* <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton> */}
    </div>
  );
}

export default App;

// What is the file used to inject React app to the DOM ?

// To which element is the React App being injected ?
