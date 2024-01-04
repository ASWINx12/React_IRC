import React from 'react';
import './App.css';
import Register from './register/Register';
import Login from './login/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import Category from './category/Category';
import Navbar from './Navbar';
import Scfi from './scfi/Scfi';
import Fant from './scfi/Fant';
import Comics from './scfi/Comics';
import Thriller from './scfi/Thriller';
import Romance from './scfi/Romance';
import Classics from './scfi/Classics';
function App() {
  const shouldShowNavbar=(pathname)=>!pathname.includes('/Register');
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<><Login/></>}/>
      <Route path='/Register' element={<><Register/></>}/>
      <Route path='/About' element={<>
              {shouldShowNavbar(window.location.pathname)&& <Navbar/>}
              <About/>
            </>}/>
      <Route path='/Contact' element={<>
              {shouldShowNavbar(window.location.pathname) && <Navbar/>}
              <Contact/>
            </>}/>
      <Route path='/Home' element={<>
              {shouldShowNavbar(window.location.pathname) && <Navbar/>}
              <Home/></>}/>
      <Route path='/Category' element={<>
              {shouldShowNavbar(window.location.pathname) && <Navbar/>}
              <Category/></>}/> 
      <Route path='/Scfi' element={<>
              {shouldShowNavbar(window.location.pathname) && <Navbar/>}
              <Scfi/></>}/> 
      <Route path='/Fant' element={<>
              {shouldShowNavbar(window.location.pathname) && <Navbar/>}
              <Fant/></>}/> 
      <Route path='/Comics' element={<>
              {shouldShowNavbar(window.location.pathname) && <Navbar/>}
              <Comics/></>}/> 
      <Route path='/Thriller' element={<>
              {shouldShowNavbar(window.location.pathname) && <Navbar/>}
              <Thriller/></>}/> 
      <Route path='/Romance' element={<>
              {shouldShowNavbar(window.location.pathname) && <Navbar/>}
              <Romance/></>}/> 
      <Route path='/Classics' element={<>
              {shouldShowNavbar(window.location.pathname) && <Navbar/>}
              <Classics/></>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
