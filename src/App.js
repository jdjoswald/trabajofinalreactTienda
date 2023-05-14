import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from 'react';
import { Articulo } from './pages/Articulo';
import { Categoria } from './pages/Categoria';
import { Inicio } from './pages/Inicio';
import Navbar from './components/Navbar';
import { Container } from '@mui/material';

class App extends Component {
  render() {  
    return (
      <Router>
         <header>
         <Navbar/>

         </header>
         <br/>
         <Container>
           <Routes>
          <Route path="/" index element={<Inicio/>}/>
          <Route path="/articulo" element={<Articulo/>}/>
          <Route path="/categoria" element={<Categoria/>}/>
        </Routes>
         </Container>
         
       

      </Router>
     );
  }
}

export default App;
