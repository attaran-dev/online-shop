import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./Router/Router";

function App() {
  useEffect(() => {document.body.dir = "rtl"});

  return (
    <div>
      <Router />
    </div>
  );
}
export default App;
