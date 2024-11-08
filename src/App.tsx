import React from 'react';
import './App.css';
import Blocks from './components/Blocks';
import Nav from './components/Nav';
import {BrowserRouter, Routes , Route} from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';
import Item from './components/Item';
import Footer from './components/Footer';
import { hobbyItems, items, canvaPhotoshopItems, printMediaItems } from './ItemModel';
import ItemHobby from './components/ItemHobby';
// import LensLines from './components/LensLines';
import { ItemData } from './ItemModel';
// function Main(){
//   return(
//     <div className="main">
//       <Blocks items={items} />
//     </div>
//   )
// }

type ItemsProp = {
  items:ItemData[];
}

function Main({items}: ItemsProp){
  return(
    <div className="main">
      <Blocks items={items} />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
          <Route path='/' element={<Main items={items}/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path="item/:id" element={<Item />} />
          <Route path='/mylens' element={<Main items={hobbyItems}/>} />
          <Route path="mylens/:id" element={<ItemHobby />} />
          <Route path='/canva_photoshop' element={<Main items={canvaPhotoshopItems}/>} />
          <Route path="canva_photoshop/:id" element={<ItemHobby />} />
          <Route path='/print_media' element={<Main items={printMediaItems}/>} />
          <Route path="print_media/:id" element={<ItemHobby />} />
          {/* <Route path="/lens&lines" element={<LensLines />} /> */}
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
