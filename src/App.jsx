import React from "react";
import MyNav from "./components/Navbar/MyNav";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import Home from "./components/Home/Home";
import "./app.css";
function App() {
  return (
    <div className="App">
      <MyNav id="nav" />
      <Home />
    </div>
  );
}

export default App;
