import React from "react";

function Button(props) {
  return <button className="button">{props.children}</button>;
}

export default function App() {
  return (
    <div className="app">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
    </div>
  );
}
