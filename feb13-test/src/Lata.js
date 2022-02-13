import React from 'react'
import Body from './Body.js';
import './App.css';

function Lata(props) {
  return (
    <div className='container'>
        <div className="headerpart">
            <h2>{props.name}</h2>
           
        </div>
        <div className="img-part">
            <img src={props.img} alt="" />
            <p>Lata Mengeshker(1929-2022) </p>
        </div>
        <div className="body-part">

            <Body />




        </div>
       
      
    </div>
  )
}




export default Lata;
