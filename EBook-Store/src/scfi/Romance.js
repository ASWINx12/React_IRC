import React from "react";
import './Scfi.css';
import rom01 from './romance01.jpg';
import rom02 from './romance02.jpg';
import rom03 from './romance03.jpg';
const ProductList= () =>{

  return (
    <div className="bgmi">
    <div className="product-container">
      <img src={rom01}  className="product-image" />
      <div className="product-details">
      <h2>You Only Love Once</h2>
      <br/>
      <p className="ub">Description:</p>
            <br/>
            <p>What if you ran away from your life today?
            Twenty years later, three people are looking for you.
            One is dying to meet you again.
            The other wishes you had never met them.
            The third wishes they could have met you at least once.
            You are one person. Aren't you? But you are not the same person to each of them.
            Find the answers about your own life in this story about searching for love and discovering yourself. 
            Join a broken but rising YouTube star Alara, a struggling but hopeful stand-up comedian Aarav, and a zany but zen beach shack owner Ricky. 
            Together, take the journey to seek the truth behind the famous singer Elisha's disappearance somewhere by the deep sea in Goa.
            Will you be able to find Elisha? Or will you end up finding yourself?
        </p>
        <br/>
        <br/>
        <br/>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
    <div className="product-container">
      <img src={rom02} className="product-image" />
      <div className="product-details">
      <h2>The Girl on the Train</h2>
      <br/>
      <p className="ub">Description:</p>
            <br/>
            <p>'I thought of running away with Kamla. 
            When I mentioned it to her, her eyes lit up. 
            She thought it would be great fun. 
            Women in love can be more reckless than men! 
            But I had read too many stories about runaway marriages ending in disaster, and I lacked the courage to go through with such an adventure. 
            I must have known instinctively that it would not work. 
            Where would we go, and how would we live? 
            There would be no home to crawl back to, for either of us.' 
            Seldom do we come across a person who leaves behind an impression on our very being. 
            Call it being enamoured or moved, the memories we shared with them can catch us unawares even years down the line. 
            It is not for the world to decipher what bond we shared and nurtured with them, or how real or surreal it was. 
            This is our secret alone, meant to be kept close to the heart. 
            In The Girl on the Train, we see tales of longing and lost bonds being traced again in Ruskin Bond's simplistic narration. 
            With these stories, you might once again walk down the memory lane of all those cherished moments gone by.</p>
        <br/>
        <br/>
        <br/>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
    <div className="product-container">
      <img src={rom03}  className="product-image" />
      <div className="product-details">
      <h2>My Mechanical Romance</h2>
      <br/>
      <p className="ub">Description:</p>
            <br/>
            <p>An adorable opposites-attract YA romance, from the TikTok sensation and globally bestselling author of The Atlas Six. 
            Alexene Farol Follmuth's My Mechanical Romance explores the vulnerability of first love . . . while building robots!
            It's romcom perfection'-Adiba Jaigirdar, author of The Henna Wars
            Nerds are so hot. Especially battle-robot-building nerds.
            When Bel accidentally reveals a talent for engineering at school, she's forced into joining the robotics club. 
            Enter Mateo Luna, perfect on paper-captain of the football team and the robotics club-who recognizes Bel as a potential asset, even if they couldn't be more different. 
            And as the nights of after'school work grow longer, Bel and Teo realize they've made more than just a combat'ready robot for the championship: they've made a connection themselves.
            But with graduation approaching, their differences and what they want for their futures, threatens what they've built together. 
            Can they survive Nationals without breaking their robots-or their hearts?
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