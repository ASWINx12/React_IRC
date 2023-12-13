import './Login.css';
import { Link ,useNavigate} from 'react-router-dom';
function Login()
{
    const navi=useNavigate();

    const hh=()=>{
        navi('/Home');
    }
    return(
        <div className="user">
            <form>
                <h2>Login</h2>
                <div>
                <input type="email" placeholder="Email-ID" required></input>
                <br/>
                <input type="password" placeholder="Password"required></input>
                <br/>
                <br/>
                <button type='submit' onClick={hh}>Login</button>
                </div>
                <div className='register'>
                <p><h4>didn't have an account?<Link to='/Register' className='link'>Sign-Up</Link></h4></p>
                </div>
            </form>
        </div>
    )
}
export default Login;