import React from "react";
import './Container.css';

function Container(props) {
  return (
    <>
        <a className='container__item__link' target="_blank" href={props.path}>
            <div className='container__item__info'>
                <h5 className='container__item__text'>{props.text}</h5>
            </div>
        </a>
    </>
  );
}

export default Container;
