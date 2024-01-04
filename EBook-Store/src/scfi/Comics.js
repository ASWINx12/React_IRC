import React from "react";
import './Scfi.css';
import com01 from './comic01.jpg';
import com02 from './comics02.jpg';
import com03 from './comic03.jpg';
const ProductList= () =>{

  return (
    <div className="bgmi">
    <div className="product-container">
      <img src={com01}  className="product-image" />
      <div className="product-details">
      <h2>The Weird Book Machine</h2>
      <br/>
      <p className="ub">Description:</p>
            <br/>
            <p>The Pirate Cats, led by Tersilla of Catatonia, are hitting Geronimo Stilton where he lives! 
            They have traveled back in time in order to steal Johannes Gutenberg's original printing press! What mad scheme do the Pirate Cats have for the Purr-loined presses? 
            Geronimo Stilton and his friends intend to find out when they travel to the city of Mainz, Germany in the year 1455 to stop the Pirate Cats from tampering with history!
        </p>
        <br/>
        <br/>
        <br/>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
    <div className="product-container">
      <img src={com02} className="product-image" />
      <div className="product-details">
      <h2>The Coliseum Con</h2>
      <br/>
      <p className="ub">Description:</p>
            <br/>
            <p>The Pirate Cats are up to no good again! This time, Bonzo and company travel to Rome, Italy in the year 80 AD to the opening of the Colosseum, Rome's largest amphitheater. 
            The evil felines want the world to think it was they who designed the Coliseum and infiltrate the Senate by posing as nobility. 
            Geronimo and friends must hop into their speedy time machine and expose the cats' wily plot, all the while taking in historical landmarks and breathtaking moments of history.
        </p>
        <br/>
        <br/>
        <br/>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
    <div className="product-container">
      <img src={com03}  className="product-image" />
      <div className="product-details">
      <h2>Who Stole the MonaLisa</h2>
      <br/>
      <p className="ub">Description:</p>
            <br/>
            <p>Geronimo Stilton is the editor of the Rodent's Gazette, the most famous paper on mouse island. 
            In his free time he loves to tell fun, happy stories. 
            In this adventure, Geronimo has to face his worst enemies, the Pirate Cats, who have discovered a way to travel back in time and change history. 
            Catardone III and Bonzo are in Amboise, France, in the year 1517 in the middle of the renaissance! 
            They're out to steal Leonardo Da Vinci's most famous painting, the Mona Lisa! But this time, they have a new plan that may keep Geronimo Stilton and his friends from ever stopping them again!
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