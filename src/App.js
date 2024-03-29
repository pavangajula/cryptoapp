import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coins from "./components/Coins/Coins";
import Coin from "./routes/Coin";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import "./index.css";

const App = () => {
  const url = [
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false",
  ];
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
