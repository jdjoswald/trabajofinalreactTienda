import "../css/Articulo.css"
import { Button, Card, CardContent, Divider, Grid } from '@mui/material'
import React, { Component } from 'react'
import Carrito from './Carrito'
import CategoriaList from './CategoriaList'
import ArticuloCard from "./ArticuloCard"
import axios from 'axios';

export default class InicioComponent extends Component {
    state = {
        results: [],
        carrito:[], 
        total:0,
        filtro:"",
        categoria:[],
        filtro:""
       
      };
    dataCharge(){
      axios.get('https://localhost:7289/api/Categoria')
      .then(response => {
          // Aquí puedes manejar la respuesta de la API
          console.log(response.data);
          this.setState({categoria:response.data})
      })
      .catch(error => {
          // Aquí puedes manejar el error si ocurre
          console.error(error);
       });
      
      axios.get('https://localhost:7289/api/Articulo')
            .then(response => {
                // Aquí puedes manejar la respuesta de la API
                console.log(response.data);
                this.setState({results:response.data})
            })
            .catch(error => {
                // Aquí puedes manejar el error si ocurre
                console.error(error);
            });
            axios.get('https://localhost:7289/api/Carrito')
            .then(response => {
                // Aquí puedes manejar la respuesta de la API
                console.log(response.data);
                this.setState({carrito:response.data})
                let suma=0
                response.data?.map((art) => (
                  suma+= (art.cantidad*art.articulo.precio) ));
                  this.setState({total:suma})
            })
            .catch(error => {
                // Aquí puedes manejar el error si ocurre
                console.error(error);
             });
    }
    componentDidMount(){
        this.dataCharge();


    }
    filtro(nombre){
      this.setState({filtro:nombre});

    }
    
  render() {
    return (
        <Grid container spacing={1}>
        <Grid item xs={8}> 
        <Grid container spacing={0.5}>
          <Grid item>
              <Button onClick={()=>{this.filtro("")}} variant="contained" style={{ backgroundColor: '#1976d2', color: '#fff' }}>Mostrar todo</Button>
          </Grid>
          
        
          {this.state.categoria?.map((cate) => (
              
              <Grid item>
                  <Button onClick={()=>{this.filtro(cate.nombre)}} variant="contained" style={{ backgroundColor: "#07c80d", color: '#fff' }}>
                      {cate.nombre}
                  </Button>
              </Grid>
                
                
              ))}
        </Grid>
            
            <br/>
            <Grid container spacing={2} >
                 {this.state.results?.map((art) => (
                    <Grid xs={12} item style={{ display: this.state.filtro === "" || art.categoria.nombre === this.state.filtro ? "block" : "none" }}>
                       <ArticuloCard funcion={()=>{this.dataCharge()}} info={art}/>
                    </Grid>
              
              
                    ))}
            </Grid>
           

        </Grid>

        <Grid item  sx={{ backgroundColor: '#f5f5f5' }} xs={4}>
            <Grid item xs={12} textAlign={"center"} >
            <h1>CESTA</h1>
            <Divider sx={{ bgcolor: 'black', height: 1 }} />

            </Grid>
           
            <Carrito total={this.state.total}carrito={this.state.carrito} funcion={()=>{this.dataCharge()}}/>
        </Grid>
       
    </Grid>
    )
  }
}
