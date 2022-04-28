import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
//   const params = useParams();
  
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/bitcoin`


  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setCoin(res.data)
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  return (
    <div>
      <h1>{coin.id}</h1>
    </div>
  );
};

export default Coin;
