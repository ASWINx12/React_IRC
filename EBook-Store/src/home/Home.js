import React, { Link} from 'react-router-dom'
import './Home.css'
import Footer from '../Footer';
function Home(){
    return (
        <div>
        <div className="contents">
          <br/>
          <h1>Welcome to CODEX</h1>
          <br/>
          <h2>"Never stop learning because life never stop's teaching"</h2>
          <br/>
          <p>Please choose your book's category <Link to='/Category' className="unknown">Here!!</Link></p>
        </div>
        <Footer/>
        </div>
    )
}
export default Home;
