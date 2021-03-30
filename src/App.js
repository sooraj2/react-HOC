import React from "react";
import "./style.css";
//import Component from "./Component";

export default function App() {
  const Now = x(Component);

  return (
    <div>
      <Now />
    </div>
  );
}

const x = (Component) => {
  return () => {
    return (
      <div style={{ border: "1px solid" }}>
        <Component />
      </div>
    );
  };
};

function Component() {
  return <h1>Hello StackBlitz!</h1>;
}
