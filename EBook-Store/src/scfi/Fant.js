import React from "react";
import './Scfi.css';
import fan01 from './fantasy01.jpg';
import fan02 from './fantasy02.jpg';
import fan03 from './fantasy03.jpg';
const ProductList= () =>{

  return (
    <div className="bgmi">
    <div className="product-container">
      <img src={fan01}  className="product-image" />
      <div className="product-details">
      <h2>Harry Potter and the Philosopher's Stone</h2>
      <br/>
      <p className="ub">Description:</p>
            <br/>
            <p>Escape to Hogwarts with the unmissable series that has sparked a lifelong reading journey for children and families all over the world. 
            The magic starts here.Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. 
            Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. 
            Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. 
            The magic starts here!These editions of the classic and internationally bestselling Harry Potter series feature thrilling jacket artwork by award-winning illustrator Jonny Duddle. 
            They are the perfect starting point for anyone who's ready to lose themselves in the greatest children's story of all time.
        </p>
        <br/>
        <br/>
        <br/>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
    <div className="product-container">
      <img src={fan02} className="product-image" />
      <div className="product-details">
      <h2>Assassin's Creed VALHALLA geirmund's saga</h2>
      <br/>
      <p className="ub">Description:</p>
            <br/>
            <p>Discover the epic adventure of legendary viking Geirmund Hel-hide in this new novel set in the world of Assassin's Creed Valhalla.
            Norway, Mid-9th century.
            The Viking attacks and invasions are shattering England's kingdoms.
            Born into a royal lineage of Norwegian kings, Geirmund Hel-hide sets out for adventure to prove his worth as a Viking and a warrior.
            A perilous journey across the sea brings him into contact with a being out of myth and grants him a mysterious ring that promises both great power and bitter betrayal.
            As Geirmund rises in the ranks of King Guthrum's legendary army, he will have to use all his cunning to face the many dangers of a land ravaged by war . . .
            Fighting alongside his band of loyal warriors, his path will soon lead him into a conflict as old as the gods themselves.
        </p>
        <br/>
        <br/>
        <br/>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
    <div className="product-container">
      <img src={fan03}  className="product-image" />
      <div className="product-details">
      <h2>The Kingdom of Fantasy</h2>
      <br/>
      <p className="ub">Description:</p>
            <br/>
            <p>Geronimo Stilton arrives at work one fine morning to find the office in a complete uproar. 
            The minute Geronimo sets his paw in the office, he realises this is not going to be a good day.
            His staff is complaining about things and everything is in disorder. 
            Worst of all, he has a pimple on his snout. 
            When he heads home after work, he is struck by a lightening and the electricity goes off. 
            He has to find his way to his attic in pitch dark. 
            After several mishaps like stepping on a roller skate and stepping onto a rake, he discovers a magical golden staircase there. 
            He steps into the Kingdom of Fantasy. 
            He is helped by Scribblehopper, a frog, who acts as his guide. His mission is to save the Queen of Fairies. 
            He has to face many dangerous creatures like scorpions, sea serpents, pixies and creatures he did not know existed. 
            He finds he has to save his own tail in addition to the Queen. 
            Will Geronimo complete his adventure successfully or perish in the attempt?
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