import React from 'react';
import './App.css';
import Blocks from './components/Blocks';
import Nav from './components/Nav';
import {BrowserRouter, Routes , Route} from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';
import Item from './components/Item';
import Footer from './components/Footer';
import { hobbyItems, items } from './ItemModel';
import ItemHobby from './components/ItemHobby';
function Main(){

  return(
    <div className="main">
      <Blocks items={items} />
    </div>
  )
}

function Hobby(){
  return(
    <div className="main">
      <Blocks items={hobbyItems} />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path="item/:id" element={<Item />} />
          <Route path='/hobby' element={<Hobby />} />
          <Route path="hobby/:id" element={<ItemHobby />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
