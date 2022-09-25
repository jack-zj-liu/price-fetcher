import React from 'react';
import './Cards.css';
import data from "../../prices.json";
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {data.map((coin) => (
            <ul className='cards__items'>
              <CardItem
                src='/images/stock.jpg'
                text={coin.cname + ': ' + coin.price}
                label='reactJS + python + beautifulsoup'
                path={coin.coinurl}
              />
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;