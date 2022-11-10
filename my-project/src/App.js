import React from 'react'
import './App.css';
import {Navbar} from './Components/Navbar';
import RouterAllPage from './Components/RouterAllPage'
import { Footer } from './Components/Footer';
import { Home } from './Page/Home'


function App() {
  return (
    <>
    <Navbar/>
    <RouterAllPage/>
     {/* <Footer/> */}
     {/* <Home/> */}
     
    </>
  );
}

export default App;
