import React from "react";
import './Scfi.css';
import scfi01 from './scfi01.jpg';
import scfi02 from './scfi02.jpg';
import scfi03 from './scfi03.jpg';
const ProductList= () =>{

  return (
    <div className="bgmi">
    <div className="product-container">
      <img src={scfi01}  className="product-image" />
      <div className="product-details">
      <h2>The Time Machine</h2>
      <br/>
      <p className="ub">Description:</p>
            <br/>
            <p>Embark on a captivating adventure with H.G. Wells' The Time Machine. 
            Witness humanity's future, explore the depths of time, and ponder on profound questions. 
            This unabridged edition guarantees an immersive experience.
            A timeless journey through time!
            Pioneering science fiction classic by H.G. Wells
            Unforgettable journey through space
            Encounters with future civilizations
            Thought-provoking exploration of society and human nature
            Unabridged edition for an authentic reading experience
        </p>
        <br/>
        <br/>
        <br/>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
    <div className="product-container">
      <img src={scfi02} className="product-image" />
      <div className="product-details">
      <h2>Journey to the Centre of the Earth</h2>
      <br/>
      <p className="ub">Description:</p>
            <br/>
            <p>Embark on a thrilling subterranean expedition with Journey to the Centre of the Earth by Jules Verne. 
            Join Professor Lidenbrock and his companions as they navigate uncharted depths, encounter ancient wonders, and face unimaginable challenges in this timeless adventure classic.
            An epic subterranean adventure!
            Jules Verne's captivating tale of exploration and discovery
            Unforgettable journey to the depths of the Earth's core
            Engaging characters and vivid descriptions bring the underground world to life
            A perfect blend of science, adventure, and imagination
            A must-read for fans of thrilling escapades and wondrous landscapes
        </p>
        <br/>
        <br/>
        <br/>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
    <div className="product-container">
      <img src={scfi03}  className="product-image" />
      <div className="product-details">
      <h2>TRANSMISSION</h2>
      <br/>
      <p className="ub">Description:</p>
            <br/>
            <p>"TRANSMISSION is riveting, unexpected, and firmly rooted in strong psychological profiles backed with thriller and sci-fi elements: what more could readers wish for?"
            worldwide bestselling scfi author Morgan Rice comes a long-anticipated science fiction series debut. When SETI finally receives a signal from an alien civilization, what will happen next?
            A 13 year old boy, dying of a rare brain disease, is the only one able to hear and decode signals from outer space. SETI confirms it is a real signal.
            What is the message? How will the world react?
            And most of all: are the aliens coming?
        </p>
        <br/>
        <br/>
        <br/>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
    </div>
  );
}
export default ProductList;