import React from "react";
import "./App.css";
import {
  Footer,
  Blog,
  Features,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";

import { Cta, Brand, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gardient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
