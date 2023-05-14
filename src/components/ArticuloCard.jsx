import { Button, Card, CardContent, Grid } from '@mui/material'
import React, { Component } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';


export default class ArticuloCard extends Component {

  state={ hover: false}
  toggleHover = () => {
    this.setState({ hover: !this.state.hover })
  }
  anadir(id){
    
  
      axios
      .post("https://localhost:7289/api/Carrito", {

      id: 0,
      articuloId: id,
      articulo: {
        id: id ,
        nombre: 'string',
        cantidad: 0,
        precio: 0,
        imagen: 'string',
        descripcion: 'string',
        categoriaId: 0,
        categoria: {
          id: 0,
          nombre: 'string'
        }
      },
      cantidad: 0
        
      })
      .then((response) => {
    
        this.props.funcion()
        
      })
      .catch((error) => {
        console.log(error);
        alert("Error");
      });
  }
  render() {
    const { hover } = this.state;
    return (
      <Card>
      <CardContent>
          <Grid container spacing={2}>
              <Grid item xs={ hover ? 7 : 4} style={{ zIndex: 10, display: hover ? 'block' : 'flex', justifyContent: 'center' }}
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}
             >
              <img 
                  style={{
                      width: hover ? '25rem' : '6.25rem',
                      height: hover ? '25rem' : '6.25rem',
                      transition: 'width 1s ease-out, height 1s ease-out', 
                       margin: 'auto',
                       opacity: this.props.info.cantidad===0 ? '0.5' : '1'
                      
                    }}
                  className='mini' src={this.props.info.imagen} alt="" />
               
              </Grid>
              <Grid item xs={ hover ? 2 : 4}>
                <Grid item xs={12}>
                <h1>{this.props.info.nombre}</h1>
                <p>{"codigo: "+this.props.info.id}</p>
                <p>{this.props.info.descripcion}</p>
                <p style={{ color: '#1e00ff' }}>{this.props.info.categoria.nombre}</p>

                </Grid>
              
              </Grid>
              <Grid item xs={ hover ? 3 : 4}>
                <p> $ {this.props.info.precio}</p>
                <p> Stock: {this.props.info.cantidad}</p>
                <Button   disabled={this.props.info.cantidad === 0} onClick={()=>{this.anadir(this.props.info.id)}} style={{  backgroundColor: '#1976d2', color: '#fff' }}> <ShoppingCartIcon /> Agregar al carrito</Button>

              </Grid>
          </Grid>
      </CardContent>
    </Card>
    )
  }
}
