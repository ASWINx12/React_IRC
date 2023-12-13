import React from 'react';
import './App.css';
import Register from './register/Register';
import Login from './login/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
