import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./Router/Router";
import { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {document.body.dir = "rtl"});

  return (
    <div>
      <Router />
      <Toaster position="bottom-center"/>
    </div>
  );
}
export default App;
