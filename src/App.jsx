import React from "react";
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import PLayer from "./components/PLayer";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Netflix from "./pages/Netflix";
import Signup from "./pages/Signup";
import TvShow from "./pages/TvShow";
import Shows from "./pages/Shows";
import Liked from "./pages/Liked";


export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/player" element={<PLayer/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path="/movies" element={<Movies/>}/>
      <Route exact path="/" element={<Netflix/>}/>
      <Route exact path="/list" element={<Liked/>}/>
      <Route exact path="shows" element={<TvShow/>}/>
      <Route exact path="/tvshows" element={<Shows/>}/>
      
    </Routes>
    </BrowserRouter>
  );
  
}

