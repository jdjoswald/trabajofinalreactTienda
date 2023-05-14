import React, { Component } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Card, CardContent, Grid } from '@mui/material';
import axios from 'axios';


export default class CarritoCard extends Component {
  borrar(id){
    axios
      .delete(`https://localhost:7289/api/Carrito/eliminarCarrito/${id}`)
      .then((response) => {
        console.log(response);
        
        this.props.funcion()
      })
      .catch((error) => {
        console.log(error);
        alert('Failed to delete resource!');
      });
      
      
  }
 
  render() {
    return (
        <Card>
        <CardContent>
            <Grid container spacing={2}>
                <Grid item xs={6} style={{ display: "flex", justifyContent: 'center' }}>
                    <img className='mini'style={{ margin: "auto" }} src={this.props.info.articulo.imagen} alt="" />
                 
                </Grid>
                <Grid item xs={6}>
                  <Grid item xs={12}>
                  <h1>{this.props.info.articulo.nombre}</h1>
                  <p>Cantidad: {this.props.info.cantidad}</p>
                  <p>Precio: {(this.props.info.cantidad*this.props.info.articulo.precio)}</p>

  
                  </Grid>
                
                </Grid>
                <Grid item xs={12}>
               
                  <Button onClick={()=>{this.borrar(this.props.info.articulo.id)}} style={{ width:"100%", backgroundColor: '#ff0000', color: '#fff' }}> < DeleteIcon/> Borrar</Button>
                </Grid>
            </Grid>
        </CardContent>
      </Card>
    )
  }
}
