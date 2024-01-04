import React from "react";
import './Scfi.css';
import cla01 from './classics01.jpg';
import cla02 from './classics02.jpg';
import cla03 from './classics03.jpg';
const ProductList= () =>{

  return (
    <div className="bgmi">
    <div className="product-container">
      <img src={cla01}  className="product-image" />
      <div className="product-details">
      <h2>Greatest Works of OSCAR WILDE</h2>
      <br/>
      <p className="ub">Description:</p>
            <br/>
            <p>Discover the brilliance of Oscar Wilde with this Deluxe Hardbound Edition, showcasing his greatest works. 
            Immerse yourself in the witty charm and profound insights of Wilde's literary masterpieces, presented in a luxurious and durable format. 
            A must-have for Wilde enthusiasts and collectors.
            Deluxe hardbound edition featuring the greatest works of Oscar Wilde
            Immerse yourself in Wilde's witty charm and profound insights
            Luxurious and durable format for long-lasting enjoyment
            Perfect for Wilde enthusiasts and collectors
            An exquisite addition to any book collection or a thoughtful gift for literature lovers.
        </p>
        <br/>
        <br/>
        <br/>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
    <div className="product-container">
      <img src={cla02} className="product-image" />
      <div className="product-details">
      <h2>The Greatest Short Stories of ANTON CHEKOV</h2>
      <br/>
      <p className="ub">Description:</p>
            <br/>
            <p>“Life is a vexatious trap; when a thinking man reaches maturity and attains to full consciousness he cannot help feeling that he is in a trap from which there is no escape.” 
            one of the greatest Russian short story writers and an exemplary playwright, Anton Chekhov penned down some of the finest short stories and plays in literature. 
            His works continue to be translated into various languages across the world. 
            This edition brings together his early short stories along with the outstanding short fiction written in his later years. 
            It includes 'the death of a government Clerk,' 'The Huntsman,' 'Oh! The public,' 'anyuta,' 'misery,' 'The lottery ticket,' 'a dreary story,' 'peasant wives,' 'The lady with the dog,' and his last completed story, 'betrothed.' 
            An editorial note precedes each work.</p>
        <br/>
        <br/>
        <br/>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
    <div className="product-container">
      <img src={cla03}  className="product-image" />
      <div className="product-details">
      <h2>The Greatest Short Stories</h2>
      <br/>
      <p className="ub">Description:</p>
            <br/>
            <p>Immerse yourself in the brilliant storytelling of Leo Tolstoy with "The Greatest Short Stories of Leo Tolstoy." 
            This captivating collection showcases the literary genius of one of the greatest Russian authors, featuring tales of love, morality, and the human condition that will leave you spellbound.
            A curated selection of Leo Tolstoy's finest short stories
            Masterpieces that explore the depths of human emotions
            Compelling narratives with rich character development
            Thought-provoking themes of love, justice, and spirituality
            An essential addition to any literature lover's collection.
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