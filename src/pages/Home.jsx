import React from "react";
import CardItem from "../components/CardItem"
import data from "../../prices.json";
import Cards from "../components/Cards";
import Container from "../components/Container";
import Navbar from "../components/Navbar";


function Home() {

  return (
    <>
      <Navbar />
      <div className='prices'>
        {data.map((coin) => (
          <ul className='cards__items'>
            <Container
              text={coin.cname + ': ' + coin.price}
              path={coin.coinurl}
            />
          </ul>
        ))}
      </div>
    </>
  );
}

export default Home;
