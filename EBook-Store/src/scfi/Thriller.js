import React from "react";
import './Scfi.css';
import thr01 from './thriller01.jpg';
import thr02 from './thriller02.jpg';
import thr03 from './thriller03.jpg';
const ProductList= () =>{

  return (
    <div className="bgmi">
    <div className="product-container">
      <img src={thr01}  className="product-image" />
      <div className="product-details">
      <h2>The Complete Novels of Sherlock Holmes</h2>
      <br/>
      <p className="ub">Description:</p>
            <br/>
            <p>Embark on thrilling investigations with The Complete Novel of Sherlock Holmes. 
            This comprehensive collection features all four novels, showcasing the brilliant deductions and captivating adventures of the iconic detective Sherlock Holmes and his loyal companion, Dr. John Watson.
            The definitive collection of detective masterpieces!
            The ultimate collection of Sir Arthur Conan Doyle's iconic detective stories
            Includes all four renowned novels
            Immerse yourself in the world of Sherlock Holmes and his unparalleled deductive skills
            Experience the suspense, mystery, and wit that have enthralled readers for generations
            A must-have for fans of crime fiction, detective stories, and lovers of classic literature
        </p>
        <br/>
        <br/>
        <br/>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
    <div className="product-container">
      <img src={thr02} className="product-image" />
      <div className="product-details">
      <h2>Four friends that twenty years night</h2>
      <br/>
      <p className="ub">Description:</p>
            <br/>
            <p>What happens when an innocent prank goes horribly wrong?
            Natasha, Riya, Anjali and Katherine were best friends in college - each different from the other yet inseparable - until that night.
            It was the night that began with a bottle of whisky and a game of Ouija but ended with the death of Sania, their unlikeable hostel mate. 
            The friends vowed never to discuss that fateful night, a pact that had kept their friendship and guilt dormant for the last twenty years.
            But now, someone has begun to mess with them, threatening to reveal the truth that only Sania knew. 
            Is it a hacker playing on their guilt or has Sania's ghost really returned to avenge her death?
            As the faceless enemy closes in on them, the friends come together once again to recount what really happened that night. 
            But when the story is retold by each of them, the pieces don't fit. Because none of them is telling the whole truth . . .
            That Night is a dark, twisted tale of friendship and betrayal that draws you in and confounds you at every turn.
        </p>
        <br/>
        <br/>
        <br/>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
    <div className="product-container">
      <img src={thr03}  className="product-image" />
      <div className="product-details">
      <h2>GHOSTS of the Silent Hills</h2>
      <br/>
      <p className="ub">Description:</p>
            <br/>
            <p>The dead do not rest till they get what they want. 
            You have arrived in the hills. 
            In here, you are surrounded by dense, menacing forests, enveloped in a deadly silence... 
            You never know what lurks here in the Cold, dark night. 
            Do not walk alone after sunset in the hills. 
            A beautiful woman in white haunts the Lonely pathways, looking to enchant and ensnare men... 
            All the people who died in accidents here... 
            They say you hear their screams at night. 
            And the deserted lodges sitting amidst lush greenery and calm streams... 
            Spirits lie in wait here, ready to prey on the living. 
            There are sceptics who did not heed these warnings. 
            They tried to rationalize what they saw, what they felt. 
            But when they came face to face with the beings that they believed didn’t exist, they couldn’t run away anymore... 
            Ghosts of the silent hills is a collection that will make your nights a little scarier, encompassing the very best spine-chilling stories based on true hauntings.
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