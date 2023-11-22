import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import KantoPokedex from './Components/KantoPokedex';
import JohtoPokedex from './Components/JohtoPokedex';
import HoennPokeDex from './Components/HoenPokedex';
import SinnohPokedex from './Components/SinnohPokedex';
import UnovaPokedex from './Components/UnovaPokedex';
import KalosPokedex from './Components/KalosPokedex';
import AlolaPokedex from './Components/AlolaPokedex';
import GalarPokedex from './Components/GalarPokedex';
import PaldeaPokedex from './Components/PaldeaPokedex';




function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Kanto" element={<KantoPokedex/>}/>
        <Route path="Johto" element={<JohtoPokedex/>}/>
        <Route path="Hoenn" element={<HoennPokeDex/>}/>
        <Route path="Sinnoh" element={<SinnohPokedex/>}/>
        <Route path="Unova" element={<UnovaPokedex/>}/>
        <Route path="Kalos" element={<KalosPokedex/>}/>
        <Route path="Alola" element={<AlolaPokedex/>}/>
        <Route path="Galar" element={<GalarPokedex/>}/>
        <Route path="Paldea" element={<PaldeaPokedex/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
