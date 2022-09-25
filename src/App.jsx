import React, { useState } from "react";
import data from "../prices.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);
  let btcprice = data[0].price;
  console.log(btcprice);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
