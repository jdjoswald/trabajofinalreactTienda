import { Button, Card, Grid } from '@mui/material';
import axios from 'axios';
import React, { Component } from 'react'
import CarritoCard from './CarritoCard';

export default class Carrito extends Component {

  comprar(){

    this.props.carrito?.map((art) => (
      axios
    .put(`https://localhost:7289/api/Articulo/${art.articulo.id}/decrementar-cantidad/${art.cantidad}`, {  
    })
    .then((response) => {
      console.log(response);
      this.props.funcion()
    })
    .catch((error) => {
      console.log(error);
      alert("Error");
    })
    
    ));
    axios.delete(`https://localhost:7289/api/Carrito/eliminarCarritoTodo`)
    .then(response => {
      console.log(response);
      this.props.funcion()
     
    })
    .catch(error => {
      console.log(error);
      alert("Error al eliminar el artículo");
    });

   
    
    
      
    
  }
  
  render() {
    return (
      <Grid container spacing={1}  >
        <Grid item xs={12} textAlign={"center"}>
          <h1> TOTAL: $ {this.props.total} </h1>
        </Grid>
        {this.props.carrito?.map((art) => (
                    <Grid xs={12} item>
                     <CarritoCard funcion={()=>{this.props.funcion()}}  info={art}/>
                    </Grid>
      ))}
      <Grid item xs={12}>
      <Button onClick={()=>{this.comprar()}} variant="contained" style={{ width:"100%", backgroundColor: "#07c80d", color: '#fff' }}>Comprar</Button>
      </Grid>
       
      </Grid>
    )
  }
}
