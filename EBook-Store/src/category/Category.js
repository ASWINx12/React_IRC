import React from "react";
import { Link } from "react-router-dom";
import './Category.css';
import scfi1 from './scfi.jpg';
import fan from './fantasy.jpg';
import com from './comics.jpg';
import rom from './romance.jpg';
import cla from './classics.jpg';
import thr from './thriller.jpg';
const City = () =>{
    return(
      <div className="bd">
      <div className="gh">
        <h1>Books-Category</h1>
      </div>
        <div class="cards-list">
<div class="card 1">
  <div class="card_image">
    <img src={scfi1}></img>
  </div>
  <br/>
  <div class="card_title title-white">
    <p><Link to='/Scfi'>Science-Fiction</Link></p>
  </div>
</div>
  <div class="card 2">
  <div class="card_image">
    <img src={fan}/>
    </div>
    <br/>
  <div class="card_title title-white">
  <p><Link to='/Fant'>Fantasy</Link></p>
  </div>
</div>
<div class="card 3">
  <div class="card_image">
    <img src={com}/>
  </div>
  <br/>
  <div class="card_title title-white">
  <p><Link to='/Comics'>Comics</Link></p>
  </div>
</div>
  <div class="card 4">
  <div class="card_image">
    <img src={thr}/>
    </div>
    <br/>
  <div class="card_title title-white">
  <p><Link to='/Thriller'>Thriller</Link></p>
  </div>
  </div>
  <div class="card 5">
  <div class="card_image">
    <img src={rom}/>
    </div>
    <br/>
  <div class="card_title title-white">
  <p><Link to='/Romance'>Romance</Link></p>
  </div>
  </div>
  <div class="card 6">
  <div class="card_image">
    <img src={cla}/>
    </div>
    <br/>
  <div class="card_title title-white">
  <p><Link to='/Classics'>Classics</Link></p>
  </div>
  </div>
</div>
</div>
    )
}
export default City;